import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { submitLead } from '../lib/db';
import { Terminal, Send, Clock, ShieldCheck, Headphones } from 'lucide-react';

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const useIntersectionObserver = (options = {}) => {
        const [isIntersecting, setIsIntersecting] = useState(false);
        const elementRef = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.1, ...options });
            if (elementRef.current) observer.observe(elementRef.current);
            return () => {
                if (elementRef.current) observer.unobserve(elementRef.current);
            };
        }, [options.threshold]);
        return [elementRef, isIntersecting];
    };

    const [formRef, formInView] = useIntersectionObserver();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 500));
        const res = await submitLead(data);
        if (res.success) {
            toast.success('Your project inquiry has been received. We will be in touch shortly.');
            reset();
        } else {
            toast.error('There was an issue submitting your inquiry. Please try again.');
        }
        setIsSubmitting(false);
    };

    return (
        <div className="bg-[#f1f5f9] min-h-screen">
            <Helmet>
                <title>Contact Us | Ironvale Works</title>
                <meta name="description" content="Collapse your timeline. Secure your spot to build your next weapon for domination." />
            </Helmet>
            {/* Header */}
            <section className="bg-emerald-500 text-slate-900 pt-24 pb-20 px-4 border-b-4 border-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_35px,rgba(0,0,0,0.04)_35px,rgba(0,0,0,0.04)_36px)] pointer-events-none"></div>
                {/* Decorative */}
                <div className="absolute top-8 right-8 w-20 h-20 border-4 border-slate-900 opacity-20 hidden lg:block"></div>
                <div className="absolute bottom-0 left-0 w-40 h-1 bg-slate-900 hidden lg:block"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Terminal className="w-16 h-16 mb-6" />
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                                Let's Build<br />
                                <span className="text-white">Something Dangerous.</span>
                            </h1>
                            <p className="text-lg font-bold font-mono bg-white inline-block px-4 py-2 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                                COLLAPSE YOUR TIMELINE. START NOW.
                            </p>
                        </div>
                        <div className="hidden lg:grid grid-cols-1 gap-4">
                            {[
                                { icon: <Clock className="w-8 h-8" />, title: 'Extreme Velocity', desc: 'We review and estimate within one business day. No waiting around.' },
                                { icon: <ShieldCheck className="w-8 h-8" />, title: 'Absolute Confidence', desc: 'Not satisfied? Get 100% of your money back. We build to win.' },
                                { icon: <Headphones className="w-8 h-8" />, title: 'Relentless Support', desc: 'Your new force multiplier will be constantly supported.' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                                    <div className="bg-slate-900 text-emerald-500 p-2 flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black uppercase text-sm">{item.title}</h4>
                                        <p className="text-slate-700 text-xs font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 px-4 bg-[#f1f5f9] relative">
                <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
                <div ref={formRef} className={`max-w-4xl mx-auto relative z-10 reveal-on-scroll ${formInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-slate-900 text-white p-6 border-4 border-slate-900 shadow-[8px_8px_0px_0px_#10b981]">
                                <h3 className="font-black uppercase text-lg mb-4 border-b-2 border-slate-700 pb-3">What happens next?</h3>
                                <ol className="space-y-4 font-mono text-xs">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-emerald-500 text-slate-900 w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">1</span>
                                        <span className="text-slate-400">We analyze your required velocity and scope.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-emerald-500 text-slate-900 w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">2</span>
                                        <span className="text-slate-400">We respond with a trajectory plan within 24 hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-emerald-500 text-slate-900 w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">3</span>
                                        <span className="text-slate-400">We lock in the target and align on momentum.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-emerald-500 text-slate-900 w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">4</span>
                                        <span className="text-slate-400">We start executing instantly. No delays.</span>
                                    </li>
                                </ol>
                            </div>
                            <div className="bg-emerald-100 border-4 border-slate-900 p-6 font-mono text-xs text-slate-900">
                                <p className="font-bold uppercase mb-2">DIRECT LINE</p>
                                <p>Email: ironvale.works</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="bg-white p-8 md:p-10 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)]"
                            >
                                <div className="mb-8 border-b-4 border-slate-900 pb-4 flex justify-between items-end">
                                    <div>
                                        <h2 className="text-2xl font-black uppercase tracking-tight">Project Inquiry</h2>
                                        <p className="font-mono text-sm text-slate-500">FILL OUT THE FORM BELOW</p>
                                    </div>
                                    <div className="font-mono text-xs text-slate-400 hidden sm:block">FORM v1.0</div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block font-mono text-sm font-bold mb-2 uppercase">Full Name *</label>
                                        <input
                                            {...register("name", { required: true })}
                                            className={`w-full p-3 border-2 ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-emerald-500'} font-medium outline-none bg-slate-50 transition-colors`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <span className="text-red-500 font-mono text-xs mt-1 block">Required field</span>}
                                    </div>
                                    <div>
                                        <label className="block font-mono text-sm font-bold mb-2 uppercase">Work Email *</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            className={`w-full p-3 border-2 ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-emerald-500'} font-medium outline-none bg-slate-50 transition-colors`}
                                            placeholder="john@company.com"
                                        />
                                        {errors.email && <span className="text-red-500 font-mono text-xs mt-1 block">Required field</span>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block font-mono text-sm font-bold mb-2 uppercase">Company Name</label>
                                    <input
                                        {...register("company")}
                                        className="w-full p-3 border-2 border-slate-300 focus:border-emerald-500 font-medium outline-none bg-slate-50 transition-colors"
                                        placeholder="Acme Corp"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block font-mono text-sm font-bold mb-2 uppercase">Project Type *</label>
                                        <select
                                            {...register("projectType", { required: true })}
                                            className={`w-full p-3 border-2 ${errors.projectType ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-emerald-500'} font-medium outline-none bg-slate-50 transition-colors`}
                                        >
                                            <option value="">Select a type...</option>
                                            <option value="Web Application">Web Application (Dashboard/SaaS)</option>
                                            <option value="Marketing Website">Marketing Website</option>
                                            <option value="Internal Tool">Internal Tooling</option>
                                            <option value="Mobile App">Mobile App</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.projectType && <span className="text-red-500 font-mono text-xs mt-1 block">Required field</span>}
                                    </div>
                                    <div>
                                        <label className="block font-mono text-sm font-bold mb-2 uppercase">Budget Range *</label>
                                        <select
                                            {...register("budget", { required: true })}
                                            className={`w-full p-3 border-2 ${errors.budget ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-emerald-500'} font-medium outline-none bg-slate-50 transition-colors`}
                                        >
                                            <option value="">Select budget...</option>
                                            <option value="Under $5k">Under $5k</option>
                                            <option value="$5k - $10k">$5k - $10k</option>
                                            <option value="$10k - $25k">$10k - $25k</option>
                                            <option value="$25k - $50k">$25k - $50k</option>
                                            <option value="$50k+">$50k+</option>
                                        </select>
                                        {errors.budget && <span className="text-red-500 font-mono text-xs mt-1 block">Required field</span>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block font-mono text-sm font-bold mb-2 uppercase">Timeline *</label>
                                    <select
                                        {...register("timeline", { required: true })}
                                        className={`w-full p-3 border-2 ${errors.timeline ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-emerald-500'} font-medium outline-none bg-slate-50 transition-colors`}
                                    >
                                        <option value="">Select timeline...</option>
                                        <option value="ASAP">ASAP (We need it yesterday)</option>
                                        <option value="2-4 Weeks">2-4 Weeks</option>
                                        <option value="1-2 Months">1-2 Months</option>
                                        <option value="3+ Months">3+ Months</option>
                                        <option value="Flexible">Flexible / No Rush</option>
                                    </select>
                                    {errors.timeline && <span className="text-red-500 font-mono text-xs mt-1 block">Required field</span>}
                                </div>

                                <div className="mb-8">
                                    <label className="block font-mono text-sm font-bold mb-2 uppercase">Project Description *</label>
                                    <textarea
                                        {...register("description", { required: true })}
                                        rows="6"
                                        className={`w-full p-3 border-2 ${errors.description ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-emerald-500'} font-medium outline-none bg-slate-50 transition-colors`}
                                        placeholder="Tell us what you're trying to build, the main problems you want to solve, and any key requirements..."
                                    ></textarea>
                                    {errors.description && <span className="text-red-500 font-mono text-xs mt-1 block">Required field</span>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-slate-900 transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed border-4 border-slate-900 text-lg group"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                            TRANSMITTING...
                                        </span>
                                    ) : (
                                        <>
                                            Submit Project Inquiry <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="mt-4 text-center font-mono text-xs text-slate-500 bg-slate-50 py-2 border border-slate-200">
                                    &gt; YOUR NEW EDGE AWAITS. RESPONSES WITHIN 24H.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
