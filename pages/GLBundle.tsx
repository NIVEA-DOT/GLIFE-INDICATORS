import React from 'react';
import { Button, GlassPanel, SectionHeader, Icons, Badge } from '../components/Shared';
import { CHECKOUT_URL_BUNDLE_LIFETIME, CHECKOUT_URL_BUNDLE_MONTHLY } from '../constants';

const FeatureRow: React.FC<{ title: string; desc: string; icon: any }> = ({ title, desc, icon: Icon }) => (
    <div className="flex gap-6 items-start py-8 border-b border-zinc-900 last:border-0">
        <div className="p-3 bg-zinc-900 rounded text-brand-500 shrink-0">
            <Icon />
        </div>
        <div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const GLBundle: React.FC = () => {
    return (
        <div>
            {/* Header */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Badge color="violet">Most Popular</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-4">Complete Orderflow Toolkit</h1>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Stop trading blind. The GL Bundle visualizes the aggressor and the passive liquidity in real-time.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="text-center sm:text-right">
                             <div className="text-3xl font-bold text-white">$99 <span className="text-lg text-zinc-500 font-normal">/ mo</span></div>
                        </div>
                        <div className="h-8 w-px bg-zinc-700 hidden sm:block"></div>
                        <Button size="lg" variant="glow" asLink to={CHECKOUT_URL_BUNDLE_MONTHLY} external>Subscribe Now</Button>
                    </div>
                     <p className="mt-4 text-xs text-zinc-500">
                        Or get <a href={CHECKOUT_URL_BUNDLE_LIFETIME} className="text-white hover:underline">Lifetime Access for $499</a>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8">What's Inside</h2>
                    <FeatureRow 
                        title="GL Box" 
                        desc="Identifies consolidation zones and breakout failures. Automatically plots support/resistance based on volume nodes."
                        icon={Icons.Layers}
                    />
                    <FeatureRow 
                        title="GL Vega" 
                        desc="Measures the velocity of the tape. Detects when aggressive buying is exhausting against a passive wall (Absorption)."
                        icon={Icons.Activity}
                    />
                    <FeatureRow 
                        title="GL Navigator" 
                        desc="Session volume profile and VWAP logic integrated into a single clean overlay. Know who is in control."
                        icon={Icons.TrendingUp}
                    />
                    <FeatureRow 
                        title="Bonus: Money Flow" 
                        desc="Cumulative Delta visualization that filters out noise to show true institutional intent."
                        icon={Icons.Activity}
                    />
                </div>
                
                <div className="space-y-8">
                     <div className="bg-zinc-900 border border-zinc-800 h-[300px] flex items-center justify-center text-zinc-600 rounded-lg">
                         Chart Screenshot (GL Box)
                     </div>
                     <div className="bg-zinc-900 border border-zinc-800 h-[300px] flex items-center justify-center text-zinc-600 rounded-lg">
                         Chart Screenshot (Vega)
                     </div>
                     <GlassPanel>
                         <h4 className="text-white font-bold mb-4">System Requirements</h4>
                         <ul className="text-sm text-zinc-400 space-y-2">
                             <li>• NinjaTrader 8 (64-bit)</li>
                             <li>• Windows 10/11</li>
                             <li>• 16GB RAM Recommended</li>
                             <li>• Level 2 Data Feed (Rithmic/CQG)</li>
                         </ul>
                     </GlassPanel>
                </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="py-20 bg-zinc-900/30 border-t border-zinc-900 text-center">
                 <h2 className="text-2xl font-bold text-white mb-4">Ready to upgrade your execution?</h2>
                 <Button size="lg" variant="glow" asLink to={CHECKOUT_URL_BUNDLE_MONTHLY} external>Get GL Bundle ($99/mo)</Button>
            </div>
        </div>
    );
};