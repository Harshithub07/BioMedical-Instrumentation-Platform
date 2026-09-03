"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HeartPulse,
  Stethoscope,
  Building2,
  Activity,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Gauge,
  Zap,
  Clock,
  Shield,
  Cpu,
  Users,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

/* ── Animated counter hook ────────────────────────────────── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export default function LandingPage() {
  const hospitals = useCounter(6, 1200);
  const beds = useCounter(67, 1800);
  const oxygen = useCounter(82, 1600);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ================================================================ */}
        {/*  HERO                                                           */}
        {/* ================================================================ */}
        <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
          <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-50" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-700 text-xs font-medium mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-600" />
                </span>
                Live Hospital Network
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
                Share Hospital Resources{" "}
                <span className="text-teal-600">In&nbsp;Real&nbsp;Time</span>
              </h1>

              {/* Sub */}
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
                A unified platform connecting hospitals to exchange ICU beds,
                ventilators, oxygen & blood — while giving patients live
                availability before they travel.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                <Link href="/doctor" className="w-full sm:w-auto">
                  <Button
                    variant="teal"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm font-semibold rounded-xl px-6"
                  >
                    Hospital Portal
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/patient" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm font-semibold rounded-xl px-6 border-slate-200 text-slate-700 hover:border-teal-300 hover:text-teal-700 bg-white"
                  >
                    Patient Emergency Access
                  </Button>
                </Link>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-teal-500" />
                  ABDM Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi className="h-3.5 w-3.5 text-teal-500" />
                  Real-Time Sync
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-500" />
                  CDSCO Audit Ready
                </span>
              </div>
            </div>

            {/* ── Hero Stats Bar ──────────────────────────────────────── */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="grid grid-cols-3 divide-x divide-slate-100 rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40 overflow-hidden">
                <div className="px-6 py-5 text-center">
                  <p className="stat-number text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {hospitals}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    Hospitals Connected
                  </p>
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="stat-number text-3xl sm:text-4xl font-extrabold text-teal-600">
                    {beds}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    ICU Beds Available
                  </p>
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="stat-number text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {oxygen}%
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    Avg O₂ Reserves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  FEATURES — Two Pillars                                         */}
        {/* ================================================================ */}
        <section id="features" className="py-20 sm:py-24 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-2">
                Built for Everyone
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                One Network. Two Portals.
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Hospitals manage and share — patients find and access.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ── Hospital Card ──────────────────────────────────────── */}
              <div className="group relative rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 hover-lift hover:border-teal-200 flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      For Hospitals & Doctors
                    </h3>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      Resource management, lending & depletion alerts
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-600 flex-1">
                  {[
                    ["Live bed, ICU & oxygen dashboard updated in real-time", ""],
                    ["Inter-hospital equipment lending with QR custody tracking", ""],
                    ["Oxygen burn-rate alerts before critical depletion", ""],
                    ["Incoming patient queue and pre-triage data", ""],
                  ].map(([text], i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <Link href="/doctor">
                    <Button
                      variant="outline"
                      className="w-full justify-between text-[13px] font-semibold hover:border-teal-300 hover:text-teal-700 rounded-xl h-10"
                    >
                      Open Hospital Portal
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* ── Patient Card ───────────────────────────────────────── */}
              <div className="group relative rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 hover-lift hover:border-teal-200 flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <HeartPulse className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      For Patients & Families
                    </h3>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      Find beds, dispatch ambulance & reserve before travel
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-600 flex-1">
                  {[
                    ["Map-based hospital finder with live bed & ventilator counts", ""],
                    ["1-click emergency SOS with GPS ambulance routing", ""],
                    ["30-minute bed hold token while ambulance is en-route", ""],
                    ["Ayushman Bharat Digital Health (ABHA) ID integration", ""],
                  ].map(([text], i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <Link href="/patient">
                    <Button
                      variant="teal"
                      className="w-full justify-between text-[13px] font-semibold rounded-xl h-10"
                    >
                      Open Patient Access
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  HOW IT WORKS — Visual Flow                                     */}
        {/* ================================================================ */}
        <section id="how-it-works" className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-2">
                Simple Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How MedGrid Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  icon: <Activity className="h-5 w-5" />,
                  title: "Hospitals Sync Live Data",
                  desc: "Connected facilities continuously broadcast their ICU beds, oxygen levels, blood reserves and equipment status to the shared grid.",
                },
                {
                  step: "02",
                  icon: <Zap className="h-5 w-5" />,
                  title: "Smart Match & Lending",
                  desc: "When a hospital runs short, the platform auto-matches the nearest facility with surplus stock and enables digital borrow requests.",
                },
                {
                  step: "03",
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Patient Finds & Reserves",
                  desc: "Patients check live bed availability on a map, hold a bed for 30 minutes, and dispatch an ambulance — all before leaving home.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center px-6 py-8">
                  {/* Connector line (hidden on last) */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal-200 to-teal-100" />
                  )}

                  <div className="relative z-10 h-14 w-14 rounded-2xl bg-teal-50 border border-teal-200/60 text-teal-600 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-teal-500 mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  BIOMEDICAL SPOTLIGHT                                           */}
        {/* ================================================================ */}
        <section id="biomedical" className="py-20 sm:py-24 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left — Info */}
                <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">
                    Biomedical Instrumentation
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Equipment Telemetry & Maintenance
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">
                    Continuous IoT sensor monitoring for critical life-support
                    equipment — FiO₂ purity, circuit pressure, operating hours &
                    calibration schedules. Prevent in-surgery breakdowns with
                    proactive maintenance tickets and CDSCO/NABH audit trails.
                  </p>

                  <ul className="space-y-2.5 text-sm text-slate-600 mb-7">
                    {[
                      "Real-time device health index & IoT sensor feeds",
                      "Automated service tickets & engineer dispatch",
                      "QR-code based asset audit & custody tracking",
                    ].map((t, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/coordinator" className="self-start">
                    <Button
                      variant="outline"
                      className="text-[13px] font-semibold hover:border-teal-300 hover:text-teal-700 rounded-xl gap-2"
                    >
                      Explore Coordinator Hub
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Right — Mock Device Cards */}
                <div className="lg:col-span-2 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 sm:p-8 flex flex-col justify-center gap-4">
                  {/* Device 1 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-teal-600" />
                        <span className="text-xs font-bold text-slate-800">
                          Hamilton G5 Ventilator
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                        96% Health
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-slate-50">
                        <span className="text-slate-400 block">FiO₂</span>
                        <strong className="text-teal-700">99.2%</strong>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50">
                        <span className="text-slate-400 block">Hours</span>
                        <strong className="text-slate-700">4,120</strong>
                      </div>
                    </div>
                  </div>

                  {/* Device 2 */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-amber-600" />
                        <span className="text-xs font-bold text-slate-800">
                          Dräger Evita V300
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                        68% — Needs Service
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-white/70">
                        <span className="text-slate-400 block">O₂ Sensor</span>
                        <strong className="text-amber-700">94.1%</strong>
                      </div>
                      <div className="p-2 rounded-lg bg-white/70">
                        <span className="text-slate-400 block">Ticket</span>
                        <strong className="text-slate-700">BME-101</strong>
                      </div>
                    </div>
                  </div>

                  {/* Device 3 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-teal-600" />
                        <span className="text-xs font-bold text-slate-800">
                          ZOLL R Series Defib
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                        100% Ready
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-slate-50">
                        <span className="text-slate-400 block">Battery</span>
                        <strong className="text-emerald-700">Full</strong>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50">
                        <span className="text-slate-400 block">Self-Test</span>
                        <strong className="text-emerald-700">Passed</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  CTA                                                            */}
        {/* ================================================================ */}
        <section className="py-20 sm:py-24 bg-slate-900 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to connect your hospital?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
              Join the network of hospitals sharing life-support resources,
              optimizing capacity, and eliminating preventable delays.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/doctor" className="w-full sm:w-auto">
                <Button
                  variant="teal"
                  size="lg"
                  className="w-full sm:w-auto font-semibold gap-2 rounded-xl px-6"
                >
                  Hospital Registration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/patient" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 rounded-xl px-6"
                >
                  Patient Access
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
