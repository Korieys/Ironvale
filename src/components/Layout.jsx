import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Settings, ArrowUpRight } from 'lucide-react';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Update time for the "System Status" bar
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Update Document Title based on route
    useEffect(() => {
        const routeTitles = {
            '/': 'Ironvale Works | Home',
            '/about': 'Ironvale Works | About Us',
            '/services': 'Ironvale Works | B2B Services',
            '/contact': 'Ironvale Works | Start a Project',
            '/admin': 'Ironvale Works | Command Center',
            '/privacy': 'Ironvale Works | Privacy Policy',
            '/terms': 'Ironvale Works | Terms of Service'
        };
        document.title = routeTitles[location.pathname] || 'Ironvale Works';
    }, [location]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Scroll detection for navbar shadow & background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#f1f5f9] text-slate-900 font-sans selection:bg-emerald-500 selection:text-slate-900 flex flex-col">

            {/* System Status Top Bar */}
            <div className="bg-slate-900 text-emerald-500 font-mono text-xs py-1.5 px-4 flex justify-between items-center border-b-4 border-slate-900 uppercase tracking-widest overflow-hidden">
                <div className="flex space-x-6 whitespace-nowrap animate-marquee">
                    <span>SYSTEM: ONLINE</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="hidden sm:inline">CAPACITY: OPTIMAL</span>
                    <span className="hidden md:inline">|</span>
                    <span className="hidden md:inline">READY FOR PROJECTS</span>
                </div>
                <div className="whitespace-nowrap ml-4 pl-4 border-l border-slate-700 bg-slate-900 z-10">
                    {currentTime}
                </div>
            </div>

            {/* Navigation */}
            <nav className={`border-b-4 border-slate-900 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f1f5f9]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]' : 'bg-[#f1f5f9]'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-stretch h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center group">
                            <div className={`w-10 h-10 flex items-center justify-center mr-3 transition-all duration-500 ${isActive('/') ? 'bg-emerald-500 rotate-90' : 'bg-slate-900 group-hover:bg-emerald-500 group-hover:rotate-90'}`}>
                                <Settings className={`w-6 h-6 transition-colors duration-500 ${isActive('/') ? 'text-slate-900' : 'text-[#f1f5f9] group-hover:text-slate-900'}`} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase">
                                Ironvale<span className="text-emerald-600 font-mono font-bold tracking-normal text-xl ml-1">/Works</span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-stretch">
                            <style>{`
                                .hover-bg-delay { opacity: 0; transition: opacity 0.3s ease 0s; }
                                .group:hover .hover-bg-delay { opacity: 1; transition: opacity 0.3s ease 3.5s; }
                                
                                @keyframes fadeInDelay { to { opacity: 1; } }
                                .active-bg-delay { opacity: 0; animation: fadeInDelay 0.3s ease 3.5s forwards; }
                            `}</style>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`relative px-6 border-l-4 border-slate-900 font-mono font-bold text-sm uppercase flex items-center group text-slate-900`}
                                >
                                    {/* Background fill - delays fading in on hover or when becoming active */}
                                    <span className={`absolute inset-0 bg-emerald-500 ${isActive(link.to) ? 'active-bg-delay' : 'hover-bg-delay'}`}></span>

                                    <span className="relative z-10">{link.label}</span>

                                    {/* Active indicator bar — shows immediately */}
                                    <span className={`absolute z-10 bottom-0 left-0 w-full h-1.5 bg-emerald-500 transition-transform duration-300 origin-left ${isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link
                                to="/contact"
                                className={`px-8 border-l-4 border-slate-900 font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group ${isActive('/contact') ? 'bg-emerald-600 text-slate-900' : 'bg-slate-900 text-white hover:bg-emerald-500 hover:text-slate-900'}`}
                            >
                                Get Started
                                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center border-l-4 border-slate-900 pl-4">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="relative w-10 h-10 bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-900 transition-colors"
                            >
                                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                                <X className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'}`} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`md:hidden fixed inset-0 top-[calc(4rem+38px)] bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setMobileMenuOpen(false)}
                ></div>

                {/* Mobile Menu Panel */}
                <div className={`md:hidden fixed top-[calc(4rem+38px)] right-0 w-80 max-w-[85vw] h-[calc(100vh-4rem-38px)] bg-[#f1f5f9] border-l-4 border-slate-900 z-50 flex flex-col transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    {/* Mobile Nav Links */}
                    <div className="flex-1 flex flex-col">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-left p-5 border-b-4 border-slate-900 font-mono uppercase font-bold text-sm flex items-center justify-between transition-all duration-300 ${isActive(link.to) ? 'bg-emerald-500 text-slate-900' : 'hover:bg-emerald-50 hover:pl-7'}`}
                                style={{ transitionDelay: mobileMenuOpen ? `${i * 50}ms` : '0ms' }}
                            >
                                <span className="flex items-center gap-3">
                                    <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                                    {link.label}
                                </span>
                                {isActive(link.to) && <span className="w-2 h-2 bg-slate-900"></span>}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <Link
                            to="/contact"
                            className="p-5 bg-slate-900 text-white font-bold uppercase tracking-wider flex items-center justify-between hover:bg-emerald-500 hover:text-slate-900 transition-colors border-b-4 border-slate-900"
                        >
                            <span className="flex items-center gap-3">
                                <span className="font-mono text-xs text-slate-500">03</span>
                                Get Started
                            </span>
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Mobile Footer Info */}
                    <div className="p-5 border-t-4 border-slate-900 bg-slate-50">
                        <div className="font-mono text-xs text-slate-500 space-y-1">
                            <p>STATUS: ACCEPTING PROJECTS</p>
                            <p>RESPONSE: &lt; 24 HOURS</p>
                            <p className="text-emerald-600 font-bold">Email: ironvale.works</p>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Brutalist Footer */}
            <footer className="bg-slate-950 text-slate-500 font-mono py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b-2 border-slate-800 pb-12">

                        <div className="lg:col-span-2">
                            <div className="text-white font-black uppercase text-2xl tracking-tighter mb-4 flex items-center">
                                <div className="w-4 h-4 bg-emerald-500 mr-2"></div>
                                Ironvale/Works
                            </div>
                            <p className="text-sm max-w-sm">
                                CUSTOM SOFTWARE DEVELOPMENT &<br />
                                INNOVATIVE DIGITAL PRODUCTS.<br />
                                WORKING GLOBALLY.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-slate-300 font-bold uppercase mb-4">Links</h4>
                            <ul className="space-y-2 text-sm flex flex-col">
                                <Link to="/about" className="hover:text-emerald-500 w-fit">/ABOUT_US</Link>
                                <Link to="/services" className="hover:text-emerald-500 w-fit">/SERVICES</Link>
                                <Link to="/contact" className="hover:text-emerald-500 w-fit">/GET_STARTED</Link>
                                <Link to="/admin" className="hover:text-emerald-500 w-fit">/ADMIN_PORTAL</Link>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-300 font-bold uppercase mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm flex flex-col">
                                <Link to="/privacy" className="hover:text-emerald-500 w-fit">/PRIVACY_POLICY</Link>
                                <Link to="/terms" className="hover:text-emerald-500 w-fit">/TERMS_OF_SERVICE</Link>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center text-xs">
                        <p>ID: IRV-WORKS-{new Date().getFullYear()} // ALL SYSTEMS ACTIVE</p>
                        <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} IRONVALE WORKS LLC.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
