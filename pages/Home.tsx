import React, { useState } from 'react';
import { Button, GlassPanel, Badge, SectionHeader, Icons } from '../components/Shared';
import { PRODUCT_BUNDLE_NAME, PRODUCT_AUTO_NAME, PRODUCT_MONEY_FLOW, PRODUCT_MARKET_PROFILE } from '../constants';
import { Link } from 'react-router-dom';

// --- VISUAL COMPONENTS ---

const IconNav: React.FC = () => {
    // Icons explicitly mapping to the 4 product components + sub-features
    const items = [
        { icon: Icons.Layers, label: "GL Box", desc: "Bundle" },
        { icon: Icons.Activity, label: "GL Vega", desc: "Bundle" },
        { icon: Icons.Zap, label: "Navigator", desc: "Bundle" },
        { icon: Icons.TrendingUp, label: "Money Flow", desc: "Indicator" },
        { icon: Icons.Cpu, label: "Auto Algo", desc: "System" },
        { icon: Icons.BarChart, label: "Market Profile", desc: "Analytics" },
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16 mb-12">
            {items.map((item, i) => (
                <div 
                    key={i} 
                    onClick={() => setActive(i)}
                    className={`group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 ${active === i ? 'scale-110' : 'opacity-50 hover:opacity-100'}`}
                >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        active === i 
                        ? 'bg-gradient-to-tr from-brand-600 to-brand-secondary border-brand-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                        : 'bg-zinc-900 border-zinc-800 group-hover:border-zinc-700'
                    }`}>
                        <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${active === i ? 'text-white' : 'text-zinc-500'}`}>{item.label}</span>
                </div>
            ))}
        </div>
    )
}

