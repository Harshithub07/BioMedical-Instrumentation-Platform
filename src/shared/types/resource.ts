/**
 * SHARED DATA TREATY - RESOURCE & BIOMEDICAL INSTRUMENTATION TYPES
 */

export interface HospitalLocation {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface BedCapacity {
  total: number;
  available: number;
  reserved: number;
  occupied: number;
}

export interface HospitalBeds {
  general: BedCapacity;
  icu: BedCapacity;
  hdu: BedCapacity;
  pediatric: BedCapacity;
  ventilatorBeds: BedCapacity;
}

export interface OxygenSupply {
  liquidTankPercentage: number; // 0 to 100%
  liquidTankCapacityLitres: number;
  dTypeCylindersAvailable: number;
  dTypeCylindersTotal: number;
  bTypeCylindersAvailable: number;
  burnRateLitresPerHour: number;
  estimatedHoursRemaining: number;
  status: "NORMAL" | "WARNING" | "CRITICAL";
}

export interface BloodUnitInventory {
  "A+": number;
  "A-": number;
  "B+": number;
  "B-": number;
  "AB+": number;
  "AB-": number;
  "O+": number;
  "O-": number;
  plasmaUnits: number;
  plateletUnits: number;
  lastUpdated: string;
}

export type EquipmentCategory =
  | "Ventilator"
  | "Defibrillator"
  | "Dialysis Machine"
  | "ECG Monitor"
  | "Infusion Pump"
  | "Anesthesia Workstation"
  | "BiPAP / CPAP"
  | "Mobile X-Ray"
  | "Ambulance ALS"
  | "Ambulance BLS";

export type EquipmentHealthStatus = "OPTIMAL" | "ATTENTION_NEEDED" | "CRITICAL_FAULT" | "IN_SERVICE" | "CALIBRATION_OVERDUE";

export interface BiomedicalDevice {
  id: string;
  name: string;
  model: string;
  serialNumber: string;
  category: EquipmentCategory;
  hospitalId: string;
  hospitalName: string;
  wardLocation: string;
  healthScore: number; // 0 to 100%
  status: EquipmentHealthStatus;
  isLendable: boolean;
  isCurrentlyLent: boolean;
  lentToHospitalId?: string;
  lastCalibrationDate: string;
  nextCalibrationDue: string;
  totalOperatingHours: number;
  // Simulated IoT Telemetry
  telemetry: {
    powerStatus: "ON" | "STANDBY" | "OFF";
    voltageVolts: number;
    oxygenPurityPercent?: number;
    temperatureCelsius: number;
    batteryLevelPercent: number;
    pressureKPa?: number;
    flowRateLpm?: number;
    lastTelemetrySync: string;
  };
}

export interface HospitalNode {
  id: string;
  name: string;
  category: "Government Tertiary" | "Private Multispecialty" | "District Hospital" | "Primary Health Centre (PHC)";
  contactPhone: string;
  emergencyHelpline: string;
  location: HospitalLocation;
  beds: HospitalBeds;
  oxygen: OxygenSupply;
  blood: BloodUnitInventory;
  ambulances: {
    total: number;
    available: number;
    dispatched: number;
  };
  equipmentList: BiomedicalDevice[];
  connectedSince: string;
  isNetworkVerified: boolean;
}
