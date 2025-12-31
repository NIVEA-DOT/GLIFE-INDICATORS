import React, { useState, useEffect } from 'react';
import { Button, GlassPanel, Icons, Badge } from '../components/Shared';
import { ActivationStatus } from '../types';

const generateMachineId = () => {
  const raw = navigator.userAgent + Intl.DateTimeFormat().resolvedOptions().timeZone + window.screen.width;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return `MID-${Math.abs(hash).toString(16).toUpperCase()}`;
};

export const LicenseActivate: React.FC = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const [machineId, setMachineId] = useState('');
  const [status, setStatus] = useState<string>('IDLE');
  const [message, setMessage] = useState('');
  const [activeData, setActiveData] = useState<any>(null);

  useEffect(() => {
    setMachineId(generateMachineId());
    const savedToken = localStorage.getItem('gl_license_data');
    if (savedToken) {
      try {
          const parsed = JSON.parse(savedToken);
          setActiveData(parsed);
          setStatus('SUCCESS');
      } catch (e) {
          localStorage.removeItem('gl_license_data');
      }
    }
  }, []);

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setMessage('');
    
    try {
        const res = await fetch('/api/activate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ licenseKey, machineId })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            setStatus('SUCCESS');
            setMessage('Activated successfully');
            setActiveData({
                product: data.product,
                expires: data.expires_at,
                key: licenseKey
            });
            localStorage.setItem('gl_license_data', JSON.stringify({
                product: data.product,
                expires: data.expires_at,
                key: licenseKey
            }));
        } else {
            setStatus('ERROR');
            setMessage(data.error || 'Activation failed');
        }
    } catch (err) {
        setStatus('ERROR');
        setMessage('Network error. Please try again.');
    }
  };

  const handleDeactivate = () => {
      // In a real app, you might want an API call here to clear the machine_id in DB
      localStorage.removeItem('gl_license_data');
      setStatus('IDLE');
      setLicenseKey('');
      setActiveData(null);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">License Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar / Status */}
            <GlassPanel className="h-fit">
                <h3 className="text-zinc-400 text-xs uppercase tracking-widest mb-4">System Status</h3>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-medium">Authentication</span>
                    <Badge color={status === 'SUCCESS' ? 'cyan' : 'zinc'}>
                        {status === 'SUCCESS' ? 'ONLINE' : 'OFFLINE'}
                    </Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-medium">Machine ID</span>
                    <span className="text-zinc-500 font-mono text-xs">{machineId}</span>
                </div>
                {status === 'SUCCESS' && (
                     <Button variant="outline" size="sm" className="w-full mt-4" onClick={handleDeactivate}>
                        Deactivate Machine
                     </Button>
                )}
            </GlassPanel>

            {/* Main Activation Area */}
            <div className="md:col-span-2">
                {status === 'SUCCESS' ? (
                    <GlassPanel className="border-brand-500/30 bg-brand-500/5">
                        <div className="flex items-start gap-4">
                            <div className="bg-brand-500 text-white p-2 rounded">
                                <Icons.Check />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">License Active</h3>
                                <p className="text-zinc-400 text-sm mt-1">
                                    Your system is ready. Restart NinjaTrader 8 to load the indicators.
                                </p>
                                <div className="mt-6 p-4 bg-black border border-zinc-800 rounded font-mono text-sm text-zinc-300">
                                    Product: {activeData?.product || 'Unknown'}<br/>
                                    Key: {activeData?.key}<br/>
                                    Expires: {activeData?.expires ? new Date(activeData.expires).toLocaleDateString() : 'Lifetime'}
                                </div>
                            </div>
                        </div>
                    </GlassPanel>
                ) : (
                    <GlassPanel>
                        <h3 className="text-white font-bold mb-4">Activate New License</h3>
                        <form onSubmit={handleActivate} className="space-y-6">
                            <div>
                                <label className="block text-xs text-zinc-500 uppercase tracking-wide mb-2">License Key</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="GL-XXXX-XXXX-XXXX"
                                    value={licenseKey}
                                    onChange={(e) => setLicenseKey(e.target.value)}
                                    className="w-full bg-black border border-zinc-800 rounded p-3 text-white font-mono focus:border-brand-500 outline-none"
                                />
                            </div>
                            
                            {status === 'ERROR' && (
                                <div className="text-red-500 text-sm flex items-center gap-2">
                                    <Icons.AlertTriangle className="w-4 h-4"/> {message}
                                </div>
                            )}

                            <Button type="submit" className="w-full" disabled={status === 'LOADING'}>
                                {status === 'LOADING' ? 'Verifying with Server...' : 'Activate Device'}
                            </Button>
                        </form>
                    </GlassPanel>
                )}
            </div>
        </div>
    </div>
  );
};