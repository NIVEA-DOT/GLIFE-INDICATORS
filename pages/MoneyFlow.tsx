import React from 'react';
import { Button, GlassPanel, Icons, Badge } from '../components/Shared';
import { CHECKOUT_URL_MONEY_FLOW } from '../constants';

export const MoneyFlow: React.FC = () => {
    return (
        <div>
            {/* Header */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Badge color="zinc">Advanced Indicator</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-4">Money Flow Detector</h1>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Identify trapped traders and exhaustion. The only Cumulative Delta Divergence tool you need.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="text-center sm:text-right">
                             <div className="text-3xl font-bold text-white">$79 <span className="text-lg text-zinc-500 font-normal">/ lifetime</span></div>
                        </div>
                        <div className="h-8 w-px bg-zinc-700 hidden sm:block"></div>
                        <Button size="lg" variant="primary" asLink to={CHECKOUT_URL_MONEY_FLOW} external>Buy Now</Button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Why Money Flow?</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Standard price action is deceptive. Smart money hides their tracks in the volume. 
                        GL Money Flow analyzes the Delta (Aggressive Buy vs Sell) and compares it to Price movement.
                    </p>
                    
                    <ul className="space-y-4 mt-8">
                        <li className="flex gap-4">
                            <div className="p-2 bg-brand-500/10 text-brand-500 rounded"><Icons.TrendingUp /></div>
                            <div>
                                <h4 className="text-white font-bold">Divergence Alerts</h4>
                                <p className="text-sm text-zinc-500">Price makes a Higher High, but Delta makes a Lower High. A reversal is imminent.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="p-2 bg-brand-500/10 text-brand-500 rounded"><Icons.Target /></div>
                            <div>
                                <h4 className="text-white font-bold">Trapped Traders</h4>
                                <p className="text-sm text-zinc-500">Visual signals when high volume aggressive buying fails to move price up.</p>
                            </div>
                        </li>
                    </ul>
                 </div>
                 
                 <GlassPanel className="h-[400px] flex items-center justify-center text-zinc-600 border-zinc-800 bg-black">
                     Chart Visualization Placeholder
                 </GlassPanel>
            </div>
        </div>
    );
};