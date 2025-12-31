import React from 'react';
import { Button, GlassPanel, SectionHeader, Icons, Badge } from '../components/Shared';
import { PricingSection } from '../components/PricingSection';
import { 
    PRODUCT_AUTO_NAME,
    PRICE_AUTO_MONTHLY,
    PRICE_AUTO_QUARTERLY,
    PRICE_AUTO_YEARLY,
    CHECKOUT_URL_AUTO_MONTHLY,
    CHECKOUT_URL_AUTO_QUARTERLY,
    CHECKOUT_URL_AUTO_YEARLY
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

export const AutoTrading: React.FC = () => {
    
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* 1. HERO SECTION */}
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Badge color="violet">Algorithmic System</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-4 leading-tight">
                        {PRODUCT_AUTO_NAME}
                    </h1>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Automated execution logic based on 12 years of orderflow data. 
                        Eliminate emotional errors and trade with machine precision.
                    </p>
                    
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="glow" onClick={scrollToPricing}>Get Access</Button>
                    </div>
                </div>
            </div>

            {/* 2. FEATURES & VISUALS */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-2xl font-bold text-white mb-8">Institutional Grade Execution</h2>
                    <FeatureRow 
                        title="Iceberg Detection" 
                        desc="Algorithms automatically identify hidden liquidity (Icebergs) and front-run the remaining size."
                        icon={Icons.Layers}
                    />
                    <FeatureRow 
                        title="Latency Arbitrage" 
                        desc="Execution speed under 5ms. We co-locate our servers with the exchange to beat retail flow."
                        icon={Icons.Cpu}
                    />
                    <FeatureRow 
                        title="Risk Guard" 
                        desc="Server-side risk management. Daily max loss and max drawdown limits are hard-coded."
                        icon={Icons.Lock}
                    />
                 </div>
                 
                 <GlassPanel className="h-[400px] flex items-center justify-center text-zinc-600 border-zinc-800 bg-black relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 to-transparent"></div>
                     {/* Abstract Visual for Algo */}
                     <div className="flex flex-col gap-2 w-64 font-mono">
                         {[1,2,3,4,5].map(i => (
                             <div key={i} className="flex justify-between text-xs text-zinc-500 border-b border-zinc-900/50 pb-2">
                                 <span className="text-zinc-600">BID {5400 + i * 0.25}</span>
                                 <span className={i===2 ? 'text-brand-500 font-bold' : ''}>{100 * i + Math.floor(Math.random() * 50)}</span>
                             </div>
                         ))}
                         <div className="mt-6 p-4 bg-brand-900/20 border border-brand-500/30 rounded text-brand-400 text-xs font-bold text-center animate-pulse">
                             <div className="flex justify-center mb-2"><Icons.Zap className="w-4 h-4"/></div>
                             EXECUTION FILLED
                             <div className="text-[10px] text-zinc-500 font-normal mt-1">Lat: 4ms • Slippage: 0</div>
                         </div>
                     </div>
                 </GlassPanel>
            </div>

            {/* 3. PRICING SECTION */}
            <PricingSection 
                title="Automate Your Edge"
                options={[
                    { period: 'monthly', price: PRICE_AUTO_MONTHLY, checkoutUrl: CHECKOUT_URL_AUTO_MONTHLY },
                    { period: 'quarterly', price: PRICE_AUTO_QUARTERLY, saveLabel: 'SAVE 10%', checkoutUrl: CHECKOUT_URL_AUTO_QUARTERLY },
                    { period: 'yearly', price: PRICE_AUTO_YEARLY, saveLabel: 'SAVE 25%', checkoutUrl: CHECKOUT_URL_AUTO_YEARLY }
                ]}
                features={[
                    "Fully Automated Strategy",
                    "Iceberg Sniffer Algorithm",
                    "Server-Side Execution",
                    "1-on-1 Setup Call",
                    "Dedicated VPS Support"
                ]}
            />
        </div>
    );
};