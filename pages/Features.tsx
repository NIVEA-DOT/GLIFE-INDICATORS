import React from 'react';
import { Button, GlassPanel, SectionHeader, Icons, Badge } from '../components/Shared';
import { PRODUCT_BUNDLE_NAME, PRODUCT_MONEY_FLOW, PRODUCT_MARKET_PROFILE, PRODUCT_AUTO_NAME } from '../constants';
import { Link } from 'react-router-dom';

// --- VISUALIZATIONS ---

const BundleVisual: React.FC = () => (
    <div className="w-full h-64 sm:h-80 md:h-full min-h-[250px] relative bg-[#050505] overflow-hidden rounded-lg flex items-center justify-center border border-zinc-900">
        {/* Grid Background */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Abstract Candles */}
        <div className="flex items-end gap-2 h-1/2 md:h-64 opacity-50">
            <div className="w-4 h-24 bg-red-500/20 rounded-sm"></div>
            <div className="w-4 h-32 bg-green-500/20 rounded-sm"></div>
            <div className="w-4 h-28 bg-green-500/20 rounded-sm"></div>
            <div className="w-4 h-40 bg-green-500/40 rounded-sm relative">
                 {/* GL Box Overlay */}
                 <div className="absolute -left-2 -right-2 top-0 h-12 border-2 border-brand-500/50 bg-brand-500/10 rounded"></div>
            </div>
            <div className="w-4 h-36 bg-red-500/40 rounded-sm"></div>
            <div className="w-4 h-20 bg-red-500/20 rounded-sm"></div>
        </div>

        {/* Floating UI Elements */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-zinc-900/90 border border-brand-500/30 p-3 rounded-lg backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                <span className="text-xs font-bold text-white">GL Box Signal</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-mono">
                <div>Type: Breakout Failure</div>
                <div>Vol: 4502 Contracts</div>
            </div>
        </div>
    </div>
);

const MoneyFlowVisual: React.FC = () => (
    <div className="w-full h-64 sm:h-80 md:h-full min-h-[250px] relative bg-[#050505] overflow-hidden rounded-lg flex flex-col p-6 border border-zinc-900">
        {/* Price Pane */}
        <div className="flex-1 relative border-b border-zinc-800 mb-2">
            <div className="absolute top-2 left-2 text-[10px] text-zinc-500 font-mono">PRICE ACTION</div>
            <svg className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,80 L50,70 L100,50 L150,20 L200,30 L250,10 L300,15 L350,5 L400,0" fill="none" stroke="#52525b" strokeWidth="2" />
            </svg>
        </div>
        {/* Delta Pane */}
        <div className="flex-1 relative">
            <div className="absolute top-2 left-2 text-[10px] text-emerald-500 font-mono flex items-center gap-2">
                <Icons.AlertTriangle className="w-3 h-3" /> DIVERGENCE DETECTED
            </div>
            <svg className="w-full h-full" preserveAspectRatio="none">
                {/* Diverging line (going down while price goes up) */}
                <path d="M0,20 L50,30 L100,40 L150,60 L200,55 L250,80 L300,85 L350,90 L400,100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            <div className="absolute bottom-4 right-10 bg-red-900/20 border border-red-500/30 px-3 py-1 rounded text-red-400 text-xs font-bold">
                SELL IMBALANCE
            </div>
        </div>
    </div>
);

const ProfileVisual: React.FC = () => (
    <div className="w-full h-64 sm:h-80 md:h-full min-h-[250px] relative bg-[#050505] overflow-hidden rounded-lg flex items-center p-10 border border-zinc-900">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)' }}></div>
        
        {/* TPO Shape */}
        <div className="flex items-end gap-1 h-2/3">
            {/* Building a Bell Curve */}
            {[2,4,8,12,20,35,45,30,15,8,4,2].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-6 bg-cyan-900/40 border-t border-cyan-500/50 rounded-sm relative group">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}00
                    </div>
                </div>
            ))}
        </div>

        {/* POC Line */}
        <div className="absolute left-10 right-10 top-1/2 h-px bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
        <div className="absolute right-12 top-[48%] bg-cyan-500 text-black text-[10px] font-bold px-1 rounded">POC</div>
    </div>
);

