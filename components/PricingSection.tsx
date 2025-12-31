import React, { useState } from 'react';
import { Button, GlassPanel, Icons, Badge } from './Shared';

interface PricingOption {
    period: 'monthly' | 'quarterly' | 'yearly' | 'lifetime';
    price: number;
    saveLabel?: string;
    checkoutUrl: string;
}

interface PricingSectionProps {
    title?: string;
    options: PricingOption[];
    features: string[];
    lifetimeOption?: {
        price: number;
        url: string;
    };
}

export const PricingSection: React.FC<PricingSectionProps> = ({ title = "Select Plan", options, features, lifetimeOption }) => {
    // Default to first option
    const [selectedPeriod, setSelectedPeriod] = useState<string>(options[0].period);

    const activeOption = options.find(o => o.period === selectedPeriod) || options[0];

    return (
        <div id="pricing" className="py-20 bg-zinc-900/10 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                    <p className="text-zinc-400">Choose the license that fits your trading business.</p>
                </div>

                {/* Toggle / Tabs - Only show if more than 1 option */}
                {options.length > 1 && (
                    <div className="flex justify-center mb-12">
                        <div className="bg-zinc-950 p-1 rounded-lg border border-zinc-800 inline-flex relative">
                            {options.map((opt) => (
                                <button
                                    key={opt.period}
                                    onClick={() => setSelectedPeriod(opt.period)}
                                    className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 z-10 ${
                                        selectedPeriod === opt.period 
                                        ? 'text-white' 
                                        : 'text-zinc-500 hover:text-zinc-300'
                                    }`}
                                >
                                    <span className="capitalize">{opt.period}</span>
                                    {opt.saveLabel && (
                                        <span className="absolute -top-3 -right-2 text-[9px] bg-brand-500 text-white px-1.5 py-0.5 rounded-full border border-zinc-900">
                                            {opt.saveLabel}
                                        </span>
                                    )}
                                </button>
                            ))}
                            
                            {/* Animated Background Slider */}
                            <div 
                                className="absolute top-1 bottom-1 bg-zinc-800 rounded shadow-sm transition-all duration-300 ease-out"
                                style={{
                                    left: `${options.findIndex(o => o.period === selectedPeriod) * (100 / options.length)}%`,
                                    width: `${100 / options.length}%`
                                }}
                            ></div>
                        </div>
                    </div>
                )}

                {/* Main Pricing Card */}
                <div className="relative">
                     <div className="absolute -inset-1 bg-gradient-to-b from-brand-500/20 to-transparent blur-xl opacity-50 rounded-2xl"></div>
                     <GlassPanel className="relative border-brand-500/30">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            
                            {/* Price Display */}
                            <div className="text-center md:text-left">
                                <div className="text-sm text-zinc-500 mb-1 uppercase tracking-wider">Total</div>
                                <div className="flex items-baseline justify-center md:justify-start gap-1 transition-all duration-300 transform key={selectedPeriod}">
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight animate-fadeIn">
                                        ${activeOption.price}
                                    </span>
                                    <span className="text-xl text-zinc-500">
                                        {activeOption.period === 'lifetime' ? '/ life' : 
                                         activeOption.period === 'monthly' ? '/ mo' : 
                                         activeOption.period === 'quarterly' ? '/ qtr' : '/ yr'}
                                    </span>
                                </div>
                                <p className="text-xs text-brand-400 mt-2">
                                    {activeOption.period === 'lifetime' ? 'One-time payment. Own it forever.' :
                                     activeOption.period === 'yearly' ? 'Billed annually. Best value.' : 
                                     activeOption.period === 'quarterly' ? 'Billed every 3 months.' : 'Flexible monthly billing.'}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="flex-grow border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                                            <div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
                                                <Icons.Check className="w-3 h-3 text-brand-500" />
                                            </div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
                                <Button size="lg" variant="glow" className="w-full" asLink to={activeOption.checkoutUrl} external>
                                    {activeOption.period === 'lifetime' ? 'Buy Now' : 'Subscribe Now'}
                                </Button>
                                {lifetimeOption && (
                                    <a href={lifetimeOption.url} target="_blank" rel="noreferrer" className="text-xs text-center text-zinc-500 hover:text-white transition-colors">
                                        Or buy Lifetime for ${lifetimeOption.price}
                                    </a>
                                )}
                            </div>
                        </div>
                     </GlassPanel>
                </div>

                <div className="mt-8 text-center flex items-center justify-center gap-6 text-zinc-500 text-sm">
                    <span className="flex items-center gap-2"><Icons.Lock className="w-4 h-4"/> Secure Payment</span>
                    <span className="flex items-center gap-2"><Icons.Zap className="w-4 h-4"/> Instant Delivery</span>
                    <span className="flex items-center gap-2"><Icons.Check className="w-4 h-4"/> 14-Day Guarantee</span>
                </div>
            </div>
        </div>
    );
};