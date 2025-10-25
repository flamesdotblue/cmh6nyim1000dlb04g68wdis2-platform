import React from "react";
import { Rocket, Star, CheckCircle, Shield } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    badge: "For Ward/Local",
    price: "₹19,999",
    color: "from-sky-500 to-emerald-400",
    features: [
      "3 custom caricatures",
      "10 social media posts",
      "WhatsApp broadcast kit",
      "Basic sentiment scan",
    ],
  },
  {
    name: "Growth",
    badge: "For Constituency",
    price: "₹59,999",
    color: "from-pink-500 to-amber-400",
    features: [
      "7 custom caricatures",
      "30 social media posts",
      "Micro-video reels pack",
      "Field poster set + cutouts",
      "Daily performance dashboard",
    ],
    popular: true,
  },
  {
    name: "Victory",
    badge: "For State-wide",
    price: "₹1,49,999",
    color: "from-violet-500 to-fuchsia-400",
    features: [
      "Unlimited caricatures",
      "Ad campaign management",
      "Ground team coordination",
      "Data-driven narrative lab",
      "Rapid response war-room",
    ],
    premium: true,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-5">
            <Rocket className="h-3.5 w-3.5 text-sky-300" />
            Packages that scale with ambition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Pick your winning stack</h2>
          <p className="mt-3 text-white/70">All packages include Kerala-focused creatives, English/Malayalam copy, and performance tracking.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 ${t.popular ? "ring-2 ring-pink-400/50" : ""} ${t.premium ? "shadow-xl shadow-fuchsia-500/20" : ""}`}>
              {t.popular && (
                <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-amber-400 text-slate-950 font-semibold">
                  Most Popular
                </div>
              )}
              {t.premium && (
                <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 text-slate-950 font-semibold">
                  Pro Choice
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/60">{t.badge}</div>
                  <h3 className="text-2xl font-bold">{t.name}</h3>
                </div>
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                  <Star className="h-5 w-5 text-slate-950" />
                </div>
              </div>
              <div className="mt-4 text-3xl font-extrabold">{t.price}<span className="text-sm text-white/60 font-normal">/month</span></div>
              <ul className="mt-5 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/85">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${t.color} text-slate-950 font-semibold`}>
                Get this package
              </a>
              <div className="mt-3 text-xs text-white/50 flex items-center gap-2"><Shield className="h-3.5 w-3.5" /> 7-day satisfaction guarantee</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
