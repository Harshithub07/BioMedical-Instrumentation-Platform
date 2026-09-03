"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeartPulse, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
            <HeartPulse className="h-[18px] w-[18px]" />
          </div>
          <span className="font-bold text-[17px] tracking-tight text-slate-900">
            MedGrid
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-500">
          {[
            ["Features", "#features"],
            ["Live Demo", "#live-demo"],
            ["How it Works", "#how-it-works"],
            ["Biomedical", "#biomedical"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-teal-700 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-teal-500 after:transition-all after:duration-300 after:rounded-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link href="/doctor">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 text-[13px] font-medium h-8 px-3 rounded-lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/patient">
            <Button
              variant="teal"
              size="sm"
              className="text-[13px] font-semibold h-8 px-4 gap-1.5 rounded-lg shadow-sm shadow-teal-600/20"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col gap-0.5 text-sm font-medium text-slate-700">
            {["Features", "Live Demo", "How it Works", "Biomedical"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link href="/doctor" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="sm" className="w-full text-xs">Sign In</Button>
            </Link>
            <Link href="/patient" onClick={() => setMobileOpen(false)}>
              <Button variant="teal" size="sm" className="w-full text-xs">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
