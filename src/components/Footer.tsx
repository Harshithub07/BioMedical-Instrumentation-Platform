import React from "react";
import Link from "next/link";
import { HeartPulse } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <HeartPulse className="h-4 w-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                MedGrid
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Connected hospital infrastructure for real-time resource sharing
              and emergency medical coordination.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/patient" className="hover:text-teal-400 transition-colors">
                  Patient Bed Finder
                </Link>
              </li>
              <li>
                <Link href="/doctor" className="hover:text-teal-400 transition-colors">
                  Hospital Dashboard
                </Link>
              </li>
              <li>
                <Link href="/coordinator" className="hover:text-teal-400 transition-colors">
                  Biomedical Coordinator
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-teal-400 transition-colors">
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>ABDM / Ayushman Bharat</li>
              <li>CDSCO Device Compliance</li>
              <li>NABH Accreditation</li>
              <li>e-RaktKosh Integration</li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">
              Emergency
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/50">
                <p className="text-[11px] text-slate-500">Ambulance & ER</p>
                <p className="text-sm font-bold text-rose-400">108 / 112</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/50">
                <p className="text-[11px] text-slate-500">Blood Bank</p>
                <p className="text-sm font-bold text-teal-400">104</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} MedGrid. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
