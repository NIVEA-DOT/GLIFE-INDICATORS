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

  useEffect(() => {
    setMachineId(generateMachineId());
    const savedToken = localStorage.getItem('of_activation_token');
    if (savedToken) {
      setStatus('SUCCESS');
      setMessage('Active');
    }
  }, []);

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setMessage('');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate Check: OF- or AUTO-
    if (licenseKey.startsWith("GL-") || licenseKey.startsWith("AUTO-")) {
      localStorage.setItem('of_activation_token', 'mock_token_' + Date.now());
      setStatus('SUCCESS');
      setMessage('Active');
    } else {
        setStatus('ERROR');
        setMessage('Invalid License Key format. Must start with GL- or AUTO-');
    }
  };

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
                     <Button variant="outline" size="sm" className="w-full mt-4" onClick={() => { localStorage.removeItem('of_activation_token'); setStatus('IDLE'); setLicenseKey(''); }}>
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
                                    Product: GL Bundle (Lifetime)<br/>
                                    Expires: Never<br/>
                                    Seats: 1/2 Used
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