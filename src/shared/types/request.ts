/**
 * SHARED DATA TREATY - INTER-HOSPITAL & PATIENT REQUEST TYPES
 */

export type RequestPriority = "CRITICAL_P1" | "URGENT_P2" | "STANDARD_P3";

export type RequestStatus =
  | "PENDING_MATCH"
  | "OFFERED"
  | "ACCEPTED"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "COMPLETED"
  | "REJECTED"
  | "CANCELLED";

export interface InterHospitalLendingRequest {
  id: string;
  requestingHospitalId: string;
  requestingHospitalName: string;
  targetHospitalId?: string;
  targetHospitalName?: string;
  itemType: "Ventilator" | "ICU_Bed" | "Oxygen_Cylinders" | "Blood_Units" | "Ambulance" | "Defibrillator";
  quantity: number;
  priority: RequestPriority;
  clinicalReason: string;
  requestedByDoctorName: string;
  status: RequestStatus;
  transitOtp?: string; // Digital QR/OTP custody handshake
  dispatchTime?: string;
  estimatedArrivalMinutes?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PatientEmergencySos {
  id: string;
  patientId?: string;
  patientName: string;
  contactPhone: string;
  abhaId?: string;
  callerLatitude: number;
  callerLongitude: number;
  callerAddress: string;
  emergencyType: "CARDIAC_ARREST" | "SEVERE_TRAUMA" | "RESPIRATORY_DISTRESS" | "STROKE" | "OBSTETRIC_MATERNAL" | "OTHER";
  allocatedHospitalId?: string;
  allocatedHospitalName?: string;
  bedHoldToken?: string;
  bedHoldExpiresAt?: string; // 30-minute lock window
  ambulanceId?: string;
  ambulanceDriverPhone?: string;
  etaMinutes?: number;
  status: "SEARCHING_FACILITY" | "BED_LOCKED_AMBULANCE_DISPATCHED" | "EN_ROUTE" | "ADMITTED_ER" | "RESOLVED";
  timestamp: string;
}

export interface BiomedicalMaintenanceTicket {
  id: string;
  deviceId: string;
  deviceName: string;
  hospitalId: string;
  hospitalName: string;
  wardLocation: string;
  issueDescription: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL_BREAKDOWN";
  status: "OPEN" | "ASSIGNED" | "IN_PROGRESS" | "PARTS_ORDERED" | "CALIBRATED_RESOLVED";
  assignedEngineerId?: string;
  assignedEngineerName?: string;
  createdAt: string;
  resolvedAt?: string;
  notes?: string[];
}
