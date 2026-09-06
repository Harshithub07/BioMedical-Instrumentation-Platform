"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartPulse,
  Stethoscope,
  Building2,
  ChevronRight,
  LogOut,
  Bell,
  Home,
  PhoneCall,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import { UserRole } from "@/shared/types";
import { Badge } from "./ui/badge";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

interface DashboardShellProps {
  role: UserRole;
  roleTitle: string;
  roleSubtitle: string;
  userName?: string;
  userMeta?: string;
  navItems: NavItem[];
  children: React.ReactNode;
}

export function DashboardShell({
  role,
  roleTitle,
  roleSubtitle,
  userName = "Active Operator",
  userMeta = "Verified Portal User",
  navItems,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getRoleIcon = () => {
    switch (role) {
      case "patient":
        return <HeartPulse className="h-5 w-5 text-teal-600" />;
      case "doctor":
        return <Stethoscope className="h-5 w-5 text-blue-600" />;
      case "coordinator":
      case "admin":
        return <Building2 className="h-5 w-5 text-purple-600" />;
    }
  };

  const getRoleTheme = () => {
    switch (role) {
      case "patient":
        return {
          gradient: "bg-teal-50",
          border: "border-teal-200",
          badge: "text-teal-800",
        };
      case "doctor":
        return {
          gradient: "bg-blue-50",
          border: "border-blue-200",
          badge: "text-blue-800",
        };
      case "coordinator":
      case "admin":
        return {
          gradient: "bg-purple-50",
          border: "border-purple-200",
          badge: "text-purple-800",
        };
    }
  };

  const theme = getRoleTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Live Emergency Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs px-4 py-2 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-teal-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>MEDGRID LIVE NETWORK</span>
          </div>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:inline text-slate-400">
            Connected: <strong className="text-white">6 Multi-city Hospitals</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-rose-400 flex items-center gap-1 font-semibold">
            <PhoneCall className="h-3 w-3" /> ER Dispatch: 108 / 112
          </span>
          <Link
            href="/"
            className="text-xs text-teal-300 hover:text-white flex items-center gap-1 transition-colors pl-2 border-l border-slate-700"
          >
            <Home className="h-3 w-3" /> Landing Page
          </Link>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar for Desktop */}
        <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-slate-200 shadow-sm">
          {/* Logo & Role Header */}
          <div className="p-5 border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="h-9 w-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
                M
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-slate-900">
                  MedGrid
                </span>
                <span className="text-[10px] block font-semibold uppercase tracking-widest text-teal-600">
                  Resource Exchange
                </span>
              </div>
            </Link>

            <div className={`p-3 rounded-xl ${theme.gradient} border ${theme.border}`}>
              <div className="flex items-center gap-2 mb-1">
                {getRoleIcon()}
                <span className="text-xs font-bold text-slate-900">
                  {roleTitle}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                {roleSubtitle}
              </p>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex-1 p-4 space-y-1 overflow-y-auto">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Zone Navigation
            </p>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-600 text-white shadow-sm font-semibold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-teal-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-white" : "text-slate-400"}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-teal-100 text-teal-800"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-6">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Team Role Switcher (SIH)
              </p>
              <div className="space-y-1">
                <Link
                  href="/patient"
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                    role === "patient"
                      ? "bg-teal-50 text-teal-800 font-semibold border border-teal-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <HeartPulse className="h-3.5 w-3.5 text-teal-600" /> Patient Zone
                </Link>
                <Link
                  href="/doctor"
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                    role === "doctor"
                      ? "bg-blue-50 text-blue-800 font-semibold border border-blue-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Stethoscope className="h-3.5 w-3.5 text-blue-600" /> Doctor Zone
                </Link>
                <Link
                  href="/coordinator"
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                    role === "coordinator"
                      ? "bg-purple-50 text-purple-800 font-semibold border border-purple-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 className="h-3.5 w-3.5 text-purple-600" /> Coordinator Zone
                </Link>
              </div>
            </div>
          </div>

          {/* User Profile Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/70">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                  {userName.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold text-slate-900 truncate">
                    {userName}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate">
                    {userMeta}
                  </p>
                </div>
              </div>
              <Link href="/" title="Exit to Landing">
                <LogOut className="h-4 w-4 text-slate-400 hover:text-rose-600 transition-colors" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Header Bar */}
          <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">
                  {roleTitle}
                </span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
                <span className="text-teal-700 font-semibold">
                  {navItems.find((n) => n.href === pathname)?.label || "Workspace"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="teal" className="hidden sm:inline-flex text-[11px]">
                <ShieldCheck className="h-3 w-3 mr-1 text-teal-600" /> ABDM / SIH Verified
              </Badge>

              <button className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-teal-500"></span>
              </button>
            </div>
          </header>

          {/* Sub-Portal Body */}
          <main className="p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
