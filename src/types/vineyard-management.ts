export interface VineyardDetails {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
    elevation: number;
  };
  size: {
    hectares: number;
    rows: number;
  };
  soil: {
    type: string;
    ph: number;
    composition: string[];
  };
  createdAt: string;
  updatedAt: string;
  lastAuditedBy: string;
}

export interface GrapeVariety {
  id: string;
  name: string;
  type: 'red' | 'white';
  plantingDate: string;
  blockNumber: string;
  rowNumbers: number[];
  spacing: {
    betweenVines: number;
    betweenRows: number;
  };
  status: 'active' | 'removed' | 'planned';
  yield: {
    expectedTons: number;
    actualTons?: number;
  };
}

export interface HarvestRecord {
  id: string;
  varietyId: string;
  date: string;
  yield: number;
  quality: 1 | 2 | 3 | 4 | 5;
  brix: number;
  ph: number;
  notes: string;
  weather: {
    temperature: number;
    humidity: number;
    conditions: string;
  };
  crew: string[];
}

export interface MaintenanceActivity {
  id: string;
  type: 'pruning' | 'spraying' | 'fertilizing' | 'soil' | 'other';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  scheduledDate: string;
  completedDate?: string;
  assignedTo: string[];
  notes: string;
  recurrence?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval: number;
    endDate?: string;
  };
}

export interface WeatherData {
  id: string;
  timestamp: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  windDirection: string;
  solarRadiation: number;
  soilMoisture: number;
  leafWetness: number;
}

export interface PestMonitoringRecord {
  id: string;
  date: string;
  inspector: string;
  blockNumber: string;
  pestType: string;
  severity: 'low' | 'medium' | 'high';
  affectedArea: number;
  treatment?: {
    product: string;
    applicationDate: string;
    dosage: string;
    applicator: string;
  };
  notes: string;
  images: string[];
}

export interface IrrigationRecord {
  id: string;
  blockNumber: string;
  startTime: string;
  endTime: string;
  waterVolume: number;
  type: 'drip' | 'sprinkler' | 'manual';
  operator: string;
  reason: string;
  soilMoistureBefore: number;
  soilMoistureAfter?: number;
}

export interface WorkLog {
  id: string;
  employeeId: string;
  date: string;
  startTime: string;
  endTime: string;
  activityType: string;
  blockNumber: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  notes?: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  action: 'create' | 'update' | 'delete';
  entityType: string;
  entityId: string;
  changes: Record<string, { old: any; new: any }>;
  ipAddress: string;
}