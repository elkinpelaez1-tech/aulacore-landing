import { Student, RfidLog, PerformanceData } from './types';

// Diverse set of mock students for predictive engine
export const INITIAL_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    grade: '10B',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120',
    gender: 'M',
    gradesAverage: 2.9,
    attendanceRate: 72,
    emotionalEngagement: 38,
    financialOk: true,
    rfidStatus: 'outside',
    riskScore: 84, // Will be computed
    riskLevel: 'Critico',
    reason: 'Juan presenta una caída progresiva del 15% en sus últimas 3 evaluaciones. Registra ausentismo reiterado a primera hora.',
    recommendations: [
      'Enviar tutor privado para refuerzo de Álgebra y funciones.',
      'Llamar a acudiente por inasistencia recurrente a primera hora.',
      'Programar cita con psicología educativa para analizar motivación escolar.'
    ]
  },
  {
    id: '2',
    name: 'Camila Rodriguez',
    grade: '11A',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    gender: 'F',
    gradesAverage: 4.6,
    attendanceRate: 98,
    emotionalEngagement: 92,
    financialOk: true,
    rfidStatus: 'inside',
    riskScore: 8,
    riskLevel: 'Seguro',
    reason: 'Excelente desempeño integral. Postulada a beca de excelencia en ingeniería.',
    recommendations: [
      'Inscribir en el semillero de robótica avanzada.',
      'Asignar rol de mentor de compañeros de ciencias básicas.',
      'Postular a programa de nivelación universitaria temprana.'
    ]
  },
  {
    id: '3',
    name: 'Esteban Gaviria',
    grade: '10B',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    gender: 'M',
    gradesAverage: 3.1,
    attendanceRate: 81,
    emotionalEngagement: 45,
    financialOk: false,
    rfidStatus: 'inside',
    riskScore: 58,
    riskLevel: 'Medio',
    reason: 'Presenta mora en la mensualidad escolar lo cual repercute en su tranquilidad. Rendimiento inestable en talleres prácticos.',
    recommendations: [
      'Derivar a Trabajo Social para plan de becas o alivio de cartera.',
      'Ofrecer tutoría de nivelación grupal los jueves.',
      'Entrevista con acudiente por bajo involucramiento en actividades.'
    ]
  },
  {
    id: '4',
    name: 'Gabriela Restrepo',
    grade: '9A',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120',
    gender: 'F',
    gradesAverage: 3.5,
    attendanceRate: 94,
    emotionalEngagement: 61,
    financialOk: true,
    rfidStatus: 'inside',
    riskScore: 24,
    riskLevel: 'Seguro',
    reason: 'Rendimiento académico dentro del promedio. Se destaca por liderazgo deportivo.',
    recommendations: [
      'Incentivar a mantener la participación en el equipo de baloncesto escolar.',
      'Monitorear la entrega de proyectos finales del área de lenguaje.'
    ]
  },
  {
    id: '5',
    name: 'Mateo Valencia',
    grade: '11C',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    gender: 'M',
    gradesAverage: 2.6,
    attendanceRate: 65,
    emotionalEngagement: 30,
    financialOk: true,
    rfidStatus: 'outside',
    riskScore: 89,
    riskLevel: 'Critico',
    reason: 'Falta crítica a más del 30% de clases en el último mes. Desconexión casi absoluta en canales de comunicación virtuales.',
    recommendations: [
      'Visita domiciliaria del equipo de orientación para comprobar bienestar.',
      'Generar plan de contingencia curricular con evaluaciones diferidas.',
      'Cita urgente con acudiente y rectoría.'
    ]
  },
  {
    id: '6',
    name: 'Valeria Serna',
    grade: '10A',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    gender: 'F',
    gradesAverage: 3.8,
    attendanceRate: 88,
    emotionalEngagement: 59,
    financialOk: false,
    rfidStatus: 'inside',
    riskScore: 42,
    riskLevel: 'Medio',
    reason: 'Cambio brusco de comportamiento. Participativa en clase pero asiste tarde reiteradas veces por problemas logísticos en casa.',
    recommendations: [
      'Vincular al servicio de transporte escolar gratuito.',
      'Flexibilidad horaria opcional de 15 minutos en el ingreso.',
      'Seguimiento mensual al comportamiento académico.'
    ]
  },
  {
    id: '7',
    name: 'Alejandro Morales',
    grade: '9C',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=120',
    gender: 'M',
    gradesAverage: 4.8,
    attendanceRate: 100,
    emotionalEngagement: 97,
    financialOk: true,
    rfidStatus: 'inside',
    riskScore: 2,
    riskLevel: 'Seguro',
    reason: 'Puntualidad absoluta, estudiante sobresaliente del plantel en matemáticas y física.',
    recommendations: [
      'Apoyo para postulación a Olimpiadas Nacionales de Física.',
      'Concesión de mención de honor en izada de bandera.'
    ]
  },
  {
    id: '8',
    name: 'Sofía Castaño',
    grade: '11B',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120',
    gender: 'F',
    gradesAverage: 2.8,
    attendanceRate: 78,
    emotionalEngagement: 42,
    financialOk: true,
    rfidStatus: 'late',
    riskScore: 71,
    riskLevel: 'Critico',
    reason: 'Promedio académico por debajo del mínimo institucional. Expresa desgano y ha abandonado las actividades culturales teatrales.',
    recommendations: [
      'Asignación de psicóloga exclusiva para plan de reincorporación vocacional.',
      'Establecer agenda de entregas semanales flexibilizadas.'
    ]
  }
];

