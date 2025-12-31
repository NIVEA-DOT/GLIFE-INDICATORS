import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { Buffer } from 'buffer';

// Supabase Admin Client (DB 쓰기 권한 필요)
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Lemon Squeezy 설정 (Settings > Webhooks에서 생성한 Secret)
const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 1. 보안 검증 (Lemon Squeezy에서 보낸 요청이 맞는지 확인)
    const rawBody = JSON.stringify(req.body);
    const hmac = crypto.createHmac('sha256', webhookSecret || '');
    const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
    const signature = Buffer.from(req.headers['x-signature'] || '', 'utf8');

    if (!webhookSecret) {
        console.warn("Skipping signature verification: No secret configured.");
    } else if (!crypto.timingSafeEqual(digest, signature)) {
        return res.status(401).json({ message: 'Invalid signature' });
    }

    const event = req.body;
    const eventName = event.meta.event_name;
    const data = event.data;

    // Supabase 연결
    const supabase = createClient(supabaseUrl || '', supabaseKey || '');

    // 2. "주문 생성됨(order_created)" 이벤트 처리
    if (eventName === 'order_created') {
        const attributes = data.attributes;
        const email = attributes.user_email;
        const productName = attributes.first_order_item.product_name;
        
        // 라이선스 키 생성 (GL-XXXX-XXXX 포맷)
        const generateKey = () => {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
            let key = 'GL';
            for (let i = 0; i < 12; i++) {
                if (i % 4 === 0) key += '-';
                key += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return key;
        };
        const newLicenseKey = generateKey();

        // 3. DB에 라이선스 저장
        const { error } = await supabase.from('licenses').insert({
            license_key: newLicenseKey,
            product_name: productName,
            status: 'active',
            // user_id는 아직 모를 수 있습니다(비회원 구매). 
            // 나중에 유저가 이메일로 가입하면 매칭하거나, 
            // 앱에서 "라이선스 등록" 기능을 통해 user_id를 업데이트해야 합니다.
            expires_at: null, // 평생 이용권인 경우 null, 구독이면 갱신 필요
        });

        if (error) {
            console.error('Error creating license:', error);
            return res.status(500).json({ message: 'DB Error' });
        }

        console.log(`License generated for ${email}: ${newLicenseKey}`);
    }

    return res.status(200).json({ received: true });

  } catch (err) {
    console.error('Webhook Error:', err);
    return res.status(500).json({ message: 'Server Error' });
  }
}