"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HeartPulse,
  Building2,
  Activity,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Zap,
  Shield,
  Cpu,
  Wifi,
  Clock,
  QrCode,
  Share2,
  AlertTriangle,
  Sparkles,
  PhoneCall,
  Gauge,
  TrendingUp,
  Truck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

/* ── Animated counter ─────────────────────────────────────── */
function useCounter(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

/* ── Lending simulator states ─────────────────────────────── */
type LendingStatus = "idle" | "scanning" | "matched" | "dispatched";

export default function LandingPage() {
  /* counters */
  const hospitals = useCounter(6, 1400);
  const beds = useCounter(67, 2000);
  const oxygen = useCounter(82, 1800);
  const transits = useCounter(3, 1000);

  /* lending sim */
  const [lendStatus, setLendStatus] = useState<LendingStatus>("idle");

  const runLendingSim = () => {
    if (lendStatus !== "idle") {
      setLendStatus("idle");
      return;
    }
    setLendStatus("scanning");
    setTimeout(() => setLendStatus("matched"), 1800);
    setTimeout(() => setLendStatus("dispatched"), 3200);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ============================================================ */}
        {/*  HERO — Animated Network Visualization                      */}
        {/* ============================================================ */}
        <section className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 overflow-hidden">
          {/* Layered backgrounds */}
          <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
          <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40" />

          {/* Floating ambient orbs */}
          <div className="absolute top-16 left-[10%] w-72 h-72 bg-teal-200/20 rounded-full blur-[80px] animate-float pointer-events-none" />
          <div className="absolute bottom-20 right-[8%] w-64 h-64 bg-emerald-200/15 rounded-full blur-[80px] animate-float-delayed pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Animated pill */}
              <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-teal-200/70 shadow-sm shadow-teal-100/50 text-teal-700 text-xs font-semibold mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                </span>
                Live Inter-Hospital Resource Network
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up-d1 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-5">
                Hospital Resources.{" "}
                <span className="shimmer-text">Shared in Real Time.</span>
              </h1>

              {/* Sub */}
              <p className="animate-fade-in-up-d2 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-9">
                When hospitals run short on ventilators, oxygen, or ICU beds — MedGrid
                instantly connects them with nearby facilities that have surplus.
                Patients see live availability before they travel.
              </p>

              {/* CTAs */}
              <div className="animate-fade-in-up-d3 flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <Link href="/doctor" className="w-full sm:w-auto">
                  <Button
                    variant="glow"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm font-semibold rounded-xl px-7 h-12"
                  >
                    <Building2 className="h-4 w-4" />
                    Hospital Portal
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/patient" className="w-full sm:w-auto">
                  <Button
                    variant="white"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm font-semibold rounded-xl px-7 h-12 border-slate-200"
                  >
                    <HeartPulse className="h-4 w-4 text-teal-600" />
                    Patient Emergency SOS
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-in-up-d4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 text-teal-500" /> ABDM Compliant
                </span>
                <span className="hidden sm:inline text-slate-200">•</span>
                <span className="flex items-center gap-1.5">
                  <Wifi className="h-3 w-3 text-teal-500" /> Real-Time Sync
                </span>
                <span className="hidden sm:inline text-slate-200">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-teal-500" /> CDSCO Audit Ready
                </span>
              </div>
            </div>

            {/* ── Hero Stats — Glass card with animated numbers ────── */}
            <div ref={hospitals.ref} className="mt-16 max-w-4xl mx-auto">
              <div className="gradient-border shadow-xl shadow-slate-200/40">
                <div className="bg-white rounded-[1.25rem] p-1">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100/80 rounded-[1rem] overflow-hidden">
                    {[
                      { val: hospitals.count, label: "Hospitals", suffix: "", color: "text-slate-900", icon: <Building2 className="h-4 w-4 text-teal-500" /> },
                      { val: beds.count, label: "ICU Beds Free", suffix: "", color: "text-teal-600", icon: <Activity className="h-4 w-4 text-teal-500" /> },
                      { val: oxygen.count, label: "O₂ Reserves", suffix: "%", color: "text-emerald-600", icon: <Gauge className="h-4 w-4 text-emerald-500" /> },
                      { val: transits.count, label: "Live Transits", suffix: "", color: "text-amber-600", icon: <Truck className="h-4 w-4 text-amber-500" /> },
                    ].map((s, i) => (
                      <div key={i} className="bg-white px-5 py-6 text-center flex flex-col items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center">
                          {s.icon}
                        </div>
                        <p className={`stat-number text-3xl sm:text-4xl font-extrabold ${s.color}`}>
                          {s.val}{s.suffix}
                        </p>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  THE PROBLEM — Why This Matters (Impact Strip)               */}
        {/* ============================================================ */}
        <section className="py-14 bg-slate-900 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { stat: "45+ min", desc: "Average phone-tag time to find a free ventilator during surges", icon: <Clock className="h-5 w-5" /> },
                { stat: "30%", desc: "Of emergency patients turned away due to unknown bed availability", icon: <AlertTriangle className="h-5 w-5" /> },
                { stat: "₹0", desc: "Cost of sharing surplus — resources sit idle while nearby hospitals struggle", icon: <Share2 className="h-5 w-5" /> },
                { stat: "4.2x", desc: "Faster response with real-time network matching vs. manual phone calls", icon: <TrendingUp className="h-5 w-5" /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 px-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="stat-number text-2xl sm:text-3xl font-extrabold text-white">{item.stat}</p>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FEATURES — Two Rich Portal Cards                           */}
        {/* ============================================================ */}
        <section id="features" className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">
                Platform
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Two Portals. One Connected Grid.
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Hospitals manage and share surplus. Patients find and access in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Hospital Card */}
              <div className="gradient-border hover-lift group">
                <div className="bg-white rounded-[1.25rem] p-7 sm:p-8 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        For Hospitals & Doctors
                      </h3>
                      <p className="text-[13px] text-slate-500 mt-0.5">
                        Collaborative resource pooling across the network
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-[13px] text-slate-600 flex-1">
                    {[
                      ["Live bed, ICU & oxygen dashboard", "updated in real-time across all connected facilities"],
                      ["Inter-hospital equipment lending", "with QR-based custody tracking and transit ETA"],
                      ["Oxygen burn-rate depletion alerts", "predictive warnings before critical supply shortage"],
                      ["Incoming patient trauma queue", "with pre-triage severity data for ER preparation"],
                    ].map(([bold, rest], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span><strong className="text-slate-800">{bold}</strong> — {rest}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-5 border-t border-slate-100">
                    <Link href="/doctor">
                      <Button variant="outline" className="w-full justify-between text-[13px] font-semibold hover:border-teal-300 hover:text-teal-700 rounded-xl h-11 group/btn">
                        Open Hospital Portal
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Patient Card */}
              <div className="gradient-border hover-lift group">
                <div className="bg-white rounded-[1.25rem] p-7 sm:p-8 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-100 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        For Patients & Families
                      </h3>
                      <p className="text-[13px] text-slate-500 mt-0.5">
                        Find, reserve & reach the right hospital — fast
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-[13px] text-slate-600 flex-1">
                    {[
                      ["Map-based hospital finder", "locate nearest facilities by live bed & ventilator counts"],
                      ["1-click emergency SOS", "GPS ambulance routing to the nearest equipped hospital"],
                      ["30-minute bed hold token", "guaranteed temporary reservation while ambulance is en-route"],
                      ["ABHA digital health ID", "Ayushman Bharat ID integration for seamless admission"],
                    ].map(([bold, rest], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span><strong className="text-slate-800">{bold}</strong> — {rest}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-5 border-t border-slate-100">
                    <Link href="/patient">
                      <Button variant="teal" className="w-full justify-between text-[13px] font-semibold rounded-xl h-11 group/btn">
                        Open Patient Access
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  LIVE DEMO — Interactive Lending Simulator                   */}
        {/* ============================================================ */}
        <section id="live-demo" className="py-20 sm:py-24 bg-slate-50/70 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left — Context */}
              <div className="lg:col-span-5 space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  Interactive Demo
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Watch a Peer Requisition Happen Live
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  When Safdarjung Hospital runs out of ICU ventilators during a surge,
                  MedGrid scans the nearest 15 km for surplus stock, matches the best donor,
                  and dispatches with a tamper-evident QR custody handshake.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <Button
                    variant="glow"
                    size="lg"
                    onClick={runLendingSim}
                    className="gap-2 font-semibold rounded-xl px-6"
                  >
                    <Zap className="h-4 w-4" />
                    {lendStatus === "idle" ? "Simulate Urgent Requisition" : "Reset Simulation"}
                  </Button>
                  <p className="text-[11px] text-slate-400 pl-1">
                    Click to see MedGrid match, verify, and dispatch
                  </p>
                </div>
              </div>

              {/* Right — Interactive Terminal */}
              <div className="lg:col-span-7">
                <div className="gradient-border shadow-xl shadow-slate-200/50">
                  <div className="bg-white rounded-[1.25rem] overflow-hidden">
                    {/* Terminal header */}
                    <div className="bg-slate-50 border-b border-slate-100 px-5 py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-xs font-semibold text-slate-600 ml-2">
                          MedGrid Requisition Terminal
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          lendStatus === "dispatched"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : lendStatus === "matched"
                            ? "bg-teal-50 text-teal-700 border border-teal-200"
                            : lendStatus === "scanning"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-slate-100 text-slate-500 border border-slate-200"
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${
                            lendStatus === "dispatched" ? "bg-emerald-500"
                            : lendStatus === "matched" ? "bg-teal-500"
                            : lendStatus === "scanning" ? "bg-amber-500 animate-pulse"
                            : "bg-slate-400"
                          }`} />
                          {lendStatus === "idle" && "READY"}
                          {lendStatus === "scanning" && "SCANNING NETWORK…"}
                          {lendStatus === "matched" && "DONOR MATCHED"}
                          {lendStatus === "dispatched" && "DISPATCHED ✓"}
                        </span>
                      </div>
                    </div>

                    {/* Terminal body */}
                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Request info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            Requesting Facility
                          </p>
                          <p className="text-sm font-bold text-slate-900 mt-1">Safdarjung Hospital</p>
                          <p className="text-[11px] text-rose-600 font-semibold mt-0.5">
                            4/4 backup ventilators in use
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            Required Equipment
                          </p>
                          <p className="text-sm font-bold text-teal-700 mt-1">3× ICU Ventilators</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Adult & Pediatric Dual-Mode
                          </p>
                        </div>
                      </div>

                      {/* Status area */}
                      <div className={`p-5 rounded-2xl border transition-all duration-500 ${
                        lendStatus === "dispatched"
                          ? "bg-emerald-50/50 border-emerald-200"
                          : lendStatus === "matched"
                          ? "bg-teal-50/50 border-teal-200"
                          : "bg-slate-50/50 border-slate-200"
                      }`}>
                        {lendStatus === "idle" && (
                          <div className="text-center py-6">
                            <div className="h-12 w-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                              <Share2 className="h-6 w-6" />
                            </div>
                            <p className="text-sm font-semibold text-slate-600">
                              Proximity Matcher Ready
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              Click &quot;Simulate&quot; to watch MedGrid find a donor hospital
                            </p>
                          </div>
                        )}

                        {lendStatus === "scanning" && (
                          <div className="text-center py-6">
                            <div className="relative h-12 w-12 mx-auto mb-3">
                              <div className="absolute inset-0 rounded-full border-2 border-teal-500 animate-ping opacity-30" />
                              <div className="h-12 w-12 rounded-full bg-teal-50 border-2 border-teal-500 flex items-center justify-center">
                                <Wifi className="h-5 w-5 text-teal-600 animate-pulse" />
                              </div>
                            </div>
                            <p className="text-sm font-semibold text-teal-700">
                              Scanning 15 km radius…
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              Checking AIIMS, Max Saket, Apollo Jasola, Fortis…
                            </p>
                          </div>
                        )}

                        {(lendStatus === "matched" || lendStatus === "dispatched") && (
                          <div className="space-y-3">
                            {/* Matched donor */}
                            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-teal-200 shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm node-glow">
                                  <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-900">
                                    Max Super Speciality, Saket
                                  </p>
                                  <p className="text-[11px] text-slate-500">
                                    Surplus: 12 ventilators • 5.4 km away
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                                  ETA 12 min
                                </span>
                              </div>
                            </div>

                            {/* QR Custody */}
                            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-teal-200 shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
                                  <QrCode className="h-7 w-7" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-900">
                                    Tamper-Evident QR Handoff
                                  </p>
                                  <p className="text-[11px] font-mono font-bold text-teal-600">
                                    MED-8842-DELHI
                                  </p>
                                </div>
                              </div>
                              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${
                                lendStatus === "dispatched"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : "bg-amber-50 text-amber-700 border-amber-200"
                              }`}>
                                {lendStatus === "dispatched" ? "ALS-04 En-Route ✓" : "Awaiting Dispatch…"}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  HOW IT WORKS — 3 Steps with visual flow                    */}
        {/* ============================================================ */}
        <section id="how-it-works" className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Three Steps to Save the Golden Hour
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto relative">
              {/* Connector line behind steps */}
              <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-px">
                <div className="w-full h-full bg-gradient-to-r from-teal-300 via-teal-200 to-teal-300 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-500/40 to-teal-400/0 h-px blur-sm" />
              </div>

              {[
                {
                  step: "01",
                  icon: <Activity className="h-6 w-6" />,
                  title: "Hospitals Sync Live Data",
                  desc: "Connected facilities broadcast ICU beds, oxygen levels, blood reserves, and equipment health to the shared grid.",
                },
                {
                  step: "02",
                  icon: <Zap className="h-6 w-6" />,
                  title: "Smart Match & Lending",
                  desc: "When one facility runs short, the platform auto-matches the nearest hospital with surplus and initiates a digital borrow flow.",
                },
                {
                  step: "03",
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Patient Finds & Reserves",
                  desc: "Patients check live bed availability on a map, hold a bed for 30 minutes, and dispatch an ambulance — all before leaving.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center px-6 py-8">
                  <div className="relative z-10 h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200/50 text-teal-600 flex items-center justify-center mb-5 shadow-sm shadow-teal-100/50 node-glow">
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-teal-500 mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BIOMEDICAL IOT                                             */}
        {/* ============================================================ */}
        <section id="biomedical" className="py-20 sm:py-24 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gradient-border shadow-lg shadow-slate-200/30">
              <div className="bg-white rounded-[1.25rem] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left — Info */}
                  <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-xs font-semibold w-fit mb-4">
                      <Cpu className="h-3.5 w-3.5" />
                      Biomedical Instrumentation
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                      Equipment Telemetry & Digital Twin
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-7 max-w-lg">
                      Continuous IoT monitoring of ventilators, defibrillators and infusion pumps —
                      tracking FiO₂ purity, circuit pressure, operating hours, and calibration status.
                      Prevent in-surgery breakdowns with predictive maintenance tickets.
                    </p>

                    <ul className="space-y-3 text-[13px] text-slate-600 mb-7">
                      {[
                        "Real-time device health index with IoT sensor feeds",
                        "Automated CDSCO/NABH calibration audit trails",
                        "QR-code asset custody tracking & service dispatch",
                        "Predictive maintenance alerts before critical failure",
                      ].map((t, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="h-5 w-5 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </div>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/coordinator" className="self-start">
                      <Button variant="outline" className="text-[13px] font-semibold hover:border-teal-300 hover:text-teal-700 rounded-xl gap-2 group/btn">
                        Explore Coordinator Hub
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Right — Live device cards */}
                  <div className="lg:col-span-2 bg-slate-50/70 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 sm:p-7 flex flex-col justify-center gap-3.5">
                    {[
                      { name: "Hamilton G5 Ventilator", health: "96%", healthColor: "emerald", metric1: ["FiO₂", "99.2%", "teal"], metric2: ["Hours", "4,120", "slate"] },
                      { name: "Dräger Evita V300", health: "68%", healthColor: "amber", metric1: ["O₂ Sensor", "94.1%", "amber"], metric2: ["Ticket", "BME-101", "slate"] },
                      { name: "ZOLL R Series Defib", health: "100%", healthColor: "emerald", metric1: ["Battery", "Full", "emerald"], metric2: ["Self-Test", "Passed", "emerald"] },
                    ].map((d, i) => (
                      <div
                        key={i}
                        className={`rounded-xl p-4 space-y-2.5 border transition-all duration-200 hover:shadow-md ${
                          d.healthColor === "amber"
                            ? "bg-amber-50/40 border-amber-200/70"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Cpu className={`h-3.5 w-3.5 ${d.healthColor === "amber" ? "text-amber-600" : "text-teal-600"}`} />
                            <span className="text-[11px] font-bold text-slate-800">{d.name}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            d.healthColor === "emerald"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                              : "bg-amber-50 text-amber-600 border-amber-200"
                          }`}>
                            {d.health}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {[d.metric1, d.metric2].map(([label, val, color], j) => (
                            <div key={j} className="p-2 rounded-lg bg-white/80 border border-slate-100/50 text-[11px]">
                              <span className="text-slate-400 block text-[10px]">{label}</span>
                              <strong className={`text-${color}-700`}>{val}</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA                                                        */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-600/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-50px] left-[20%] w-[300px] h-[200px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Join the Connected Grid
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Ready to Connect <br className="hidden sm:inline" />
              Your Hospital?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-9">
              Join leading healthcare institutions sharing life-support
              equipment, optimizing ICU capacity, and eliminating preventable
              transit mortality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/doctor" className="w-full sm:w-auto">
                <Button variant="glow" size="lg" className="w-full sm:w-auto font-semibold gap-2 rounded-xl px-7 h-12">
                  Hospital Registration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/patient" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 rounded-xl px-7 h-12"
                >
                  Patient Emergency Access
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-[11px] text-slate-500 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><PhoneCall className="h-3 w-3 text-rose-500" /> Emergency: 108 / 112</span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-teal-500" /> ABDM & NABH Verified</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
