import React from 'react';
import { Button, GlassPanel, Icons, Badge, SectionHeader } from '../components/Shared';
import { PRODUCT_BUNDLE_NAME, PRODUCT_MONEY_FLOW, PRODUCT_MARKET_PROFILE, PRODUCT_AUTO_NAME } from '../constants';
import { Link } from 'react-router-dom';

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-start gap-3 text-sm text-zinc-400">
        <Icons.Check className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
        <span className="text-base">{text}</span>
    </div>
);

export const Pricing: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            <SectionHeader 
                title="Choose Your Edge" 
                subtitle="Flexible plans for individual traders and institutional desks." 
            />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- PRICING CARDS (VERTICAL STACK) --- */}
                <div className="flex flex-col gap-12 mb-20">
                    
                    {/* CARD 1: BUNDLE (HIGHLIGHT) */}
                    <div className="relative p-1 rounded-xl bg-gradient-to-b from-brand-500 to-brand-900 shadow-2xl shadow-brand-900/50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                            Most Popular
                        </div>
                        <GlassPanel className="bg-[#050507] !border-none flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2 mb-2">
                                    {PRODUCT_BUNDLE_NAME} <Icons.Layers className="text-brand-500 w-6 h-6"/>
                                </h3>
                                <p className="text-brand-200/60 mb-6">The complete institutional suite.</p>
                                
                                <div className="space-y-3 mb-6 inline-block text-left">
                                    <FeatureItem text="GL Box + Vega + Navigator" />
                                    <FeatureItem text="Bonus: Money Flow included" />
                                    <FeatureItem text="Priority 24/7 Support" />
                                </div>
                            </div>

                            <div className="w-full md:w-64 flex-shrink-0 bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 text-center">
                                <div className="text-xs text-zinc-500 uppercase tracking-wide font-bold mb-2">Starting at</div>
                                <div className="flex items-baseline justify-center gap-1 mb-4">
                                    <span className="text-4xl font-bold text-white">$99</span>
                                    <span className="text-zinc-500">/ mo</span>
                                </div>
                                <Button variant="glow" className="w-full mb-3" asLink to="/checkout?product=bundle">Subscribe</Button>
                                <div className="text-xs text-zinc-500">Or $499 Lifetime</div>
                            </div>
                        </GlassPanel>
                    </div>

                    {/* CARD 2: STANDALONE */}
                    <GlassPanel className="flex flex-col md:flex-row items-center gap-8 p-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Standalone Tools</h3>
                            <p className="text-zinc-500 mb-6">Specific tools for specific needs.</p>
                            
                            <div className="space-y-3 inline-block text-left">
                                <div className="p-4 bg-zinc-900/50 rounded border border-zinc-800 flex justify-between items-center w-full md:w-80 gap-4">
                                    <span className="text-white font-medium">{PRODUCT_MONEY_FLOW}</span>
                                    <Link to="/checkout?product=money_flow" className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded transition-colors border border-zinc-700">Buy $79</Link>
                                </div>
                                <div className="p-4 bg-zinc-900/50 rounded border border-zinc-800 flex justify-between items-center w-full md:w-80 gap-4">
                                    <span className="text-white font-medium">{PRODUCT_MARKET_PROFILE}</span>
                                    <Link to="/checkout?product=profile" className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded transition-colors border border-zinc-700">Buy $49</Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-64 flex-shrink-0 text-center md:text-right space-y-2">
                             <FeatureItem text="Lifetime License" />
                             <FeatureItem text="Single Machine" />
                             <FeatureItem text="Free Updates" />
                             <div className="pt-4">
                                <Button variant="outline" className="w-full" asLink to="/compare">Compare Features</Button>
                             </div>
                        </div>
                    </GlassPanel>

                    {/* CARD 3: AUTO */}
                    <GlassPanel className="flex flex-col md:flex-row items-center gap-8 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Icons.Cpu className="w-40 h-40 text-white" />
                        </div>
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                <h3 className="text-xl font-bold text-white">{PRODUCT_AUTO_NAME}</h3>
                                <Badge color="violet">Application Only</Badge>
                            </div>
                            <p className="text-zinc-500 mb-6">Automated execution strategies for capitalized traders.</p>
                            
                            <div className="space-y-2 inline-block text-left">
                                <FeatureItem text="Iceberg & Absorption Logic" />
                                <FeatureItem text="Fully Automated Execution" />
                                <FeatureItem text="Risk Management Module" />
                            </div>
                        </div>

                        <div className="w-full md:w-64 flex-shrink-0 relative z-10">
                             <div className="bg-zinc-900 rounded p-4 border border-zinc-800 mb-4 text-center">
                                 <div className="text-xs text-zinc-400">Capital Requirement</div>
                                 <div className="font-bold text-white">$50,000+</div>
                             </div>
                             <Button variant="secondary" className="w-full" asLink to="/product/auto">Apply for Access</Button>
                        </div>
                    </GlassPanel>

                </div>

                {/* --- TRUST & COMPARISON LINK --- */}
                <div className="border-t border-zinc-900 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
                                <Icons.Zap />
                            </div>
                            <h4 className="text-white font-bold mb-2">Instant Delivery</h4>
                            <p className="text-sm text-zinc-500">License keys are emailed immediately after purchase.</p>
                        </div>
                        <div>
                            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
                                <Icons.Check />
                            </div>
                            <h4 className="text-white font-bold mb-2">14-Day Guarantee</h4>
                            <p className="text-sm text-zinc-500">Full refund if the software doesn't work on your machine.</p>
                        </div>
                        <div>
                            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
                                <Icons.Lock />
                            </div>
                            <h4 className="text-white font-bold mb-2">Secure Payment</h4>
                            <p className="text-sm text-zinc-500">Processed securely by LemonSqueezy (Merchant of Record).</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};