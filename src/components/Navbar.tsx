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
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/60 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      {/* Full width container so elements naturally sit at left and right edges */}
      <div className="w-full px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
        {/* Left: Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="h-9 w-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm shadow-teal-600/30 group-hover:bg-teal-700 transition-colors">
            <HeartPulse className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            MedGrid
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-slate-600">
          {[
            ["Features", "#features"],
            ["Live Demo", "#live-demo"],
            ["How it Works", "#how-it-works"],
            ["Biomedical", "#biomedical"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-teal-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-200 after:rounded-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: Auth CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link href="/doctor">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 hover:text-teal-700 hover:bg-slate-100 text-sm font-medium h-9 px-3.5 rounded-lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/patient">
            <Button
              variant="teal"
              size="sm"
              className="text-sm font-semibold h-9 px-4 gap-1.5 rounded-lg shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {[
              ["Features", "#features"],
              ["Live Demo", "#live-demo"],
              ["How it Works", "#how-it-works"],
              ["Biomedical", "#biomedical"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link href="/doctor" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
                Sign In
              </Button>
            </Link>
            <Link href="/patient" onClick={() => setMobileOpen(false)}>
              <Button variant="teal" size="sm" className="w-full text-xs font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
