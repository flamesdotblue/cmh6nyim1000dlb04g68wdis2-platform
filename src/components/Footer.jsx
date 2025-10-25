import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/70 grid sm:grid-cols-2 gap-4">
        <div>
          <div className="font-semibold text-white">ElectionCart Kerala</div>
          <p className="mt-1">Creative studio for caricature-led political communication, designed for Kerala's electorate.</p>
        </div>
        <div className="sm:text-right text-white/60">
          © {new Date().getFullYear()} ElectionCart Kerala. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
