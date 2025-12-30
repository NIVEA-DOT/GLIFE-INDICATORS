import React from 'react';
import { Button, GlassPanel, Icons, Badge } from '../components/Shared';
import { CHECKOUT_URL_PROFILE } from '../constants';

export const MarketProfile: React.FC = () => {
    return (
        <div>
            {/* Header */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Badge color="cyan">Analytics Tool</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-4">GL Market Profile</h1>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Context is King. TPO Charts, Volume Profiles, and Session Splits for deep market analysis.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="text-center sm:text-right">
                             <div className="text-3xl font-bold text-white">$49 <span className="text-lg text-zinc-500 font-normal">/ lifetime</span></div>
                        </div>
                        <div className="h-8 w-px bg-zinc-700 hidden sm:block"></div>
                        <Button size="lg" variant="primary" asLink to={CHECKOUT_URL_PROFILE} external>Buy Now</Button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <GlassPanel className="h-[400px] flex items-center justify-center text-zinc-600 border-zinc-800 bg-black">
                     TPO Chart Placeholder
                 </GlassPanel>

                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Understand the Auction</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Markets exist to facilitate trade. Market Profile helps you understand <em>where</em> trade is being facilitated and where it is being rejected.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6 mt-4">
                        <div className="border-l-2 border-cyan-500 pl-4">
                            <h4 className="text-white font-bold">TPO Charts (Time Price Opportunity)</h4>
                            <p className="text-sm text-zinc-500 mt-1">Classic letter-based distribution charts to identify Poor Highs/Lows and Single Prints.</p>
                        </div>
                        <div className="border-l-2 border-cyan-500 pl-4">
                            <h4 className="text-white font-bold">Composite Profiles</h4>
                            <p className="text-sm text-zinc-500 mt-1">Merge multiple days to find long-term high volume nodes (HVN) and low volume nodes (LVN).</p>
                        </div>
                        <div className="border-l-2 border-cyan-500 pl-4">
                            <h4 className="text-white font-bold">Session Replay</h4>
                            <p className="text-sm text-zinc-500 mt-1">Replay the profile development tick-by-tick to practice your reading skills.</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};