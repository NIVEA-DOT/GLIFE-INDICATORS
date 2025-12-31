import React from 'react';
import { Button, GlassPanel, Icons, SectionHeader } from '../components/Shared';
import { PRODUCT_BUNDLE_NAME, PRODUCT_MONEY_FLOW, PRODUCT_MARKET_PROFILE, PRODUCT_AUTO_NAME } from '../constants';

export const Compare: React.FC = () => {
    return (
        <div className="pt-32 pb-20">
            <SectionHeader title="Compare Systems" subtitle="Find the right tool for your trading style." />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- GUIDED PATHS (VERTICAL STACK) --- */}
                <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-20">
                    <div className="p-6 rounded-lg bg-zinc-900/30 border border-zinc-800 flex items-center justify-between hover:border-brand-500/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <Icons.Layers className="w-5 h-5"/>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{PRODUCT_BUNDLE_NAME}</h4>
                                <p className="text-xs text-zinc-400">Best for Beginners & Pros. Complete visualization.</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" asLink to="/indicators/bundle">View</Button>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/30 border border-zinc-800 flex items-center justify-between hover:border-brand-500/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                <Icons.TrendingUp className="w-5 h-5"/>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{PRODUCT_MONEY_FLOW}</h4>
                                <p className="text-xs text-zinc-400">Best for Scalpers. Delta divergence signals.</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" asLink to="/indicators/money-flow">View</Button>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/30 border border-zinc-800 flex items-center justify-between hover:border-brand-500/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <Icons.BarChart className="w-5 h-5"/>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{PRODUCT_MARKET_PROFILE}</h4>
                                <p className="text-xs text-zinc-400">Best for Analysts. TPO & Volume Profile.</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" asLink to="/indicators/profile">View</Button>
                    </div>

                    <div className="p-6 rounded-lg bg-zinc-900/30 border border-zinc-800 flex items-center justify-between hover:border-brand-500/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                                <Icons.Cpu className="w-5 h-5"/>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{PRODUCT_AUTO_NAME}</h4>
                                <p className="text-xs text-zinc-400">Institutional. Automated Execution.</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" asLink to="/indicators/auto">View</Button>
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
                                    <td className="p-6 text-center"><Button size="sm" variant="outline" asLink to="/indicators/auto">Apply</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </GlassPanel>
                </div>
            </div>
        </div>
    );
};