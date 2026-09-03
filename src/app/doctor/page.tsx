import React from "react";
import Link from "next/link";
import { Stethoscope, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DoctorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-white border border-blue-200 shadow-lg space-y-4">
        <div className="h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-100">
          <Stethoscope className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Hospital ER Command Portal</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Manage clinical bed allocations, monitor live oxygen tank burn-rates, and execute inter-hospital equipment requisitions.
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
