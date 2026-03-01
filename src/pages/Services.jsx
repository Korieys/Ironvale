import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Coins, Rocket, ArrowRight, MonitorDot, AppWindowMac, Cpu, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import kromakutImg from '../assets/kromakut.png';
import parseonImg from '../assets/parseon.png';
import atlasImg from '../assets/atlas.png';
import machineryImg from '../assets/machinery.png';
import greatExpectationsImg from '../assets/great_expectations.png';

export default function Services() {
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
    const [valueRef, valueInView] = useIntersectionObserver();
    const [servicesRef, servicesInView] = useIntersectionObserver();
    const [processRef, processInView] = useIntersectionObserver();
    const [workRef, workInView] = useIntersectionObserver();

    return (
        <div className="bg-[#f1f5f9] min-h-screen">
            <Helmet>
                <title>Services | Ironvale Works</title>
                <meta name="description" content="We operate as your dedicated internal development team. Explore our services including Web Apps and Custom Software." />
            </Helmet>
            {/* Hero */}
            <section className="bg-slate-950 text-[#f1f5f9] pt-24 pb-32 px-4 border-b-4 border-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98122_1px,transparent_1px),linear-gradient(to_bottom,#10b98122_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                {/* Decorative */}
                <div className="absolute top-12 right-12 w-32 h-32 border-4 border-emerald-500 opacity-15 rotate-12 hidden lg:block"></div>
                <div className="absolute bottom-0 left-0 w-64 h-1 bg-emerald-500 hidden lg:block"></div>

                <div ref={heroRef} className={`max-w-6xl mx-auto relative z-10 reveal-on-scroll ${heroInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-emerald-500 text-slate-950 font-mono font-bold px-4 py-2 text-sm mb-8 tracking-widest border-2 border-emerald-400">
                                YOUR INTERNAL DEV TEAM
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                                Half The Cost.<br />
                                <span className="text-emerald-500">Half The Time.</span>
                            </h1>
                            <p className="text-xl font-medium text-slate-400 max-w-xl leading-relaxed mb-10 border-l-4 border-emerald-500 pl-6">
                                We operate as your dedicated internal development team. We're quick, we're lean, and we produce high-quality results incredibly fast.
                            </p>
                            <Link to="/contact" className="inline-block px-10 py-5 bg-emerald-500 text-slate-900 border-2 border-emerald-500 font-black uppercase text-lg tracking-wider hover:bg-slate-900 hover:text-emerald-500 transition-colors shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                                Hire Us Today
                            </Link>
                        </div>
                        {/* Stats Panel */}
                        <div className="hidden lg:block">
                            <div className="bg-slate-900 border-2 border-slate-800 p-8">
                                <div className="font-mono text-xs text-slate-600 mb-6 border-b border-slate-800 pb-4">PERFORMANCE METRICS</div>
                                <div className="space-y-6">
                                    {[
                                        { label: 'AVG. DELIVERY SPEED', value: '2X FASTER', bar: '85%' },
                                        { label: 'COST VS TRADITIONAL AGENCY', value: '50-75% LESS', bar: '70%' },
                                        { label: 'CLIENT SATISFACTION', value: '100%', bar: '100%' },
                                        { label: 'PROJECTS SHIPPED ON TIME', value: '100%', bar: '100%' },
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between font-mono text-xs mb-2">
                                                <span className="text-slate-500">{stat.label}</span>
                                                <span className="text-emerald-500 font-bold">{stat.value}</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 w-full">
                                                <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: heroInView ? stat.bar : '0%' }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Guarantee */}
            <section className="py-16 bg-emerald-500 border-b-4 border-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_35px,rgba(0,0,0,0.05)_35px,rgba(0,0,0,0.05)_36px)] pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 bg-slate-900 flex items-center justify-center flex-shrink-0 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]">
                            <ShieldCheck className="w-12 h-12 text-emerald-500" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 tracking-tight mb-3">
                                The Ironclad Guarantee
                            </h2>
                            <p className="text-lg font-bold font-mono text-slate-900 bg-white inline-block px-4 py-2 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                                IF YOU DON'T LIKE IT, YOU GET A FULL REFUND. NO QUESTIONS ASKED.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section ref={servicesRef} className={`py-24 px-4 bg-[#f1f5f9] relative overflow-hidden reveal-on-scroll ${servicesInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-mono text-slate-500 font-bold mb-4 tracking-widest uppercase">What We Build</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            From Concept<br />To Launch.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MonitorDot className="w-14 h-14" />,
                                num: '01',
                                title: 'Marketing Websites',
                                desc: 'Clean, fast, and beautiful sites that tell your story perfectly and turn visitors into customers.',
                                items: ['Landing pages', 'SEO optimized', 'Blazing fast speeds', 'Mobile responsive']
                            },
                            {
                                icon: <AppWindowMac className="w-14 h-14" />,
                                num: '02',
                                title: 'Web Applications',
                                desc: 'Complex sites with admin dashboards, customer portals, and tailored business logic.',
                                items: ['Secure user portals', 'Real-time dashboards', 'Deep integrations', 'Custom workflows']
                            },
                            {
                                icon: <Cpu className="w-14 h-14" />,
                                num: '03',
                                title: 'Custom Software',
                                desc: 'From-scratch systems designed to modernize legacy companies or scale your unique processes.',
                                items: ['Process automation', 'Legacy migrations', 'API development', 'Future-proof architecture']
                            }
                        ].map((service, i) => (
                            <div key={i} className="bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#10b981] transition-all duration-300 group overflow-hidden">
                                <div className="p-8 border-b-4 border-slate-900 bg-slate-50 group-hover:bg-emerald-50 transition-colors duration-300 relative">
                                    <div className="absolute top-4 right-4 font-mono text-xs text-slate-400 font-bold">{service.num}</div>
                                    <div className="text-emerald-500 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-black uppercase tracking-tight mb-3">{service.title}</h4>
                                    <p className="text-slate-600 text-sm font-medium mb-6">{service.desc}</p>
                                    <ul className="space-y-2">
                                        {service.items.map((item, j) => (
                                            <li key={j} className="font-mono text-xs text-slate-500 flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Value Props */}
            <section ref={valueRef} className={`py-24 px-4 bg-slate-950 text-[#f1f5f9] border-y-4 border-slate-900 reveal-on-scroll ${valueInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-mono text-emerald-500 font-bold mb-4 tracking-widest uppercase">Why Us</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            The Ironvale<br />Advantage.
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-900 border-2 border-slate-800 p-8 hover:border-emerald-500 transition-all duration-300 group">
                            <Zap className="w-14 h-14 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-black uppercase mb-4">Lightning Fast</h3>
                            <p className="text-slate-400 font-medium mb-6">We don't do endless planning phases. We build rapidly, iterate constantly, and deploy fast so you can see ROI immediately.</p>
                            <div className="font-mono text-xs text-slate-600 border-t border-slate-800 pt-4">AVG. TURNAROUND: 2-4 WEEKS</div>
                        </div>
                        <div className="bg-slate-900 border-2 border-slate-800 p-8 hover:border-emerald-500 transition-all duration-300 group">
                            <Coins className="w-14 h-14 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-black uppercase mb-4">Cost Effective</h3>
                            <p className="text-slate-400 font-medium mb-6">Why hire a bloated tech agency or a slow in-house team? You get a seasoned engineering unit for a fraction of the traditional cost.</p>
                            <div className="font-mono text-xs text-slate-600 border-t border-slate-800 pt-4">SAVINGS: 50-75% vs AGENCIES</div>
                        </div>
                        <div className="bg-slate-900 border-2 border-slate-800 p-8 hover:border-emerald-500 transition-all duration-300 group">
                            <Rocket className="w-14 h-14 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-black uppercase mb-4">High Quality</h3>
                            <p className="text-slate-400 font-medium mb-6">Being lean doesn't mean cutting corners. We build production-ready, scalable apps designed to last and handle real users beautifully.</p>
                            <div className="font-mono text-xs text-slate-600 border-t border-slate-800 pt-4">STANDARD: PRODUCTION-GRADE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Client Work */}
            <section ref={workRef} className={`py-24 px-4 bg-slate-900 border-y-4 border-slate-800 relative overflow-hidden reveal-on-scroll ${workInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-mono text-emerald-500 font-bold mb-4 tracking-widest uppercase">Proven Track Record</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none">
                            Featured<br />Client Work.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {[
                            {
                                title: 'Great Expectations',
                                desc: 'Online psychiatric platform featuring client intake workflows, a secure admin portal, and integrated blog/newsletter functionality.',
                                tags: ['Healthcare', 'Web App', 'Portals'],
                                img: greatExpectationsImg
                            },
                            {
                                title: 'MachineryConnection',
                                desc: 'Industrial e-commerce platform for heavy machinery sales, featuring a custom admin portal and direct WhatsApp integration.',
                                tags: ['E-Commerce', 'B2B', 'Integrations'],
                                img: machineryImg
                            },
                            {
                                title: 'Atlas',
                                desc: 'Proprietary internal management tool engineered as a contractor for a premier global luxury automaker (BMW).',
                                tags: ['Enterprise', 'Internal Tools', 'Automotive'],
                                img: atlasImg
                            },
                            {
                                title: 'Parseon',
                                desc: 'Specialized internal tool for loan officers designed to parse complex legal documents and extract key actionable information.',
                                tags: ['FinTech', 'AI/Data Parsing', 'Internal Tools'],
                                img: parseonImg
                            },
                            {
                                title: 'Kromakut',
                                desc: 'Fully-featured online video editor built for a client (Kromakut.com), enabling seamless browser-based media manipulation.',
                                tags: ['Media', 'Web App', 'SaaS'],
                                img: kromakutImg
                            }
                        ].map((project, i) => (
                            <div key={i} className={`bg-slate-950 border-4 border-slate-800 hover:border-emerald-500 transition-colors duration-300 group overflow-hidden ${i === 4 ? 'col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-1 w-full md:w-1/2 md:mx-auto lg:w-full' : ''}`}>
                                <div className="relative border-b-4 border-slate-800 group-hover:border-emerald-500 transition-colors">
                                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                                    <img src={project.img} alt={project.title} className="w-full h-72 object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute top-4 right-4 bg-slate-900 text-emerald-500 font-mono text-xs font-bold px-3 py-1 border-2 border-emerald-500 z-20">
                                        CASE 0{i + 1}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-2xl text-white font-black uppercase tracking-tight mb-3 group-hover:text-emerald-500 transition-colors">{project.title}</h4>
                                    <p className="text-slate-400 text-sm font-medium mb-6 leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className="font-mono text-xs text-slate-500 bg-slate-900 border border-slate-700 px-2 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section ref={processRef} className={`py-24 px-4 bg-[#f1f5f9] reveal-on-scroll ${processInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-mono text-slate-500 font-bold mb-4 tracking-widest uppercase">Our Process</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            Simple. Fast.<br />Effective.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0">
                        {[
                            { step: '01', icon: <MessageSquare className="w-10 h-10" />, title: 'Discovery Call', desc: 'We hop on a quick call, understand your problem, and scope out the project. No lengthy proposals.' },
                            { step: '02', icon: <Zap className="w-10 h-10" />, title: 'Rapid Build', desc: 'We start building immediately. You get weekly updates and can see progress in real-time.' },
                            { step: '03', icon: <Clock className="w-10 h-10" />, title: 'Ship & Support', desc: 'We launch your product, hand over the keys, and provide ongoing support so you\'re never stuck.' }
                        ].map((item, i) => (
                            <div key={i} className="relative p-8 border-4 border-slate-900 bg-white text-center group hover:bg-slate-900 hover:text-white transition-colors duration-300">
                                {i < 2 && <div className="hidden md:block absolute top-1/2 -right-3 z-20 w-6 h-6 bg-emerald-500 border-2 border-slate-900 rotate-45 transform -translate-y-1/2"></div>}
                                <div className="font-mono text-5xl font-black text-slate-200 group-hover:text-slate-800 mb-4 transition-colors">{item.step}</div>
                                <div className="text-emerald-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h4 className="text-xl font-black uppercase mb-3">{item.title}</h4>
                                <p className="text-slate-600 group-hover:text-slate-400 text-sm font-medium transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-100 border-t-4 border-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Stop Wasting Time.</h2>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>Start Building.</h2>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black uppercase text-lg tracking-wider hover:bg-emerald-500 hover:text-slate-900 transition-colors shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] border-4 border-slate-900">
                        Let's Talk About Your Project <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
