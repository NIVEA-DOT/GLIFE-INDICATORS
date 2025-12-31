import React from 'react';
import { Button, GlassPanel, Icons, SectionHeader } from '../components/Shared';
import { PRODUCT_BUNDLE_NAME, PRODUCT_MONEY_FLOW, PRODUCT_MARKET_PROFILE, PRODUCT_AUTO_NAME } from '../constants';

export const Compare: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            <SectionHeader title="Compare Systems" subtitle="Find the right tool for your trading style." />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- GUIDED PATHS --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                    <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 text-center hover:border-brand-500/50 transition-colors">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Best for Beginners</div>
                        <h4 className="text-white font-bold mb-2">{PRODUCT_BUNDLE_NAME}</h4>
                        <p className="text-xs text-zinc-400 mb-4">Complete visualization suite.</p>
                        <Button size="sm" variant="outline" className="w-full" asLink to="/product/bundle">View</Button>
                    </div>
                    <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 text-center hover:border-brand-500/50 transition-colors">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Best for Scalpers</div>
                        <h4 className="text-white font-bold mb-2">{PRODUCT_MONEY_FLOW}</h4>
                        <p className="text-xs text-zinc-400 mb-4">Delta divergence signals.</p>
                        <Button size="sm" variant="outline" className="w-full" asLink to="/product/money-flow">View</Button>
                    </div>
                    <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 text-center hover:border-brand-500/50 transition-colors">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Best for Analysts</div>
                        <h4 className="text-white font-bold mb-2">{PRODUCT_MARKET_PROFILE}</h4>
                        <p className="text-xs text-zinc-400 mb-4">TPO & Volume Profile.</p>
                        <Button size="sm" variant="outline" className="w-full" asLink to="/product/market-profile">View</Button>
                    </div>
                    <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 text-center hover:border-brand-500/50 transition-colors">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Institutional</div>
                        <h4 className="text-white font-bold mb-2">{PRODUCT_AUTO_NAME}</h4>
                        <p className="text-xs text-zinc-400 mb-4">Automated Execution.</p>
                        <Button size="sm" variant="outline" className="w-full" asLink to="/product/auto">View</Button>
                    </div>
                </div>

                {/* --- COMPARISON TABLE --- */}
                <div className="overflow-x-auto">
                    <GlassPanel className="min-w-[800px] p-0 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                                    <th className="p-6 text-sm font-bold text-zinc-400 w-1/4">Features</th>
                                    <th className="p-6 text-sm font-bold text-white text-center w-1/5">{PRODUCT_BUNDLE_NAME}</th>
                                    <th className="p-6 text-sm font-bold text-white text-center w-1/5">{PRODUCT_MONEY_FLOW}</th>
                                    <th className="p-6 text-sm font-bold text-white text-center w-1/5">{PRODUCT_MARKET_PROFILE}</th>
                                    <th className="p-6 text-sm font-bold text-brand-400 text-center w-1/5">{PRODUCT_AUTO_NAME}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {/* Core Features */}
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">GL Box (Structure)</td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-emerald-500 mx-auto"/></td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">GL Vega (Momentum)</td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-emerald-500 mx-auto"/></td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">GL Navigator (Context)</td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-emerald-500 mx-auto"/></td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">Money Flow (Divergence)</td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-emerald-500 mx-auto"/></td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-emerald-500 mx-auto"/></td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">TPO / Market Profile</td>
                                    <td className="p-6 text-center text-zinc-600">Optional Add-on</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-emerald-500 mx-auto"/></td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                </tr>
                                
                                {/* Advanced */}
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">Automated Execution</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center text-zinc-600">-</td>
                                    <td className="p-6 text-center"><Icons.Check className="w-5 h-5 text-brand-500 mx-auto"/></td>
                                </tr>

                                {/* License Terms */}
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">License Type</td>
                                    <td className="p-6 text-center text-xs text-zinc-400">Subscription / Lifetime</td>
                                    <td className="p-6 text-center text-xs text-zinc-400">Lifetime</td>
                                    <td className="p-6 text-center text-xs text-zinc-400">Lifetime</td>
                                    <td className="p-6 text-center text-xs text-zinc-400">Annual Lease</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-white bg-zinc-900/20">Machine Activations</td>
                                    <td className="p-6 text-center text-sm text-white">2 Machines</td>
                                    <td className="p-6 text-center text-sm text-white">1 Machine</td>
                                    <td className="p-6 text-center text-sm text-white">1 Machine</td>
                                    <td className="p-6 text-center text-sm text-white">1 Machine</td>
                                </tr>

                                {/* Footer CTA */}
                                <tr className="bg-zinc-900/20">
                                    <td className="p-6"></td>
                                    <td className="p-6 text-center"><Button size="sm" variant="glow" asLink to="/checkout?product=bundle">Buy Bundle</Button></td>
                                    <td className="p-6 text-center"><Button size="sm" variant="secondary" asLink to="/checkout?product=money_flow">Buy</Button></td>
                                    <td className="p-6 text-center"><Button size="sm" variant="secondary" asLink to="/checkout?product=profile">Buy</Button></td>
                                    <td className="p-6 text-center"><Button size="sm" variant="outline" asLink to="/product/auto">Apply</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </GlassPanel>
                </div>
            </div>
        </div>
    );
};