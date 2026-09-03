import React from "react";
import Link from "next/link";
import { HeartPulse, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PatientPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-white border border-teal-200 shadow-lg space-y-4">
        <div className="h-16 w-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-100">
          <HeartPulse className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Patient Emergency Portal</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Search live verified ICU beds, check oxygen-equipped hospital availability, and trigger instant emergency triage with ambulance dispatch.
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
