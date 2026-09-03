/**
 * SHARED DATA TREATY - USER & AUTH TYPES
 * Contract across Teammate 1 (Patient), Teammate 2 (Doctor), Teammate 3 (Coordinator)
 */

export type UserRole = "patient" | "doctor" | "coordinator" | "admin";

export interface BaseUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export interface PatientUser extends BaseUser {
  role: "patient";
  abhaId?: string; // Ayushman Bharat Health Account ID (e.g., 91-4567-8901-2345)
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  currentAddress?: string;
  activeSosId?: string;
}

export interface DoctorUser extends BaseUser {
  role: "doctor";
  licenseNumber: string; // Medical Council Registration No.
  hospitalId: string;
  hospitalName: string;
  department: string;
  specialization: string;
  isOnDuty: boolean;
}

export interface CoordinatorUser extends BaseUser {
  role: "coordinator";
  instituteId: string;
  instituteName: string;
  department: "Biomedical Engineering" | "Hospital Administration" | "Resource Operations" | "District Health Office";
  assignedZones: string[];
  badgeId: string;
}

export type AppUser = PatientUser | DoctorUser | CoordinatorUser;