export const INITIAL_RFID_LOGS: RfidLog[] = [
  { id: '101', studentName: 'Sofía Castaño', time: '08:14', type: 'tarde', location: 'Puerta Principal Norte' },
  { id: '102', studentName: 'Esteban Gaviria', time: '07:56', type: 'entrada', location: 'Puerta Secundaria Sur' },
  { id: '103', studentName: 'Juan Pérez', time: '07:44', type: 'entrada', location: 'Puerta Principal Norte' },
  { id: '104', studentName: 'Camila Rodriguez', time: '07:35', type: 'entrada', location: 'Puerta Principal Norte' },
  { id: '105', studentName: 'Gabriela Restrepo', time: '07:32', type: 'entrada', location: 'Puerta Principal Norte' }
];

export const PERFORMANCE_DATA: PerformanceData[] = [
  { mes: 'Ene', promedioAcademico: 3.4, retencionPorcentaje: 91, asistenciaGeneral: 84 },
  { mes: 'Feb', promedioAcademico: 3.6, retencionPorcentaje: 93, asistenciaGeneral: 87 },
  { mes: 'Mar', promedioAcademico: 3.7, retencionPorcentaje: 94, asistenciaGeneral: 89 },
  { mes: 'Abr', promedioAcademico: 3.9, retencionPorcentaje: 96, asistenciaGeneral: 91 },
  { mes: 'May', promedioAcademico: 4.1, retencionPorcentaje: 98, asistenciaGeneral: 94 }
];

// Calculation weights defaults
export interface ModelWeights {
  asistencia: number; // default: 40%
  academia: number;   // default: 40%
  emocional: number;   // default: 20%
}

export const DEFAULT_WEIGHTS: ModelWeights = {
  asistencia: 0.4,
  academia: 0.4,
  emocional: 0.2
};

/**
 * Computes custom predictive risk score based on customizable weights
 */
export function computeRiskScore(student: Student, weights: ModelWeights): number {
  // Translate 0-5.0 grades index into a 0-100 penalty (where 5.0 is no penalty, 0.0 is max penalty)
  const academicPenalty = Math.max(0, 100 - (student.gradesAverage / 5.0) * 100);
  
  // Assistance penalty (where 100% is no penalty, 0% is max penalty)
  const attendancePenalty = 100 - student.attendanceRate;

  // Emotional engagement penalty (where 100% engagement is no penalty, 0% is max penalty)
  const engagementPenalty = 100 - student.emotionalEngagement;

  // Calculate weighted average penalty
  const rawScore = 
    (attendancePenalty * weights.asistencia) +
    (academicPenalty * weights.academia) +
    (engagementPenalty * weights.emocional);

  // Math.round score between 0 and 100
  return Math.max(0, Math.min(100, Math.round(rawScore)));
}

/**
 * Returns risk level category based on score
 */
export function getRiskLevel(score: number): 'Critico' | 'Medio' | 'Seguro' {
  if (score >= 60) return 'Critico';
  if (score >= 35) return 'Medio';
  return 'Seguro';
}

/**
 * Provides live feedback context
 */
export function getDynamicReason(student: Student, score: number): string {
  if (score >= 60) {
    return `${student.name} tiene un índice de riesgo del ${score}%. Su rendimiento académico (promedio ${student.gradesAverage}) y su asistencia del ${student.attendanceRate}% requieren intervención inmediata.`;
  }
  if (score >= 35) {
    return `${student.name} presenta factores de riesgo moderado (índice del ${score}%). El canal de comunicación financiero o socioemocional tiene oportunidades de mejora.`;
  }
  return `${student.name} se cataloga como estudiante de alto rendimiento y bajo riesgo (índice del ${score}%). Excelente asistencia (${student.attendanceRate}%) e integración institucional.`;
}
