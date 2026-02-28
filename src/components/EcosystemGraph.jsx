import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Settings, Server, Activity, Cpu, PenTool, Briefcase, Camera, Video, MonitorDot, AppWindowMac
} from 'lucide-react';

const NODES = [
    // B2B Services
    { id: 'b2b-1', label: 'Simple Website', desc: 'Informational site', icon: MonitorDot, angle: -150, dist: 155, type: 'B2B', tag: 'WEBSITE' },
    { id: 'b2b-2', label: 'Web Application', desc: 'Portal & Dashboard', icon: AppWindowMac, angle: -180, dist: 170, type: 'B2B', tag: 'WEB APP' },
    { id: 'b2b-3', label: 'Custom Software', desc: 'Complex web platforms', icon: Cpu, angle: 150, dist: 155, type: 'B2B', tag: 'SYSTEMS' },
    // B2C Products
    { id: 'b2c-1', label: 'Atum', desc: 'Creative command center', icon: PenTool, angle: -40, dist: 145, type: 'B2C', tag: 'CREATE' },
    { id: 'b2c-2', label: 'JobPeel', desc: 'AI career platform', icon: Briefcase, angle: 0, dist: 170, type: 'B2C', tag: 'CAREERS' },
    { id: 'b2c-3', label: 'MyScouter', desc: 'Asset collection tool', icon: Camera, angle: 40, dist: 145, type: 'B2C', tag: 'UTILITY' },
    { id: 'b2c-4', label: 'Rylo', desc: 'Smart video editing', icon: Video, angle: 80, dist: 155, type: 'B2C', tag: 'MEDIA' },
];

// Floating particle component
function Particle({ delay, duration, x1, y1, x2, y2, color }) {
    return (
        <circle r="1.5" fill={color} opacity="0.6">
            <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
                path={`M ${x1} ${y1} L ${x2} ${y2}`}
            />
            <animate
                attributeName="opacity"
                values="0;0.8;0.8;0"
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
            />
        </circle>
    );
}