const XRayChart: React.FC = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-lg border border-zinc-800 bg-[#050505] overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#09090b] border-b border-zinc-800 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded text-xs text-zinc-500 font-mono border border-zinc-800">
                    <Icons.Lock className="w-3 h-3" /> gl-systems.io
                </div>
                <div className="w-4"></div>
            </div>

            {/* Chart Area */}
            <div className="absolute inset-0 top-10 flex">
                {/* Y-Axis */}
                <div className="w-12 border-r border-zinc-900 bg-[#020202] text-[10px] text-zinc-600 flex flex-col justify-between py-4 items-end pr-2 font-mono">
                    <span>5450.00</span>
                    <span>5445.00</span>
                    <span>5440.00</span>
                    <span>5435.00</span>
                    <span>5430.00</span>
                </div>

                {/* Canvas */}
                <div className="flex-grow relative bg-[#020202]">
                    {/* Grid */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    
                    {/* Glow Effect Top Center */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/10 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* Fake Candles & Volume Profile */}
                    <div className="absolute inset-0 flex items-end justify-center px-10 pb-10 gap-1">
                         {/* This would be a complex SVG usually, simplifying for CSS */}
                         {[...Array(40)].map((_, i) => {
                             const h = Math.random() * 200 + 50;
                             const color = i % 2 === 0 ? 'bg-[#22c55e]' : 'bg-[#ef4444]'; // Green/Red
                             return (
                                 <div key={i} className="flex-1 flex flex-col justify-end gap-1 opacity-80 hover:opacity-100 transition-opacity">
                                     <div style={{ height: `${h}px` }} className={`w-full rounded-sm ${color} relative group`}>
                                         {/* Wick */}
                                         <div className="absolute -top-4 left-1/2 w-[1px] h-4 bg-zinc-600 -translate-x-1/2"></div>
                                         <div className="absolute -bottom-4 left-1/2 w-[1px] h-4 bg-zinc-600 -translate-x-1/2"></div>
                                     </div>
                                     {/* Volume */}
                                     <div style={{ height: `${Math.random() * 50}px` }} className={`w-full ${color} opacity-30`}></div>
                                 </div>
                             )
                         })}
                    </div>

                    {/* Orderflow Overlay (The "Deep" part) */}
                    <div className="absolute top-1/4 right-1/4 w-64 h-40 bg-black/60 border border-brand-500/30 backdrop-blur rounded p-4">
                        <div className="text-xs text-brand-400 font-mono mb-2 flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div> HIGH VOLUME NODE
                        </div>
                        <div className="space-y-1">
                             <div className="h-2 bg-brand-900/50 rounded w-3/4 overflow-hidden"><div className="h-full bg-brand-500 w-2/3"></div></div>
                             <div className="h-2 bg-brand-900/50 rounded w-full overflow-hidden"><div className="h-full bg-brand-500 w-1/2"></div></div>
                             <div className="h-2 bg-brand-900/50 rounded w-5/6 overflow-hidden"><div className="h-full bg-brand-500 w-3/4"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-hero-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
                Take Your Trading To The <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-zinc-500">Next Level</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                Follow the Smart Money with our X-Ray Chart and boost your edge and your profits.
            </p>

            <IconNav />

            {/* The Chart Container with Glow */}
            <div className="relative mt-8">
                <div className="absolute -inset-1 bg-gradient-to-b from-brand-600/30 to-transparent blur-2xl opacity-40 rounded-[2rem]"></div>
                <XRayChart />
                
                {/* Left/Right Navigation Arrows (Visual only) */}
                <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 cursor-pointer text-zinc-600 hover:text-white transition-colors">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </div>
                <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 cursor-pointer text-zinc-600 hover:text-white transition-colors">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
            </div>
        </div>
      </section>

      {/* PRODUCTS SPLIT */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Institutional Tool Suite" subtitle="Four core systems designed for professional execution." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product 1: GL Bundle (Main) */}
              <GlassPanel className="hover:border-brand-500/30 transition-colors group relative">
                   <div className="absolute -inset-px bg-brand-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-zinc-900 rounded border border-zinc-800 text-brand-500">
                            <Icons.Layers />
                        </div>
                        <Badge color="violet">Best Value</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{PRODUCT_BUNDLE_NAME}</h3>
                    <p className="text-zinc-400 mb-6">
                        The all-in-one toolkit. Includes <strong>GL Box</strong> (Structure), <strong>GL Vega</strong> (Velocity), and <strong>GL Navigator</strong> (Context).
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all" asLink to="/product/bundle">Unlock Bundle</Button>
                  </div>
              </GlassPanel>

               {/* Product 2: Money Flow */}
               <GlassPanel className="hover:border-brand-secondary/30 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-zinc-900 rounded border border-zinc-800 text-brand-secondary">
                          <Icons.TrendingUp />
                      </div>
                      <Badge color="zinc">Indicator</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{PRODUCT_MONEY_FLOW}</h3>
                  <p className="text-zinc-400 mb-6">
                      <strong>Stop Runs</strong> detector. See Cumulative Delta divergences and trapped traders in real-time.
                  </p>
                  <Button variant="outline" className="w-full group-hover:border-brand-secondary group-hover:text-brand-secondary transition-all" asLink to="/pricing">View Indicator</Button>
              </GlassPanel>

              {/* Product 3: Market Profile */}
              <GlassPanel className="hover:border-cyan-500/30 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-zinc-900 rounded border border-zinc-800 text-cyan-500">
                          <Icons.BarChart />
                      </div>
                      <Badge color="zinc">Analytics</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{PRODUCT_MARKET_PROFILE}</h3>
                  <p className="text-zinc-400 mb-6">
                      <strong>Replay</strong> and TPO Analysis. Understand the auction context with historical volume profiles.
                  </p>
                  <Button variant="outline" className="w-full group-hover:border-cyan-500 group-hover:text-cyan-500 transition-all" asLink to="/pricing">View Profile</Button>
              </GlassPanel>

              {/* Product 4: Auto Trading */}
              <GlassPanel className="hover:border-brand-600/30 transition-colors group relative overflow-hidden bg-gradient-to-b from-brand-900/10 to-transparent">
                  <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-zinc-900 rounded border border-zinc-800 text-white">
                          <Icons.Cpu />
                      </div>
                      <Badge color="violet">Algorithmic</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{PRODUCT_AUTO_NAME}</h3>
                  <p className="text-zinc-400 mb-6">
                      <strong>Iceberg Execution</strong>. Fully automated strategies based on orderflow imbalances. Application only.
                  </p>
                  <Button variant="glow" className="w-full" asLink to="/product/auto">Apply for Access</Button>
              </GlassPanel>
          </div>
      </section>

    </div>
  );
};