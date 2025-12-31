import React, { useState, useEffect } from 'react';
import { Button, GlassPanel, Icons } from '../components/Shared';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../src/lib/supabase';

interface AuthProps {
    initialMode?: 'login' | 'signup';
}

export const Auth: React.FC<AuthProps> = ({ initialMode = 'login' }) => {
    const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true); // New state for initial check
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    // Check if already logged in
    useEffect(() => {
        const checkSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    // If user is already logged in, redirect to dashboard immediately
                    navigate('/dashboard', { replace: true });
                } else {
                    setPageLoading(false); // Only show form if no session
                }
            } catch (e) {
                setPageLoading(false);
            }
        };
        checkSession();
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (mode === 'signup') {
                const { error: signUpError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: name,
                        },
                    },
                });
                
                if (signUpError) throw signUpError;
                
                alert('Account created! Please check your email to verify or sign in.');
                setMode('login');
            } else {
                const { data, error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (signInError) throw signInError;
                
                if (data.session) {
                    navigate('/dashboard');
                }
            }
        } catch (err: any) {
            console.error("Auth Error:", err);
            // Translate common Supabase errors for better UX
            let msg = err.message;
            if (msg === "Invalid login credentials") msg = "Incorrect email or password.";
            // Handle fallback dummy client error
            if (msg.includes("fetch") || msg.includes("network")) msg = "Connection failed. Please check your configuration.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    if (pageLoading) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
                 <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <GlassPanel className="w-full max-w-md relative z-10 border-t border-white/10">
                
                {/* Tabs */}
                <div className="flex border-b border-zinc-800 mb-8">
                    <button 
                        onClick={() => { setMode('login'); setError(null); }}
                        className={`flex-1 pb-4 text-sm font-medium transition-colors relative ${mode === 'login' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        Log In
                        {mode === 'login' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>}
                    </button>
                    <button 
                        onClick={() => { setMode('signup'); setError(null); }}
                        className={`flex-1 pb-4 text-sm font-medium transition-colors relative ${mode === 'signup' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        Sign Up
                        {mode === 'signup' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>}
                    </button>
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-zinc-400 text-sm">
                        {mode === 'login' 
                            ? 'Access your dashboard, licenses, and downloads.' 
                            : 'Join the institutional trading ecosystem.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === 'signup' && (
                        <div className="animate-fadeIn">
                            <label className="block text-xs text-zinc-500 uppercase tracking-wide mb-1">Full Name</label>
                            <input 
                                type="text" 
                                required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white focus:border-brand-500 outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-xs text-zinc-500 uppercase tracking-wide mb-1">Email Address</label>
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white focus:border-brand-500 outline-none transition-colors"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-xs text-zinc-500 uppercase tracking-wide">Password</label>
                            {mode === 'login' && (
                                <Link to="#" className="text-xs text-brand-500 hover:text-brand-400">Forgot?</Link>
                            )}
                        </div>
                        <input 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white focus:border-brand-500 outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-900/20 border border-red-500/30 p-3 rounded flex items-start gap-3">
                            <Icons.AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-red-200 text-sm">{error}</span>
                        </div>
                    )}

                    {mode === 'signup' && (
                        <div className="flex items-start gap-2 pt-2">
                             <input type="checkbox" required className="mt-1 bg-zinc-900 border-zinc-700 rounded" />
                             <span className="text-xs text-zinc-400 leading-tight">
                                 I agree to the <Link to="/terms" className="text-zinc-300 underline">Terms of Service</Link> and <Link to="/privacy" className="text-zinc-300 underline">Privacy Policy</Link>.
                             </span>
                        </div>
                    )}

                    <Button type="submit" variant="glow" className="w-full mt-2" disabled={loading}>
                        {loading ? 'Processing...' : (mode === 'login' ? 'Log In' : 'Create Account')}
                    </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                    <p className="text-xs text-zinc-500 mb-3">Or continue with</p>
                    <div className="grid grid-cols-1 gap-3">
                         <Button 
                            type="button" 
                            variant="secondary" 
                            onClick={async () => {
                                await supabase.auth.signInWithOAuth({ provider: 'google' });
                            }}
                            className="w-full flex items-center justify-center gap-2"
                         >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                            Google
                        </Button>
                    </div>
                </div>
            </GlassPanel>
        </div>
    );
};