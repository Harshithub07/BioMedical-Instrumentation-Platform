import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RequestPriority, EquipmentHealthStatus } from "@/shared/types";

/**
 * Merges Tailwind classes cleanly with class-variance-authority support
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates Great-Circle distance (in kilometers) between two coordinates using the Haversine formula
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Estimates emergency road transit time in minutes given distance and speed factor
 */
export function estimateEmergencyEtaMinutes(distanceKm: number): number {
  // Average urban emergency speed with siren ~ 35 km/h + 3 min dispatch base
  const minutes = Math.round((distanceKm / 35) * 60) + 3;
  return Math.max(minutes, 4);
}

/**
 * Returns formatted relative time string (e.g. "5m ago", "2h ago")
 */
export function formatTimeAgo(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffSec < 60) return "Just now";
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
  return `${Math.floor(diffSec / 86400)}d ago`;
}

/**
 * Maps request priority to badge styles
 */
export function getPriorityBadgeColor(priority: RequestPriority): {
  bg: string;
  text: string;
  border: string;
  dot: string;
} {
  switch (priority) {
    case "CRITICAL_P1":
      return {
        bg: "bg-rose-500/10",
        text: "text-rose-600 dark:text-rose-400",
        border: "border-rose-500/30",
        dot: "bg-rose-500",
      };
    case "URGENT_P2":
      return {
        bg: "bg-amber-500/10",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-500/30",
        dot: "bg-amber-500",
      };
    case "STANDARD_P3":
      return {
        bg: "bg-teal-500/10",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-500/30",
        dot: "bg-teal-500",
      };
  }
}

/**
 * Maps Biomedical equipment health status to color tokens
 */
export function getEquipmentStatusColor(status: EquipmentHealthStatus): {
  bg: string;
  text: string;
  border: string;
} {
  switch (status) {
    case "OPTIMAL":
      return {
        bg: "bg-emerald-500/10",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-500/30",
      };
    case "ATTENTION_NEEDED":
      return {
        bg: "bg-amber-500/10",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-500/30",
      };
    case "CRITICAL_FAULT":
      return {
        bg: "bg-rose-500/10",
        text: "text-rose-600 dark:text-rose-400",
        border: "border-rose-500/30",
      };
    case "CALIBRATION_OVERDUE":
      return {
        bg: "bg-purple-500/10",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-500/30",
      };
    case "IN_SERVICE":
      return {
        bg: "bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-500/30",
      };
  }
}
