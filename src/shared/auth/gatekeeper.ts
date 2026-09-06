/**
 * SHARED AUTH GATEKEEPER & ROLE ROUTER
 * Directs users to their respective teammate zones based on their role
 */

import { UserRole, AppUser } from "../types";
import { DEMO_USERS } from "../db/mockDb";

export const ROLE_HOME_ROUTES: Record<UserRole, string> = {
  patient: "/patient/dashboard",
  doctor: "/doctor/dashboard",
  coordinator: "/coordinator/dashboard",
  admin: "/coordinator/dashboard",
};

export const getRoleDisplayName = (role: UserRole): string => {
  switch (role) {
    case "patient":
      return "Patient / Citizen";
    case "doctor":
      return "Doctor / ER Hospital";
    case "coordinator":
      return "Institute Coordinator / BME";
    case "admin":
      return "District Health Administrator";
  }
};

export const getDemoUserByRole = (role: UserRole): AppUser => {
  const match = DEMO_USERS.find((u) => u.role === role);
  return match || DEMO_USERS[0];
};

export const saveActiveSessionUser = (user: AppUser): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("medgrid_active_user", JSON.stringify(user));
  }
};

export const getActiveSessionUser = (): AppUser | null => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("medgrid_active_user");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
  }
  return null;
};

export const clearSessionUser = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("medgrid_active_user");
  }
};
