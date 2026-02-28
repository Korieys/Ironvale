import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { getLeads } from '../lib/db';
import { Lock, LogOut, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Admin() {
    const { user, loading, login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const [leads, setLeads] = useState([]);
    const [isLoadingLeads, setIsLoadingLeads] = useState(true);

    useEffect(() => {
        if (user) {
            loadLeads();
        }
    }, [user]);

    const loadLeads = async () => {
        try {
            setIsLoadingLeads(true);
            const data = await getLeads();
            setLeads(data);
        } catch (error) {
            toast.error('Failed to load leads. Check console.');
        } finally {
            setIsLoadingLeads(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoggingIn(true);
        try {
            await login(email, password);
            toast.success('Logged in successfully');
        } catch (error) {
            toast.error('Invalid credentials');
        }
        setIsLoggingIn(false);
    };

    if (loading) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-[#f1f5f9]">
                <Loader2 className="w-12 h-12 animate-spin text-emerald-500" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-[80vh] bg-[#f1f5f9] flex flex-col items-center pt-24 px-4">
                <div className="w-full max-w-md bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                    <div className="text-center mb-8">
                        <Lock className="w-12 h-12 mx-auto text-slate-900 mb-4" />
                        <h1 className="text-2xl font-black uppercase tracking-tight">Admin Portal</h1>
                        <p className="font-mono text-xs text-slate-500 uppercase mt-2">Restricted Access</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block font-mono text-sm font-bold mb-2 uppercase">Admin Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border-2 border-slate-300 focus:border-emerald-500 outline-none bg-slate-50"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block font-mono text-sm font-bold mb-2 uppercase">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border-2 border-slate-300 focus:border-emerald-500 outline-none bg-slate-50"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoggingIn}
                            className="w-full py-3 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-slate-900 transition-colors disabled:opacity-70"
                        >
                            {isLoggingIn ? 'Authenticating...' : 'Access Terminal'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f1f5f9] min-h-screen pb-24">
            {/* Admin Header */}
            <header className="bg-slate-900 text-white p-6 flex justify-between items-center border-b-4 border-emerald-500 sticky top-0 z-40 shadow-lg">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 mr-4"></div>
                    <h1 className="text-xl font-black uppercase tracking-tighter">Command Center</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-slate-400 hidden sm:inline">User: {user.email}</span>
                    <button
                        onClick={logout}
                        className="flex items-center text-sm font-bold uppercase hover:text-emerald-500 transition-colors"
                    >
                        Logout <LogOut className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </header>

            {/* Leads Dashboard */}
            <div className="max-w-7xl mx-auto px-4 mt-12">
                <div className="flex justify-between items-end mb-8 border-b-2 border-slate-300 pb-4">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tight">Project Leads</h2>
                        <p className="font-mono text-slate-500 mt-1 uppercase">Total: {leads.length} Inquiries</p>
                    </div>
                    <button
                        onClick={loadLeads}
                        disabled={isLoadingLeads}
                        className="font-mono text-sm font-bold border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white transition-colors"
                    >
                        {isLoadingLeads ? 'Refreshing...' : 'Refresh List'}
                    </button>
                </div>

                {isLoadingLeads ? (
                    <div className="flex justify-center py-24">
                        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
                    </div>
                ) : leads.length === 0 ? (
                    <div className="bg-white border-2 border-slate-300 border-dashed p-12 text-center text-slate-500 font-mono">
                        NO INQUIRIES FOUND IN DATABASE.
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {leads.map((lead) => (
                            <div key={lead.id} className="bg-white border-4 border-slate-900 p-6 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 font-mono text-xs font-bold px-3 py-1 border-l-4 border-b-4 border-slate-900">
                                    {new Date(lead.createdAt.toDate()).toLocaleDateString()}
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 mb-6 mt-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black uppercase mb-1">{lead.company || lead.name}</h3>
                                        <p className="text-slate-600 font-medium mb-4">{lead.name} • {lead.email}</p>

                                        <div className="inline-block bg-slate-100 p-4 border-2 border-slate-200">
                                            <p className="font-mono text-sm mb-2"><span className="text-slate-500 w-24 inline-block">TYPE:</span> <span className="font-bold">{lead.projectType}</span></p>
                                            <p className="font-mono text-sm mb-2"><span className="text-slate-500 w-24 inline-block">BUDGET:</span> <span className="font-bold text-emerald-600">{lead.budget}</span></p>
                                            <p className="font-mono text-sm"><span className="text-slate-500 w-24 inline-block">TIMELINE:</span> <span className="font-bold">{lead.timeline}</span></p>
                                        </div>
                                    </div>

                                    <div className="flex-[2]">
                                        <h4 className="font-mono text-sm font-bold text-slate-500 mb-2 uppercase border-b border-slate-200 pb-2">Project Description</h4>
                                        <p className="text-slate-800 whitespace-pre-wrap leading-relaxed">{lead.description}</p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-slate-100 pt-4 flex justify-end">
                                    <a href={`mailto:${lead.email}`} className="text-emerald-600 hover:text-emerald-700 font-bold uppercase text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                        Reply to inquiry <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
