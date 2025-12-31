import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(request: any, response: any) {
  // Allow access from anywhere (since desktop apps call this)
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  const supabase = createClient(supabaseUrl || '', supabaseKey || '');
  
  // Support both GET (query params) and POST (body)
  const licenseKey = request.query.k || request.body?.k;
  const machineId = request.query.m || request.body?.m;

  if (!licenseKey || !machineId) {
    return response.status(400).json({ valid: false, message: 'Missing parameters' });
  }

  try {
    const { data: license } = await supabase
      .from('licenses')
      .select('*')
      .eq('license_key', licenseKey)
      .single();

    if (!license) {
       return response.status(200).json({ valid: false, message: 'Invalid Key' });
    }

    if (license.status !== 'active') {
       return response.status(200).json({ valid: false, message: 'Inactive' });
    }

    // Check expiration
    if (license.expires_at && new Date(license.expires_at) < new Date()) {
       return response.status(200).json({ valid: false, message: 'Expired' });
    }

    // Check Machine Lock
    if (license.machine_id !== machineId) {
       return response.status(200).json({ valid: false, message: 'Machine Mismatch' });
    }

    // All Good
    return response.status(200).json({ valid: true, message: 'OK', product: license.product_name });

  } catch (e) {
    return response.status(500).json({ valid: false, message: 'Server Error' });
  }
}