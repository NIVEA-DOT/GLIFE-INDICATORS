import React from 'react';
import { Button, GlassPanel, SectionHeader, Icons, Badge } from '../components/Shared';
import { PricingSection } from '../components/PricingSection';
import { 
    CHECKOUT_URL_BUNDLE_MONTHLY, 
    CHECKOUT_URL_BUNDLE_QUARTERLY,
    CHECKOUT_URL_BUNDLE_YEARLY,
    CHECKOUT_URL_BUNDLE_LIFETIME,
    PRICE_BUNDLE_MONTHLY,
    PRICE_BUNDLE_QUARTERLY,
    PRICE_BUNDLE_YEARLY
} from '../constants';

const FeatureRow: React.FC<{ title: string; desc: string; icon: any }> = ({ title, desc, icon: Icon }) => (
    <div className="flex gap-6 items-start py-8 border-b border-zinc-900 last:border-0 group hover:bg-zinc-900/20 px-4 rounded transition-colors">
        <div className="p-3 bg-zinc-900 rounded text-brand-500 shrink-0 group-hover:scale-110 transition-transform">
            <Icon />
        </div>
        <div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const GLBundle: React.FC = () => {
    
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* 1. HERO SECTION (Persuasion) */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Badge color="violet">Most Popular</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-4 leading-tight">
                        Complete Orderflow <br/> <span className="text-brand-500">Domination</span>
                    </h1>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Stop trading blind. Get the full institutional suite: Structure, Velocity, Context, and Divergence in one powerful package.
                    </p>
                    
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="glow" onClick={scrollToPricing}>Get Access</Button>
                        <Button size="lg" variant="outline" asLink to="/features">See All Products</Button>
                    </div>
                </div>
            </div>

            {/* 2. DETAILED FEATURES */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8">What's Inside The Box</h2>
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
                        icon={Icons.Zap}
                    />
                </div>
                
                <div className="space-y-8 sticky top-24 h-fit">
                     <div className="bg-zinc-900 border border-zinc-800 h-[300px] flex items-center justify-center text-zinc-600 rounded-lg shadow-2xl relative overflow-hidden group">
                         <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent opacity-50"></div>
                         <Icons.Layers className="w-16 h-16 opacity-20"/>
                         <span className="relative z-10 font-mono text-sm">GL Box Visualization</span>
                     </div>
                     <div className="bg-zinc-900 border border-zinc-800 h-[300px] flex items-center justify-center text-zinc-600 rounded-lg shadow-2xl relative overflow-hidden group">
                         <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent opacity-50"></div>
                         <Icons.Activity className="w-16 h-16 opacity-20"/>
                         <span className="relative z-10 font-mono text-sm">GL Vega Momentum</span>
                     </div>
                </div>
            </div>

            {/* 3. TECHNICAL DEEP DIVE (PERSUASION) */}
            <div className="bg-zinc-950 py-20 border-y border-zinc-900">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">The Institutional Edge</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Retail traders look at candles. Institutions look at liquidity. The GL Bundle gives you X-ray vision into the market auction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <GlassPanel className="bg-zinc-900/20">
                             <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                 <Icons.Target className="text-brand-500" /> Absorption Logic
                             </h3>
                             <p className="text-sm text-zinc-400">
                                 Detect when thousands of aggressive buy orders are hitting the offer but price isn't moving. That's a passive seller absorbing liquidity.
                             </p>
                         </GlassPanel>
                         <GlassPanel className="bg-zinc-900/20">
                             <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                 <Icons.TrendingUp className="text-brand-500" /> Delta Divergence
                             </h3>
                             <p className="text-sm text-zinc-400">
                                 Price makes a new high, but cumulative delta makes a lower high. This exhaustion signal often precedes a rapid reversal.
                             </p>
                         </GlassPanel>
                         <GlassPanel className="bg-zinc-900/20">
                             <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                 <Icons.BarChart className="text-brand-500" /> Auction Visibilty
                             </h3>
                             <p className="text-sm text-zinc-400">
                                 See the value area migrate in real-time. Know exactly where fair value is and when price is overextended.
                             </p>
                         </GlassPanel>
                    </div>
                </div>
            </div>

            {/* 4. PRICING WIDGET (Bottom) */}
            <PricingSection 
                title="Start Trading Professionally"
                options={[
                    { period: 'monthly', price: PRICE_BUNDLE_MONTHLY, checkoutUrl: CHECKOUT_URL_BUNDLE_MONTHLY },
                    { period: 'quarterly', price: PRICE_BUNDLE_QUARTERLY, saveLabel: 'SAVE 10%', checkoutUrl: CHECKOUT_URL_BUNDLE_QUARTERLY },
                    { period: 'yearly', price: PRICE_BUNDLE_YEARLY, saveLabel: 'SAVE 30%', checkoutUrl: CHECKOUT_URL_BUNDLE_YEARLY }
                ]}
                features={[
                    "Includes ALL 4 Core Indicators",
                    "2 Machine Licenses",
                    "Discord Community Access",
                    "Priority 24/7 Support",
                    "Free Updates & New Features"
                ]}
                lifetimeOption={{
                    price: 499,
                    url: CHECKOUT_URL_BUNDLE_LIFETIME
                }}
            />
        </div>
    );
};