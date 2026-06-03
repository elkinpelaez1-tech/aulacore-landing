import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingDown, 
  TrendingUp, 
  Search, 
  Filter, 
  Settings, 
  Wifi, 
  Calendar, 
  HelpCircle, 
  Sparkles, 
  Bell, 
  UserX, 
  PhoneCall, 
  ArrowRight, 
  Shuffle, 
  RotateCcw,
  BookOpen,
  CalendarCheck,
  HeartHandshake,
  DollarSign,
  AlertTriangle,
  FileCheck,
  Smartphone
} from 'lucide-react';
import { 
  INITIAL_STUDENTS, 
  INITIAL_RFID_LOGS, 
  PERFORMANCE_DATA, 
  DEFAULT_WEIGHTS, 
  computeRiskScore, 
  getRiskLevel, 
  getDynamicReason, 
  ModelWeights 
} from '../data';
import { Student, RfidLog } from '../types';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Legend 
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';

export default function CommandCenter() {
  // Navigation inside the simulator
  const [activeSubTab, setActiveSubTab] = useState<'stats' | 'prediction' | 'rfid' | 'weights'>('stats');

  // Algorithm Weights
  const [weights, setWeights] = useState<ModelWeights>(DEFAULT_WEIGHTS);

  // Student State
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [selectedStudentId, setSelectedStudentId] = useState<string>('1'); // Juan Pérez is default
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState<'All' | 'Critico' | 'Medio' | 'Seguro'>('All');

  // RFID logs state
  const [rfidLogs, setRfidLogs] = useState<RfidLog[]>(INITIAL_RFID_LOGS);

  // Notification Toast state
  const [toasts, setToasts] = useState<{ id: string; message: string; sub: string }[]>([]);

  // Calculate Student Scores dynamically whenever students parameters or weights update
  useEffect(() => {
    const updated = students.map(student => {
      const score = computeRiskScore(student, weights);
      const level = getRiskLevel(score);
      return {
        ...student,
        riskScore: score,
        riskLevel: level
      };
    });
    setStudents(updated);
  }, [weights]);

  // Toast adder helper
  const addToast = (message: string, sub: string) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, sub }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const selectedStudent = students.find(s => s.id === selectedStudentId) || students[0];

  // Handler to slide values on the interactive student risk card
  const handleStudentParamChange = (field: 'attendanceRate' | 'gradesAverage' | 'emotionalEngagement', value: number) => {
    setStudents(prev => prev.map(s => {
      if (s.id === selectedStudentId) {
        const updatedStudent = { ...s, [field]: value };
        // Compute new score right away
        const score = computeRiskScore(updatedStudent, weights);
        const level = getRiskLevel(score);
        return {
          ...updatedStudent,
          riskScore: score,
          riskLevel: level,
          reason: getDynamicReason(updatedStudent, score)
        };
      }
      return s;
    }));
  };

  // Add a trigger simulator log to the RFID Gates
  const triggerSimRfidLog = (type: 'entrada' | 'salida' | 'tarde') => {
    // Pick temporary random student
    const randomIndex = Math.floor(Math.random() * students.length);
    const stu = students[randomIndex];
    const timeNow = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    const localGate = Math.random() > 0.5 ? 'Puerta Principal Norte' : 'Torniquete Portón Sur';
    
    // Create log entry
    const newEntry: RfidLog = {
      id: Date.now().toString(),
      studentName: stu.name,
      time: timeNow,
      type: type,
      location: localGate
    };

    setRfidLogs(prev => [newEntry, ...prev].slice(0, 8)); // keep last 8 entries

    // Fire soundless visual toast indicating simulated SMS delivered to parents
    addToast(
      `Notificación Automatizada RFID`,
      `SMS enviado al acudiente de ${stu.name}. Registro: ${type.toUpperCase()} a las ${timeNow}.`
    );
  };

  // Reset algorithm to factory setting
  const handleResetWeights = () => {
    setWeights(DEFAULT_WEIGHTS);
    addToast("Inteligencia de Fábrica Restaurada", "Se han restablecido las ponderaciones recomendadas (Asistencia 40%, Notas 40%, Socioemocional 20%).");
  };

  // Calculate statistics totals
  const totalSafe = students.filter(s => s.riskLevel === 'Seguro').length;
  const totalMedium = students.filter(s => s.riskLevel === 'Medio').length;
  const totalCritical = students.filter(s => s.riskLevel === 'Critico').length;
  const generalAcademicAverage = (students.reduce((acc, current) => acc + current.gradesAverage, 0) / students.length).toFixed(2);

  // Filter students array based on UI settings
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.grade.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk = riskFilter === 'All' ? true : s.riskLevel === riskFilter;
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
      
      {/* 2. SUB NAVIGATION RAILS */}
      <div className="flex flex-wrap items-center justify-between border-b border-on-surface/5 pb-4 mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-black text-on-surface tracking-tight flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Comando Central AulaCore V3.0
          </h2>
          <p className="text-xs text-on-surface-variant font-semibold mt-0.5">
            Simulador de Inteligencia Artificial & Control RFID escolar.
          </p>
        </div>

        {/* Action Toggle Tabs */}
        <div className="flex bg-surface-container-low p-1 border border-outline-variant/30 rounded-xl gap-1">
          <button
            id="subtab-stats"
            onClick={() => setActiveSubTab('stats')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'stats' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Métricas de Sede
          </button>
          
          <button
            id="subtab-prediction"
            onClick={() => setActiveSubTab('prediction')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'prediction' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Predictor de Deserción
          </button>

          <button
            id="subtab-rfid"
            onClick={() => setActiveSubTab('rfid')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'rfid' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Flujo RFID IoT
          </button>

          <button
            id="subtab-weights"
            onClick={() => setActiveSubTab('weights')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'weights' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Parámetros IA
          </button>
        </div>
      </div>

      {/* 3. CORE ANALYTICS STAT CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div id="stat-total-students" className="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-start text-on-surface-variant">
            <span className="text-xs font-bold uppercase tracking-wider">Matrícula Total</span>
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div className="text-3xl font-black text-on-surface mt-2">{students.length}</div>
          <p className="text-[10px] text-secondary font-bold mt-1">100% registros activos</p>
        </div>

        <div id="stat-academic-avg" className="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-start text-on-surface-variant">
            <span className="text-xs font-bold uppercase tracking-wider">Promedio Sede</span>
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div className="text-3xl font-black text-on-surface mt-2">{generalAcademicAverage} <span className="text-xs opacity-60">/ 5.0</span></div>
          <p className="text-[10px] text-secondary font-bold mt-1">▲ +0.2% vs mes anterior</p>
        </div>

        <div id="stat-students-risk" className="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start text-on-surface-variant">
            <span className="text-xs font-bold uppercase tracking-wider">Alerta Deserción</span>
            <TrendingDown className="w-5 h-5 text-error" />
          </div>
          <div className="text-3xl font-black text-error mt-2">{totalCritical}</div>
          <p className="text-[10px] text-error font-bold mt-1">Riesgo crítico detectado</p>
          <div className="absolute top-0 right-0 w-16 h-full bg-error/5 -mr-4 blur-xl rounded-full" />
        </div>

        <div id="stat-rfid-safety" className="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-start text-on-surface-variant">
            <span className="text-xs font-bold uppercase tracking-wider">Asistencia Promedio</span>
            <CalendarCheck className="w-5 h-5 text-secondary" />
          </div>
          <div className="text-3xl font-black text-secondary mt-2">86%</div>
          <p className="text-[10px] text-secondary font-bold mt-1">Control por antenas RFID</p>
        </div>
      </div>

      {/* 4. MAIN WINDOW PANELS DISPLAY */}
      <div>
        <AnimatePresence mode="wait">
          
          {/* TAB 1: GRÁFICOS Y MÉTRICAS */}
          {activeSubTab === 'stats' && (
            <motion.div
              key="stats-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Main Performance Chart Card */}
              <div id="school-analytics-chart-container" className="bg-white border border-outline-variant/30 rounded-3xl p-6 md:p-8 shadow-sm lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-black text-on-surface tracking-tight">Proyecciones de Retención Escolar</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Visión integrada de retención efectiva y rendimiento académico.</p>
                  </div>
                  <div className="flex gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1.5"><span className="block w-2.5 h-2.5 bg-primary/20 border border-primary rounded-sm" /> Retención (%)</span>
                    <span className="flex items-center gap-1.5"><span className="block w-2.5 h-2.5 bg-secondary/20 border border-secondary rounded-sm" /> Asistencia (%)</span>
                  </div>
                </div>

                <div className="h-72 w-full text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3525cd" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#3525cd" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorAsistencia" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#006c49" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#006c49" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="mes" />
                      <YAxis domain={[50, 100]} />
                      <Tooltip />
                      <Area type="monotone" name="Retención Escolar" dataKey="retencionPorcentaje" stroke="#3525cd" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRetention)" />
                      <Area type="monotone" name="Asistencia General" dataKey="asistenciaGeneral" stroke="#006c49" strokeWidth={2} fillOpacity={1} fill="url(#colorAsistencia)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex items-center gap-4 text-xs">
                  <Sparkles className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-on-surface-variant font-medium">
                    <strong>Análisis IA Integrado:</strong> El incremento de retención al 98% en Mayo coincide con el despliegue de las alertas de ausentismo RFID a padres.
                  </p>
                </div>
              </div>

              {/* School distribution radar or details */}
              <div className="space-y-6">
                {/* Custom bar chart representation */}
                <div id="risk-density-chart" className="bg-white border border-outline-variant/30 rounded-3xl p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold text-on-surface tracking-tight uppercase">Distribución de Riesco Escrito</h4>
                  <p className="text-xs text-on-surface-variant font-medium">División demográfica de alumnos evaluados.</p>
                  
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-error">Alarma Crítica</span>
                        <span>{totalCritical} Alumnos</span>
                      </div>
                      <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-error" style={{ width: `${(totalCritical / students.length) * 100}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-amber-500">Riesgo Moderado</span>
                        <span>{totalMedium} Alumnos</span>
                      </div>
                      <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: `${(totalMedium / students.length) * 100}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-secondary">Estatus Seguro</span>
                        <span>{totalSafe} Alumnos</span>
                      </div>
                      <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: `${(totalSafe / students.length) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct recommendations overview card */}
                <div className="bg-[#F8FAFC] border border-outline-variant/50 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-3">
                    <AlertTriangle className="w-4 h-4" /> Alertas del Día
                  </div>
                  <ul className="space-y-3 text-xs text-on-surface-variant font-medium">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-error mt-1.5 shrink-0" />
                      <span><strong>Asistencia Crítica:</strong> Mateo Valencia presenta 65% de fallas justificadas de clases.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span><strong>Mora Financiera:</strong> Esteban Gaviria, riesgo de desmotivación conexo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span><strong>Favorable:</strong> Valeria Serna redujo ausentismo escolar un 12%.</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => setActiveSubTab('prediction')}
                    className="mt-5 w-full bg-primary/5 hover:bg-primary/10 text-primary py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Ver Predictor Detallado
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: DETECTIVE DE DESERCIÓN (IA ENGINE) */}
          {activeSubTab === 'prediction' && (
            <motion.div
              key="prediction-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Student grid sidebar */}
              <div className="bg-white border border-outline-variant/30 rounded-3xl p-6 shadow-sm space-y-5 lg:col-span-1">
                <div className="space-y-3">
                  <h3 className="text-base font-black text-on-surface tracking-tight">Estudiantes de la Sede</h3>
                  
                  {/* Search query input */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3.5 text-on-surface-variant" />
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar por nombre o curso..."
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-primary font-medium"
                    />
                  </div>

                  {/* Filter pills */}
                  <div className="flex flex-wrap gap-1 bg-surface-container-low p-1 rounded-xl">
                    {(['All', 'Critico', 'Medio', 'Seguro'] as const).map((level) => (
                      <button
                        key={level}
                        id={`filter-risk-${level.toLowerCase()}`}
                        onClick={() => setRiskFilter(level)}
                        className={`flex-1 py-1 px-2.5 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                          riskFilter === level ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-black'
                        }`}
                      >
                        {level === 'All' ? 'Todos' : level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated list of student cards */}
                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {filteredStudents.length === 0 ? (
                    <div className="text-center py-8 text-xs text-on-surface-variant">
                      No se encontraron estudiantes para los filtros seleccionados.
                    </div>
                  ) : (
                    filteredStudents.map((student) => {
                      const isSelected = student.id === selectedStudentId;
                      const riskColorClass = 
                        student.riskLevel === 'Critico' ? 'bg-error text-white' :
                        student.riskLevel === 'Medio' ? 'bg-amber-500 text-white' : 'bg-secondary text-white';

                      return (
                        <div
                          key={student.id}
                          id={`student-row-${student.id}`}
                          onClick={() => setSelectedStudentId(student.id)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected 
                              ? 'bg-primary/5 border-primary shadow-sm' 
                              : 'bg-white border-outline-variant/30 hover:border-outline'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img 
                              alt={`${student.name} photo`}
                              referrerPolicy="no-referrer"
                              className="w-10 h-10 rounded-full object-cover"
                              src={student.avatar}
                            />
                            <div>
                              <p className="font-bold text-xs text-on-surface leading-tight">{student.name}</p>
                              <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Grado: {student.grade}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${riskColorClass}`}>
                              {student.riskLevel}
                            </span>
                            <p className="text-[10px] font-bold text-on-surface mt-1">{student.riskScore}% Riesgo</p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* IA ANALYZER AND INTERACTIVE REPORT CARD */}
              <div className="lg:col-span-2 space-y-6">
                
                <div id="ai-interactive-report-card" className="bg-white border border-outline-variant rounded-3xl p-6 md:p-8 shadow-sm relative">
                  {/* Top header decoration */}
                  <span className="absolute top-6 right-6 bg-primary-container/20 text-primary text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                    Comando Predictivo IA
                  </span>

                  <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-on-surface/5">
                    <img 
                      alt={`${selectedStudent.name} representative`}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white/50"
                      src={selectedStudent.avatar}
                    />
                    <div className="space-y-1">
                      <h4 className="text-xl font-black text-on-surface tracking-tight">{selectedStudent.name}</h4>
                      <p className="text-xs text-on-surface-variant font-semibold">Grado Escolar: {selectedStudent.grade} | Identificador: AC-00{selectedStudent.id}</p>
                      
                      <div className="flex items-center gap-2 pt-2">
                        <span className={`text-[10px] font-bold uppercase text-white px-3 py-0.5 rounded-full ${
                          selectedStudent.riskLevel === 'Critico' ? 'bg-error' :
                          selectedStudent.riskLevel === 'Medio' ? 'bg-amber-500' : 'bg-secondary'
                        }`}>
                          Nivel de Riesgo: {selectedStudent.riskLevel}
                        </span>
                        
                        <span className="text-xs font-bold text-on-surface">
                          Índice de Alerta: <span className="text-primary text-sm font-black">{selectedStudent.riskScore}%</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* INTERACTIVE COMPONENT PARAMETER SLIDERS */}
                  <div className="py-6 border-b border-on-surface/5 space-y-5">
                    <h5 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                      <Shuffle className="w-3.5 h-3.5" /> Modificar Variables Académicas del Alumno (Simulador Live)
                    </h5>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      
                      {/* Attendance Slider */}
                      <div className="bg-surface-container-low p-4 rounded-xl space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-on-surface-variant">Asistencias (%)</span>
                          <span className={selectedStudent.attendanceRate < 75 ? 'text-error' : 'text-secondary'}>
                            {selectedStudent.attendanceRate}%
                          </span>
                        </div>
                        <input 
                          type="range" 
                          min={20} 
                          max={100} 
                          step={1}
                          value={selectedStudent.attendanceRate}
                          onChange={(e) => handleStudentParamChange('attendanceRate', Number(e.target.value))}
                          className="w-full accent-primary h-1 bg-surface-container rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      {/* Grades Average Slider */}
                      <div className="bg-surface-container-low p-4 rounded-xl space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-on-surface-variant">Promedio Escrito</span>
                          <span className={selectedStudent.gradesAverage < 3.2 ? 'text-error' : 'text-secondary'}>
                            {selectedStudent.gradesAverage.toFixed(1)} / 5.0
                          </span>
                        </div>
                        <input 
                          type="range" 
                          min={1.0} 
                          max={5.0} 
                          step={0.1}
                          value={selectedStudent.gradesAverage}
                          onChange={(e) => handleStudentParamChange('gradesAverage', Number(e.target.value))}
                          className="w-full accent-primary h-1 bg-surface-container rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      {/* Engagement Slider */}
                      <div className="bg-surface-container-low p-4 rounded-xl space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-on-surface-variant">Emocional (%)</span>
                          <span className={selectedStudent.emotionalEngagement < 50 ? 'text-error' : 'text-secondary'}>
                            {selectedStudent.emotionalEngagement}%
                          </span>
                        </div>
                        <input 
                          type="range" 
                          min={10} 
                          max={100} 
                          step={1}
                          value={selectedStudent.emotionalEngagement}
                          onChange={(e) => handleStudentParamChange('emotionalEngagement', Number(e.target.value))}
                          className="w-full accent-primary h-1 bg-surface-container rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                    </div>
                  </div>

                  {/* Predictive Summary Output */}
                  <div className="py-6 space-y-4">
                    <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">
                      Diagnóstico Semántico e Impacto Calculado:
                    </h5>
                    <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                      {selectedStudent.reason}
                    </p>

                    {/* Gemini style recommendations list */}
                    <div className="bg-[#F8FAFC] border border-outline-variant/30 rounded-2xl p-5 mt-4">
                      <p className="font-bold text-xs text-primary mb-3 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Recomendaciones Especiales AulaCore IA:
                      </p>
                      <ul className="space-y-2.5">
                        {selectedStudent.recommendations && selectedStudent.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-on-surface-variant font-medium leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 font-bold">
                              ✓
                            </span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: REGISTRO RFID EN VIVO */}
          {activeSubTab === 'rfid' && (
            <motion.div
              key="rfid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* RFID Controller triggers panel */}
              <div className="bg-white border border-outline-variant/30 rounded-3xl p-6 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-black text-on-surface tracking-tight">Consola RFID de Simulación</h3>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                    Genera eventos y emula la lectura física de torniquetes RFID escolares.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    id="trigger-rfid-in"
                    onClick={() => triggerSimRfidLog('entrada')}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3.5 rounded-xl text-xs shadow-md shadow-secondary/15 flex items-center justify-center gap-2 cursor-pointer border border-transparent transition-all"
                  >
                    <Wifi className="w-4 h-4" /> Simular Ingreso (Entrada)
                  </button>

                  <button
                    id="trigger-rfid-late"
                    onClick={() => triggerSimRfidLog('tarde')}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Calendar className="w-4 h-4" /> Simular Registro Tardío (Retardo)
                  </button>

                  <button
                    id="trigger-rfid-out"
                    onClick={() => triggerSimRfidLog('salida')}
                    className="w-full bg-error hover:bg-error/90 text-white font-bold py-3.5 rounded-xl text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <UserX className="w-4 h-4" /> Simular Egreso (Salida)
                  </button>
                </div>

                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-outline-variant/30 text-xs">
                  <p className="font-bold text-on-surface mb-1">Módulo IOT Autónomo:</p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Al leer la proximidad del carnet con etiqueta RFID, el sistema reporta la geolocalización de la antena y dispara un SMS predictivo directo al acudiente registrado en la base de datos central.
                  </p>
                </div>
              </div>

              {/* Streaming list of simulated entries */}
              <div className="lg:col-span-2 bg-white border border-outline-variant/35 rounded-3xl p-6 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-on-surface/5 pb-4">
                  <div>
                    <h3 className="text-base font-black text-on-surface tracking-tight">Registro General de Antenas RFID</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Terminales Escolares sincronizadas.</p>
                  </div>
                  <span className="bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Sincronizado
                  </span>
                </div>

                {/* Table structure of RFID logs */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-on-surface/5 text-on-surface-variant font-bold">
                        <th className="pb-3 text-left">ESTUDIANTE</th>
                        <th className="pb-3 text-center">HORA REGISTRO</th>
                        <th className="pb-3 text-center">EVENTO</th>
                        <th className="pb-3 text-right">ANTENA LOCAL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-on-surface/5">
                      {rfidLogs.map((log) => {
                        const iconTypeClass = 
                          log.type === 'entrada' ? 'bg-secondary/10 text-secondary' :
                          log.type === 'tarde' ? 'bg-amber-500/10 text-amber-500' : 'bg-error/10 text-error';

                        return (
                          <tr key={log.id} className="hover:bg-primary/5 transition-colors">
                            <td className="py-3 font-bold text-on-surface">{log.studentName}</td>
                            <td className="py-3 text-center text-on-surface-variant font-semibold">{log.time}</td>
                            <td className="py-3 text-center">
                              <span className={`px-2.5 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wide inline-block ${iconTypeClass}`}>
                                {log.type === 'tarde' ? 'RETARDO' : log.type.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-3 text-right text-on-surface-variant font-semibold">{log.location}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Visual cell phone mockup of triggered SMS alerts */}
                <div className="border-t border-on-surface/5 pt-6 space-y-3">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">Ejemplo de Alerta Push / SMS (Vista Acudiente):</h5>
                  </div>
                  <div className="bg-[#F8FAFC] border border-outline-variant/30 rounded-2xl p-4 flex gap-4 items-start max-w-lg">
                    <div className="p-2 bg-primary/10 rounded-xl text-primary font-bold shrink-0 text-xs">AulaCore</div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-on-surface">Notificación Oficial de Matrícula</p>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed">
                        "Estimado(a) Acudiente. Le confirmamos que su hijo(a) ha registrado exitosamente su ingreso a la sede escolar las 07:44 hrs a través de la Puerta Principal. AulaCore Guard."
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: AJUSTADOR DE PARÁMETROS DEL MODELO MATEMÁTICO */}
          {activeSubTab === 'weights' && (
            <motion.div
              key="weights-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto bg-white border border-outline-variant rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              <div>
                <h3 className="text-xl font-black text-on-surface tracking-tight">Configuración del Motor Predictivo AulaCore</h3>
                <p className="text-xs text-on-surface-variant font-medium mt-1">
                  Define de manera manual o automática el peso matemático que cada variable tiene sobre el Índice de Deserción General de los alumnos. El total debe sumar exactamente 100%.
                </p>
              </div>

              {/* Slider settings controls */}
              <div className="space-y-6">
                
                {/* Asistencia */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="flex items-center gap-1"><CalendarCheck className="w-4 h-4 text-primary" /> Incidencia del Ausentismo (RFID)</span>
                    <span className="text-primary font-black">{Math.round(weights.asistencia * 100)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={0.1} 
                    max={0.8} 
                    step={0.05}
                    value={weights.asistencia}
                    onChange={(e) => {
                      const newVal = Number(e.target.value);
                      const remains = 1 - newVal;
                      // Share remaining weight proportionally between others
                      setWeights({
                        asistencia: newVal,
                        academia: remains * 0.6,
                        emocional: remains * 0.4
                      });
                    }}
                    className="w-full accent-primary h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Notas Academicas */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-primary" /> Rendimiento Académico (Notas)</span>
                    <span className="text-primary font-black">{Math.round(weights.academia * 100)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={0.1} 
                    max={0.8} 
                    step={0.05}
                    value={weights.academia}
                    onChange={(e) => {
                      const newVal = Number(e.target.value);
                      const remains = 1 - newVal;
                      setWeights({
                        asistencia: remains * 0.6,
                        academia: newVal,
                        emocional: remains * 0.4
                      });
                    }}
                    className="w-full accent-primary h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Engagement Emocional */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="flex items-center gap-1"><HeartHandshake className="w-4 h-4 text-primary" /> Índice Socioemocional (Encuestas / Psicología)</span>
                    <span className="text-primary font-black">{Math.round(weights.emocional * 100)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={0.1} 
                    max={0.8} 
                    step={0.05}
                    value={weights.emocional}
                    onChange={(e) => {
                      const newVal = Number(e.target.value);
                      const remains = 1 - newVal;
                      setWeights({
                        asistencia: remains * 0.5,
                        academia: remains * 0.5,
                        emocional: newVal
                      });
                    }}
                    className="w-full accent-primary h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer"
                  />
                </div>

              </div>

              {/* Reset to recommendation values */}
              <div className="pt-6 border-t border-on-surface/5 flex flex-wrap gap-4 items-center justify-between">
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-outline-variant/30 text-xs text-on-surface-variant font-medium flex-1 max-w-md">
                  <strong>Ponderación Activa de Suma:</strong> {Math.round((weights.asistencia + weights.academia + weights.emocional) * 100)}% de representatividad sobre red escolar neural.
                </div>
                <button
                  id="reset-model-weights"
                  onClick={handleResetWeights}
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-4 h-4" /> Restaurar de Fábrica
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 5. LIVE NOTIFICATION TOAST OVERLAYS CONTAINER */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none w-full max-w-sm px-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              layout
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white border border-outline-variant rounded-2xl p-4 shadow-2xl flex gap-3 items-start relative overflow-hidden pointer-events-auto"
            >
              <div className="p-1.5 bg-secondary/15 text-secondary rounded-lg shrink-0 mt-0.5">
                <Bell className="w-4 h-4 animate-bounce" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-on-surface">{toast.message}</p>
                <p className="text-[10px] text-on-surface-variant leading-relaxed font-semibold">{toast.sub}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
