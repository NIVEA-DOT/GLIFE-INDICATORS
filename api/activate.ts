import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client (Server-side)
// Note: In Vercel, process.env is available automatically.
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use Service Role Key for admin tasks!

export default async function handler(request, response) {
  // CORS Setup
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!supabaseUrl || !supabaseKey) {
    return response.status(500).json({ error: 'Server configuration error' });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { licenseKey, machineId } = request.body;

  if (!licenseKey || !machineId) {
    return response.status(400).json({ error: 'Missing licenseKey or machineId' });
  }

  try {
    // 1. Check if license exists
    const { data: license, error: fetchError } = await supabase
      .from('licenses')
      .select('*')
      .eq('license_key', licenseKey)
      .single();

    if (fetchError || !license) {
      return response.status(404).json({ error: 'License key not found.' });
    }

    // 2. Check logic
    if (license.status !== 'active') {
      return response.status(403).json({ error: 'License is inactive or expired.' });
    }

    // 3. Check Machine ID binding
    if (license.machine_id && license.machine_id !== machineId) {
      return response.status(409).json({ error: 'License is already bound to another machine. Please reset it from dashboard.' });
    }

    // 4. Bind Machine ID if empty
    if (!license.machine_id) {
      const { error: updateError } = await supabase
        .from('licenses')
        .update({ machine_id: machineId })
        .eq('id', license.id);

      if (updateError) {
        throw updateError;
      }
    }

    // Success
    return response.status(200).json({ 
      ok: true, 
      message: 'Activated successfully',
      product: license.product_name,
      expires_at: license.expires_at 
    });

  } catch (err) {
    console.error(err);
    return response.status(500).json({ error: 'Internal server error' });
  }
}