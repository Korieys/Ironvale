import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import EcosystemGraph from '../components/EcosystemGraph';
import {
    ArrowRight,
    Server,
    Cpu,
    Box,
    ArrowUpRight,
    PenTool,
    Briefcase,
    Camera,
    Video,
    MonitorDot,
    AppWindowMac
} from 'lucide-react';
import tailorImg from '../assets/tailor.png';
import jobpeelImg from '../assets/jobpeel.png';
import myscouterImg from '../assets/myscouter.png';
import ryloImg from '../assets/rylo.png';

export default function Home() {
    // Scroll reveal hook
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

    const [heroRef, heroInView] = useIntersectionObserver();
    const [b2bRef, b2bInView] = useIntersectionObserver();
    const [b2cRef, b2cInView] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Ironvale Works | Custom Software & Development</title>
                <meta name="description" content="We build powerful tools for businesses and create beautiful digital apps for everyday people." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-40 px-4 sm:px-6 lg:px-8 border-b-4 border-slate-900 overflow-hidden">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                <div ref={heroRef} className={`max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center reveal-on-scroll ${heroInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                    <div>
                        <div className="inline-block bg-emerald-500 text-slate-900 font-mono font-bold px-3 py-1 text-sm mb-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                            EST. 2020 // DIGITAL STUDIO
                        </div>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Digital <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>Products</span> <br />
                            Built to Last.
                        </h1>
                        <p className="text-xl font-medium max-w-lg mb-10 border-l-4 border-emerald-500 pl-4">
                            We build powerful tools for businesses and create beautiful digital apps for everyday people.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 font-mono font-bold uppercase">
                            <Link to="/services" className="px-6 py-4 bg-slate-900 text-[#f1f5f9] border-2 border-slate-900 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_0px_#10b981] shadow-[4px_4px_0px_0px_#10b981] transition-all duration-300 flex justify-between items-center group">
                                <span>View Our Services</span>
                                <ArrowRight className="w-5 h-5 ml-4 group-hover:text-emerald-500 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                            <Link to="/about" className="px-6 py-4 bg-[#f1f5f9] text-slate-900 border-2 border-slate-900 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_0px_#0f172a] shadow-[4px_4px_0px_0px_#0f172a] transition-all duration-300 flex justify-between items-center group">
                                <span>See Our Products</span>
                                <Box className="w-5 h-5 ml-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Ecosystem Graph */}
                    <div className="hidden lg:block w-full h-full min-h-[450px] relative">
                        <EcosystemGraph />
                    </div>
                </div>
            </section>

            {/* Hazard Strip / Ticker */}
            <div className="h-6 w-full bg-[repeating-linear-gradient(-45deg,#10b981,#10b981_10px,#0f172a_10px,#0f172a_20px)] border-b-4 border-slate-900"></div>

            {/* Division 01: Enterprise Highlight */}
            <section ref={b2bRef} className="bg-slate-950 text-[#f1f5f9] py-24 border-b-4 border-slate-900 relative">
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll ${b2bInView ? 'is-revealed animate-fade-in-up' : ''}`}>

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-4 border-slate-800 pb-8">
                        <div className="max-w-2xl">
                            <h2 className="font-mono text-emerald-500 font-bold mb-4 tracking-widest uppercase">Business Services</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                                Tools That Build <br />Better Teams.
                            </h3>
                            <p className="text-slate-400 text-lg font-medium">
                                We replace messy spreadsheets and slow software with custom, fast web applications that make your daily work easier.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 text-right">
                            <Link to="/services" className="inline-block px-8 py-4 bg-emerald-500 text-slate-900 font-bold uppercase tracking-widest hover:bg-white transition-colors border-2 border-transparent hover:border-slate-900">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div style={{ animationDelay: '100ms' }} className="bg-slate-900 border-2 border-slate-800 p-8 hover:border-emerald-500 transition-colors group relative overflow-hidden">
                            <MonitorDot className="w-12 h-12 text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-xl font-black uppercase tracking-tight mb-4">Simple Websites</h4>
                            <p className="text-slate-400 text-sm">Clean, fast, and beautiful informational sites that tell your story perfectly.</p>
                        </div>
                        <div style={{ animationDelay: '200ms' }} className="bg-slate-900 border-2 border-slate-800 p-8 hover:border-emerald-500 transition-colors group relative overflow-hidden">
                            <AppWindowMac className="w-12 h-12 text-emerald-500 mb-6 group-hover:rotate-12 transition-transform duration-300" />
                            <h4 className="text-xl font-black uppercase tracking-tight mb-4">Web Applications</h4>
                            <p className="text-slate-400 text-sm">Complex sites with admin dashboards and tailored logic for operations.</p>
                        </div>
                        <div style={{ animationDelay: '300ms' }} className="bg-slate-900 border-2 border-slate-800 p-8 hover:border-emerald-500 transition-colors group relative overflow-hidden">
                            <Cpu className="w-12 h-12 text-emerald-500 mb-6 group-hover:text-white transition-colors duration-300" />
                            <h4 className="text-xl font-black uppercase tracking-tight mb-4">Custom Software</h4>
                            <p className="text-slate-400 text-sm">From scratch systems designed to modernize legacy companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Division 02: Consumer Highlight */}
            <section className="py-24 border-b-4 border-slate-900 bg-[#f1f5f9] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

                <div ref={b2cRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-on-scroll ${b2cInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="font-mono text-slate-500 font-bold mb-4 tracking-widest uppercase">Our Products</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            Apps You'll Love<br />Using.
                        </h3>
                        <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium mb-8">
                            We take the same care we use for business software and apply it to everyday apps. Our products are designed to be fast, useful, and simple.
                        </p>
                        <Link to="/about" className="px-8 py-3 bg-slate-900 text-white font-mono font-bold uppercase hover:bg-emerald-500 hover:text-slate-900 transition-colors">
                            Explore All Products
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] group">
                            <div className="flex justify-between items-center border-b-2 border-slate-900 pb-2 mb-4">
                                <h4 className="font-black text-xl uppercase tracking-tight">Atum</h4>
                                <PenTool className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" />
                            </div>
                            <img src={tailorImg} alt="Atum" className="w-full h-24 object-cover border border-slate-900 mb-4" />
                            <p className="text-xs text-slate-600 font-mono mb-4">CREATIVE SPACES</p>
                            <a href="https://atum.work" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center hover:text-emerald-600">
                                View <ArrowUpRight className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                        <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] group">
                            <div className="flex justify-between items-center border-b-2 border-slate-900 pb-2 mb-4">
                                <h4 className="font-black text-xl uppercase tracking-tight">JobPeel</h4>
                                <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" />
                            </div>
                            <img src={jobpeelImg} alt="JobPeel" className="w-full h-24 object-cover border border-slate-900 mb-4" />
                            <p className="text-xs text-slate-600 font-mono mb-4">CAREER PLATFORM</p>
                            <a href="https://jobpeel.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center hover:text-emerald-600">
                                View <ArrowUpRight className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                        <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] group">
                            <div className="flex justify-between items-center border-b-2 border-slate-900 pb-2 mb-4">
                                <h4 className="font-black text-xl uppercase tracking-tight">MyScouter</h4>
                                <Camera className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" />
                            </div>
                            <img src={myscouterImg} alt="MyScouter" className="w-full h-24 object-cover border border-slate-900 mb-4" />
                            <p className="text-xs text-slate-600 font-mono mb-4">DESIGN UTILITY</p>
                            <a href="https://www.myscouter.app" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center hover:text-emerald-600">
                                View <ArrowUpRight className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                        <div className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] group">
                            <div className="flex justify-between items-center border-b-2 border-slate-900 pb-2 mb-4">
                                <h4 className="font-black text-xl uppercase tracking-tight">Rylo</h4>
                                <Video className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" />
                            </div>
                            <img src={ryloImg} alt="Rylo" className="w-full h-24 object-cover border border-slate-900 mb-4" />
                            <p className="text-xs text-slate-600 font-mono mb-4">VIDEO EDITOR</p>
                            <a href="#" className="text-sm font-bold flex items-center hover:text-emerald-600">
                                View <ArrowUpRight className="w-3 h-3 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
