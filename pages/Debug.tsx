import React, { useState, useEffect } from 'react';
import { Button, GlassPanel, Icons } from '../components/Shared';
import { supabase } from '../src/lib/supabase';

export const Debug: React.FC = () => {
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [apiStatus, setApiStatus] = useState<'IDLE' | 'LOADING' | 'ALIVE' | 'DEAD'>('IDLE');
    const [log, setLog] = useState<string[]>([]);
    const [envCheck, setEnvCheck] = useState<any>({});

    useEffect(() => {
        const env = (import.meta as any).env;
        setEnvCheck({
            url: env.VITE_SUPABASE_URL ? 'Loaded ✅' : 'Missing ❌ (Check Vercel Env Vars)',
            key: env.VITE_SUPABASE_ANON_KEY ? 'Loaded ✅' : 'Missing ❌ (Check Vercel Env Vars)',
        });
    }, []);

    const addLog = (msg: string) => setLog(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);

    // 1. Client-side DB Check
    const testConnection = async () => {
        setStatus('LOADING');
        addLog('Frontend -> Supabase: Pinging...');
        try {
            const { count, error } = await supabase.from('licenses').select('*', { count: 'exact', head: true });
            if (error) throw error;
            addLog(`Frontend -> Supabase: SUCCESS! Found ${count} records.`);
            setStatus('SUCCESS');
        } catch (err: any) {
            addLog(`Frontend -> Supabase: FAILED. ${err.message}`);
            setStatus('ERROR');
        }
    };

    // 2. Server-side API Check
    const checkApiHealth = async () => {
        setApiStatus('LOADING');
        addLog('Frontend -> Backend API (/api/webhook): Pinging...');
        try {
            // We expect a 405 (Method Not Allowed) or 401 (Invalid Signature) from the webhook endpoint.
            // If we get 404, it means the API route doesn't exist.
            const res = await fetch('/api/webhook', { method: 'POST', body: JSON.stringify({}) });
            
            if (res.status === 404) {
                addLog('❌ API Error: 404 Not Found. Vercel is not serving the /api folder.');
                setApiStatus('DEAD');
            } else if (res.status === 401 || res.status === 405 || res.status === 200) {
                addLog(`✅ API Alive: Server responded with ${res.status}. This is GOOD.`);
                setApiStatus('ALIVE');
            } else {
                addLog(`⚠️ API Warning: Server responded with ${res.status}. Check Vercel Logs.`);
                setApiStatus('DEAD');
            }
        } catch (e: any) {
            addLog(`❌ Network Error: ${e.message}`);
            setApiStatus('DEAD');
        }
    };

    return (
        <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8 border-b border-zinc-800 pb-4 flex items-center gap-3">
                <Icons.Activity className="text-brand-500" /> System Diagnostics (Vercel Mode)
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    {/* Step 1: Client Env */}
                    <GlassPanel>
                        <h3 className="text-white font-bold mb-4">1. Frontend Config</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-zinc-800 pb-2">
                                <span className="text-zinc-500">Supabase URL</span>
                                <span className="text-white font-mono">{envCheck.url}</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 pb-2">
                                <span className="text-zinc-500">Anon Key</span>
                                <span className="text-white font-mono">{envCheck.key}</span>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-zinc-500">
                            * If these are missing, go to Vercel Settings -> Environment Variables.
                        </div>
                    </GlassPanel>

                    {/* Step 2: Connectivity */}
                    <GlassPanel>
                        <h3 className="text-white font-bold mb-4">2. Connectivity Test</h3>
                        <div className="space-y-4">
                            <Button onClick={testConnection} className="w-full" disabled={status === 'LOADING'}>
                                Test 1: Frontend to DB
                            </Button>
                            
                            <Button onClick={checkApiHealth} variant="secondary" className="w-full" disabled={apiStatus === 'LOADING'}>
                                Test 2: Backend API Status
                            </Button>
                        </div>
                    </GlassPanel>

                    {/* Step 3: Webhook Info */}
                    <GlassPanel className="border-brand-500/20 bg-brand-500/5">
                        <h3 className="text-white font-bold mb-2">3. Lemon Squeezy Setup</h3>
                        <p className="text-sm text-zinc-400 mb-4">
                            To make "Buy Now" work, you must set this URL in Lemon Squeezy Webhooks:
                        </p>
                        <div className="bg-black p-3 rounded border border-zinc-800 font-mono text-xs text-brand-400 break-all select-all">
                            {window.location.origin}/api/webhook
                        </div>
                    </GlassPanel>
                </div>

                {/* Logs */}
                <GlassPanel className="h-full min-h-[400px] flex flex-col font-mono text-xs">
                    <h3 className="text-zinc-400 uppercase tracking-widest mb-4">Live Diagnostic Log</h3>
                    <div className="flex-grow overflow-y-auto space-y-2 pr-2">
                        {log.length === 0 && <span className="text-zinc-700 italic">Waiting for test...</span>}
                        {log.map((l, i) => (
                            <div key={i} className={l.includes('FAILED') || l.includes('Error') || l.includes('Missing') ? 'text-red-400' : l.includes('SUCCESS') || l.includes('Alive') || l.includes('Loaded') ? 'text-emerald-400' : 'text-zinc-300'}>
                                {l}
                            </div>
                        ))}
                    </div>
                </GlassPanel>
            </div>
        </div>
    );
};