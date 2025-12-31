import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, GlassPanel, Icons, Badge, SectionHeader } from '../components/Shared';
import { 
    PRODUCT_BUNDLE_NAME, 
    PRODUCT_MONEY_FLOW, 
    PRODUCT_MARKET_PROFILE,
    CHECKOUT_URL_BUNDLE_MONTHLY, 
    CHECKOUT_URL_BUNDLE_QUARTERLY,
    CHECKOUT_URL_BUNDLE_YEARLY,
    CHECKOUT_URL_BUNDLE_LIFETIME,
    CHECKOUT_URL_MONEY_FLOW,
    CHECKOUT_URL_PROFILE
} from '../constants';

// --- TYPES ---
type BillingCycle = 'monthly' | 'quarterly' | 'yearly' | 'lifetime';
type ProductId = 'bundle' | 'money_flow' | 'profile';

interface ProductData {
    id: ProductId;
    name: string;
    description: string;
    features: string[];
    allowedCycles: BillingCycle[];
    prices: Partial<Record<BillingCycle, number>>;
    urls: Partial<Record<BillingCycle, string>>;
    badge?: string;
}

// --- DATA CONFIG ---
const PRODUCTS: Record<ProductId, ProductData> = {
    bundle: {
        id: 'bundle',
        name: PRODUCT_BUNDLE_NAME,
        description: "Complete access to GL Box, Vega, Navigator, and Money Flow.",
        features: ["GL Box (Structure)", "GL Vega (Momentum)", "GL Navigator (Profile)", "Money Flow (Delta)", "2 Machine License"],
        allowedCycles: ['monthly', 'quarterly', 'yearly', 'lifetime'],
        prices: {
            monthly: 99,
            quarterly: 269,
            yearly: 831,
            lifetime: 499
        },
        urls: {
            monthly: CHECKOUT_URL_BUNDLE_MONTHLY,
            quarterly: CHECKOUT_URL_BUNDLE_QUARTERLY,
            yearly: CHECKOUT_URL_BUNDLE_YEARLY,
            lifetime: CHECKOUT_URL_BUNDLE_LIFETIME
        },
        badge: "Best Value"
    },
    money_flow: {
        id: 'money_flow',
        name: PRODUCT_MONEY_FLOW,
        description: "Standalone Delta Divergence indicator.",
        features: ["Divergence Detection", "Trapped Trader Signals", "Lifetime License"],
        allowedCycles: ['lifetime'],
        prices: { lifetime: 79 },
        urls: { lifetime: CHECKOUT_URL_MONEY_FLOW }
    },
    profile: {
        id: 'profile',
        name: PRODUCT_MARKET_PROFILE,
        description: "TPO and Volume Profile tools.",
        features: ["TPO Charts", "Session Split/Merge", "Lifetime License"],
        allowedCycles: ['lifetime'],
        prices: { lifetime: 49 },
        urls: { lifetime: CHECKOUT_URL_PROFILE }
    }
};

