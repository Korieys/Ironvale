import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Users, Globe, Zap, Sparkles } from 'lucide-react';
import tailorImg from '../assets/tailor.png';
import atumImg from '../assets/atum.png';
import jobpeelImg from '../assets/jobpeel.png';
import myscouterImg from '../assets/myscouter.png';
import ryloImg from '../assets/rylo.png';

export default function About() {
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

    const [headerRef, headerInView] = useIntersectionObserver();
    const [missionRef, missionInView] = useIntersectionObserver();
    const [portfolioRef, portfolioInView] = useIntersectionObserver();
    const [ctaRef, ctaInView] = useIntersectionObserver();

    const projects = [
        {
            title: 'Atum',
            tagline: 'CREATIVE COMMAND CENTER',
            url: 'https://atum.work',
            description: [
                'Atum is your creative command center that turns building in public into a natural part of the product development process. It helps solo developers, indie hackers, and small teams document progress, publish across multiple platforms, and create bite sized content without slowing down momentum. Atum tracks your work, generates updates, summarizes long work sessions, and turns raw progress into polished posts.',
                'Its deeper value comes from its ecosystem. You get smart progress tracking, multi platform publishing, video creation, content repurposing, and a privacy and control layer so you can choose what stays private and what gets published. Atum becomes a force multiplier for creative output and a silent operating system for anyone shipping products consistently.'
            ],
            features: ['Smart progress tracking', 'Multi-platform publishing', 'Video creation & repurposing', 'Privacy & control layer'],
            img: atumImg,
        },
        {
            title: 'Tailor',
            tagline: 'OUTREACH ENGINE',
            url: '#',
            description: [
                'Tailor is your outreach engine built for founders who want to move fast. It scans a company’s website and creates personalized messages for cold outreach, pitch intros, and value forward communication in minutes. Instead of generic templates, Tailor generates messages that reference actual pages, services, positioning, or gaps in the prospect’s business so every touch feels relevant and intentional.',
                'It helps you contact more companies with higher accuracy. Tailor produces short scripts, multi step sequences, and targeted talking points that feel handcrafted without the time cost. It becomes a power tool for solopreneurs who want to move volume without sacrificing personalization, giving you the speed of automation with the precision of real research.'
            ],
            features: ['Website scanning & analysis', 'Personalized message generation', 'Multi-step sequences', 'Targeted talking points'],
            img: tailorImg,
        },
        {
            title: 'JobPeel',
            tagline: 'CAREER PLATFORM',
            url: 'https://jobpeel.com',
            description: [
                'JobPeel is the career center in a box. It gives students, bootcamps, and university programs an instant upgrade in job search outcomes. The platform generates tailored cover letters, rewrites resumes to be job specific, and prepares users for interviews with AI driven scripts and coaching. Schools use it to improve placement rates while lowering the workload for staff.',
                'It is designed as a wedge product for institutions. It gives programs a fast way to boost outcomes, offer a modern AI powered career service, and support large groups of students without requiring heavy staffing. Job seekers get an easier path. Schools get a scalable advantage. Administrators get a clear value add for their programs.'
            ],
            features: ['AI cover letter generation', 'Smart resume rewriting', 'Interview prep & coaching', 'Institutional scalability'],
            img: jobpeelImg,
        },
        {
            title: 'MyScouter',
            tagline: 'DESIGN UTILITY',
            url: 'https://www.myscouter.app',
            description: [
                'MyScouter is an asset scout for creators and builders. Its goal is to eliminate the chore of gathering screenshots, product shots, UI assets, and marketing visuals. You provide the link to your product and MyScouter automatically fetches the assets needed for your portfolio, case studies, and social posts.',
                'This saves time for solopreneurs who build frequently and need clean visuals for every launch. MyScouter becomes a creative assistant that collects everything you need for your portfolio or marketing so you can stay focused on building instead of formatting and staging screenshots.'
            ],
            features: ['Automatic screenshots', 'Clean portfolio images', 'Ready for social media', 'One-link asset fetching'],
            img: myscouterImg,
        },
        {
            title: 'Rylo',
            tagline: 'VIDEO EDITOR',
            url: 'https://www.rylo.space',
            description: [
                'Rylo makes editing product demos effortless. It sits between Loom and Tella by letting you record with whatever tool you want but edit with Rylo’s AI powered editor. You can generate captions, cut fluff automatically, highlight key actions, and polish your product walkthroughs without spending hours editing.',
                'Rylo is built for founders, devs, and makers who ship fast. You can rapidly create clean demos for landing pages, outreach, or launch videos while keeping the entire process simple. It positions itself as the tool creators go to when they want their demos to look polished without needing a full editing workflow.'
            ],
            features: ['AI auto-captions', 'Smart dead-space removal', 'Key action highlighting', 'One-click polish'],
            img: ryloImg,
        }
    ];

    return (
        <div className="bg-[#f1f5f9] min-h-screen">
            <Helmet>
                <title>About Us | Ironvale Works</title>
                <meta name="description" content="Ironvale is the home of unfair speed. Explore our ecosystem of digital products designed for momentum." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-slate-950 text-[#f1f5f9] pt-24 pb-32 px-4 border-b-4 border-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
                {/* Decorative corner blocks */}
                <div className="absolute top-8 left-8 w-16 h-16 border-4 border-emerald-500 opacity-30 hidden lg:block"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-emerald-500 opacity-10 hidden lg:block"></div>

                <div ref={headerRef} className={`max-w-5xl mx-auto relative z-10 reveal-on-scroll ${headerInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                    <div className="inline-block bg-emerald-500 text-slate-950 font-mono font-bold px-4 py-2 text-sm mb-8 tracking-widest border-2 border-emerald-400">
                        WHO WE ARE
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        The Home of<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #10b981' }}>Unfair Speed.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-3xl leading-relaxed border-l-4 border-emerald-500 pl-6">
                        The world doesn't reward the talented. It rewards the fast. Ironvale exists to make you faster than anyone else in your market by building software that acts as an acceleration engine.
                    </p>
                </div>
            </section>

            {/* Hazard Strip */}
            <div className="h-6 w-full bg-[repeating-linear-gradient(-45deg,#10b981,#10b981_10px,#0f172a_10px,#0f172a_20px)] border-b-4 border-slate-900"></div>

            {/* Mission / Values */}
            <section ref={missionRef} className={`py-24 px-4 bg-[#f1f5f9] relative overflow-hidden reveal-on-scroll ${missionInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-mono text-slate-500 font-bold mb-4 tracking-widest uppercase">Our Philosophy</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            This Is <br />Acceleration.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Zap className="w-10 h-10" />, title: 'Unfair Speed', desc: 'Build products before others finish planning. Execute without hesitation and move with compounding momentum.' },
                            { icon: <Sparkles className="w-10 h-10" />, title: 'Absolute Precision', desc: 'Fast doesn’t mean broken. Every pixel and interaction is crafted to behave exactly as you expect.' },
                            { icon: <Users className="w-10 h-10" />, title: 'Force Multipliers', desc: 'We build systems that act as levers for human ambition, maximizing the output of every operator on your team.' },
                            { icon: <Globe className="w-10 h-10" />, title: 'Global Identity', desc: 'Your tools should give you an edge and an identity. We create software that gives you an unbeatable aura.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#10b981] transition-all duration-300 group">
                                <div className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h4 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="bg-slate-950 text-[#f1f5f9] py-24 border-y-4 border-slate-900">
                <div ref={portfolioRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll ${portfolioInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-4 border-slate-800 pb-8">
                        <div>
                            <h2 className="font-mono text-emerald-500 font-bold mb-4 tracking-widest uppercase">Our Products</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                The Ironvale<br />Ecosystem.
                            </h3>
                        </div>
                        <div className="mt-8 md:mt-0 text-right font-mono text-slate-600 hidden md:block">
                            <p>PRODUCTS: {projects.length}</p>
                            <p>STATUS: ACTIVE</p>
                            <p>MODE: SHIPPING</p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div key={project.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-stretch bg-slate-900 border-2 border-slate-800 group hover:border-emerald-500 transition-colors duration-300`}>
                                {/* Image */}
                                <div className="w-full lg:w-1/2 relative overflow-hidden">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover min-h-[280px] group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-0 left-0 bg-emerald-500 text-slate-900 font-mono text-xs font-bold px-3 py-1 border-b-2 border-r-2 border-slate-900">
                                        0{index + 1}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                                    <p className="font-mono text-xs text-emerald-500 font-bold mb-2 tracking-widest">{project.tagline}</p>
                                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 group-hover:text-emerald-500 transition-colors duration-300">{project.title}</h4>
                                    <div className="text-slate-400 font-medium mb-6 leading-relaxed space-y-4">
                                        {Array.isArray(project.description) ? project.description.map((p, i) => <p key={i}>{p}</p>) : <p>{project.description}</p>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {project.features.map((feat, fi) => (
                                            <div key={fi} className="font-mono text-xs text-slate-500 flex items-start gap-2">
                                                <span className="text-emerald-500 mt-0.5">▸</span> {feat}
                                            </div>
                                        ))}
                                    </div>
                                    {project.url !== '#' ? (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-mono font-bold uppercase text-sm hover:bg-emerald-500 hover:text-slate-900 transition-colors w-fit border border-slate-700 hover:border-slate-900">
                                            Visit {project.title} <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    ) : (
                                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-500 font-mono font-bold uppercase text-sm w-fit border border-slate-700 cursor-not-allowed">
                                            {project.title} (Coming Soon)
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className={`py-24 bg-emerald-500 text-slate-900 border-b-4 border-slate-900 reveal-on-scroll ${ctaInView ? 'is-revealed animate-fade-in-up' : ''}`}>
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Ready To Move<br />Faster Than<br />Everyone Else?</h2>
                    <p className="font-mono text-lg font-bold mb-10 max-w-2xl mx-auto">WE'RE ALWAYS LOOKING FOR INTERESTING PROBLEMS TO SOLVE.</p>
                    <Link to="/contact" className="inline-block px-10 py-5 bg-slate-900 text-white font-black uppercase text-lg tracking-wider hover:bg-white hover:text-slate-900 transition-colors shadow-[8px_8px_0px_0px_rgba(24,24,27,0.3)] border-4 border-slate-900">
                        Accelerate Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
