import React from 'react';
import { Button, GlassPanel, SectionHeader, Icons, Badge } from '../components/Shared';
import { PricingSection } from '../components/PricingSection';
import { 
    CHECKOUT_URL_MF_MONTHLY,
    CHECKOUT_URL_MF_QUARTERLY,
    CHECKOUT_URL_MF_YEARLY,
    PRICE_MF_MONTHLY,
    PRICE_MF_QUARTERLY,
    PRICE_MF_YEARLY
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

export const MoneyFlow: React.FC = () => {
    
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* 1. HERO */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Badge color="zinc">Standalone Tool</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-4 leading-tight">
                        Money Flow <br/> <span className="text-brand-500">Detector</span>
                    </h1>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Identify trapped traders and exhaustion. The only Cumulative Delta Divergence tool you need.
                    </p>
                    
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="glow" onClick={scrollToPricing}>Get The Indicator</Button>
                    </div>
                </div>
            </div>

            {/* 2. FEATURES */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-2xl font-bold text-white mb-8">See What Others Miss</h2>
                    <FeatureRow 
                        title="Delta Divergence" 
                        desc="Price makes a Higher High, but Delta makes a Lower High. This is the clearest signal that buyers are exhausted and a reversal is imminent."
                        icon={Icons.TrendingUp}
                    />
                    <FeatureRow 
                        title="Trapped Traders" 
                        desc="Visual alerts when high volume aggressive buying fails to move price up. Smart money is absorbing the flow, and retail is trapped."
                        icon={Icons.Target}
                    />
                    <FeatureRow 
                        title="Cumulative View" 
                        desc="Filter out the noise of individual ticks. See the true session trend based on net aggression."
                        icon={Icons.Activity}
                    />
                 </div>
                 
                 <GlassPanel className="h-[400px] flex items-center justify-center text-zinc-600 border-zinc-800 bg-black relative overflow-hidden">
                     {/* Placeholder for chart graphic */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 to-transparent"></div>
                     <div className="text-center">
                         <Icons.TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-20"/>
                         <span className="text-zinc-700 font-mono">Divergence Visualization</span>
                     </div>
                 </GlassPanel>
            </div>

            {/* 3. PRICING */}
            <PricingSection 
                title="Get Started"
                options={[
                    { period: 'monthly', price: PRICE_MF_MONTHLY, checkoutUrl: CHECKOUT_URL_MF_MONTHLY },
                    { period: 'quarterly', price: PRICE_MF_QUARTERLY, saveLabel: 'SAVE 15%', checkoutUrl: CHECKOUT_URL_MF_QUARTERLY },
                    { period: 'yearly', price: PRICE_MF_YEARLY, saveLabel: 'SAVE 35%', checkoutUrl: CHECKOUT_URL_MF_YEARLY }
                ]}
                features={[
                    "Cumulative Delta Indicator",
                    "Divergence Alerts",
                    "Trapped Trader Signals",
                    "Regular Updates",
                    "Email Support"
                ]}
            />
        </div>
    );
};