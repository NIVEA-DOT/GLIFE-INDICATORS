import React, { useState } from 'react';
import { Button, GlassPanel, SectionHeader, Icons } from '../components/Shared';

const ApplicationForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
            return;
        }
        
        setIsSubmitting(true);
        // Simulate API
        await new Promise(r => setTimeout(r, 2000));
        setIsSubmitting(false);
        setIsComplete(true);
    };

    if (isComplete) {
        return (
            <GlassPanel className="text-center py-16 border-emerald-500/20 bg-emerald-900/5">
                <div className="w-16 h-16 bg-emerald-900/50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <Icons.Check className="w-8 h-8"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                <p className="text-zinc-400 max-w-md mx-auto">
                    Your application ID is <span className="font-mono text-white">GL-9942</span>. 
                    Our risk team will review your profile within 48 hours. If approved, you will receive a secure payment link via email.
                </p>
            </GlassPanel>
        );
    }

    return (
        <GlassPanel>
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
                <h3 className="text-xl font-bold text-white">Access Application</h3>
                <span className="text-xs text-zinc-500 font-mono">STEP {step} / 3</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Full Name</label>
                            <input type="text" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-brand-500 outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Email Address</label>
                            <input type="email" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-brand-500 outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Trading Experience (Years)</label>
                            <select className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-brand-500 outline-none">
                                <option>Less than 1 year</option>
                                <option>1-3 years</option>
                                <option>3-5 years</option>
                                <option>5+ years (Professional)</option>
                            </select>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Broker / Data Feed</label>
                            <input type="text" placeholder="e.g. NinjaTrader / Rithmic" className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-brand-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Intended Capital ($)</label>
                            <input type="text" placeholder="50,000" className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-brand-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1">Primary Instrument</label>
                            <input type="text" placeholder="e.g. ES, NQ, CL" className="w-full bg-black border border-zinc-800 p-3 text-white focus:border-brand-500 outline-none" />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="bg-red-900/10 border border-red-900/30 p-4 rounded">
                            <h4 className="text-red-400 text-sm font-bold mb-2 flex items-center gap-2"><Icons.AlertTriangle className="w-4 h-4"/> Risk Disclosure</h4>
                            <p className="text-xs text-red-200/70">
                                Algorithmic trading involves significant risk of loss. Past performance is not indicative of future results. By submitting this application, you acknowledge that you are sophisticated enough to understand these risks.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" required className="mt-1" />
                            <span className="text-sm text-zinc-400">I confirm that the information provided is accurate and I accept the risk disclosure.</span>
                        </div>
                    </div>
                )}

                <div className="pt-4">
                    <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : step === 3 ? 'Submit Application' : 'Next Step'}
                    </Button>
                </div>
            </form>
        </GlassPanel>
    )
}

export const AutoTrading: React.FC = () => {
    return (
        <div className="pb-20">
            <div className="pt-32 pb-20 border-b border-zinc-900 bg-zinc-900/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-zinc-400 font-mono">LIMITED AVAILABILITY</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">GL Footprint Auto</h1>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Automated execution logic based on 12 years of orderflow data. 
                        We restrict access to protect the edge.
                    </p>
                    
                    <div className="bg-zinc-950 border border-zinc-800 inline-block px-6 py-3 rounded-lg">
                        <span className="text-zinc-500 text-sm uppercase tracking-wider mr-3">Licensing Fee</span>
                        <span className="text-2xl font-bold text-white font-mono">Custom Quote</span>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">How it works</h2>
                    <div className="space-y-8 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-4 bottom-4 w-px bg-zinc-800"></div>
                        
                        <div className="relative pl-12">
                            <div className="absolute left-2 w-4 h-4 bg-zinc-900 border border-zinc-700 rounded-full -translate-x-1/2 mt-1"></div>
                            <h4 className="text-white font-bold mb-1">1. Application</h4>
                            <p className="text-zinc-500 text-sm">Submit your trader profile and risk acknowledgement. We filter for serious participants only.</p>
                        </div>
                        <div className="relative pl-12">
                            <div className="absolute left-2 w-4 h-4 bg-zinc-900 border border-zinc-700 rounded-full -translate-x-1/2 mt-1"></div>
                            <h4 className="text-white font-bold mb-1">2. Verification</h4>
                            <p className="text-zinc-500 text-sm">Our team reviews your capital adequacy and broker compatibility (usually 24-48h).</p>
                        </div>
                        <div className="relative pl-12">
                            <div className="absolute left-2 w-4 h-4 bg-zinc-900 border border-zinc-700 rounded-full -translate-x-1/2 mt-1"></div>
                            <h4 className="text-white font-bold mb-1">3. Onboarding</h4>
                            <p className="text-zinc-500 text-sm">Receive your private license key and schedule a 1-on-1 setup call with a developer.</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-zinc-900/30 border border-zinc-800 p-6">
                        <h4 className="text-white font-bold mb-2">Performance Metrics (Audited)</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex justify-between border-b border-zinc-800 pb-2">
                                <span className="text-zinc-500">Win Rate</span>
                                <span className="text-white font-mono">68.4%</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 pb-2">
                                <span className="text-zinc-500">Profit Factor</span>
                                <span className="text-white font-mono">2.15</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-800 pb-2">
                                <span className="text-zinc-500">Max DD</span>
                                <span className="text-white font-mono">-12.5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ApplicationForm />
                </div>
            </div>
        </div>
    );
};