const AutoVisual: React.FC = () => (
    <div className="w-full h-64 sm:h-80 md:h-full min-h-[250px] relative bg-[#050505] overflow-hidden rounded-lg flex border border-zinc-900">
        {/* DOM Ladder */}
        <div className="w-1/3 border-r border-zinc-900 bg-zinc-950/50 flex flex-col font-mono text-[10px]">
            <div className="flex-1 flex items-center justify-between px-2 text-zinc-600 border-b border-zinc-900/50"><span>5402.25</span> <span>102</span></div>
            <div className="flex-1 flex items-center justify-between px-2 text-zinc-600 border-b border-zinc-900/50"><span>5402.00</span> <span>450</span></div>
            <div className="flex-1 flex items-center justify-between px-2 text-white bg-brand-900/20 border-l-2 border-brand-500"><span>5401.75</span> <span>1205</span></div>
            <div className="flex-1 flex items-center justify-between px-2 text-zinc-600 border-b border-zinc-900/50"><span>5401.50</span> <span>89</span></div>
            <div className="flex-1 flex items-center justify-between px-2 text-zinc-600 border-b border-zinc-900/50"><span>5401.25</span> <span>12</span></div>
        </div>
        
        {/* Execution Chart */}
        <div className="flex-1 relative p-6">
            <div className="absolute top-10 left-4 md:left-10 flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                     <span className="text-xs text-emerald-500 font-bold">LONG FILLED</span>
                 </div>
                 <div className="text-[10px] text-zinc-500 font-mono">
                     Entry: 5401.75 <br/>
                     Size: 5 Contracts <br/>
                     Lat: 4ms
                 </div>
            </div>
            
            <div className="absolute bottom-10 right-4 md:right-10">
                 <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg shadow-xl">
                     <div className="text-[10px] text-zinc-400 uppercase mb-1">P&L Session</div>
                     <div className="text-xl font-bold text-emerald-400">+$2,450.00</div>
                 </div>
            </div>
        </div>
    </div>
);

// --- PRODUCT DATA ---

const PRODUCTS = [
    {
        id: 'bundle',
        name: PRODUCT_BUNDLE_NAME,
        icon: Icons.Layers,
        color: "brand",
        tagline: "The Complete Institutional Suite",
        desc: "Everything you need to trade like a bank. Combines Structure (GL Box), Momentum (Vega), and Context (Navigator) into one powerful chart overlay. Stop guessing and start seeing the auction.",
        features: ["Consolidation Zones", "Absorption Detection", "VWAP & Profiles", "Includes Money Flow"],
        link: "/indicators/bundle",
        visual: <BundleVisual />
    },
    {
        id: 'money_flow',
        name: PRODUCT_MONEY_FLOW,
        icon: Icons.TrendingUp,
        color: "emerald",
        tagline: "The Divergence Detector",
        desc: "Don't get caught on the wrong side. Money Flow identifies when aggressive buyers are exhausted despite higher prices. It instantly spots trapped traders and potential reversals.",
        features: ["CVD Divergence", "Trapped Trader Alerts", "Net Aggression Filter", "Tick-level Precision"],
        link: "/indicators/money-flow",
        visual: <MoneyFlowVisual />
    },
    {
        id: 'profile',
        name: PRODUCT_MARKET_PROFILE,
        icon: Icons.BarChart,
        color: "cyan",
        tagline: "Context & TPO Analytics",
        desc: "Understand the auction process. Identify value areas, single prints, and poor highs. Merge sessions to see the bigger picture and trade away from value.",
        features: ["TPO Charts", "Volume Profile", "Session Splitting", "Composite Merging"],
        link: "/indicators/profile",
        visual: <ProfileVisual />
    },
    {
        id: 'auto',
        name: PRODUCT_AUTO_NAME,
        icon: Icons.Cpu,
        color: "violet",
        tagline: "Algorithmic Execution",
        desc: "Remove emotions from the equation. Our proprietary execution algorithms hunt for liquidity and manage risk automatically. For professional desks only.",
        features: ["Iceberg Execution", "Auto-Risk Management", "News Event Filtering", "Latency < 5ms"],
        link: "/indicators/auto",
        visual: <AutoVisual />
    }
];