export default function EcosystemGraph() {
    const [activeNode, setActiveNode] = useState(null);
    const [dimensions, setDimensions] = useState({ w: 500, h: 450 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setDimensions({ w: rect.width, h: rect.height });
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const cx = dimensions.w / 2;
    const cy = dimensions.h / 2;

    const getNodePos = useCallback((node) => {
        const rad = (node.angle * Math.PI) / 180;
        return {
            x: cx + Math.cos(rad) * node.dist,
            y: cy + Math.sin(rad) * node.dist,
        };
    }, [cx, cy]);

    const isB2B = (id) => id.startsWith('b2b');

    return (
        <div
            ref={containerRef}
            className="bg-slate-950 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] relative w-full h-[480px] flex items-center justify-center overflow-hidden select-none"
        >
            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/2 w-32 h-6 bg-emerald-500/80 -rotate-2 -translate-x-1/2 z-30"></div>

            {/* Layered backgrounds */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none"></div>

            {/* SVG Layer — connections, particles, orbital rings */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Gradient for B2B lines */}
                    <linearGradient id="b2bGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
                    </linearGradient>
                    {/* Gradient for B2C lines */}
                    <linearGradient id="b2cGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
                    </linearGradient>
                </defs>

                {/* Orbital rings */}
                <circle cx={cx} cy={cy} r="100" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 6" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="60s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="155" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 8" opacity="0.35">
                    <animateTransform attributeName="transform" type="rotate" from={`360 ${cx} ${cy}`} to={`0 ${cx} ${cy}`} dur="90s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="210" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="1 10" opacity="0.2">
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="120s" repeatCount="indefinite" />
                </circle>

                {/* Connection lines */}
                {NODES.map((node) => {
                    const pos = getNodePos(node);
                    const isActive = activeNode === node.id || activeNode === 'center';
                    const isThisActive = activeNode === node.id;
                    const b2b = isB2B(node.id);
                    return (
                        <g key={`conn-${node.id}`}>
                            {/* Main connection line */}
                            <line
                                x1={cx} y1={cy}
                                x2={pos.x} y2={pos.y}
                                stroke={isActive ? (b2b ? '#10b981' : '#94a3b8') : '#1e293b'}
                                strokeWidth={isThisActive ? 2.5 : 1.5}
                                strokeDasharray={isActive ? 'none' : '4 6'}
                                opacity={isActive ? (isThisActive ? 1 : 0.4) : 0.5}
                                filter={isThisActive ? 'url(#glow)' : 'none'}
                                style={{ transition: 'all 0.4s ease' }}
                            />
                            {/* Animated dot traveling along the line */}
                            {isThisActive && (
                                <>
                                    <circle r="3" fill={b2b ? '#10b981' : '#e2e8f0'} filter="url(#glow)">
                                        <animateMotion
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                            path={`M ${cx} ${cy} L ${pos.x} ${pos.y}`}
                                        />
                                    </circle>
                                    <circle r="2" fill={b2b ? '#10b981' : '#e2e8f0'} filter="url(#glow)">
                                        <animateMotion
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                            begin="0.75s"
                                            path={`M ${pos.x} ${pos.y} L ${cx} ${cy}`}
                                        />
                                    </circle>
                                </>
                            )}
                        </g>
                    );
                })}

                {/* Ambient floating particles */}
                {NODES.map((node, i) => {
                    const pos = getNodePos(node);
                    const b2b = isB2B(node.id);
                    return (
                        <Particle
                            key={`particle-${node.id}`}
                            delay={i * 1.2}
                            duration={4 + i * 0.5}
                            x1={cx}
                            y1={cy}
                            x2={pos.x}
                            y2={pos.y}
                            color={b2b ? '#10b981' : '#94a3b8'}
                        />
                    );
                })}

                {/* Center glow */}
                <circle
                    cx={cx} cy={cy} r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1"
                    opacity={activeNode === 'center' ? 0.6 : 0.15}
                    filter="url(#glowStrong)"
                    style={{ transition: 'opacity 0.5s' }}
                >
                    <animate attributeName="r" values="38;44;38" dur="3s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* Orbiting Nodes */}
            {NODES.map((node) => {
                const pos = getNodePos(node);
                const isActive = activeNode === node.id;
                const isCenterActive = activeNode === 'center';
                const anyOtherActive = activeNode && activeNode !== node.id && activeNode !== 'center';
                const b2b = isB2B(node.id);

                return (
                    <div
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        className="absolute cursor-pointer"
                        style={{
                            left: `${pos.x}px`,
                            top: `${pos.y}px`,
                            transform: `translate(-50%, -50%) scale(${isActive ? 1.15 : 1})`,
                            zIndex: isActive ? 30 : 10,
                            opacity: anyOtherActive ? 0.35 : 1,
                            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease',
                        }}
                    >
                        {/* Node body */}
                        <div
                            className={`relative w-14 h-14 flex items-center justify-center border-2 transition-all duration-300
                ${isActive
                                    ? (b2b
                                        ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                        : 'bg-slate-800 border-slate-300 shadow-[0_0_20px_rgba(148,163,184,0.25)]')
                                    : 'bg-slate-900 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]'
                                }`}
                        >
                            {/* Pulse ring on hover */}
                            {isActive && (
                                <span
                                    className="absolute inset-0 border-2 animate-ping pointer-events-none"
                                    style={{
                                        borderColor: b2b ? 'rgba(16,185,129,0.3)' : 'rgba(148,163,184,0.2)',
                                        animationDuration: '1.5s',
                                    }}
                                />
                            )}
                            <node.icon
                                className={`w-6 h-6 transition-all duration-300 ${isActive
                                    ? (b2b ? 'text-emerald-400 scale-110' : 'text-white scale-110')
                                    : (b2b ? 'text-emerald-500/70' : 'text-slate-400')
                                    }`}
                            />
                        </div>

                        {/* Expanded tooltip on hover */}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 mt-2 px-4 py-3 border-2 bg-slate-950/95 backdrop-blur-md flex flex-col items-center text-center pointer-events-none w-max min-w-[140px] transition-all duration-300
                ${isActive
                                    ? (b2b
                                        ? 'opacity-100 translate-y-0 border-emerald-500/50 shadow-[0_4px_20px_rgba(16,185,129,0.15)]'
                                        : 'opacity-100 translate-y-0 border-slate-500/50 shadow-[0_4px_20px_rgba(148,163,184,0.1)]')
                                    : 'opacity-0 -translate-y-2 border-slate-800'
                                }`}
                        >
                            <span className={`text-[9px] font-mono uppercase tracking-[0.2em] block mb-1 ${b2b ? 'text-emerald-500' : 'text-slate-500'}`}>
                                {node.type} · {node.tag}
                            </span>
                            <span className="text-sm font-black text-white uppercase tracking-tight whitespace-nowrap">{node.label}</span>
                            <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">{node.desc}</span>
                        </div>
                    </div>
                );
            })}

            {/* Central Node */}
            <div
                className="absolute z-20 cursor-pointer group"
                style={{ left: `${cx}px`, top: `${cy}px`, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('center')}
                onMouseLeave={() => setActiveNode(null)}
            >
                {/* Outer hexagonal-like container */}
                <div className={`relative w-[88px] h-[88px] flex items-center justify-center border-4 transition-all duration-500
          ${activeNode === 'center'
                        ? 'bg-slate-900 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.25)]'
                        : 'bg-slate-900 border-slate-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]'
                    }`}
                >
                    {/* Inner ring */}
                    <div className={`absolute inset-2 border-2 transition-all duration-500 ${activeNode === 'center' ? 'border-emerald-500/30' : 'border-slate-800/50'}`}></div>

                    <Settings
                        className={`w-10 h-10 text-emerald-500 transition-all duration-700 ${activeNode === 'center' ? 'rotate-[270deg] scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`}
                    />

                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500/40"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500/40"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500/40"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500/40"></span>
                </div>

                {/* Label below center */}
                <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 px-4 py-2 border-2 bg-slate-950/90 backdrop-blur-sm whitespace-nowrap transition-all duration-300
          ${activeNode === 'center'
                        ? 'border-emerald-500/50 shadow-[0_4px_20px_rgba(16,185,129,0.15)]'
                        : 'border-slate-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]'
                    }`}
                >
                    <span className="font-black text-white uppercase tracking-wider text-sm flex items-center">
                        <span className={`w-2 h-2 inline-block mr-2 transition-colors duration-300 ${activeNode === 'center' ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-500'}`}></span>
                        Ironvale Studio
                    </span>
                </div>
            </div>

            {/* HUD Overlays */}
            {/* Top-right */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 border border-slate-800 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em]">Ecosystem Active</span>
            </div>

            {/* Bottom-left */}
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-slate-700 hidden sm:flex flex-col gap-0.5 z-10">
                <span>sys.status: <span className="text-emerald-500/60">OK</span></span>
                <span>nodes.active: <span className={activeNode ? 'text-emerald-400' : 'text-slate-600'}>{activeNode ? '1' : '0'}</span>/{NODES.length}</span>
            </div>

            {/* Bottom-right — B2B/B2C legend */}
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-slate-700 hidden sm:flex flex-col items-end gap-1 z-10">
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-[2px] bg-emerald-500/60 inline-block"></span> Enterprise
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-[2px] bg-slate-400/60 inline-block"></span> Consumer
                </span>
            </div>
        </div>
    );
}
