import React from "react";
import Link from "next/link";
import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CoordinatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-white border border-purple-200 shadow-lg space-y-4">
        <div className="h-16 w-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto border border-purple-100">
          <Building2 className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Biomedical Engineering & GIS Hub</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Monitor real-time biomedical IoT device telemetry, manage preventive maintenance and calibration schedules, and oversee the district GIS network.
        </p>
        <Link href="/" className="inline-block pt-2">
          <Button variant="teal" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Main Platform</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
