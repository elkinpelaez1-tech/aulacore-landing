export interface Student {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  gender: 'M' | 'F';
  gradesAverage: number;
  attendanceRate: number;
  emotionalEngagement: number; // 0-100%
  financialOk: boolean;
  rfidStatus: 'inside' | 'outside' | 'late';
  riskScore: number; // calculated dynamically
  riskLevel: 'Critico' | 'Medio' | 'Seguro';
  reason: string;
  recommendations: string[];
}

export interface RfidLog {
  id: string;
  studentName: string;
  time: string;
  type: 'entrada' | 'salida' | 'tarde';
  location: string;
}

export interface PerformanceData {
  mes: string;
  promedioAcademico: number;
  retencionPorcentaje: number;
  asistenciaGeneral: number;
}
