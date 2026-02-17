
export interface DosageResult {
  weight: number;
  mg: number;
  ml: number;
  timestamp: Date;
}

export interface DosageConfig {
  concentration: number; // mg/ml
  dosagePerKg: number; // mg/kg
}

export interface SafetyAdvice {
  title: string;
  content: string;
  type: 'warning' | 'info' | 'caution';
}
