import React, { useEffect, useState } from 'react';
import { Button, GlassPanel, Icons, Badge } from '../components/Shared';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../src/lib/supabase';

interface License {
    id: string;
    license_key: string;
    product_name: string;
    status: string;
    expires_at: string | null;
    machine_id: string | null;
}

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [licenses, setLicenses] = useState<License[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
            navigate('/login');
            return;
        }

        // Fetch Profile Name
        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .single();
            
        setUserName(profile?.full_name || user.email?.split('@')[0] || 'Trader');

        // Fetch Licenses
        const { data: licenseData } = await supabase
            .from('licenses')
            .select('*')
            .eq('user_id', user.id);
            
        if (licenseData) {
            setLicenses(licenseData as License[]);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading Dashboard...</div>;
    }

    return (
        <div className="min-h-screen pt-28 pb-20 px-4">
             <div className="max-w-7xl mx-auto">
                 
                 {/* Dashboard Header */}
                 <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-8 gap-4">
                     <div>
                         <h1 className="text-3xl font-bold text-white mb-2">Command Center</h1>
                         <p className="text-zinc-400">Welcome back, <span className="text-white font-medium">{userName}</span></p>
                     </div>
                     <div className="flex gap-3">
                         <Button variant="outline" size="sm" asLink to="/license-tool">Activate Machine</Button>
                         <Button variant="secondary" size="sm" onClick={handleLogout}>Log Out</Button>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     
                     {/* Left Column: Licenses */}
                     <div className="lg:col-span-2 space-y-6">
                         <h2 className="text-xl font-bold text-white flex items-center gap-2">
                             <Icons.Lock className="w-5 h-5 text-brand-500"/> My Licenses
                         </h2>

                         {licenses.length === 0 ? (
                             <GlassPanel className="text-center py-10">
                                 <p className="text-zinc-500 mb-4">No active licenses found.</p>
                                 <Button variant="glow" asLink to="/pricing">Purchase Access</Button>
                             </GlassPanel>
                         ) : (
                             licenses.map((license) => (
                                <GlassPanel key={license.id} className="border-brand-500/30 bg-brand-900/10 mb-4">
                                     <div className="flex justify-between items-start mb-4">
                                         <div>
                                             <h3 className="text-lg font-bold text-white">{license.product_name}</h3>
                                             <p className="text-xs text-brand-400 mt-1 flex items-center gap-1">
                                                 <span className={`w-1.5 h-1.5 rounded-full ${license.status === 'active' ? 'bg-brand-500 animate-pulse' : 'bg-red-500'}`}></span> 
                                                 {license.status.toUpperCase()} 
                                                 {license.expires_at ? ` • Expires ${new Date(license.expires_at).toLocaleDateString()}` : ' • Lifetime'}
                                             </p>
                                         </div>
                                         <Badge color="violet">PRO</Badge>
                                     </div>
                                     
                                     <div className="bg-black/40 border border-zinc-800 rounded p-4 font-mono text-sm text-zinc-300 mb-4 flex justify-between items-center group cursor-pointer hover:border-zinc-600 transition-colors">
                                         <span>{license.license_key}</span>
                                         <Icons.Layers className="w-4 h-4 text-zinc-600 group-hover:text-white"/>
                                     </div>
        
                                     <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                                         <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                                             <span>Machine ID</span>
                                             <span className="text-white">{license.machine_id ? 'Registered' : 'Unregistered'}</span>
                                         </div>
                                     </div>
        
                                     <div className="mt-6 flex gap-3">
                                         <Button size="sm" asLink to="/docs">Installation Guide</Button>
                                         <Button size="sm" variant="outline" asLink to="https://lemonsqueezy.com/billing">Manage Billing</Button>
                                     </div>
                                </GlassPanel>
                             ))
                         )}
                     </div>

                     {/* Right Column: Profile & Affiliate */}
                     <div className="space-y-6">
                         <h2 className="text-xl font-bold text-white flex items-center gap-2">
                             <Icons.Target className="w-5 h-5 text-zinc-500"/> Account
                         </h2>

                         <GlassPanel>
                             <div className="flex items-center gap-4 mb-6">
                               