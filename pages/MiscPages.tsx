import React from 'react';
import { Button, GlassPanel, Icons, SectionHeader } from '../components/Shared';
import { SUPPORT_EMAIL, AFFILIATE_SIGNUP_URL, BRAND_NAME } from '../constants';
import { Link } from 'react-router-dom';

// --- SUPPORT PAGE ---
export const Support: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <SectionHeader title="Help Desk" subtitle="We are here to ensure your system is operational." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <GlassPanel className="text-center hover:border-zinc-700 transition-colors cursor-pointer">
              <Icons.Layers className="mx-auto text-brand-500 mb-4 w-8 h-8"/>
              <h3 className="text-white font-bold">Documentation</h3>
              <p className="text-sm text-zinc-500 mt-2">Read the installation guides.</p>
          </GlassPanel>
          <GlassPanel className="text-center hover:border-zinc-700 transition-colors cursor-pointer">
              <Icons.Activity className="mx-auto text-brand-500 mb-4 w-8 h-8"/>
              <h3 className="text-white font-bold">License Manager</h3>
              <p className="text-sm text-zinc-500 mt-2">Reset machine ID or check status.</p>
          </GlassPanel>
      </div>

      <GlassPanel>
        <h3 className="text-lg font-bold text-white mb-6">Contact Support</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wide block mb-2">Name</label>
              <input type="text" className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-brand-500 outline-none" />
            </div>
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wide block mb-2">Email</label>
              <input type="email" className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-brand-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="text-xs text-zinc-500 uppercase tracking-wide block mb-2">License Key (Optional)</label>
            <input type="text" className="w-full bg-black border border-zinc-800 rounded p-3 text-white font-mono focus:border-brand-500 outline-none" />
          </div>
          <div>
            <label className="text-xs text-zinc-500 uppercase tracking-wide block mb-2">Message</label>
            <textarea className="w-full bg-black border border-zinc-800 rounded p-3 text-white h-32 focus:border-brand-500 outline-none"></textarea>
          </div>
          <Button type="button" className="w-full">Submit Ticket</Button>
          <p className="text-center text-xs text-zinc-600">Response time: usually &lt; 12 hours.</p>
        </form>
      </GlassPanel>
    </div>
  );
};

// --- AFFILIATE PAGE ---
export const Affiliate: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="pt-20 pb-20 bg-zinc-900/20 border-b border-zinc-900 text-center">
         <h1 className="text-4xl font-bold text-white mb-4">Partner Program</h1>
         <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
             Monetize your audience with the industry's most advanced orderflow tools.
         </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                  <div className="text-4xl font-bold text-white font-mono mb-2">30%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Commission (Bundle)</div>
              </div>
              <div className="text-center">
                  <div className="text-4xl font-bold text-white font-mono mb-2">10%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Commission (Auto)</div>
              </div>
              <div className="text-center">
                  <div className="text-4xl font-bold text-white font-mono mb-2">60d</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Cookie Duration</div>
              </div>
          </div>

          <GlassPanel className="mb-12">
              <h3 className="text-lg font-bold text-white mb-6">Program Rules</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                  <li className="flex gap-3"><Icons.Check className="text-brand-500"/> Payouts are processed monthly via LemonSqueezy (PayPal/Bank).</li>
                  <li className="flex gap-3"><Icons.Check className="text-brand-500"/> Self-referrals are strictly prohibited and will result in a ban.</li>
                  <li className="flex gap-3"><Icons.Check className="text-brand-500"/> Promoting the "Auto" system requires prior approval and a compliance check.</li>
              </ul>
          </GlassPanel>

          <div className="text-center">
             <Button size="lg" variant="accent" asLink to={AFFILIATE_SIGNUP_URL} external>Become a Partner</Button>
          </div>
      </div>
    </div>
  );
};

// --- SUCCESS PAGE ---
export const Success: React.FC = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                <div className="w-20 h-20 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <Icons.Check className="text-emerald-500 w-10 h-10" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">License Issued</h1>
                <p className="text-zinc-400 text-lg mb-8">
                    Your order has been processed. The license key has been sent to your email.
                </p>
                
                <div className="bg-zinc-900 border border-zinc-800 p-6 mb-8">
                    <p className="text-sm text-zinc-500 mb-4">Quick Actions:</p>
                    <div className="grid grid-cols-2 gap-4">
                         <Button asLink to="/license">Activate Now</Button>
                         <Button variant="outline" asLink to="/docs">Install Guide</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// --- LEGAL STUBS ---
export const Terms: React.FC = () => <div className="py-20 text-center text-zinc-500">Terms of Service Content</div>;
export const Privacy: React.FC = () => <div className="py-20 text-center text-zinc-500">Privacy Policy Content</div>;
export const Refund: React.FC = () => <div className="py-20 text-center text-zinc-500">Refund Policy Content</div>;