import React from "react";
import { Megaphone, Users, MapPin, Award, ThumbsUp } from "lucide-react";

const services = [
  {
    title: "Ground Rally Kit",
    icon: Megaphone,
    desc: "Stage backdrops, inflatable caricatures, route banners, and emcee scripts tailored for Kerala rallies.",
    hue: "from-pink-500 to-rose-400",
  },
  {
    title: "House Visit Engine",
    icon: Users,
    desc: "Door-to-door pamphlets with caricatures, volunteer talking points, and geotargeted booth sheets.",
    hue: "from-emerald-400 to-sky-400",
  },
  {
    title: "Constituency Heatmap",
    icon: MapPin,
    desc: "Polling-booth segmentation and priority clusters visualized for smarter resource allocation.",
    hue: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Viral Reel Factory",
    icon: ThumbsUp,
    desc: "Short-form caricature reels and meme kits optimized for Malayalam + English audiences.",
    hue: "from-amber-400 to-pink-500",
  },
  {
    title: "Candidate Brand Audit",
    icon: Award,
    desc: "Narrative positioning, symbol usage, and promise matrix benchmarked against rivals.",
    hue: "from-sky-400 to-emerald-400",
  },
];

export default function Campaigns() {
  return (
    <section id="campaigns" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-5">
            <Megaphone className="h-3.5 w-3.5 text-pink-300" />
            Campaign blueprints that convert
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Signature Campaigns</h2>
          <p className="mt-3 text-white/70">Mix and match services to build a high-impact road to victory across Kerala's diverse electorate.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${s.hue} opacity-20 blur-2xl group-hover:opacity-30 transition`} />
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${s.hue} flex items-center justify-center`}>
                <s.icon className="h-5 w-5 text-slate-950" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-pink-300 hover:text-pink-200 text-sm">Add to plan →</a>
            </div>
          ))}
        </div>

        <ContactBlock />
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <div id="contact" className="mt-14 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(251,191,36,0.12),transparent_40%)]" />
      <div className="relative grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold">Let's tailor your Kerala campaign</h3>
          <p className="mt-2 text-white/70">Share your goals and constraints. We'll propose a caricature-first plan with budget options in 24 hours.</p>
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input required name="name" placeholder="Full name" className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-pink-400/50" />
          <input required name="phone" placeholder="Phone / WhatsApp" className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-pink-400/50" />
          <input name="location" placeholder="Constituency / District" className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-pink-400/50 sm:col-span-2" />
          <textarea name="notes" placeholder="What do you need?" rows={3} className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-pink-400/50 sm:col-span-2" />
          <button type="submit" className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-amber-400 text-slate-950 font-semibold">Request Proposal</button>
        </form>
      </div>
    </div>
  );
}
