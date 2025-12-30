import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../constants';
import { Button, Icons } from './Shared';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check mock auth state
  const isAuthenticated = !!localStorage.getItem('gl_auth_token');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Indicators Dropdown */}
            <div className="relative group">
                <button className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-1 py-4">
                    Indicators <Icons.ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 hidden group-hover:block">
                    <div className="bg-[#09090b] border border-zinc-800 rounded-lg shadow-xl overflow-hidden p-2">
                         <Link to="/product/bundle" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">
                             <div className="font-medium text-white">GL Bundle</div>
                             <div className="text-xs text-zinc-600">The Complete System</div>
                         </Link>
                         <Link to="/product/money-flow" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">
                             <div className="font-medium text-white">Money Flow</div>
                             <div className="text-xs text-zinc-600">Divergence Indicator</div>
                         </Link>
                         <Link to="/product/market-profile" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">
                             <div className="font-medium text-white">Market Profile</div>
                             <div className="text-xs text-zinc-600">TPO & Replay</div>
                         </Link>
                         <Link to="/product/auto" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors border-t border-zinc-800 mt-1">
                             <div className="font-medium text-brand-400">Footprint Auto</div>
                             <div className="text-xs text-zinc-600">Automated Strategy</div>
                         </Link>
                    </div>
                </div>
            </div>

            <Link 
                to="/pricing" 
                className={`text-sm font-medium transition-all ${isActive('/pricing') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
                Pricing
            </Link>

             <Link 
                to="/docs" 
                className={`text-sm font-medium transition-all ${isActive('/docs') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
                Data Feeds
            </Link>

          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
             {isAuthenticated ? (
                 <Link to="/dashboard" className="text-sm font-medium text-white hover:text-brand-400 transition-colors flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> My Dashboard
                 </Link>
             ) : (
                 <>
                    <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log In</Link>
                    <Button variant="outline" size="sm" asLink to="/signup">
                        Sign Up
                    </Button>
                 </>
             )}
             <Button variant="glow" size="sm" asLink to="/pricing">
                Get Access
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
            
            <div className="pb-4 border-b border-zinc-900 mb-4">
                <span className="block px-4 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Indicators</span>
                <Link to="/product/bundle" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-900 rounded">GL Bundle</Link>
                <Link to="/product/money-flow" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-900 rounded">Money Flow</Link>
                <Link to="/product/market-profile" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-zinc-900 rounded">Market Profile</Link>
                <Link to="/product/auto" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base text-brand-400 hover:text-brand-300 hover:bg-zinc-900 rounded">Footprint Auto</Link>
            </div>

            <Link 
                to="/pricing" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-white border-l-2 border-transparent hover:bg-zinc-900"
            >
                Pricing
            </Link>

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
                    <>
                        <Link 
                            to="/login" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900"
                        >
                            Log In
                        </Link>
                        <Link 
                            to="/signup" 
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
            <div className="px-4">
               <Button variant="glow" className="w-full" asLink to="/pricing" onClick={() => setIsOpen(false)}>Get Access</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020205] border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <div className="w-6 h-6 bg-gradient-to-tr from-brand-600 to-brand-secondary rounded flex items-center justify-center">
                  <Icons.Layers className="text-white w-3 h-3" />
               </div>
               <span className="text-base font-bold text-white tracking-tighter italic">{BRAND_NAME}</span>
             </div>
             <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
               Institutional grade orderflow visualization and algorithmic execution systems.
             </p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Systems</h3>
            <ul className="space-y-4">
              <li><Link to="/product/bundle" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">GL Bundle</Link></li>
              <li><Link to="/product/auto" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Footprint Auto</Link></li>
              <li><Link to="/pricing" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Money Flow</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Account</h3>
            <ul className="space-y-4">
              <li><Link to="/login" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Client Portal</Link></li>
              <li><Link to="/license-tool" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Quick Activation</Link></li>
              <li><Link to="/docs" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/affiliates" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Affiliates</Link></li>
              <li><Link to="/terms" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()} GL Systems.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-xs text-zinc-500">System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#020205] flex flex-col font-sans selection:bg-brand-500/30 selection:text-brand-200 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};