export const Checkout: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [selectedProduct, setSelectedProduct] = useState<ProductId>('bundle');
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

    // Handle URL param pre-selection
    useEffect(() => {
        const productParam = searchParams.get('product');
        if (productParam && PRODUCTS[productParam as ProductId]) {
            setSelectedProduct(productParam as ProductId);
        }
    }, [searchParams]);

    const currentProduct = PRODUCTS[selectedProduct];

    // Effect: If switching to a product that doesn't support the current cycle, switch cycle to default
    useEffect(() => {
        if (!currentProduct.allowedCycles.includes(billingCycle)) {
            if (currentProduct.allowedCycles.includes('monthly')) {
                setBillingCycle('monthly');
            } else {
                setBillingCycle('lifetime');
            }
        }
    }, [selectedProduct, billingCycle, currentProduct]);

    // Helpers
    const getPrice = () => currentProduct.prices[billingCycle] || 0;
    const getUrl = () => currentProduct.urls[billingCycle] || '#';
    
    // Calculate savings
    const getSavings = (cycle: BillingCycle) => {
        if (selectedProduct !== 'bundle') return null;
        const monthly = PRODUCTS.bundle.prices.monthly || 0;
        
        if (cycle === 'quarterly') {
            const price = PRODUCTS.bundle.prices.quarterly || 0;
            const savings = Math.round((1 - (price / (monthly * 3))) * 100);
            return `${savings}% OFF`;
        }
        if (cycle === 'yearly') {
            const price = PRODUCTS.bundle.prices.yearly || 0;
            const savings = Math.round((1 - (price / (monthly * 12))) * 100);
            return `${savings}% OFF`;
        }
        return null;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="mb-12">
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                    <span>Pricing</span>
                    <Icons.ChevronRight className="w-3 h-3" />
                    <span className="text-white">Checkout</span>
                </div>
                <h1 className="text-3xl font-bold text-white">Secure Checkout</h1>
                <p className="text-zinc-400">Finalize your license configuration.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* --- LEFT COLUMN: SELECTIONS --- */}
                <div className="flex-grow space-y-10">
                    
                    {/* 1. SELECT PRODUCT */}
                    <section>
                        <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-zinc-800 text-white flex items-center justify-center text-xs">1</span>
                            Select System
                        </h3>
                        
                        <div className="space-y-4">
                            {Object.values(PRODUCTS).map((product) => (
                                <div 
                                    key={product.id}
                                    onClick={() => setSelectedProduct(product.id)}
                                    className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-200 group ${
                                        selectedProduct === product.id 
                                        ? 'bg-brand-900/10 border-brand-500 shadow-[0_0_20px_rgba(99,102,241,0.15)]' 
                                        : 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                                    }`}
                                >
                                    {/* Selection Indicator */}
                                    <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                                        selectedProduct === product.id ? 'bg-brand-500 border-brand-500' : 'border-zinc-600'
                                    }`}>
                                        {selectedProduct === product.id && <Icons.Check className="w-4 h-4 text-white" />}
                                    </div>

                                    <div className="pr-12">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className={`text-lg font-bold ${selectedProduct === product.id ? 'text-white' : 'text-zinc-300'}`}>
                                                {product.name}
                                            </h4>
                                            {product.badge && <Badge color="violet">{product.badge}</Badge>}
                                        </div>
                                        <p className="text-sm text-zinc-500 mb-4">{product.description}</p>
                                        
                                        <div className={`flex flex-wrap gap-x-4 gap-y-2 text-xs transition-opacity ${selectedProduct === product.id ? 'opacity-100' : 'opacity-50'}`}>
                                            {product.features.slice(0, 3).map((f, i) => (
                                                <span key={i} className="flex items-center gap-1 text-zinc-400">
                                                    <Icons.Check className="w-3 h-3 text-brand-500" /> {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. SELECT CYCLE */}
                    <section className={currentProduct.allowedCycles.length === 1 ? 'opacity-50 pointer-events-none grayscale' : ''}>
                        <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                             <span className="w-6 h-6 rounded-full bg-zinc-800 text-white flex items-center justify-center text-xs">2</span>
                             Billing Cycle
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['monthly', 'quarterly', 'yearly', 'lifetime'].map((cycle) => {
                                const isAllowed = currentProduct.allowedCycles.includes(cycle as BillingCycle);
                                const isSelected = billingCycle === cycle;
                                const savings = getSavings(cycle as BillingCycle);

                                return (
                                    <button
                                        key={cycle}
                                        disabled={!isAllowed}
                                        onClick={() => setBillingCycle(cycle as BillingCycle)}
                                        className={`relative p-4 rounded-lg border text-left transition-all ${
                                            !isAllowed 
                                            ? 'opacity-30 border-zinc-800 cursor-not-allowed bg-transparent'
                                            : isSelected
                                                ? 'bg-brand-900/10 border-brand-500 text-white'
                                                : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-600'
                                        }`}
                                    >
                                        <div className="font-bold capitalize mb-1 flex justify-between w-full">
                                            {cycle}
                                            {isSelected && <Icons.Check className="w-4 h-4 text-brand-500"/>}
                                        </div>
                                        {isAllowed && currentProduct.prices[cycle as BillingCycle] && (
                                            <div className="text-sm">
                                                ${currentProduct.prices[cycle as BillingCycle]}
                                                {cycle === 'monthly' && '/mo'}
                                                {cycle === 'quarterly' && '/qtr'}
                                                {cycle === 'yearly' && '/yr'}
                                            </div>
                                        )}
                                        {savings && (
                                            <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-brand-500 text-white text-[10px] font-bold rounded">
                                                SAVE {savings}
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                        {currentProduct.allowedCycles.length === 1 && (
                            <p className="text-xs text-zinc-500 mt-2 italic">* This product is only available as a one-time purchase.</p>
                        )}
                    </section>
                </div>

                {/* --- RIGHT COLUMN: ORDER SUMMARY --- */}
                <div className="lg:w-96 flex-shrink-0">
                    <div className="sticky top-32">
                        <GlassPanel className="border-brand-500/20 shadow-2xl shadow-brand-900/20">
                            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <Icons.Layers className="text-brand-500"/> Order Summary
                            </h3>

                            <div className="space-y-4 mb-8 border-b border-zinc-800 pb-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-white font-medium">{currentProduct.name}</div>
                                        <div className="text-xs text-zinc-500 capitalize">{billingCycle} Plan</div>
                                    </div>
                                    <div className="text-white font-mono">
                                        ${getPrice()}
                                    </div>
                                </div>
                                
                                <div className="space-y-2 mt-4">
                                    {currentProduct.features.map((f, i) => (
                                        <div key={i} className="flex gap-2 text-xs text-zinc-400">
                                            <Icons.Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-6">
                                <span className="text-zinc-400 text-sm font-medium">Total due today</span>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-white">${getPrice()}</div>
                                    <div className="text-xs text-zinc-500">
                                        {billingCycle === 'lifetime' ? 'One-time payment' : `Billed ${billingCycle}`}
                                    </div>
                                </div>
                            </div>

                            <Button variant="glow" size="lg" className="w-full" asLink to={getUrl()} external>
                                Proceed to Payment <Icons.ChevronRight className="w-4 h-4 ml-1" />
                            </Button>

                            <div className="mt-4 text-center">
                                <p className="text-[10px] text-zinc-600">
                                    Secured by LemonSqueezy (Merchant of Record). <br/>
                                    Instant license delivery.
                                </p>
                            </div>
                        </GlassPanel>

                        <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500 text-xs">
                             <Icons.Check className="w-3 h-3" /> 14-Day Money Back Guarantee
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};