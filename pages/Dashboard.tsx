import React, { useEffect, useState } from 'react';
import { Button, GlassPanel, Icons, Badge, SectionHeader } from '../components/Shared';
import { useNavigate, Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    
    useEffect(() => {
        const token = localStorage.getItem('gl_auth_token');
        if (!token) {
            navigate('/login');
            return;
        }
        setUserName(localStorage.getItem('gl_user_name') || 'Trader');
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('gl_auth_token');
        localStorage.removeItem('gl_user_name');
        localStorage.removeItem('gl_user_email');
        navigate('/');
    };

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

                         {/* Active License Card */}
                         <GlassPanel className="border-brand-500/30 bg-brand-900/10">
                             <div className="flex justify-between items-start mb-4">
                                 <div>
                                     <h3 className="text-lg font-bold text-white">GL Bundle (Monthly)</h3>
                                     <p className="text-xs text-brand-400 mt-1 flex items-center gap-1">
                                         <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Active • Renews on Dec 24, 2024
                                     </p>
                                 </div>
                                 <Badge color="violet">PRO</Badge>
                             </div>
                             
                             <div className="bg-black/40 border border-zinc-800 rounded p-4 font-mono text-sm text-zinc-300 mb-4 flex justify-between items-center group cursor-pointer hover:border-zinc-600 transition-colors">
                                 <span>GL-8392-XKLS-9921</span>
                                 <Icons.Layers className="w-4 h-4 text-zinc-600 group-hover:text-white"/>
                             </div>

                             <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                                 <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                                     <span>Machine 1</span>
                                     <span className="text-white">Desktop-Win11 (Active)</span>
                                 </div>
                                 <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                                     <span>Machine 2</span>
                                     <span className="text-zinc-600 italic">Unused</span>
                                 </div>
                             </div>

                             <div className="mt-6 flex gap-3">
                                 <Button size="sm" asLink to="/docs">Installation Guide</Button>
                                 <Button size="sm" variant="outline" asLink to="https://lemonsqueezy.com/billing">Manage Billing</Button>
                             </div>
                         </GlassPanel>

                         {/* Inactive/Other License */}
                         <GlassPanel className="opacity-75">
                             <div className="flex justify-between items-start mb-4">
                                 <div>
                                     <h3 className="text-lg font-bold text-zinc-300">Footprint Auto</h3>
                                     <p className="text-xs text-zinc-500 mt-1">Application Status: <span className="text-yellow-500">Pending Review</span></p>
                                 </div>
                                 <Icons.Lock className="text-zinc-600"/>
                             </div>
                             <div className="bg-zinc-900/50 border border-zinc-800 rounded p-4 text-center">
                                 <p className="text-sm text-zinc-500 mb-3">You have applied for access.</p>
                                 <Button size="sm" variant="outline" className="w-full" asLink to="/product/auto">View Application</Button>
                             </div>
                         </GlassPanel>
                     </div>

                     {/* Right Column: Profile & Affiliate */}
                     <div className="space-y-6">
                         <h2 className="text-xl font-bold text-white flex items-center gap-2">
                             <Icons.Target className="w-5 h-5 text-zinc-500"/> Account
                         </h2>

                         <GlassPanel>
                             <div className="flex items-center gap-4 mb-6">
                                 <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold text-white">
                                     {userName.charAt(0)}
                                 </div>
                                 <div>
                                     <div className="text-white font-medium">{userName}</div>
                                     <div className="text-xs text-zinc-500">Standard Plan</div>
                                 </div>
                             </div>
                             <div className="space-y-2">
                                 <Button variant="ghost" className="w-full justify-start text-sm text-zinc-400 hover:text-white">
                                     <Icons.BarChart className="w-4 h-4 mr-2"/> Affiliate Dashboard
                                 </Button>
                                 <Button variant="ghost" className="w-full justify-start text-sm text-zinc-400 hover:text-white">
                                     <Icons.Zap className="w-4 h-4 mr-2"/> API Settings
                                 </Button>
                                 <Button variant="ghost" className="w-full justify-start text-sm text-zinc-400 hover:text-white">
                                     <Icons.AlertTriangle className="w-4 h-4 mr-2"/> Support Tickets
                                 </Button>
                             </div>
                         </GlassPanel>

                         <GlassPanel className="bg-gradient-to-br from-brand-900/20 to-transparent border-brand-500/20">
                             <h3 className="text-white font-bold mb-2">Upgrade to Lifetime</h3>
                             <p className="text-xs text-zinc-400 mb-4">Stop paying monthly fees. Get the GL Bundle forever for a one-time payment.</p>
                             <Button size="sm" variant="glow" className="w-full">Upgrade Now</Button>
                         </GlassPanel>
                     </div>
                 </div>
             </div>
        </div>
    );
};