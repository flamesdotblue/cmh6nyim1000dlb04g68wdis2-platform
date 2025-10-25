import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";

function Caricature({ color = "#f472b6", accent = "#fb923c", name = "Candidate" }) {
  return (
    <div className="relative">
      <svg width="220" height="260" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="10" y="170" width="200" height="70" rx="16" fill="white" opacity="0.08" />
        <path d="M110 30c40 0 74 32 74 72s-34 72-74 72-74-32-74-72 34-72 74-72z" fill={color} opacity="0.2" />
        <circle cx="110" cy="110" r="64" fill={color} filter="url(#glow)" />
        {/* Head */}
        <ellipse cx="110" cy="110" rx="52" ry="58" fill="#FFE8D6" />
        {/* Hair */}
        <path d="M62 108c2-34 28-60 58-60 21 0 41 10 51 26-8-26-34-44-63-44-36 0-66 26-70 60 7 11 14 16 24 18z" fill="#2b2b2b" />
        {/* Eyes */}
        <ellipse cx="92" cy="108" rx="8" ry="10" fill="#1f2937" />
        <ellipse cx="128" cy="108" rx="8" ry="10" fill="#1f2937" />
        {/* Brows */}
        <path d="M80 96c8-8 24-10 32-8" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
        <path d="M108 88c10-2 24 0 32 8" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
        {/* Nose */}
        <path d="M110 110c-2 12-2 18 4 22" stroke="#9a6b59" strokeWidth="3" strokeLinecap="round" />
        {/* Smile */}
        <path d="M90 138c10 12 40 12 52 0" stroke="#e11d48" strokeWidth="4" strokeLinecap="round" />
        {/* Mustache */}
        <path d="M88 126c12 6 28 6 44 0" stroke="#2b2b2b" strokeWidth="5" strokeLinecap="round" />
        {/* Mundu/Shawl */}
        <path d="M20 190c22-14 70-22 90-22s68 8 90 22v30H20v-30z" fill="white" />
        <rect x="102" y="180" width="6" height="48" fill={accent} />
        <rect x="112" y="180" width="6" height="48" fill={accent} opacity="0.6" />
      </svg>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center text-xs font-semibold tracking-wide text-white/80">
        {name}
      </div>
    </div>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const glow = useMotionTemplate`radial-gradient(800px 400px at ${mx.get() * 50 + 50}% ${my.get() * 50 + 50}%, rgba(236,72,153,0.20), transparent 60%)`;

  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: glow }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-5">
              <Star className="h-3.5 w-3.5 text-amber-400" />
              Kerala Election Services • 2025 Cycle
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Caricature-powered campaigns that voters can't ignore
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              We blend art, data and on-ground experience to craft winning narratives for Kerala. Interactive caricatures, viral content, and field campaigns packaged for every budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-amber-400 text-slate-950 font-semibold shadow-lg shadow-pink-500/30">
                Explore Packages
                <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
              </a>
              <a href="#campaigns" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
                See Campaigns
                <Zap className="h-4 w-4 text-amber-300" />
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div className="relative grid grid-cols-3 gap-4"
              style={{ perspective: 1000 }}>
              {[
                { color: "#f472b6", accent: "#fb923c", name: "Leader A" },
                { color: "#60a5fa", accent: "#34d399", name: "Leader B" },
                { color: "#a78bfa", accent: "#f59e0b", name: "Leader C" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  drag
                  dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                  whileHover={{ rotate: i === 1 ? 2 : -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="col-span-1 rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur hover:bg-white/10 transition shadow-lg"
                >
                  <Caricature color={c.color} accent={c.accent} name={c.name} />
                </motion.div>
              ))}
            </motion.div>

            <div className="absolute -inset-x-8 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-slate-950" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingBits />
      </div>
    </section>
  );
}

function FloatingBits() {
  const items = Array.from({ length: 28 }).map((_, i) => ({
    delay: (i % 7) * 0.6,
    x: (i * 37) % 100,
    size: 6 + (i % 5) * 2,
    color: i % 3 === 0 ? "bg-pink-400" : i % 3 === 1 ? "bg-amber-300" : "bg-sky-400",
  }));
  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((b, i) => (
        <motion.span
          key={i}
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: [-20, -60, -120, -180, -240, -300], opacity: [0, 0.6, 0.9, 0.8, 0.5, 0] }}
          transition={{ duration: 12 + (i % 5), delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${b.color} rounded-full blur-sm`}
          style={{ left: `${b.x}%`, width: b.size, height: b.size }}
        />
      ))}
    </div>
  );
}
