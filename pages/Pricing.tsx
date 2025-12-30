import React from 'react';
import { Button, GlassPanel, Icons, Badge, SectionHeader } from '../components/Shared';
import { 
    PRODUCT_BUNDLE_NAME, 
    PRODUCT_AUTO_NAME, 
    PRODUCT_MONEY_FLOW, 
    PRODUCT_MARKET_PROFILE,
    CHECKOUT_URL_BUNDLE_MONTHLY, 
    CHECKOUT_URL_BUNDLE_LIFETIME,
    CHECKOUT_URL_MONEY_FLOW,
    CHECKOUT_URL_PROFILE
} from '../constants';

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader 
        title="Choose Your Edge" 
        subtitle="Transparent pricing for professional tools."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        
        {/* 1. Market Profile */}
        <GlassPanel className="border-zinc-800">
            <h3 className="text-lg font-bold text-white">{PRODUCT_MARKET_PROFILE}</h3>
            <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-white">$49</span>
                <span className="text-zinc-500 text-sm ml-1">/ life</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6 h-10">Essential TPO and Volume Profile tools for context analysis.</p>
            <ul className="space-y-2 mb-6 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-zinc-500"/> TPO Charts</li>
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-zinc-500"/> Session Splits</li>
            </ul>
            <Button variant="outline" className="w-full text-sm" asLink to={CHECKOUT_URL_PROFILE} external>Buy Now</Button>
        </GlassPanel>

        {/* 2. Money Flow */}
        <GlassPanel className="border-zinc-800">
            <h3 className="text-lg font-bold text-white">{PRODUCT_MONEY_FLOW}</h3>
            <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-white">$79</span>
                <span className="text-zinc-500 text-sm ml-1">/ life</span>
            </div>
             <p className="text-xs text-zinc-400 mb-6 h-10">Advanced Delta Divergence and Trapped Trader detection.</p>
             <ul className="space-y-2 mb-6 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-zinc-500"/> Divergence Alerts</li>
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-zinc-500"/> Exhaustion Signals</li>
            </ul>
            <Button variant="outline" className="w-full text-sm" asLink to={CHECKOUT_URL_MONEY_FLOW} external>Buy Now</Button>
        </GlassPanel>

        {/* 3. GL Bundle (Featured) */}
        <GlassPanel className="border-brand-500/50 bg-brand-900/10 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge color="violet">Best Value</Badge>
            </div>
            <h3 className="text-lg font-bold text-white">{PRODUCT_BUNDLE_NAME}</h3>
            <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-white">$99</span>
                <span className="text-zinc-500 text-sm ml-1">/ mo</span>
            </div>
            <p className="text-xs text-zinc-300 mb-6 h-10">Includes GL Box, GL Vega, and GL Navigator. The complete system.</p>
            <ul className="space-y-2 mb-6 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-brand-500"/> <strong>2 Machine</strong> License</li>
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-brand-500"/> Includes Market Profile</li>
                <li className="flex gap-2"><Icons.Check className="w-4 h-4 text-brand-500"/> Includes Money Flow</li>
            </ul>
            <Button variant="glow" className="w-full text-sm" asLink to={CHECKOUT_URL_BUNDLE_MONTHLY} external>Subscribe</Button>
            <div className="text-center mt-3">
                <a href={CHECKOUT_URL_BUNDLE_LIFETIME} className="text-xs text-zinc-500 hover:text-white underline">Or $499 Lifetime</a>
            </div>
        </GlassPanel>

        {/* 4. Auto Trading */}
        <GlassPanel className="border-zinc-800">
            <h3 className="text-lg font-bold text-white">{PRODUCT_AUTO_NAME}</h3>
            <div className="mt-4 mb-6">
                <span className="text-2xl font-bold text-white">Quote</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6 h-10">Institutional algorithmic execution strategies.</p>
            <ul className="space-y-2 mb-6 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                <li className="flex gap-2"><Icons.Lock className="w-4 h-4 text-zinc-600"/> Application Required</li>
                <li className="flex gap-2"><Icons.Lock className="w-4 h-4 text-zinc-600"/> Capital Verification</li>
            </ul>
            <Button variant="secondary" className="w-full text-sm" asLink to="/product/auto">Apply Now</Button>
        </GlassPanel>

      </div>
    </div>
  );
};