const ProductShowcase: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="text-center mb-16">
                 <Badge color="violet">Product Tour</Badge>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">Master The Orderflow</h2>
                 <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                     Our suite covers every aspect of institutional trading. From market structure to automated execution.
                 </p>
            </div>

            {/* Vertical Stack of Cards */}
            <div className="space-y-16">
                {PRODUCTS.map((product, index) => (
                    <GlassPanel key={product.id} className="p-0 overflow-hidden border-zinc-800 bg-zinc-900/20 relative flex flex-col lg:flex-row group hover:border-zinc-700 transition-colors">
                        
                        {/* Text Content */}
                        <div className="w-full lg:w-5/12 p-8 md:p-12 flex flex-col justify-center relative z-10 order-2 lg:order-1">
                             <div className="flex items-center gap-4 mb-6">
                                 <div className={`p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-${product.color === 'violet' ? 'brand-500' : product.color === 'brand' ? 'brand-500' : product.color + '-500'}`}>
                                     <product.icon className="w-6 h-6" />
                                 </div>
                                 <div>
                                     <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                                     <p className={`text-xs font-bold uppercase tracking-widest text-${product.color === 'violet' ? 'brand-500' : product.color === 'brand' ? 'brand-500' : product.color + '-500'}`}>
                                         {product.tagline}
                                     </p>
                                 </div>
                             </div>

                             <p className="text-zinc-400 leading-relaxed mb-8">
                                 {product.desc}
                             </p>
                             
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                 {product.features.map((f, i) => (
                                     <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                                         <Icons.Check className="w-4 h-4 text-zinc-600" />
                                         {f}
                                     </div>
                                 ))}
                             </div>

                             <Button variant="glow" asLink to={product.link} className="w-full sm:w-auto self-start">
                                 Explore {product.name}
                             </Button>
                        </div>

                        {/* Visual Content */}
                        <div className="w-full lg:w-7/12 bg-black/50 border-b lg:border-b-0 lg:border-l border-zinc-800/50 relative overflow-hidden order-1 lg:order-2 min-h-[300px] lg:min-h-auto flex items-center justify-center p-8">
                             {/* Ambient Glow */}
                             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-${product.color === 'violet' ? 'brand-500' : product.color === 'brand' ? 'brand-500' : product.color + '-500'}/10 blur-[80px] rounded-full`}></div>
                             
                             <div className="relative z-10 w-full h-full max-w-lg transition-transform duration-700 group-hover:scale-[1.02]">
                                 {product.visual}
                             </div>
                        </div>

                    </GlassPanel>
                ))}
            </div>
        </div>
    );
};

const FeatureCard: React.FC<{ 
    title: string; 
    desc: string; 
    icon: React.ElementType; 
    tags: string[] 
}> = ({ title, desc, icon: Icon, tags }) => (
    <div className="group relative p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:bg-zinc-900/80 hover:border-brand-500/30 transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className="w-24 h-24 text-brand-500" />
        </div>
        
        <div className="relative z-10">
            <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-500/50 transition-all">
                <Icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] uppercase tracking-wide text-zinc-500 font-medium">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export const Features: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            
            {/* 1. PRODUCT SHOWCASE (Vertical Stack) */}
            <ProductShowcase />

            <div className="h-px bg-zinc-800/50 max-w-7xl mx-auto my-24"></div>

            <SectionHeader 
                title="Platform Capabilities" 
                subtitle="The most comprehensive institutional toolset for NinjaTrader 8." 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2. ORDER FLOW & VOLUME */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-zinc-800 flex-grow"></div>
                        <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Orderflow & Volume</span>
                        <div className="h-px bg-zinc-800 flex-grow"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard 
                            title="Footprint Visualization" 
                            desc="See inside the candle. Visualize aggressive buying vs selling at every price level to spot imbalances."
                            icon={Icons.BarChart}
                            tags={['Imbalance', 'Clusters', 'Rotation']}
                        />
                        <FeatureCard 
                            title="Volume Profile" 
                            desc="Analyze value distribution. Composite profiles, session splits, and developing value area (VA) tracking."
                            icon={Icons.Layers}
                            tags={['TPO', 'VWAP', 'Value Area']}
                        />
                        <FeatureCard 
                            title="Delta Divergence" 
                            desc="The lie detector. Identifies when price makes a new high but aggressive buying (Delta) is failing."
                            icon={Icons.TrendingUp}
                            tags={['Reversals', 'Absorption', 'CVD']}
                        />
                    </div>
                </div>

                {/* 3. ALGORITHMIC & STRUCTURE */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-zinc-800 flex-grow"></div>
                        <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Structure & Algo</span>
                        <div className="h-px bg-zinc-800 flex-grow"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard 
                            title="Structure Detection" 
                            desc="Automatically plot key support & resistance levels based on high volume nodes (HVN) and rejection areas."
                            icon={Icons.Activity}
                            tags={['Support/Res', 'Breakouts', 'Retests']}
                        />
                        <FeatureCard 
                            title="Trapped Traders" 
                            desc="Real-time signals when large participants get stuck on the wrong side of the market."
                            icon={Icons.Target}
                            tags={['Stops', 'Liquidity', 'Squeeze']}
                        />
                        <FeatureCard 
                            title="Velocity Tracking" 
                            desc="Measure the speed of the tape (orders per second) to detect algorithmic execution programs."
                            icon={Icons.Cpu}
                            tags={['HFT', 'Momentum', 'Speed']}
                        />
                    </div>
                </div>

                {/* CALL TO ACTION */}
                <div className="mt-20 text-center">
                    <GlassPanel className="max-w-3xl mx-auto border-brand-500/30 bg-gradient-to-b from-brand-900/10 to-transparent">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your charts?</h2>
                        <p className="text-zinc-400 mb-8">
                            Get all these features in the GL Bundle or choose individual tools.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" variant="glow" asLink to="/indicators/bundle">Get The Bundle</Button>
                            <Button size="lg" variant="outline" asLink to="/compare">Compare Plans</Button>
                        </div>
                    </GlassPanel>
                </div>

            </div>
        </div>
    );
};