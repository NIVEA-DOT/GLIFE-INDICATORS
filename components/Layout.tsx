import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../constants';
import { Button, Icons } from './Shared';
import { supabase } from '../src/lib/supabase';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'nav-glass' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 group">
               <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-brand-secondary opacity-80 blur-sm rounded"></div>
                  <Icons.Layers className="relative text-white w-5 h-5 z-10" />
               </div>
               <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 group-hover:to-white transition-all">{BRAND_NAME}</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            
            <Link 
                to="/features" 
                className={`text-sm font-medium transition-all ${location.pathname === '/features' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
                Features
            </Link>

            {/* Indicators Dropdown */}
            <div className="relative group">
                <button className={`text-sm font-medium flex items-center gap-1 py-4 transition-colors ${isActive('/indicators') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                    Indicators <Icons.ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-4 hidden group-hover:block">
                    <div className="bg-[#09090b] border border-zinc-800 rounded-xl shadow-2xl shadow-black overflow-hidden p-2">
                         <div className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Systems</div>
                         
                         <Link to="/indicators/bundle" className="block px-3 py-3 hover:bg-zinc-900 rounded-lg transition-colors group/item">
                             <div className="font-medium text-white group-hover/item:text-brand-400 transition-colors flex items-center gap-2">
                                 GL Bundle <span className="bg-brand-500/20 text-brand-300 text-[9px] px-1.5 rounded uppercase">Best</span>
                             </div>
                             <div className="text-xs text-zinc-500 mt-0.5">Full Suite (Box, Vega, Navigator)</div>
                         </Link>

                         <Link to="/indicators/auto" className="block px-3 py-3 hover:bg-zinc-900 rounded-lg transition-colors group/item">
                             <div className="font-medium text-white group-hover/item:text-brand-400 transition-colors">
                                 Footprint Auto
                             </div>
                             <div className="text-xs text-zinc-500 mt-0.5">Automated Execution Algo</div>
                         </Link>

                         <div className="my-2 border-t border-zinc-800"></div>
                         <div className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Standalone</div>

                         <Link to="/indicators/money-flow" className="block px-3 py-3 hover:bg-zinc-900 rounded-lg transition-colors group/item">
                             <div className="font-medium text-white group-hover/item:text-brand-400 transition-colors">
                                 Money Flow
                             </div>
                             <div className="text-xs text-zinc-500 mt-0.5">Divergence Indicator</div>
                         </Link>

                         <Link to="/indicators/profile" className="block px-3 py-3 hover:bg-zinc-900 rounded-lg transition-colors group/item">
                             <div className="font-medium text-white group-hover/item:text-brand-400 transition-colors">
                                 Market Profile
                             </div>
                             <div className="text-xs text-zinc-500 mt-0.5">TPO & Volume Analysis</div>
                         </Link>
                    </div>
                </div>
            </div>

          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
             {isAuthenticated ? (
                 <Link to="/dashboard" className="text-sm font-medium text-white hover:text-brand-400 transition-colors flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Dashboard
                 </Link>
             ) : (
                 <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log In</Link>
             )}
             
             {/* Primary CTA */}
             <Button variant="glow" size="sm" asLink to="/indicators/bundle">
                Get Started
             </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020205] border-b border-zinc-900 absolute w-full h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 space-y-2">
            
            <Link 
                to="/features" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-white border-b border-zinc-800"
            >
                Features
            </Link>

            <div className="py-4">
                <span className="block px-4 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Indicators</span>
                <Link to="/indicators/bundle" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-900 rounded">GL Bundle</Link>
                <Link to="/indicators/money-flow" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-900 rounded">Money Flow</Link>
                <Link to="/indicators/profile" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-900 rounded">Market Profile</Link>
                <Link to="/indicators/auto" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-brand-400 hover:text-brand-300 hover:bg-zinc-900 rounded">Footprint Auto</Link>
            </div>

            <div className="border-t border-zinc-800 my-4 pt-4 space-y-3">
                {isAuthenticated ? (
                    <Link 
                        to="/dashboard" 
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-base font-medium text-white hover:bg-zinc-900"
                    >
                        My Dashboard
                    </Link>
                ) : (
                    <Link 
                        to="/login" 
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900"
                    >
                        Log In
                    </Link>
                )}
            </div>
            <div className="px-4">
               <Button variant="glow" className="w-full" asLink to="/indicators/bundle" onClick={() => setIsOpen(false)}>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Add Footer
export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-zinc-900 bg-zinc-950 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-zinc-500">
                            <Icons.Layers className="w-3 h-3" />
                        </div>
                        <span className="text-zinc-500 text-sm font-medium">© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</span>
                    </div>
                    <div className="flex gap-8 text-sm text-zinc-500">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/risk" className="hover:text-white transition-colors">Risk Disclosure</Link>
                        <Link to="/support" className="hover:text-white transition-colors">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Add Layout
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#020205] text-white font-sans selection:bg-brand-500/30 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};