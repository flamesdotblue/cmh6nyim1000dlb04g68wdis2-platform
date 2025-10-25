import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Campaigns from "./components/Campaigns";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Packages />
        <Campaigns />
      </main>
      <Footer />
    </div>
  );
}
