import React from 'react';
import { Button, GlassPanel, SectionHeader, Icons, Badge } from '../components/Shared';
import { PricingSection } from '../components/PricingSection';
import { CHECKOUT_URL_PROFILE } from '../constants';

const FeatureRow: React.FC<{ title: string; desc: string; icon: any }> = ({ title, desc, icon: Icon }) => (
    <div className="flex gap-6 items-start py-8 border-b border-zinc-900 last:border-0 group hover:bg-zinc-900/20 px-4 rounded transition-colors">
        <div className="p-3 bg-zinc-900 rounded text-cyan-500 shrink-0 group-hover:scale-110 transition-transform">
            <Icon />
        </div>
        <div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const MarketProfile: React.FC = () => {
    
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* 1. HERO */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Badge color="cyan">Analytics Tool</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-4 leading-tight">
                        GL Market <br/> <span className="text-cyan-500">Profile</span>
                    </h1>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Context is King. TPO Charts, Volume Profiles, and Session Splits for deep market analysis.
                    </p>
                    
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="glow" onClick={scrollToPricing}>Get The Profile</Button>
                    </div>
                </div>
            </div>

            {/* 2. FEATURES */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <GlassPanel className="h-[400px] flex items-center justify-center text-zinc-600 border-zinc-800 bg-black relative overflow-hidden order-last lg:order-first">
                     {/* Placeholder for chart graphic */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 to-transparent"></div>
                     <div className="text-center">
                         <Icons.BarChart className="w-16 h-16 mx-auto mb-4 opacity-20"/>
                         <span className="text-zinc-700 font-mono">TPO Visualization</span>
                     </div>
                 </GlassPanel>

                 <div>
                    <h2 className="text-2xl font-bold text-white mb-8">Understand The Auction</h2>
                    <p className="text-zinc-400 mb-6">
                         Markets exist to facilitate trade. Market Profile helps you understand <em>where</em> trade is being facilitated and where it is being rejected.
                    </p>
                    <FeatureRow 
                        title="TPO Charts" 
                        desc="Classic Time-Price-Opportunity letters. Identify Poor Highs, Poor Lows, and Single Prints to find repair targets."
                        icon={Icons.BarChart}
                    />
                    <FeatureRow 
                        title="Composite Profiles" 
                        desc="Merge multiple days to find long-term High Volume Nodes (HVN). Trade away from value and back to value."
                        icon={Icons.Layers}
                    />
                    <FeatureRow 
                        title="Session Replay" 
                        desc="Watch the profile develop tick-by-tick. Practice your reading skills on historical data."
                        icon={Icons.Activity}
                    />
                 </div>
            </div>

            {/* 3. PRICING */}
            <PricingSection 
                title="Lifetime Access"
                options={[
                    { period: 'lifetime', price: 49, checkoutUrl: CHECKOUT_URL_PROFILE },
                ]}
                features={[
                    "TPO Charting Module",
                    "Volume Profile",
                    "Composite Merging",
                    "Session Splitting",
                    "Lifetime Updates"
                ]}
            />
        </div>
    );
};