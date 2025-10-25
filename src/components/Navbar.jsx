import React from "react";
import { Megaphone, ShoppingCart, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500 to-amber-400 flex items-center justify-center shadow-lg shadow-pink-500/30">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight">ElectionCart Kerala</div>
            <div className="text-xs text-white/60 -mt-0.5">Caricature-driven campaign studio</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#campaigns" className="hover:text-white">Campaigns</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#packages" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition border border-white/10">
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">Buy Packages</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-amber-400 text-slate-950 font-semibold">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Book a Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
