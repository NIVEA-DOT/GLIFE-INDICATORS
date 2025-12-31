import React from 'react';
import { Button, GlassPanel, Icons, Badge, SectionHeader } from '../components/Shared';
import { PRODUCT_BUNDLE_NAME, PRODUCT_MONEY_FLOW, PRODUCT_MARKET_PROFILE, PRODUCT_AUTO_NAME } from '../constants';
import { Link } from 'react-router-dom';

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-start gap-2 text-sm text-zinc-400">
        <Icons.Check className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
        <span>{text}</span>
    </div>
);

export const Pricing: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            <SectionHeader 
                title="Choose Your Edge" 
                subtitle="Flexible plans for individual traders and institutional desks." 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- PRICING CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    
                    {/* CARD 1: STANDALONE */}
                    <GlassPanel className="flex flex-col relative overflow-hidden">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-white">Standalone Tools</h3>
                            <p className="text-zinc-500 text-sm mt-1">Specific tools for specific needs.</p>
                        </div>
                        <div className="mb-6 pb-6 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-white">$49</span>
                                <span className="text-zinc-500"> - $79</span>
                            </div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide font-medium mt-2">Lifetime License</div>
                        </div>
                        <div className="flex-grow space-y-4 mb-8">
                            <p className="text-sm font-medium text-white">Choose one:</p>
                            <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800 flex justify-between items-center">
                                <span className="text-sm text-zinc-300">{PRODUCT_MONEY_FLOW}</span>
                                <Link to="/checkout?product=money_flow" className="text-xs text-brand-400 hover:text-white">Buy ($79)</Link>
                            </div>
                            <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800 flex justify-between items-center">
                                <span className="text-sm text-zinc-300">{PRODUCT_MARKET_PROFILE}</span>
                                <Link to="/checkout?product=profile" className="text-xs text-brand-400 hover:text-white">Buy ($49)</Link>
                            </div>
                            <div className="mt-4 space-y-2">
                                <FeatureItem text="Lifetime updates included" />
                                <FeatureItem text="Single machine license" />
                                <FeatureItem text="Standard email support" />
                            </div>
                        </div>
                        <Button variant="outline" asLink to="/compare">Compare Features</Button>
                    </GlassPanel>

                    {/* CARD 2: BUNDLE (HIGHLIGHT) */}
                    <div className="relative p-1 rounded-xl bg-gradient-to-b from-brand-500 to-brand-900 shadow-2xl shadow-brand-900/50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                        <GlassPanel className="h-full bg-[#050507] !border-none flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    {PRODUCT_BUNDLE_NAME} <Icons.Layers className="text-brand-500 w-5 h-5"/>
                                </h3>
                                <p className="text-brand-200/60 text-sm mt-1">The complete institutional suite.</p>
                            </div>
                            <div className="mb-6 pb-6 border-b border-zinc-800">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">$99</span>
                                    <span className="text-zinc-500">/ month</span>
                                </div>
                                <div className="text-xs text-brand-400 uppercase tracking-wide font-medium mt-2">Or $499 Lifetime</div>
                            </div>
                            <div className="flex-grow space-y-4 mb-8">
                                <FeatureItem text="Access to ALL current indicators" />
                                <FeatureItem text="GL Box + Vega + Navigator" />
                                <FeatureItem text="Bonus: Money Flow included" />
                                <FeatureItem text="2 Machine Licenses" />
                                <FeatureItem text="Priority Support (24h)" />
                                <FeatureItem text="Discord Community Access" />
                            </div>
                            <Button variant="glow" className="w-full" asLink to="/checkout?product=bundle">Subscribe Now</Button>
                            <div className="text-center mt-3">
                                <Link to="/product/bundle" className="text-xs text-zinc-500 hover:text-white">Learn more</Link>
                            </div>
                        </GlassPanel>
                    </div>

                    {/* CARD 3: AUTO */}
                    <GlassPanel className="flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Icons.Cpu className="w-24 h-24 text-white" />
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-white">{PRODUCT_AUTO_NAME}</h3>
                            <p className="text-zinc-500 text-sm mt-1">Automated execution strategies.</p>
                        </div>
                        <div className="mb-6 pb-6 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white">Custom</span>
                            </div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wide font-medium mt-2">Application Required</div>
                        </div>
                        <div className="flex-grow space-y-4 mb-8">
                             <p className="text-xs text-zinc-400 bg-zinc-900 p-2 rounded border border-zinc-800">
                                 Strictly for traders with proven capital adequacy ($50k+).
                             </p>
                            <FeatureItem text="Fully Automated Execution" />
                            <FeatureItem text="Iceberg & Absorption Logic" />
                            <FeatureItem text="1-on-1 Developer Setup" />
                            <FeatureItem text="Risk Management Module" />
                        </div>
                        <Button variant="secondary" className="w-full" asLink to="/product/auto">Apply for Access</Button>
                    </GlassPanel>

                </div>

                {/* --- TRUST & COMPARISON LINK --- */}
                <div className="mt-20 border-t border-zinc-900 pt-16">
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

                <div className="mt-16 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Still undecided?</h3>
                    <p className="text-zinc-400 mb-6">View the detailed feature matrix to find your fit.</p>
                    <Button variant="outline" asLink to="/compare">Compare All Products</Button>
                </div>

            </div>
        </div>
    );
};