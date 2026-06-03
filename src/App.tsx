/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import CommandCenter from './components/CommandCenter';
import DemoModal from './components/DemoModal';
import { Network, ShieldAlert, Globe, MessageSquare, BrainCircuit, X, FileText, Compass, Target, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentTab, setTab] = useState<'presentation' | 'dashboard'>('presentation');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<'terms' | 'privacy' | 'about' | 'cookies' | 'security' | null>(null);

  const activeDocDetail = (() => {
    switch (activeDoc) {
      case 'terms':
        return {
          title: "Términos y Condiciones",
          subtitle: "Condiciones de servicio y uso de la plataforma AulaCore",
          isPlaceholder: false,
          content: "",
          customContent: (
            <div className="space-y-8 text-on-surface font-sans">
              <div className="border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-xl p-3">
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
                  <strong>1. Introducción:</strong> Bienvenido a AulaCore. Al acceder, navegar o utilizar esta plataforma, usted acepta los presentes Términos y Condiciones de Uso. Si no está de acuerdo con cualquiera de las disposiciones aquí establecidas, deberá abstenerse de utilizar los servicios ofrecidos.
                </p>
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed mt-2">
                  AulaCore es una plataforma de inteligencia educativa predictiva diseñada para apoyar la gestión académica, administrativa y estratégica de instituciones educativas mediante herramientas de automatización, análisis de datos, comunicación institucional y seguimiento integral de estudiantes.
                </p>
              </div>

              {/* Definitions section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-secondary rounded-full" />
                  <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">2. Definiciones</h4>
                </div>
                <p className="text-xs text-on-surface-variant">Para efectos de estos términos se establecen las siguientes definiciones:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "AulaCore", desc: "Plataforma tecnológica de gestión e inteligencia educativa." },
                    { title: "Institución Educativa", desc: "Colegio, escuela, instituto o entidad educativa que contrata o utiliza los servicios de AulaCore." },
                    { title: "Usuario", desc: "Toda persona autorizada para acceder a la plataforma, incluyendo rectores, coordinadores, docentes, directores de grupo, personal administrativo, estudiantes y padres de familia." },
                    { title: "Administrador Institucional", desc: "Usuario autorizado por la institución para gestionar la configuración y operación de la plataforma." }
                  ].map((def, idx) => (
                    <div key={idx} className="p-3 bg-neutral-50 border border-outline-variant/45 rounded-xl">
                      <span className="text-xs font-black text-secondary block mb-1">{def.title}</span>
                      <p className="text-[11px] text-on-surface-variant font-semibold leading-relaxed">{def.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Object of Service */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-primary rounded-full" />
                  <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">3. Objeto del Servicio</h4>
                </div>
                <p className="text-xs text-on-surface-variant font-semibold leading-relaxed">
                  AulaCore proporciona herramientas tecnológicas orientadas a optimizar los siguientes procesos:
                </p>
                <div className="p-4 bg-slate-50 border border-outline-variant/60 rounded-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Gestión académica integral",
                      "Matrícula digital simplificada",
                      "Seguimiento de asistencia diaria",
                      "Evaluaciones y actividades académicas",
                      "Comunicación institucional inmediata",
                      "Gestión documental interna",
                      "Generación de reportes ejecutivos",
                      "Control de acceso mediante RFID o QR",
                      "Analítica e inteligencia educativa predictiva",
                      "Seguimiento de indicadores cognitivos y de convivencia"
                    ].map((srv, index) => (
                      <div key={index} className="flex items-center gap-2 text-[11px] text-on-surface-variant font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-on-surface-variant italic font-semibold border-t border-outline-variant/20 pt-2 text-center">
                  La plataforma constituye una herramienta de apoyo para la toma de decisiones y no reemplaza el criterio profesional de directivos, docentes, orientadores o autoridades educativas.
                </p>
              </div>

              {/* Register and Access */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">4. Registro y Acceso</h4>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  El acceso a AulaCore podrá realizarse mediante los siguientes mecanismos:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-on-surface-variant font-medium">
                  <li>Registro institucional autorizado coordinado por las directivas.</li>
                  <li>Enlaces de acceso seguros enviados de manera oficial por la institución.</li>
                  <li>Credenciales individuales asignadas formalmente por el establecimiento.</li>
                  <li>Métodos interactivos de autenticación habilitados directamente por AulaCore.</li>
                </ul>
                <p className="text-[11px] text-red-700 bg-red-50 p-2.5 rounded-lg font-bold border border-red-100">
                  Cada usuario es enteramente responsable de mantener la confidencialidad de sus credenciales de ingreso y de todas las actividades operacionales que sean realizadas desde su cuenta de usuario.
                </p>
              </div>

              {/* Institutional Responsibilities */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">5. Responsabilidades de la Institución Educativa</h4>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  La institución educativa administradora se compromete solemnemente a:
                </p>
                <div className="grid gap-2 text-xs text-on-surface-variant font-medium leading-relaxed pl-2">
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Garantizar la veracidad, integridad y actualización periódica de la información que sea registrada.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Obtener previamente todas las autorizaciones aplicables requeridas para el debido tratamiento de datos personales de menores de edad y tutores.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Administrar de forma adecuada, restrictiva y confidencial los accesos y permisos de su equipo de usuarios directos.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Utilizar la plataforma conforme a la legislación constitucional del país y reglamentaciones aplicables.</span>
                  </div>
                </div>
                <p className="text-[11px] text-on-surface-variant italic">
                  La institución escolar será la única responsable legal por el contenido o datos de cualquier naturaleza que incorpore, registre o elimine dentro de la plataforma.
                </p>
              </div>

              {/* User Responsibilities */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">6. Responsabilidades de los Usuarios</h4>
                <p className="text-xs text-on-surface-variant font-medium">Los usuarios finales tienen la obligación de:</p>
                <ul className="list-decimal pl-5 space-y-1 text-xs text-on-surface-variant font-semibold">
                  <li>Utilizar la plataforma únicamente de manera ética y legal.</li>
                  <li>Proteger sus credenciales y notificar anomalías de seguridad de inmediato.</li>
                  <li>Abstenerse de manipular, alterar, hackear o interferir los sistemas digitales y servidores.</li>
                  <li>No compartir información escolar sensible con personas naturales o jurídicas no autorizadas.</li>
                  <li>Respetar la convivencia digital y protección de datos dentro del entorno.</li>
                </ul>
              </div>

              {/* Predictive Intelligence Highlight */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-900">
                  <ShieldAlert className="w-4 h-4" />
                  <h4 className="font-extrabold text-sm uppercase tracking-wide">7. Inteligencia Educativa Predictiva</h4>
                </div>
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  Las funcionalidades analíticas y predictivas ofrecidas por AulaCore tienen carácter puramente informativo y de apoyo para la optimización institucional.
                </p>
                <p className="text-[11px] text-amber-900 leading-relaxed font-semibold">
                  Las alertas automáticas, indicadores integrales, recomendaciones puntuales o análisis dinámicos generados por la plataforma no constituyen diagnósticos médicos, psicológicos o profesionales definitivos, sino herramientas de alerta temprana orientadas a facilitar la gestión de los equipos de orientación de la institución educativa. La decisión última sobre intervenciones pedagógicas o de convivencia reside de forma exclusiva en el criterio del colegio.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">8. Propiedad Intelectual</h4>
                <p className="text-xs text-on-surface-variant font-semibold leading-relaxed">
                  Todo el contenido tecnológico de AulaCore, incluyendo su software, código fuente original, diseños lógicos, interfaces de usuario, esquemas de algoritmos matemáticos, bases de conocimiento interno, marcas de servicio, logotipos representativos y documentación extendida, es propiedad exclusiva propietaria de AulaCore o sus licenciantes, protegidos por tratados de derechos de autor y legislación intelectual correspondiente. Queda totalmente prohibida la copia, reproducción, reventa u optimización externa de la plataforma sin firma previa de AulaCore.
                </p>
              </div>

              {/* Technical availability and security */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">9. Disponibilidad del Servicio</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    AulaCore realizará esfuerzos de excelencia técnica para mantener la estabilidad del sistema 24/7. No obstante, se exceptúan eventos de mantenimiento preventivo, actualización de servidores o contingencias de fuerza mayor que puedan interrumpir temporalmente el servicio.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">10. Seguridad de la Información</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    Implementamos medidas estrictas físicas, organizativas y lógicas para encriptar y proteger la confidencialidad de la información guardada. No obstante, los usuarios aceptan los riesgos lógicos del uso de internet y aseguran el uso de conexiones seguras y confiables.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">11. Limitación de Responsabilidad</h4>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  AulaCore no asumirá responsabilidad civil, comercial o legal por:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-on-surface-variant font-medium">
                  <li>Decisiones tomadas de manera exclusiva por la institución escolar basados en los indicadores del sistema.</li>
                  <li>Información incorrecta o desactualizada de procedencia de los usuarios o tutores.</li>
                  <li>Pérdidas derivadas de un inadecuado manejo de contraseñas por los usuarios autorizados.</li>
                  <li>Interrupciones por incidentes o caídas técnicas de proveedores globales de conectividad o almacenamiento de datos.</li>
                </ul>
              </div>

              {/* Termination & Modifications */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-red-50/50 border border-red-100 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-red-950 uppercase">12. Suspensión o Terminación</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    Nos reservamos el derecho explícito de suspender el acceso de usuarios cuando se evidencien prácticas ilegales, uso indebido premeditado de las interfaces informáticas, fraudes lógicos o incumplimiento severo de los lineamientos éticos descritos en este documento.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">13. Modificaciones</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    AulaCore podrá realizar actualizaciones metodológicas de estos lineamientos con la finalidad de acompañar la mejora constante de sus servicios, la implementación de nuevas herramientas de inteligencia o para el cumplimiento estricto de la ley aplicable del país.
                  </p>
                </div>
              </div>

              {/* Governing Law & Contact */}
              <div className="border-t border-outline-variant/40 pt-4 grid sm:grid-cols-2 gap-4 text-xs font-semibold text-on-surface-variant">
                <div>
                  <span className="text-[10px] text-primary uppercase font-black block mb-1">14. Legislación Aplicable</span>
                  <p className="text-[11px] font-medium leading-relaxed">
                    Estos Términos y Condiciones se rigen en su totalidad por las leyes de la República de Colombia. Cualquier controversia jurídica será resuelta de conformidad con los canales de resolución y la justicia colombiana ordinaria.
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-primary uppercase font-black block mb-1">15. Contacto Legal</span>
                  <p className="text-[11px] font-medium leading-relaxed">
                    Para consultas asociadas con estos términos, canales de soporte o implementación de AulaCore, puede contactar con nuestro equipo legal escribiendo a través de la interfaz web o mediante los números asignados de atención oficial.
                  </p>
                  <p className="text-[10px] text-on-surface font-extrabold italic mt-2">
                    Última actualización: 04/06/2026
                  </p>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-[10px] text-on-surface-variant/70 font-semibold uppercase tracking-wider">
                  AulaCore • Desarrollado con tecnología de Inteligencia Predictiva por Corporación Profes al aula • NIT 901201743-6
                </p>
              </div>
            </div>
          )
        };
      case 'privacy':
        return {
          title: "Política de tratamiento de datos personales",
          subtitle: "Ley 1581 de 2012 (Habeas Data) y protección de datos escolares",
          isPlaceholder: false,
          content: "",
          customContent: (
            <div className="space-y-8 text-on-surface font-sans">
              <div className="border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-xl p-3">
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
                  <strong>1. Introducción:</strong> AulaCore reconoce la importancia de proteger la privacidad, confidencialidad y seguridad de la información personal de todos los usuarios que interactúan con la plataforma.
                </p>
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed mt-2">
                  La presente Política de Tratamiento de Datos Personales establece los lineamientos mediante los cuales AulaCore recopila, almacena, utiliza, administra, protege y trata la información personal de conformidad con la legislación colombiana vigente en materia de protección de datos personales.
                </p>
              </div>

              {/* Responsable del Tratamiento */}
              <div className="bg-[#F8FAFC] border border-outline-variant/60 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/15 rounded-xl text-primary shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-xs text-on-surface uppercase tracking-wide">2. Responsable del Tratamiento</h4>
                </div>
                <div className="text-xs text-on-surface-variant font-medium space-y-1">
                  <p><strong>Razón Social:</strong> AulaCore (Plataforma de Inteligencia Educativa Predictiva)</p>
                  <p><strong>Entidad Operadora:</strong> Corporación Profes al aula • NIT 901201743-6</p>
                  <p><strong>Correo electrónico de contacto:</strong> <a href="mailto:info@corporacionprofesalaula.org" className="text-primary hover:underline font-bold">info@corporacionprofesalaula.org</a></p>
                  <p><strong>Sitio web:</strong> <a href="https://www.aulacore.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">www.aulacore.org</a></p>
                  <p><strong>Ciudad de Operación:</strong> Medellín, Colombia</p>
                </div>
              </div>

              {/* Definiciones Legales */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-secondary rounded-full" />
                  <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">3. Definiciones Clave</h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Dato Personal", desc: "Cualquier información vinculada o que pueda asociarse a una persona natural determinada o determinable." },
                    { title: "Titular", desc: "Persona natural cuyos datos personales son objeto de tratamiento." },
                    { title: "Tratamiento", desc: "Cualquier operación realizada sobre datos personales, incluyendo recolección, almacenamiento, uso, circulación, actualización, supresión o eliminación." },
                    { title: "Autorización", desc: "Consentimiento previo, expreso e informado otorgado por el titular para el tratamiento de sus datos." }
                  ].map((def, idx) => (
                    <div key={idx} className="p-3 bg-neutral-50 border border-outline-variant/45 rounded-xl">
                      <span className="text-xs font-black text-secondary block mb-1">{def.title}</span>
                      <p className="text-[11px] text-on-surface-variant font-semibold leading-relaxed">{def.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Datos Personales Tratados */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">4. Tipo de Datos Personales Tratados</h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  AulaCore recopila y procesa información escolar estructurada dentro de las siguientes categorías para la debida prestación del servicio:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { cat: "Datos de Identificación", items: ["Nombres y apellidos completos", "Tipo y número de identificación", "Fecha de nacimiento", "Fotografía y Firma digital"] },
                    { cat: "Datos de Contacto", items: ["Dirección de residencia", "Teléfono de contacto", "Correo electrónico institucional", "Información del acudiente o tutor legal"] },
                    { cat: "Datos Académicos", items: ["Matrículas y Grados asignados", "Calificaciones y Evaluaciones periódicas", "Asistencias físicas (RFID/QR)", "Procesos académicos y pedagógicos"] },
                    { cat: "Datos Institucionales", items: ["Cargo y Rol asignado", "Área académica o especialidad", "Jornada laboral y Sede", "Funciones asignadas específicas"] },
                    { cat: "Datos Tecnológicos", items: ["Dirección IP y Navegador utilizado", "Registros de acceso (Timestamps)", "Identificadores de dispositivos", "Logs internos de actividad de la plataforma"] },
                    { cat: "Documentos Adjuntos", items: ["Certificados de estudio", "Registros civiles de nacimiento", "Documentos de identidad digitalizados", "Soportes académicos opcionales de matrícula"] }
                  ].map((group, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-outline-variant/40 rounded-xl">
                      <span className="text-xs font-black text-primary block mb-2">{group.cat}</span>
                      <ul className="space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i} className="text-[11px] text-on-surface-variant font-medium flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-secondary rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finalidades */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">5. Finalidades del Tratamiento</h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  Los datos recogidos de manera legítima se usarán estrictamente con las siguientes finalidades institucionales y tecnológicas:
                </p>
                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/60 rounded-2xl space-y-4">
                  {[
                    { area: "Gestión Académica", actions: "Administración de matrículas, seguimiento académico del estudiante, gestión centralizada de evaluaciones curriculares, generación automatizada de boletines oficiales de periodo y expedición de certificados académicos." },
                    { area: "Gestión Administrativa", actions: "Administración de perfiles de usuario, control institucional de accesos de personal, gestión documental regulada y soporte técnico continuo." },
                    { area: "Comunicación Institucional", actions: "Envío en directo de notificaciones inmediatas, avisos, alertas preventivas, entrega de comunicados grupales y habilitar el canal de contacto seguro entre miembros de la comunidad escolar." },
                    { area: "Analítica Educativa", actions: "Creación de reportes directivos, tabulación de indicadores institucionales clave, generación de estadísticas académicas y activación de los modelos lógicos de inteligencia educativa predictiva." },
                    { area: "Seguridad y Auditoría", actions: "Restricciones de control de acceso perimetral, prevención de accesos fraudulentos o robo de identidad, auditorías de sistema informático y monitoreo activo de incidentes lógicos." }
                  ].map((fin, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-xs font-bold text-secondary block">{fin.area}</span>
                      <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">{fin.actions}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tratamiento de Menores de Edad */}
              <div className="bg-amber-50/75 border border-amber-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <h4 className="font-bold text-xs uppercase tracking-wide">6. Tratamiento de Datos de Menores de Edad</h4>
                </div>
                <p className="text-xs text-amber-950 font-semibold leading-relaxed">
                  AulaCore reconoce que gran parte de la información procesada corresponde a estudiantes de instituciones educativas que ostentan la calidad de menores de edad.
                </p>
                <p className="text-[11px] text-amber-900 leading-relaxed font-semibold">
                  Por tal motivo, el tratamiento se realiza exclusivamente persiguiendo el interés superior y desarrollo integral del menor, garantizando la debida autorización de los acudientes o representantes legales y manteniendo controles de seguridad extraordinarios de confidencialidad de la información. Su uso queda blindado frente a explotación de marketing o comercialización alguna.
                </p>
              </div>

              {/* Derechos de los Titulares */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">7. Derechos de los Titulares</h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  El Titular de los datos personales cuenta con las siguientes facultades de ley (Ley 1581 de 2012):
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Conocer de manera detallada los datos personales que reposan en las bases de datos de AulaCore.",
                    "Solicitar la actualización voluntaria o corrección de información errónea o incompleta.",
                    "Solicitar prueba física o digital de la autorización originalmente otorgada para el tratamiento.",
                    "Revocar el consentimiento otorgado cuando se evidencie falta de cumplimiento de principios legales.",
                    "Solicitar la supresión o eliminación absoluta de información cuando exista debido fundamento legal.",
                    "Presentar consultas formales, quejas o reclamos ante el equipo directivo por el uso inadecuado."
                  ].map((right, idx) => (
                    <div key={idx} className="p-3 bg-white border border-outline-variant/40 rounded-xl flex gap-2.5 items-start">
                      <span className="text-primary font-black mt-0.5">•</span>
                      <span className="text-[11px] text-on-surface-variant font-semibold leading-relaxed">{right}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medidas de Seguridad & Transferencia */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-slate-50 border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">8. Medidas de Seguridad Exigidas</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-semibold">
                    AulaCore implementa robustos sistemas para precaver la alteración, adulteración, pérdida, acceso no autorizado o divulgación involuntaria. Se destacan: autenticación robusta por roles de usuario, cifrado SSL/TLS de bases de datos, registros syslog de auditoría informática permanente, segmentación física de bases de datos por colegio y monitoreo inteligente de seguridad.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">9. Transferencia y Conservación</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-semibold">
                    Habilitamos proveedores globales de primer nivel para la transmisión y almacenamiento en la nube de alta disponibilidad. Toda información reposará por el periodo estrictamente indispensable para dar cumplimiento a los mandatos pedagógicos vigentes indicados por la institución contratante, conservándolos con las deudas éticas de protección aplicables.
                  </p>
                </div>
              </div>

              {/* Procedimientos y Reclamos */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">10. Procedimiento para Consultas y Reclamos</h4>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Para ejercer sus derechos constitucionales de Habeas Data, podrá radicar una solicitud formal al correo <strong>info@corporacionprofesalaula.org</strong>. Dicha radicación deberá incluir de modo mandatorio:
                </p>
                <div className="p-3.5 bg-[#F8FAFC] border border-outline-variant/50 rounded-xl text-xs font-semibold text-on-surface space-y-1">
                  <p>• Nombre e identificación completa del titular o acudiente legal.</p>
                  <p>• Documentos que acrediten la identidad correspondientes.</p>
                  <p>• Descripción clara y detallada de la solicitud de consulta o supresión.</p>
                  <p>• Información de contacto directo (Teléfono / Correo para recibir respuesta).</p>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  AulaCore dará respuesta formal de fondo e instructivos de resolución dentro de los plazos perentorios consagrados por la legislación y ordenamiento legal en Colombia.
                </p>
              </div>

              {/* Vigencia */}
              <div className="border-t border-outline-variant/40 pt-4 text-xs font-semibold text-on-surface-variant text-center space-y-1">
                <p className="text-[10px] text-primary uppercase font-black">11. Vigencia y Actualización</p>
                <p className="text-[11px] font-medium leading-relaxed">
                  La presente Política de Tratamiento de Información Personal rige a partir de su publicación oficial y se mantendrá con vigor por el término que dure la operación regular de la plataforma inteligente AulaCore. Podrá sufrir cambios ante modificaciones regulatorias o técnicas del sistema educativo.
                </p>
                <p className="text-[10px] text-on-surface font-extrabold italic mt-2">
                  Última actualización: 04/06/2026
                </p>
              </div>
            </div>
          )
        };
      case 'about':
        return {
          title: "Sobre Nosotros",
          subtitle: "Transformando colegios en instituciones inteligentes",
          isPlaceholder: false,
          content: "",
          customContent: (
            <div className="space-y-8 text-on-surface font-sans">
              <div className="border-l-4 border-primary pl-4 py-1">
                <p className="text-sm md:text-base text-on-surface-variant font-medium leading-relaxed">
                  La educación enfrenta hoy uno de sus mayores desafíos: gestionar grandes volúmenes de información, responder a las necesidades de estudiantes cada vez más diversas y tomar decisiones oportunas en un entorno que cambia constantemente. Durante años, las instituciones educativas han dependido de herramientas que registran lo que ya ocurrió, obligando a directivos y docentes a reaccionar cuando los problemas ya están presentes.
                </p>
                <p className="text-sm md:text-base text-on-surface font-extrabold leading-relaxed mt-4">
                  AulaCore nació para cambiar esa realidad.
                </p>
              </div>

              <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
                <h4 className="font-black text-sm text-primary uppercase tracking-widest mb-2">Nuestra Propuesta de Valor</h4>
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
                  Somos una plataforma de inteligencia educativa predictiva creada para ayudar a las instituciones educativas a anticiparse a los desafíos académicos, administrativos y convivenciales, conectando en tiempo real a todos los actores de la comunidad educativa dentro de un mismo ecosistema digital.
                </p>
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed mt-3">
                  No creemos que la educación necesite más formularios, más hojas de cálculo o más procesos manuales. Creemos que la educación necesita información inteligente, automatización y capacidad de anticipación.
                </p>
                <p className="text-xs md:text-sm text-on-surface-variant font-semibold leading-relaxed mt-3 text-primary">
                  Por eso desarrollamos una plataforma capaz de integrar estudiantes, padres de familia, docentes, directores de grupo, coordinadores, rectores y entidades educativas en un entorno unificado donde la información fluye de manera segura, organizada y en tiempo real.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] border border-outline-variant/50 rounded-2xl p-5 hover:border-primary/25 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-secondary/10 rounded-xl text-secondary">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-base text-on-surface">Nuestra Visión</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                    Ser la plataforma líder de inteligencia educativa en América Latina, ayudando a las instituciones a tomar mejores decisiones mediante tecnología, analítica avanzada y herramientas predictivas que contribuyan al éxito académico y humano de cada estudiante.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] border border-outline-variant/100 rounded-2xl p-5 hover:border-primary/25 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-base text-on-surface">Nuestra Misión</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                    Impulsar la transformación digital de las instituciones educativas mediante soluciones tecnológicas innovadoras que simplifiquen la gestión escolar, fortalezcan la comunicación entre todos los actores educativos y permitan identificar oportunidades y riesgos antes de que se conviertan en problemas.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> Valor Diferencial
                </div>
                <h4 className="text-lg font-black text-on-surface tracking-tight">
                  ¿Qué hace diferente a AulaCore?
                </h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  La mayoría de los sistemas educativos se enfocan en registrar información. AulaCore va más allá. Especialmente con nuestra integración completa:
                </p>
                <div className="p-5 bg-[#F8FAFC] border border-outline-variant/60 rounded-2xl space-y-4">
                  <p className="text-xs font-black text-on-surface uppercase tracking-wider text-secondary">Nuestra plataforma integra:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Matrícula digital inteligente",
                      "Gestión académica",
                      "Evaluaciones y seguimiento con IA",
                      "Asistencia mediante RFID y QR",
                      "Comunicación institucional en tiempo real",
                      "Reportes y tableros ejecutivos",
                      "Automatización de procesos escolares",
                      "Analítica y diagnóstico institucional",
                      "Inteligencia educativa predictiva integral"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-on-surface-variant font-semibold animate-pulse">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-outline-variant/30 pt-3 text-center space-y-1">
                    <p className="text-xs text-on-surface font-extrabold">
                      Todo conectado en una sola plataforma.
                    </p>
                    <p className="text-[11px] text-on-surface-variant italic leading-relaxed">
                      "Mientras otros sistemas muestran lo que ocurrió ayer, AulaCore ayuda a comprender lo que está ocurriendo hoy y a prepararse para lo que puede ocurrir mañana."
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest bg-secondary/5 px-3 py-1 rounded-full border border-secondary/10">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> Sinergia Institucional
                </div>
                <h4 className="text-lg font-black text-on-surface tracking-tight">
                  Un Ecosistema Educativo Conectado
                </h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  AulaCore ha sido diseñado para que cada miembro de la comunidad educativa tenga acceso a la información que necesita, cuando la necesita:
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {[
                    { role: "Estudiantes", desc: "Visualizan su progreso académico y participan activamente en su proceso formativo." },
                    { role: "Padres de Familia", desc: "Realizan seguimiento permanente al desempeño, asistencia y evolución de sus hijos." },
                    { role: "Docentes", desc: "Gestionan evaluaciones, realizan seguimiento académico y detectan alertas tempranas." },
                    { role: "Directores de Grupo", desc: "Obtienen una visión integral del comportamiento y rendimiento de sus estudiantes." },
                    { role: "Coordinadores", desc: "Monitorean indicadores institucionales y apoyan procesos de intervención." },
                    { role: "Rectores", desc: "Acceden a información estratégica de alta gerencia para la toma de decisiones." },
                    { role: "Instituciones Educativas", desc: "Fortalecen la gestión académica, administrativa y operativa con datos confiables." }
                  ].map((p, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-outline-variant/40 rounded-xl hover:shadow-xs transition-shadow">
                      <span className="text-xs font-black text-primary block">{p.role}</span>
                      <p className="text-[11px] text-on-surface-variant font-medium mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-black text-on-surface tracking-tight">
                  Nuestra Filosofía
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Creemos que cada estudiante merece ser acompañado a tiempo.",
                    "Creemos que la tecnología debe simplificar el trabajo de quienes educan diaria y arduamente.",
                    "Creemos que los datos tienen valor real cuando se transforman en decisiones institucionales.",
                    "Creemos que una institución educativa inteligente es aquella capaz de anticiparse, adaptarse y actuar antes de que los problemas afecten el proceso formativo."
                  ].map((f, i) => (
                    <div key={i} className="p-4 bg-[#F8FAFC] border border-outline-variant/40 rounded-xl text-xs text-on-surface-variant font-semibold flex items-start gap-2.5">
                      <span className="text-primary font-black mt-0.5">•</span>
                      <span className="leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Por eso trabajamos cada día para construir herramientas que ayuden a las instituciones a identificar riesgos académicos, ausentismo, deserción y otras situaciones críticas que impactan directamente el desarrollo de los estudiantes.
                </p>
              </div>

              <div className="space-y-4 border-t border-outline-variant/40 pt-6">
                <h4 className="text-lg font-black text-on-surface tracking-tight">
                  Nuestro Compromiso
                </h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  En AulaCore estamos comprometidos éticamente con:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "La innovación educativa constante",
                    "La protección estricta de los datos personales",
                    "La transformación digital responsable",
                    "La mejora continua del sistema",
                    "La excelencia en el servicio y soporte",
                    "El desarrollo integral de las comunidades educativas"
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                      <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Nuestro propósito es acompañar a las instituciones de Latinoamérica en el camino hacia una gestión más inteligente, humana y eficiente.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10 rounded-2xl text-center space-y-1">
                <p className="text-[10px] uppercase font-black text-primary tracking-widest leading-none">AulaCore</p>
                <p className="text-base font-black text-on-surface">La educación que se anticipa.</p>
                <p className="text-xs text-on-surface-variant font-semibold max-w-md mx-auto leading-relaxed pt-1">
                  Porque el futuro de la educación no consiste únicamente en administrar información. Consiste en utilizarla para construir mejores oportunidades para cada estudiante.
                </p>
              </div>
            </div>
          )
        };
      case 'cookies':
        return {
          title: "Política de cookies",
          subtitle: "Uso de tecnologías de almacenamiento local y cookies del ecosistema AulaCore",
          isPlaceholder: false,
          content: "",
          customContent: (
            <div className="space-y-8 text-on-surface font-sans">
              <div className="border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-xl p-3">
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
                  <strong>1. Introducción:</strong> La presente Política de Cookies explica cómo AulaCore utiliza cookies y tecnologías de almacenamiento local similares para mejorar la experiencia de navegación, optimizar el funcionamiento de la plataforma y obtener información estadística que permita ofrecer servicios más eficientes y seguros.
                </p>
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed mt-2">
                  Al continuar navegando en nuestro sitio de internet o utilizar las herramientas del ecosistema educativo de AulaCore, el usuario acepta de manera expresa el uso de cookies de acuerdo con las condiciones estipuladas en esta reglamentación.
                </p>
              </div>

              {/* What are cookies */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-secondary rounded-full" />
                  <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">2. ¿Qué son las Cookies?</h4>
                </div>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan de manera local en el dispositivo del usuario (computadora, tableta o teléfono móvil) cuando visita o interactúa en un sitio web.
                </p>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Estas tecnologías permiten recordar información clave sobre su comportamiento en línea, configuración técnica y preferencias visuales de visualización para agilizar futuras visitas, mantener activa su sesión y optimizar al máximo la experiencia interactiva de usuario.
                </p>
                <p className="text-[11px] text-primary bg-primary/5 p-2 rounded-lg font-bold border border-primary/10">
                  Importante: Las cookies técnicas utilizadas por AulaCore jamás comprometen o dañan la seguridad física de su dispositivo electrónico ni contienen virus ni software malicioso.
                </p>
              </div>

              {/* Cookie classification */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">3. ¿Qué tipos de Cookies utiliza AulaCore?</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      type: "Cookies Esenciales (Técnicas)",
                      desc: "Son indispensables para asegurar el correcto y fluido funcionamiento de la plataforma AulaCore. Sin ellas, determinados módulos no podrían operar de forma adecuada.",
                      bullets: [
                        "Inicio de sesión seguro para usuarios",
                        "Gestión persistente de sesiones escolares",
                        "Validaciones de seguridad de autenticación",
                        "Navegación dinámica entre grados y aulas",
                        "Protección activa contra accesos no permitidos"
                      ]
                    },
                    {
                      type: "Cookies de Rendimiento y Analítica",
                      desc: "Nos ayudan a comprender y medir cuantitativamente de qué manera interactúan los usuarios con la plataforma escolar con fines estadísticos.",
                      bullets: [
                        "Número consolidado de visitas recibidas",
                        "Páginas y tableros con mayor volumen de consulta",
                        "Tiempo de permanencia dentro de los reportes",
                        "Flujo regular de clics y de navegación interna",
                        "Análisis y diagnóstico general del rendimiento"
                      ]
                    },
                    {
                      type: "Cookies de Preferencias de Interfaz",
                      desc: "Permiten que el software recuerde elecciones previas que modifican estéticamente la navegación para que no sea necesario reconfigurarlo.",
                      bullets: [
                        "Idioma de visualización del sistema en pantalla",
                        "Preferencias específicas de gráficos u hojas",
                        "Herramientas adicionales de accesibilidad inclusiva",
                        "Estilo preconfigurado de tableros directivos"
                      ]
                    },
                    {
                      type: "Cookies de Seguridad de Sistema",
                      desc: "Mecanismos técnicos lógicos orientados a mitigar riesgos de intrusión informática, reforzando la integridad de la base de datos.",
                      bullets: [
                        "Detección y prevención de actividades fraudulentas",
                        "Filtros avanzados de accesos de red sospechosos",
                        "Controles de auditoría ante intentos de intrusión",
                        "Prevención de uso indebido de cuentas autorizadas"
                      ]
                    }
                  ].map((cookieClass, idx) => (
                    <div key={idx} className="p-4 bg-[#F8FAFC] border border-outline-variant/60 rounded-xl space-y-3">
                      <span className="text-xs font-black text-primary block leading-none">{cookieClass.type}</span>
                      <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">{cookieClass.desc}</p>
                      <div className="border-t border-outline-variant/30 pt-2 space-y-1">
                        {cookieClass.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[10px] text-on-surface-variant font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-secondary shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 border border-outline-variant/40 rounded-xl space-y-2">
                  <span className="text-xs font-black text-secondary uppercase block">Cookies de Marketing y Medición</span>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                    Cuando resulte aplicable, AulaCore podrá hacer uso de herramientas técnicas de medición y tracking de tráfico con el objeto de auditar y evaluar la efectividad real de las campañas informativas e institucionales. Estas cookies pueden ser proporcionadas de forma directa por nosotros o por terceros autorizados.
                  </p>
                </div>
              </div>

              {/* Third-Party Tools */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">4. Herramientas de Terceros</h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  AulaCore utiliza los servicios técnicos globales de los siguientes proveedores para respaldar la entrega del servicio:
                </p>
                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/50 rounded-xl">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Google Analytics",
                      "Google Tag Manager",
                      "Google Ads de difusión",
                      "Meta Pixel de seguimiento",
                      "Microsoft Clarity de mapas de calor",
                      "Servicios de analíticas de rendimiento"
                    ].map((provider, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-white border border-outline-variant/30 rounded-lg text-[11px] text-on-surface font-semibold">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span>{provider}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-on-surface-variant tracking-normal font-semibold leading-relaxed mt-4 pt-3 border-t border-outline-variant/30 text-center italic">
                    * Cada uno de estos proveedores externos administra sus políticas privadas de cookies de forma autónoma. Se aconseja al usuario consultar estas directivas directamente en sus respectivos portales web oficiales.
                  </p>
                </div>
              </div>

              {/* Purposes */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">5. Finalidad del Uso de Cookies</h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  Las cookies de AulaCore se ejecutan con las siguientes e inequívocas metas técnicas:
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Asegurar la visualización correcta y el funcionamiento íntegro de la plataforma.",
                    "Personalizar las opciones visuales para una experiencia escolar más fluida.",
                    "Mantener de forma ininterrumpida las sesiones activas en un entorno web altamente seguro.",
                    "Analizar de forma estadística patrones generales de comportamiento para corregir fallos.",
                    "Optimizar la velocidad de respuestas y procesamiento lógicos del servidor.",
                    "Identificar tempranamente oportunidades tecnológicas de mejora en los flujos de trabajo.",
                    "Evaluar la efectividad real del envío de comunicados y notificaciones."
                  ].map((purpose, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-xs font-semibold text-on-surface-variant pl-1">
                      <span className="text-primary font-black">•</span>
                      <span className="leading-relaxed">{purpose}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cookies Management */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-sm text-on-surface uppercase tracking-wide">6. Gestión de Cookies</h4>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Cualquier usuario de la plataforma cuenta con la plena libertad constitucional de aceptar, bloquear, restringir o eliminar las cookies instaladas del sistema desde el panel de preferencias de su respectivo navegador web.
                </p>
                <div className="p-4 bg-slate-50 border border-outline-variant/50 rounded-xl space-y-2">
                  <p className="text-[11px] text-on-surface font-bold">Por regla general, los navegadores de internet modernos le conceden opciones para:</p>
                  <ul className="list-disc pl-5 space-y-1 text-[11px] text-on-surface-variant font-semibold">
                    <li>Inspeccionar la lista detallada de cookies guardadas.</li>
                    <li>Eliminar de forma selectiva cookies ya existentes.</li>
                    <li>Restringir de manera permanente la instalación de cookies futuras.</li>
                    <li>Configurar reglas específicas de excepción de almacenamiento para sitios particulares.</li>
                  </ul>
                </div>
                <p className="text-[11px] text-amber-800 bg-amber-50 rounded-lg p-2.5 border border-amber-100 font-bold">
                  Atención: La desactivación técnica de las cookies esenciales puede limitar el ingreso, alterar los flujos de consulta o impedir el funcionamiento íntegro de determinadas herramientas operativas de de AulaCore.
                </p>
              </div>

              {/* Updates */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">7. Actualizaciones de esta Política</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-semibold">
                    AulaCore se reserva la facultad de actualizar de forma periódica las instrucciones de esta Política de Cookies para adaptarla a innovaciones tecnológicas de red, cambios normativos específicos o ante la puesta en marcha de nuevos servicios predictivos institucionales.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/50 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase">8. Consultas y Contacto</h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-semibold">
                    Para absolver dudas, formular reclamos o recibir soporte técnico especializado sobre el almacenamiento técnico y uso de metadatos en su perfil, puede contactar a nuestro equipo técnico mediante el correo electrónico <a href="mailto:info@corporacionprofesalaula.org" className="text-primary hover:underline">info@corporacionprofesalaula.org</a> o visitando el sitio <a href="https://www.aulacore.org" className="text-primary hover:underline">www.aulacore.org</a>.
                  </p>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-outline-variant/30">
                <p className="text-[10px] text-on-surface-variant/70 font-semibold uppercase tracking-wider leading-relaxed">
                  AulaCore • Desarrollado con tecnología de Inteligencia Predictiva por Corporación Profes al aula • NIT 901201743-6
                </p>
                <p className="text-[10px] text-primary uppercase font-black tracking-widest mt-1">
                  La educación que se anticipa.
                </p>
                <p className="text-[10px] text-on-surface-variant font-bold italic mt-1.5">
                  Última actualización: 04/06/2026
                </p>
              </div>
            </div>
          )
        };
      case 'security':
        return {
          title: "SEGURIDAD Y TRAZABILIDAD AVANZADA",
          subtitle: "Protección de la información con estándares de nivel empresarial",
          isPlaceholder: false,
          content: "",
          customContent: (
            <div className="space-y-6 text-on-surface font-sans">
              <div className="border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-xl p-3">
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
                  En AulaCore entendemos que la información académica, administrativa y personal de una institución educativa constituye uno de sus activos más valiosos. Por ello, nuestra plataforma ha sido diseñada bajo principios de seguridad, privacidad y trazabilidad que garantizan la protección de los datos de estudiantes, docentes, directivos y familias.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/60 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase flex items-center gap-1.5 text-primary">
                    <ShieldCheck className="w-4 h-4" /> Mecanismos de Control
                  </h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-semibold">
                    La plataforma implementa mecanismos avanzados de autenticación, segmentación de acceso por roles, aislamiento institucional de datos (multitenancy), cifrado de información y registros de auditoría que permiten controlar quién accede, cuándo accede y qué acciones realiza dentro del sistema.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] border border-outline-variant/60 rounded-xl space-y-2">
                  <h5 className="font-extrabold text-xs text-on-surface uppercase flex items-center gap-1.5 text-secondary">
                    <Compass className="w-4 h-4" /> Bitácoras y Auditoría
                  </h5>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-semibold">
                    Cada operación relevante queda registrada mediante bitácoras de actividad que permiten reconstruir eventos, validar cambios y fortalecer los procesos de control institucional. Esto proporciona un entorno confiable para la gestión académica, administrativa y documental.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-outline-variant/60 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-secondary rounded-full" />
                  <h4 className="font-extrabold text-xs text-on-surface uppercase tracking-wide">Políticas de Acceso y Mínimo Privilegio</h4>
                </div>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Además, AulaCore incorpora políticas de acceso basadas en el principio de mínimo privilegio, garantizando que cada usuario únicamente pueda visualizar y gestionar la información correspondiente a sus responsabilidades dentro de la institución.
                </p>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-2">
                <h5 className="font-extrabold text-xs text-primary uppercase">Confidencialidad y Disponibilidad</h5>
                <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                  Nuestra arquitectura está diseñada para ofrecer altos niveles de disponibilidad, integridad y confidencialidad de la información, permitiendo que las instituciones educativas operen con tranquilidad y confianza en un entorno digital seguro.
                </p>
              </div>

              <div className="text-center pt-4 border-t border-outline-variant/30">
                <p className="font-bold text-xs text-on-surface-variant italic">
                  "Porque la transformación digital no solo requiere innovación. También exige seguridad, transparencia y confianza."
                </p>
                <p className="text-[10px] text-primary uppercase font-black tracking-widest mt-3">
                  AulaCore • La educación que se anticipa.
                </p>
              </div>
            </div>
          )
        };
      default:
        return null;
    }
  })();

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-white antialiased">
      {/* Premium Navigation Header */}
      <Header 
        currentTab={currentTab} 
        setTab={setTab} 
        onOpenDemo={() => setIsDemoOpen(true)} 
      />

      {/* Main Container Wrapper with Top Margin for Navigation Height */}
      <main className="flex-1 pt-24">
        <AnimatePresence mode="wait">
          {currentTab === 'presentation' ? (
            <motion.div
              key="presentation-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage 
                onOpenDemo={() => setIsDemoOpen(true)} 
                onGoToDashboard={() => setTab('dashboard')} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <CommandCenter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Consultancy Capture Modal */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />

      {/* High-End Enterprise Footer */}
      <footer className="bg-white border-t border-on-surface/5 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 py-16 max-w-7xl mx-auto">
          
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dgk2vhigg/image/upload/v1780322231/AULA_CORE_HORIZONTAL_anqvwk.png" 
                alt="AulaCore Logo" 
                id="footer-brand-logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
              Transformando instituciones educativas tradicionales en centros de alto rendimiento basados en datos e inteligencia predictiva.
            </p>
            
            <div className="pt-4 border-t border-on-surface/5 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Impulsado por:</p>
              <p className="text-xs text-on-surface-variant font-semibold">
                Corporación Profes al aula
              </p>
              <p className="text-[11px] text-on-surface-variant/80">
                NIT 901201743-6 Mde. Col.
              </p>
              <div className="text-xs text-on-surface-variant font-medium space-y-1 pt-1">
                <p className="flex items-center gap-1.5">
                  <span className="font-bold text-primary">WhatsApp:</span> 
                  <a href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all font-bold text-on-surface">
                    +57 3217452834
                  </a>
                </p>
                <p className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-primary">Web:</span>
                  <a href="https://www.corporacionprofesalaula.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-all">
                    www.corporacionprofesalaula.org
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="font-bold text-primary">Email:</span>
                  <a href="mailto:info@corporacionprofesalaula.org" className="hover:text-primary transition-all">
                    info@corporacionprofesalaula.org
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant hover:border-primary cursor-pointer transition-all">
                <Globe className="w-3.5 h-3.5 text-on-surface-variant" />
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant hover:border-primary cursor-pointer transition-all">
                <Network className="w-3.5 h-3.5 text-on-surface-variant" />
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant hover:border-primary cursor-pointer transition-all">
                <MessageSquare className="w-3.5 h-3.5 text-on-surface-variant" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider text-primary">Plataforma</h5>
            <ul className="space-y-2 text-xs text-on-surface-variant font-medium">
              <li><a href="#modulos" onClick={() => setTab('presentation')} className="hover:text-primary transition-all">Módulos del Sistema</a></li>
              <li><a href="#testimonios" onClick={() => setTab('presentation')} className="hover:text-primary transition-all">Casos de Éxito</a></li>
              <li>
                <button 
                  onClick={() => setActiveDoc('security')} 
                  className="hover:text-primary transition-all text-left font-medium cursor-pointer"
                >
                  SEGURIDAD Y TRAZABILIDAD AVANZADA
                </button>
              </li>
              <li><button onClick={() => setTab('dashboard')} className="hover:text-primary font-bold text-left cursor-pointer transition-all">Comando Central IA (Simulador)</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider text-primary">Corporativo</h5>
            <ul className="space-y-2 text-xs text-on-surface-variant font-medium">
              <li>
                <button onClick={() => setActiveDoc('about')} className="hover:text-primary transition-all text-left font-medium cursor-pointer">
                  Sobre Nosotros
                </button>
              </li>
              <li><a href="#" className="hover:text-primary transition-all">IA Ética y Sesgo de Datos</a></li>
              <li><a href="#" className="hover:text-primary transition-all">Soporte Técnico 24/7</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-xs uppercase tracking-wider text-primary">Información Legal</h5>
            <ul className="space-y-2 text-xs text-on-surface-variant font-medium">
              <li>
                <button onClick={() => setActiveDoc('terms')} className="hover:text-primary transition-all text-left font-medium cursor-pointer">
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button onClick={() => setActiveDoc('privacy')} className="hover:text-primary transition-all text-left font-medium cursor-pointer">
                  Política de tratamiento de datos
                </button>
              </li>
              <li>
                <button onClick={() => setActiveDoc('cookies')} className="hover:text-primary transition-all text-left font-medium cursor-pointer">
                  Política de cookies
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-on-surface/5 py-6 text-center text-xs text-on-surface-variant font-medium">
          © 2026 AulaCore Intelligence. El comando central absoluto para el potencial humano escolar.
        </div>
      </footer>

      {/* Document Viewer Modal */}
      <AnimatePresence>
        {activeDocDetail && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/75 md:backdrop-blur-md"
            id="doc-modal-overlay"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white border border-outline w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
              id="doc-modal-panel"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-outline-variant/40 flex items-start justify-between bg-primary/5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    <FileText className="w-3.5 h-3.5" /> AulaCore Corporativo
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-on-surface tracking-tight mt-1.5">
                    {activeDocDetail.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-semibold">
                    {activeDocDetail.subtitle}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveDoc(null)}
                  className="p-2 rounded-xl hover:bg-on-surface/5 transition-colors cursor-pointer text-on-surface-variant"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
                {activeDocDetail.customContent ? (
                  activeDocDetail.customContent
                ) : (
                  <>
                    <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <FileText className="w-6 h-6 animate-pulse" />
                      </div>
                      <div className="space-y-2 max-w-md">
                        <h4 className="font-extrabold text-sm text-on-surface">Instrucción para el Propietario</h4>
                        <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                          {activeDocDetail.content}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-outline-variant/30 pt-6">
                      <p className="text-[11px] text-on-surface-variant/70 text-center font-semibold">
                        AulaCore • Desarrollado con tecnología de Inteligencia Predictiva por Corporación Profes al aula • NIT 901201743-6
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-outline-variant/40 flex items-center justify-end">
                <button 
                  onClick={() => setActiveDoc(null)}
                  className="bg-primary text-white text-xs font-bold py-2.5 px-6 rounded-xl hover:scale-98 transition-transform cursor-pointer"
                >
                  Entendido, cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
