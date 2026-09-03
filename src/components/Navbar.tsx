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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-lg bg-teal-600 flex items-center justify-center text-white group-hover:bg-teal-700 transition-colors">
            <HeartPulse className="h-[18px] w-[18px]" />
          </div>
          <span className="font-bold text-[17px] tracking-tight text-slate-900">
            MedGrid
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-500">
          <a href="#features" className="hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">
            How it Works
          </a>
          <a href="#biomedical" className="hover:text-slate-900 transition-colors">
            Biomedical
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link href="/doctor">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-[13px] font-medium h-8 px-3"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/patient">
            <Button
              variant="teal"
              size="sm"
              className="text-[13px] font-semibold h-8 px-4 gap-1.5 rounded-lg shadow-none"
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
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {["Features", "How it Works", "Biomedical"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link href="/doctor" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="sm" className="w-full text-xs">
                Sign In
              </Button>
            </Link>
            <Link href="/patient" onClick={() => setMobileOpen(false)}>
              <Button variant="teal" size="sm" className="w-full text-xs">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
