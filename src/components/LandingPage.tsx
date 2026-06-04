import { useState } from 'react';
import { 
  Sparkles, 
  Rss, 
  BrainCircuit, 
  CircleDot, 
  CheckCircle, 
  GraduationCap, 
  Users, 
  TrendingDown, 
  Eye, 
  Check, 
  FileText, 
  Zap, 
  HelpCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  User,
  Heart,
  Calendar,
  Wifi,
  DollarSign,
  Layers,
  MessageSquare,
  Network,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LandingPageProps {
  onOpenDemo: () => void;
  onGoToDashboard: () => void;
}

export default function LandingPage({ onOpenDemo, onGoToDashboard }: LandingPageProps) {
  // Modules details state
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  
  // Interactive ROI Calculator State
  const [studentCount, setStudentCount] = useState<number>(500);
  const [hoursPerRegistration, setHoursPerRegistration] = useState<number>(3); // hours spent with old system

  // Ecosystem active tab for interactive previews
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<string>('Docentes');

  // Static 12 Modules data
  const modulesList = [
    {
      id: 1,
      title: "Matrícula Digital",
      icon: <FileText className="w-8 h-8 text-primary" />,
      tagline: "Procesos de inscripción 100% remotos",
      desc: "Digitaliza de principio a fin los contratos, copias de seguridad de identidad y fichas de salud. Reducción drástica del papel y tiempos muertos."
    },
    {
      id: 2,
      title: "Evaluación IA",
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      tagline: "Análisis semántico profundo educativo",
      desc: "Calificación automatizada de textos constructivos, mapas conceptuales y reportes de progreso adaptativo escolar."
    },
    {
      id: 3,
      title: "Control RFID",
      icon: <Wifi className="w-8 h-8 text-primary" />,
      tagline: "Seguridad y asistencia automatizada",
      desc: "Integración con microchips o carnets de proximidad RFID. Registro de entrada/salida institucional visible en tiempo real par los acudientes."
    },
    {
      id: 4,
      title: "Predictive Analytics",
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      tagline: "Dashboards de proyección",
      desc: "Visualización macro y micro de riesgo de deserción, alertas de bajas calificaciones acumuladas e indicadores socioemocionales."
    },
    {
      id: 5,
      title: "Finanzas Pro",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      tagline: "Gestión de cartera y pasarelas de pago",
      desc: "Cobros recurrentes programados automáticos, avisos de impagos preventivos para evitar suspensiones imprevistas."
    },
    {
      id: 6,
      title: "Comunicación Omnicanal",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      tagline: "Chat, email y push unificados",
      desc: "Olvídate de chats dispersos. Una aplicación oficial para maestros y acudientes protegida con altos estándares de privacidad corporativa."
    },
    {
      id: 7,
      title: "Horarios Auto",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      tagline: "Asignación inteligente de recursos",
      desc: "Generación algorítmica de horarios de docentes, laboratorios y grupos sin traslapes ni demoras de asignación manual."
    },
    {
      id: 8,
      title: "Certificación Digital",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      tagline: "Diplomas con seguridad Blockchain",
      desc: "Emisión de certificados académicos, constancias de notas y boletines oficiales firmados digitalmente e infalsificables."
    },
    {
      id: 9,
      title: "Bienestar Estudiantil",
      icon: <Heart className="w-8 h-8 text-primary" />,
      tagline: "Monitoreo psicopedagógico integrado",
      desc: "Seguimiento ético de alertas de bullying, desmotivación o problemas de conducta registrados con derivación automática a orientación."
    },
    {
      id: 10,
      title: "Planificación de Currículos",
      icon: <Layers className="w-8 h-8 text-primary" />,
      tagline: "Alineación de objetivos educativos",
      desc: "Estandarización y co-creación guiada de planes curriculares para cumplir de manera ágil los lineamientos del Ministerio."
    },
    {
      id: 11,
      title: "Control de Acceso Físico",
      icon: <Wifi className="w-8 h-8 text-primary" />,
      tagline: "Torniquetes inteligentes integrados",
      desc: "Conexión directa con puertas, portones y torniquetes. Nadie sale sin la autorización del acudiente registrado en el sistema."
    },
    {
      id: 12,
      title: "Portal Estudiantil Gamificado",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      tagline: "Recompensas por rendimiento",
      desc: "Un entorno digital lúdico donde los más jóvenes visualizan sus progresos, misiones académicas cumplidas y ganan insignias saludables."
    }
  ];

  // Calculadora de ROI Matemática
  const totalHorasTradicionales = studentCount * hoursPerRegistration;
  const totalHorasAulaCore = studentCount * (5 / 60); // 5 minutes representing AulaCore registration
  const tiempoAhorradoHoras = Math.round(totalHorasTradicionales - totalHorasAulaCore);
  const porcentajeMejora = "875%"; // representing 8.7x fold fast automation

  const ecosystemPilars = [
    { name: 'Estudiantes', icon: <User className="w-5 h-5 animate-pulse" />, preview: 'Portal gamificado para consultar notas en 1 clic, subir tareas y ganar insignias por su constante constancia.' },
    { name: 'Padres', icon: <Users className="w-5 h-5" />, preview: 'Notificaciones instantáneas RFID cuando el hijo cruza el portón, reportes semanales de conducta y botón de pago de pensión.' },
    { name: 'Docentes', icon: <GraduationCap className="w-5 h-5" />, preview: 'Planificador curricular guiado por IA, calificador inteligente de tareas y comando para emitir alertas de riesgo preventivas.' },
    { name: 'Directores', icon: <Layers className="w-5 h-5" />, preview: 'Gestor unificado de horarios de personal, distribución de aulas físicas y dashboards de deserción de sedes vinculadas.' },
    { name: 'Coordinadores', icon: <CircleDot className="w-5 h-5" />, preview: 'Mapeo global de alertas disciplinarias e informes predictivos cruzados sobre ausentismo escolar.' },
    { name: 'Rectores', icon: <Sparkles className="w-5 h-5" />, preview: 'Socio de planeación de AulaCore. Proyección de deserción histórica, evolución de ingresos y estado de certificaciones.' },
    { name: 'Secretarías', icon: <Network className="w-5 h-5" />, preview: 'Gestión unificada de matrículas masivas, egreso de egresados con diplomas digitales blockchain y reportes gubernamentales oficiales.' },
  ];

  return (
    <div className="space-y-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12 text-center relative max-w-7xl mx-auto py-12">
        {/* Animated badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Nueva Generación V3.0 • IA Inteligente
          </span>
        </motion.div>

        {/* Big Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-[64px] font-black tracking-tight max-w-5xl leading-none text-on-surface mb-6"
        >
          En educación, los problemas no aparecen de un día para otro.<br />
          <span className="text-primary bg-clip-text italic block mt-2">AulaCore los detecta antes.</span>
        </motion.h1>

        {/* Hero description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-3xl mb-12 font-medium"
        >
          Identifica riesgos académicos, ausentismo, deserción y alertas institucionales antes de que se conviertan en crisis.
        </motion.p>

        {/* Buttons Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 z-10 w-full justify-center max-w-md px-4"
        >
          <a 
            id="hero-request-demo"
            href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            SOLICITAR DEMO <ArrowRight className="w-5 h-5" />
          </a>
          
          <button 
            id="hero-view-platform"
            onClick={onGoToDashboard}
            className="flex-1 bg-white hover:bg-surface-container text-on-surface border border-outline-variant px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            PROBAR PLATAFORMA
          </button>
        </motion.div>

        {/* Three small horizontal indicators beneath hero buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-6 mt-2 mb-10 text-on-surface-variant font-semibold text-xs md:text-sm md:backdrop-blur-none"
        >
          <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200/50 md:bg-slate-100/50 md:backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:bg-slate-100 transition-all cursor-pointer">
            <span className="text-primary font-bold">👁</span>
            <span>Predice riesgos</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200/50 md:bg-slate-100/50 md:backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:bg-slate-100 transition-all cursor-pointer">
            <span className="text-secondary font-bold">🎯</span>
            <span>Toma decisiones</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200/50 md:bg-slate-100/50 md:backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:bg-slate-100 transition-all cursor-pointer">
            <span className="text-primary font-bold">✨</span>
            <span>Transforma resultados</span>
          </div>
        </motion.div>

        {/* Interactive Mockup Display on Top */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-5xl mx-auto group z-10 cursor-pointer mb-12"
          onClick={onGoToDashboard}
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 hidden md:block"></div>
          
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl p-1.5 md:p-3 border border-outline-variant/30">
            <img 
              alt="AulaCore sophisticated dashboard mockup visualizer"
              referrerPolicy="no-referrer"
              className="rounded-xl w-full object-cover aspect-[16/9]"
              src="https://res.cloudinary.com/dgk2vhigg/image/upload/v1778786409/autopostlab/cmnp6v4dx0001oo7e297rkm9l/rhbkspm7e2smubitilbq.png"
            />
            
            {/* Hover tooltip hint */}
            <div className="absolute inset-0 bg-primary/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
              <div className="p-4 bg-white/15 rounded-full border border-white/20 mb-3 animate-pulse">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <p className="text-xl font-bold tracking-tight text-center">Acceder al Centro de Mando Simulador</p>
              <p className="text-sm opacity-90 mt-1 max-w-md text-center">Configura ponderaciones, analiza variables predictivas de deserción real y vive la alerta RFID en vivo.</p>
            </div>

            {/* Floating Live Overlays */}
            <div className="absolute top-1/4 -left-8 hidden lg:block bg-white/95 rounded-2xl border border-outline-variant p-4 w-64 shadow-xl pointer-events-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-xs text-on-surface">Estudiantes matriculados 960</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000 w-[25%]"></div>
              </div>
              <p className="text-[10px] text-on-surface-variant font-bold mt-1 text-right">Estudiantes en riesgo académico 25%</p>
            </div>

            <div className="absolute bottom-1/4 -right-8 hidden lg:block bg-white/95 rounded-2xl border border-outline-variant p-4 w-60 shadow-xl pointer-events-none">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-secondary/10 rounded-xl">
                  <BrainCircuit className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-bold text-xs text-on-surface">Motor de Predicción</span>
              </div>
              <div className="text-lg font-black text-secondary">
                98.4% Precisión
              </div>
              <p className="text-[10px] text-on-surface-variant">Calibrado con Red Neuronal Local</p>
            </div>
          </div>
        </motion.div>

        {/* Brand metrics card (Ventas de AulaCore) underneath the photo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="w-full max-w-5xl mx-auto bg-white border border-outline-variant rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm mb-6 relative z-10"
        >
          {/* Left branding */}
          <div className="text-center md:text-left shrink-0 md:max-w-[200px]">
            <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">
              Beneficios Clave
            </h4>
            <h3 className="text-lg font-black text-on-surface leading-snug">
              Análisis <span className="text-primary font-extrabold">AulaCore</span>
            </h3>
            <p className="text-[10px] text-on-surface-variant font-medium mt-1">
              Impacto y resultados educativos con inteligencia predictiva.
            </p>
          </div>

          {/* Desktop divider */}
          <div className="hidden md:block h-12 w-[1px] bg-slate-200" />

          {/* Right Metrics Grid */}
          <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 animate-fade-in">
            {[
              { label: "+15.000", desc: "Estudiantes monitoreados", style: "text-primary" },
              { label: "+25", desc: "Colegios que ya confían", style: "text-secondary" },
              { label: "-32%", desc: "Reducción promedio en ausentismo", style: "text-red-500" },
              { label: "-27%", desc: "Reducción promedio en deserción", style: "text-red-500" },
              { label: "+95%", desc: "Satisfacción de los usuarios", style: "text-green-600 font-bold" }
            ].map((metric, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-slate-50/50 border border-outline-variant/40 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-100/50 transition-colors"
                id={`sales-metric-${idx}`}
              >
                <span className={`text-xl md:text-2xl font-black ${metric.style} tracking-tight`}>
                  {metric.label}
                </span>
                <span className="text-[10px] text-on-surface-variant font-bold leading-normal mt-1.5 uppercase tracking-wide">
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. PAIN POINT & PARADIGM SHIFT SECTION */}
      <section className="py-16 px-6 md:px-12 bg-white border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" /> Diagnóstico Institucional
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              Evoluciona de la reacción pasiva a la <span className="text-primary font-bold">anticipación.</span>
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant font-medium leading-relaxed">
              La mayoría de los colegios operan a ciegas, registrando la deserción y el fracaso una vez que ya ocurrieron. AulaCore le permite actuar antes de que el problema sea irreversible.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 bg-error/5 border border-error/15 rounded-2xl p-5">
                <span className="h-7 w-7 text-error shrink-0 font-bold text-xl flex items-center justify-center bg-error/10 rounded-full">✕</span>
                <div>
                  <h4 className="font-bold text-sm text-error uppercase tracking-wider">La Realidad Antes</h4>
                  <ul className="text-xs font-semibold mt-3 space-y-2 text-on-surface">
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">🛑</span> <span className="text-red-700">Deserción imprevista</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">⚠️</span> <span className="text-on-surface-variant font-semibold">Ausentismo no reportado</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">⚠️</span> <span className="text-on-surface-variant font-semibold">Bajo rendimiento tardío</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">⚠️</span> <span className="text-on-surface-variant font-semibold">Padres desconectados</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">⚠️</span> <span className="text-on-surface-variant font-semibold">Reportes manuales y lentos</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 bg-secondary/5 border border-secondary/15 rounded-2xl p-5">
                <span className="h-7 w-7 text-secondary shrink-0 font-bold text-xl flex items-center justify-center bg-secondary/10 rounded-full">✓</span>
                <div>
                  <h4 className="font-bold text-sm text-secondary uppercase tracking-wider">El Poder Después</h4>
                  <ul className="text-xs font-semibold mt-3 space-y-2 text-on-surface">
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">✨</span> <span className="text-primary font-bold">Alertas tempranas</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">🎯</span> <span className="text-on-surface font-semibold">Seguimiento predictivo</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">🎯</span> <span className="text-on-surface font-semibold">Comunicación en tiempo real</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">🎯</span> <span className="text-on-surface font-semibold">Intervención oportuna</span></li>
                    <li className="flex items-center gap-1.5"><span className="shrink-0 text-xs">🎯</span> <span className="text-secondary font-bold">Decisiones basadas en IA</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive desertion simulation panel right on the landing page */}
          <div className="bg-white border border-outline-variant/60 rounded-3xl p-6 md:p-8 shadow-sm relative w-full max-w-md mx-auto group">
            <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
              IA Analyzing Live
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                JP
              </div>
              <div>
                <p className="font-bold text-sm text-on-surface">Ficha de Riesgo Escrito</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="block h-2.5 w-2.5 rounded-full bg-error" />
                  <span className="text-[11px] font-bold text-error uppercase tracking-wider">Riesgo Crítico</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-1">
                  <span>Asistencia escolar en 10B</span>
                  <span className="text-error">72%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error rounded-full" style={{ width: '72%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-1">
                  <span>Involucramiento Familiar</span>
                  <span className="text-error">30%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div className="p-4 bg-white border border-outline-variant rounded-2xl relative shadow-sm mt-4">
                <p className="font-bold text-xs text-primary mb-1">Predicción AulaCore IA:</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  "El alumno presenta una caída progresiva del 15% en sus últimas 3 evaluaciones de Álgebra. Requiere tutoría de refuerzo."
                </p>
                <button 
                  onClick={onGoToDashboard}
                  className="mt-3 text-[11px] font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Ver plan detallado <ArrowRight className="w-3.5 h-3.5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM PILLARS WITH PREVIEWS */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            <Network className="w-4 h-4 text-primary animate-pulse" /> Ventaja Competitiva Única
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight">
            Un ecosistema, siete pilares conectados.
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Casi ningún competidor une a todos los actores de la educación. AulaCore conecta integralmente a <strong>Estudiantes, Padres, Docentes, Directores de Grupo, Coordinadores, Rectores y Secretarías de Educación</strong> en un flujo constante de inteligencia en tiempo real.
          </p>
        </div>

        {/* Pillars Horizontal Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {ecosystemPilars.map((pilar) => {
            const isActive = activeEcosystemTab === pilar.name;
            return (
              <button
                key={pilar.name}
                id={`ecosystem-tab-${pilar.name.toLowerCase()}`}
                onClick={() => setActiveEcosystemTab(pilar.name)}
                className={`p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-102 font-bold' 
                    : 'bg-white border-outline-variant/30 hover:border-primary/50 text-on-surface '
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'}`}>
                  {pilar.icon}
                </div>
                <span className="text-xs tracking-tight">{pilar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Preview Card with AnimatePresence */}
        <div className="bg-white border border-outline-variant/30 rounded-3xl p-8 max-w-3xl mx-auto shadow-md">
          <AnimatePresence mode="wait">
            {ecosystemPilars.filter(p => p.name === activeEcosystemTab).map((pilar) => (
              <motion.div 
                key={pilar.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 text-center md:text-left md:flex items-center gap-8"
              >
                <div className="mx-auto md:mx-0 shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8">{pilar.icon}</div>
                </div>
                <div>
                  <h4 className="text-lg font-black text-on-surface">
                    Canal y Herramientas para <span className="text-primary">{pilar.name}</span>
                  </h4>
                  <p className="text-sm text-on-surface-variant font-medium mt-1 leading-relaxed">
                    {pilar.preview}
                  </p>
                  <div className="flex gap-2 justify-center md:justify-start mt-4">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      100% Configurado
                    </span>
                    <span className="bg-primary/5 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      Integración Real-time
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* NEW section: Panorama Completo */}
      <section className="py-16 px-6 md:px-12 bg-white max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/5 px-4 py-1.5 rounded-full border border-secondary/10">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" /> Inteligencia Integrada
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              Todos ven una parte del problema.<br />
              <span className="text-secondary bg-clip-text">AulaCore ve el panorama completo.</span>
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant font-medium leading-relaxed">
              Mientras otros sistemas de gestión escolar almacenan información en bases de datos aisladas e incoherentes, AulaCore conecta a todos los actores educativos para generar inteligencia institucional y predictiva en tiempo real.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 px-1.5 bg-secondary/10 text-secondary rounded-lg font-black text-xs shrink-0 mt-0.5">01</div>
                <div>
                  <h4 className="font-extrabold text-sm text-on-surface">Cruce predictivo continuo</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Analiza el comportamiento, la asistencia RFID y las evaluaciones académicas al mismo tiempo para anticipar incidentes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 px-1.5 bg-secondary/10 text-secondary rounded-lg font-black text-xs shrink-0 mt-0.5">02</div>
                <div>
                  <h4 className="font-extrabold text-sm text-on-surface">Ecosistema Colaborativo</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">La información clave fluye de forma segura sin archivos perdidos, llamadas interminables o chats informales vulnerables.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-outline-variant/40 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center relative min-h-[420px] shadow-inner overflow-hidden select-none">
            {/* Grid background overlay for technical look */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
            
            <div className="relative w-full h-[320px] max-w-[340px] flex items-center justify-center">
              {/* SVG background network lines with active glowing particles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Lines radiating from center to nodes */}
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="currentColor" className="text-secondary/15" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="88%" y2="28%" stroke="currentColor" className="text-secondary/15" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="72%" stroke="currentColor" className="text-secondary/15" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="currentColor" className="text-secondary/15" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="15%" y2="72%" stroke="currentColor" className="text-secondary/15" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="12%" y2="28%" stroke="currentColor" className="text-secondary/15" strokeWidth="2" strokeDasharray="4 4" />

                {/* Animated flowing dots */}
                <circle r="4" fill="#0000ff" className="text-secondary animate-pulse">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M170,160 L170,38" />
                </circle>
                <circle r="4" fill="#0000ff" className="text-secondary">
                  <animateMotion dur="5.5s" repeatCount="indefinite" path="M170,160 L299,90" />
                </circle>
                <circle r="4" fill="#0000ff" className="text-secondary animate-pulse">
                  <animateMotion dur="4.2s" repeatCount="indefinite" path="M170,160 L289,230" />
                </circle>
                <circle r="4" fill="#0000ff" className="text-secondary">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M170,160 L51,230" />
                </circle>
                <circle r="4" fill="#0000ff" className="text-secondary animate-pulse">
                  <animateMotion dur="5s" repeatCount="indefinite" path="M170,160 L41,90" />
                </circle>
              </svg>

              {/* Center: AulaCore Core Engine Node */}
              <div className="absolute z-20 w-24 h-24 rounded-full bg-white border-2 border-secondary shadow-lg flex flex-col items-center justify-center p-3 text-center hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-secondary/8 animate-ping" />
                <BrainCircuit className="w-8 h-8 text-secondary animate-pulse mb-0.5" />
                <span className="text-[10px] font-black tracking-tighter text-on-surface leading-none uppercase">AulaCore AI</span>
                <span className="text-[7px] text-secondary font-black tracking-widest mt-0.5">ENGINE</span>
              </div>

              {/* Node 1: Coordinador (Top Center) */}
              <div className="absolute top-[3%] left-[50%] -translate-x-[50%] z-20 group">
                <div className="bg-white border border-outline-variant shadow-md p-2 rounded-xl text-center flex items-center gap-1.5 hover:border-secondary transition-all cursor-pointer">
                  <CircleDot className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] font-extrabold text-on-surface">Coordinadores</span>
                </div>
              </div>

              {/* Node 2: Padres (Top Right) */}
              <div className="absolute top-[21%] right-[-3%] z-20">
                <div className="bg-white border border-outline-variant shadow-md p-2 rounded-xl text-center flex items-center gap-1.5 hover:border-secondary transition-all cursor-pointer">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-extrabold text-on-surface">Padres</span>
                </div>
              </div>

              {/* Node 3: Rectoría (Middle Right) -> using direct coordinates */}
              <div className="absolute bottom-[21%] right-[-1%] z-20">
                <div className="bg-white border border-outline-variant shadow-md p-2 rounded-xl text-center flex items-center gap-1.5 hover:border-secondary transition-all cursor-pointer">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] font-extrabold text-on-surface">Rectoría</span>
                </div>
              </div>

              {/* Node 4: Secretaría (Bottom Center) */}
              <div className="absolute bottom-[4%] left-[50%] -translate-x-[50%] z-20">
                <div className="bg-white border border-outline-variant shadow-md p-2 rounded-xl text-center flex items-center gap-1.5 hover:border-secondary transition-all cursor-pointer">
                  <Network className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-extrabold text-on-surface">Secretarías</span>
                </div>
              </div>

              {/* Node 5: Estudiantes (Bottom Left) */}
              <div className="absolute bottom-[21%] left-[-1%] z-20">
                <div className="bg-white border border-outline-variant shadow-md p-2 rounded-xl text-center flex items-center gap-1.5 hover:border-secondary transition-all cursor-pointer">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-extrabold text-on-surface">Estudiantes</span>
                </div>
              </div>

              {/* Node 6: Docentes (Top Left) */}
              <div className="absolute top-[21%] left-[-4%] z-20">
                <div className="bg-white border border-outline-variant shadow-md p-2 rounded-xl text-center flex items-center gap-1.5 hover:border-secondary transition-all cursor-pointer">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-extrabold text-on-surface">Docentes</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-on-surface-variant font-bold text-center mt-4 border border-outline-variant/30 bg-white p-2 rounded-xl">
              💡 Todos los flujos se alimentan continuamente para alertar de forma preventiva a los directivos.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC ROI AUTOMATION AND COMPARISON CALCULATOR */}
      <section id="precios" className="py-16 px-6 md:px-12 bg-[#F8FAFC] border-y border-outline-variant/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <Zap className="w-4 h-4 text-primary animate-bounce font-bold" /> AulaCore Analytics
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              Multiplica la productividad de tus docentes
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant font-medium leading-relaxed">
              No solo digitalizamos o cargamos registros académicos y de asistencia: redefinimos el flujo de trabajo escolar. Descubre cuánto tiempo ahorrarán tus docentes con nuestro módulo de matrícula remota express.
            </p>

            {/* Simulated ROI Inputs */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant/40 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-2">Simula el ahorro en inscripciones:</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span>Alumnos Totales del Colegio</span>
                  <span className="text-primary font-bold">{studentCount} estudiantes</span>
                </div>
                <input 
                  type="range" 
                  min={50} 
                  max={2500} 
                  step={50}
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full accent-primary h-1 bg-surface-container rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span>Horas por matrícula con sistema antiguo (papelería, filas, firmas)</span>
                  <span className="text-primary font-bold">{hoursPerRegistration} horas / alumno</span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={10} 
                  step={1}
                  value={hoursPerRegistration}
                  onChange={(e) => setHoursPerRegistration(Number(e.target.value))}
                  className="w-full accent-primary h-1 bg-surface-container rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary to-primary rounded-3xl blur opacity-15" />
            <div className="relative bg-white border border-outline-variant rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
              <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Ahorro Estimado con AulaCore
              </span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 text-center">
                  <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">PROCESO TRADICIONAL</p>
                  <p className="text-2xl md:text-3xl font-black text-on-surface mt-1">{totalHorasTradicionales} hs</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Esfuerzo del equipo</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/15 text-center relative">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider">CON AULACORE</p>
                  <p className="text-2xl md:text-3xl font-black text-primary mt-1">{Math.round(totalHorasAulaCore)} hs</p>
                  <p className="text-[10px] text-primary-fixed-dim font-medium mt-0.5">En línea y automático</p>
                </div>
              </div>

              <div className="bg-secondary/5 border border-secondary/15 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">TIEMPO LIBERADO</p>
                  <p className="text-3xl font-black text-secondary">{tiempoAhorradoHoras} Horas</p>
                </div>
                <div className="bg-secondary text-white text-xs font-black px-4 py-2 rounded-xl text-center shadow-md">
                  {porcentajeMejora} más rápido
                </div>
              </div>

              {/* Futuristic mockup image requested */}
              <div className="rounded-xl overflow-hidden mt-4 shadow-md">
                <img 
                  alt="Futuristic workspace efficiency mockup representing predictive intelligence classroom technology"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 object-cover"
                  src="https://res.cloudinary.com/dgk2vhigg/image/upload/v1780323768/Inteligencia_Artificial_Predictiva_bpi265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE 12 INTUITION MODULES GRID */}
      <section id="modulos" className="py-8 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <Layers className="w-4 h-4 text-primary" /> Módulos del Sistema
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight">
            12 Módulos, <span className="text-primary italic">un solo ecosistema vivo.</span>
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Configura y enciende únicamente las herramientas que correspondan con los objetivos de crecimiento institucional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modulesList.map((mod, idx) => (
            <motion.div
              layoutId={`module-card-${mod.id}`}
              onClick={() => setSelectedModule(idx)}
              whileHover={{ y: -5 }}
              key={mod.id}
              className="bg-white border border-outline-variant/30 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  {mod.icon}
                </div>
                <h4 className="text-lg font-bold text-on-surface tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {mod.title}
                </h4>
                <p className="text-xs text-primary font-bold mb-3 uppercase tracking-wider">
                  {mod.tagline}
                </p>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed line-clamp-3">
                  {mod.desc}
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-primary flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
                Ampliar información <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Module Detail Modal */}
        <AnimatePresence>
          {selectedModule !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedModule(null)}
                className="absolute inset-0 bg-on-surface"
              />
              <motion.div 
                layoutId={`module-card-${modulesList[selectedModule].id}`}
                className="bg-white rounded-3xl p-8 max-w-lg w-full relative z-10 border border-outline"
              >
                <button 
                  onClick={() => setSelectedModule(null)}
                  className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-black/5 cursor-pointer text-on-surface-variant"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {modulesList[selectedModule].icon}
                </div>
                
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                  Módulo Integrado • AulaCore
                </span>
                
                <h3 className="text-2xl font-black text-on-surface tracking-tight">
                  {modulesList[selectedModule].title}
                </h3>
                
                <p className="text-sm text-secondary font-bold mt-2 uppercase tracking-wide">
                  {modulesList[selectedModule].tagline}
                </p>
                
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium mt-4 pt-4 border-t border-on-surface/5">
                  {modulesList[selectedModule].desc}
                </p>

                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-outline-variant/30 mt-6 flex gap-3 items-start">
                  <div className="p-1 px-1.5 bg-secondary-container/50 text-on-secondary-container rounded-lg font-black text-xs shrink-0 uppercase mt-0.5">IA</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Este módulo alimenta automáticamente el predictor del <strong>Comando Central</strong> de deserción estudiantil sin requerir importación manual de datos Excel.
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  <a 
                    href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-xs hover:scale-95 transition-transform flex items-center justify-center"
                  >
                    COTIZAR MÓDULO
                  </a>
                  <button 
                    onClick={() => setSelectedModule(null)}
                    className="flex-1 bg-surface-container text-on-surface py-3 rounded-xl font-bold text-xs"
                  >
                    VOLVER AL MENÚ
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 7. HIGH END DECORATIVE DATA FLOW ART - STAR SECTION */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#F8FAFC] border-y border-outline-variant/30 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
              <BrainCircuit className="w-4 h-4 text-primary animate-pulse" /> El ADN de AulaCore
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              No espere a que aparezcan los problemas. <span className="text-primary italic block mt-2">Anticípese.</span>
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant font-medium leading-relaxed">
              AulaCore convierte la información académica, la asistencia diaria y los indicadores de comportamiento en inteligencia accionable. Detecte riesgos tempranos antes de que se conviertan en crisis irremediables y fortalezca la trayectoria educativa de cada estudiante.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-outline-variant/60 shadow-sm">
                <span className="text-xs font-bold text-primary tracking-wide uppercase">01 • Alertas Tempranas</span>
                <p className="text-xs text-on-surface-variant mt-1">Notificaciones inmediatas al detectar caídas en asistencia u objetivos de rendimiento.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-outline-variant/60 shadow-sm">
                <span className="text-xs font-bold text-primary tracking-wide uppercase">02 • Indicadores de Colores</span>
                <p className="text-xs text-on-surface-variant mt-1">Semáforo de riesgo intuitivo para identificar de un vistazo las necesidades de cada aula.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-outline-variant/60 shadow-sm">
                <span className="text-xs font-bold text-primary tracking-wide uppercase">03 • Evolución de Alumnos</span>
                <p className="text-xs text-on-surface-variant mt-1">Monitoreo histórico longitudinal para ver cómo responde el alumno a las tutorías de apoyo.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-outline-variant/60 shadow-sm">
                <span className="text-xs font-bold text-primary tracking-wide uppercase">04 • Intervención Rápida</span>
                <p className="text-xs text-on-surface-variant mt-1">Fichas de acción inmediata conectadas directamente con el equipo de orientación y padres.</p>
              </div>
            </div>
          </div>

          {/* Interactive Predictive Dashboard Visual (Menos foto de estudiante, más inteligencia) */}
          <div className="lg:col-span-6">
            <div className="relative bg-white border border-outline shadow-2xl rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40">
                <div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">COMANDO PREDICTIVO</span>
                  <h3 className="font-extrabold text-lg text-on-surface flex items-center gap-1.5 mt-0.5">
                    Monitoreo Multidimensional de Riesgos
                  </h3>
                </div>
                <div className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping" />
                  PRECISIÓN 98.4%
                </div>
              </div>

              {/* Dynamic Student Cards */}
              <div className="space-y-3">
                <p className="text-xs font-extrabold text-on-surface-variant uppercase tracking-wider">Últimas alertas de riesgo analizadas:</p>
                
                {/* Student 1 */}
                <div className="p-3.5 bg-[#FEF2F2] border border-red-200/50 rounded-2xl flex items-center justify-between gap-4 hover:scale-[1.01] transition-transform">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-xs text-red-700">
                      MS
                    </div>
                    <div>
                      <p className="text-xs font-black text-on-surface">Mateo Salazar • 11B</p>
                      <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider block mt-0.5">
                        Riesgo Crítico de Deserción
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full">
                      Caída Asistencia -25%
                    </span>
                    <p className="text-[9px] text-on-surface-variant italic mt-1">Hace 15 minutos</p>
                  </div>
                </div>

                {/* Student 2 */}
                <div className="p-3.5 bg-[#FFFBEB] border border-amber-200/50 rounded-2xl flex items-center justify-between gap-4 hover:scale-[1.01] transition-transform">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center font-bold text-xs text-amber-700">
                      SG
                    </div>
                    <div>
                      <p className="text-xs font-black text-on-surface">Sofía Giraldo • 9A</p>
                      <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block mt-0.5">
                        Riesgo Académico Moderado
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                      Promedio {"< 3.2"}
                    </span>
                    <p className="text-[9px] text-on-surface-variant italic mt-1">Hace 2 horas</p>
                  </div>
                </div>

                {/* Student 3 */}
                <div className="p-3.5 bg-green-50/50 border border-green-200/50 rounded-2xl flex items-center justify-between gap-4 hover:scale-[1.01] transition-transform">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center font-bold text-xs text-green-700">
                      AC
                    </div>
                    <div>
                      <p className="text-xs font-black text-on-surface">Andrés Castro • 10B</p>
                      <span className="text-[10px] text-green-700 font-bold uppercase tracking-wider block mt-0.5">
                        Desempeño Recuperado
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full">
                      Tutoría Completada
                    </span>
                    <p className="text-[9px] text-on-surface-variant italic mt-1">Ayer</p>
                  </div>
                </div>
              </div>

              {/* Graphical distribution of risks inside code */}
              <div className="p-4 bg-surface-container-low border border-outline-variant rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-xs font-bold text-on-surface">Distribución Institucional de Riesgo</p>
                  <span className="text-[10px] text-primary font-bold">Cohorte Actual • 960 alumnos</span>
                </div>
                
                <div className="space-y-2">
                  {/* Critical risk bar */}
                  <div>
                    <div className="flex justify-between text-[10px] text-on-surface-variant font-bold mb-1">
                      <span>Riesgo Crítico (Requiere intervención)</span>
                      <span className="text-red-600">3.5%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '3.5%' }} />
                    </div>
                  </div>

                  {/* Moderate risk bar */}
                  <div>
                    <div className="flex justify-between text-[10px] text-on-surface-variant font-bold mb-1">
                      <span>Riesgo Moderado (En observación)</span>
                      <span className="text-amber-500 font-bold">12.8%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: '12.8%' }} />
                    </div>
                  </div>

                  {/* Healthy bar */}
                  <div>
                    <div className="flex justify-between text-[10px] text-on-surface-variant font-bold mb-1">
                      <span>Riesgo Bajo / Estable</span>
                      <span className="text-green-600 font-bold">83.7%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '83.7%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic trigger feedback action */}
              <div className="pt-2 flex gap-3">
                <button 
                  onClick={onGoToDashboard} 
                  className="flex-1 bg-primary text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.01] transition-transform text-center cursor-pointer"
                >
                  Entrar al Simulador de Alertas
                </button>
                <a 
                  href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore"
                  target="_blank"
                  className="flex-1 bg-white border border-outline text-on-surface text-xs font-bold py-3 px-4 rounded-xl hover:bg-surface-container transition-all text-center flex items-center justify-center"
                >
                  Agendar Demostración Real
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. CASOS DE USO DIAGNÓSTICOS EN ACCIÓN */}
      <section id="testimonios" className="py-16 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            <Sparkles className="w-4 h-4 text-primary" /> Inteligencia en Acción
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight">
            Casos de Uso: <span className="text-primary">El impacto real de la anticipación.</span>
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Descubre cómo funciona la automatización predictiva de AulaCore frente a los retos cotidianos de la gestión institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Caso 1: Reducción de riesgo académico */}
          <div className="bg-white border border-outline-variant/30 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500" />
            <div className="mb-8">
              <span className="text-[10px] bg-red-50 text-red-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">
                Caso Académico
              </span>
              <h3 className="text-lg font-black text-on-surface mb-3">Reducción de riesgo académico</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                "AulaCore detectó una caída progresiva en asistencia y rendimiento, permitiendo una intervención de tutoría y orientación temprana semanas antes de finalizar el periodo académico."
              </p>
            </div>
            <div className="border-t border-on-surface/5 pt-4 text-xs font-bold text-secondary flex items-center gap-1">
              <span>Resolución Preventiva Automatizada</span>
            </div>
          </div>

          {/* Caso 2: Comunicación familiar */}
          <div className="bg-white border border-outline-variant/30 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />
            <div className="mb-8">
              <span className="text-[10px] bg-amber-50 text-amber-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">
                Caso de Comunicación
              </span>
              <h3 className="text-lg font-black text-on-surface mb-3">Comunicación familiar proactiva</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                "El sistema notified automáticamente a padres y docentes cuando se identificaron señales de alerta en el comportamiento del estudiante."
              </p>
            </div>
            <div className="border-t border-on-surface/5 pt-4 text-xs font-bold text-secondary flex items-center gap-1">
              <span>Notificación Multicanal en Directo</span>
            </div>
          </div>

          {/* Caso 3: Inteligencia Institucional */}
          <div className="bg-white border border-outline-variant/30 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
            <div className="mb-8">
              <span className="text-[10px] bg-primary/5 text-primary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">
                Caso de Gobierno Escolar
              </span>
              <h3 className="text-lg font-black text-on-surface mb-3">Control de Cartera Inteligente</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                "Las alertas financieras preventivas y avisos de impago automáticos redujeron la cartera morosa institucional en un 35% sin fricciones operativas entre el equipo administrativo y las familias."
              </p>
            </div>
            <div className="border-t border-on-surface/5 pt-4 text-xs font-bold text-secondary flex items-center gap-1">
              <span>Gestión Financiera Optimizada</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 POSITIONING CONTUNDENT STATEMENT SECTION (Cambio #7) */}
      <section className="py-20 px-6 md:px-12 bg-white max-w-7xl mx-auto border-t border-outline-variant/20">
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl border border-primary/10 p-8 md:p-16 text-center max-w-5xl mx-auto space-y-10 relative overflow-hidden">
          {/* Subtle design grid highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
          
          <div className="relative space-y-4">
            <h3 className="text-lg font-black text-primary tracking-widest uppercase">La gran diferencia</h3>
            <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight max-w-4xl mx-auto leading-tight">
              AulaCore no es un software escolar.<br />
              <span className="text-primary italic">Es una plataforma de inteligencia educativa predictiva.</span>
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto pt-6 border-y border-outline-variant/20 py-8">
            <div className="flex items-start gap-3">
              <span className="text-secondary shrink-0 font-bold text-lg bg-secondary/10 px-2 py-0.5 rounded-lg">✓</span>
              <div>
                <h4 className="font-extrabold text-sm text-on-surface">Anticipación Real</h4>
                <p className="text-xs text-on-surface-variant mt-1">Detecta riesgos y ausentismo antes de que ocurran.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-secondary shrink-0 font-bold text-lg bg-secondary/10 px-2 py-0.5 rounded-lg">✓</span>
              <div>
                <h4 className="font-extrabold text-sm text-on-surface">Unión Absoluta</h4>
                <p className="text-xs text-on-surface-variant mt-1">Conecta a toda la comunidad educativa bajo un mismo canal.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-secondary shrink-0 font-bold text-lg bg-secondary/10 px-2 py-0.5 rounded-lg">✓</span>
              <div>
                <h4 className="font-extrabold text-sm text-on-surface">Automatización Fuerte</h4>
                <p className="text-xs text-on-surface-variant mt-1">Sustituye procesos críticos manuales por flujos automáticos.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-secondary shrink-0 font-bold text-lg bg-secondary/10 px-2 py-0.5 rounded-lg">✓</span>
              <div>
                <h4 className="font-extrabold text-sm text-on-surface">Datos en Acción</h4>
                <p className="text-xs text-on-surface-variant mt-1">Convierte las calificaciones y datos simples en decisiones rápidas.</p>
              </div>
            </div>
          </div>

          {/* Golden Quote highlight card */}
          <div className="relative bg-white border border-outline rounded-2xl p-6 max-w-2xl mx-auto shadow-sm">
            <p className="text-sm md:text-base text-on-surface font-extrabold leading-relaxed text-center px-4">
              "La mayoría de los sistemas tradicionales registran lo que ya pasó.<br />
              <span className="text-primary italic">AulaCore ayuda a predecir lo que viene."</span>
            </p>
          </div>
        </div>
      </section>

      {/* 9. THE ULTIMATE CTA / LEAD BLOCK */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="bg-primary/5 rounded-3xl border border-primary/20 p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-none">
            Únete a la elite de la gestión educativa.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-xl mx-auto font-medium">
            Agenda hoy una consultoría guiada gratuita para tu junta directiva y experimenta el verdadero poder del control basado en datos.
          </p>
          <div className="pt-4 flex flex-col md:flex-row gap-4 max-w-md mx-auto justify-center">
            <a
              href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-102 transition-all cursor-pointer flex items-center justify-center text-center"
            >
              AGENDAR CONSULTORÍA
            </a>
            <button
              onClick={onGoToDashboard}
              className="bg-white border border-outline text-on-surface font-bold py-3.5 px-8 rounded-xl hover:bg-surface-container transition-all cursor-pointer text-center"
            >
              PROBAR SIMULADOR EN VIVO
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
