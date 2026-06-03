import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Building, Briefcase, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    institucion: '',
    cargo: '',
    whatsapp: '',
    nota: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.institucion || !formData.cargo || !formData.whatsapp) {
      alert('Por favor complete todos los campos requeridos.');
      return;
    }
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const message = `Hola AulaCore. Me interesa agendar una consultoría predictiva.\n\nMis datos son:\n- Nombre: ${formData.nombre}\n- Institución: ${formData.institucion}\n- Cargo: ${formData.cargo}\n- WhatsApp: ${formData.whatsapp}\n- Nota: ${formData.nota || 'Ninguna'}`;
      const url = `https://wa.me/573217452834?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ nombre: '', institucion: '', cargo: '', whatsapp: '', nota: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-surface"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl relative w-full max-w-lg z-10 border border-outline-variant/30 text-on-surface"
          >
            {/* Header background with mesh details */}
            <div className="bg-primary/5 p-8 border-b border-on-surface/5 relative">
              <button 
                id="close-demo-modal"
                onClick={onClose} 
                className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-black/5 text-on-surface-variant hover:text-on-surface transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-primary uppercase text-xs font-bold tracking-widest mb-2">
                <Sparkles className="w-4 h-4" /> Acceso Exclusivo V3.0
              </div>
              <h3 className="text-2xl font-black text-on-surface tracking-tight">
                Agenda tu Consultoría Predictiva
              </h3>
              <p className="text-sm text-on-surface-variant font-medium mt-1">
                Descubre cómo AulaCore puede impactar positivamente tu colegio.
              </p>
            </div>

            {/* Content Form / Success States */}
            <div className="p-8">
              {!isSuccess ? (
                <form id="demo-consultancy-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
                      Nombre Completo *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      placeholder="Ej: Dra. Helena Santos"
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
                        Institución Educativa *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant" />
                        <input 
                          type="text" 
                          required
                          value={formData.institucion}
                          onChange={(e) => setFormData({...formData, institucion: e.target.value})}
                          placeholder="Colegio Central"
                          className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-9 pr-3 p-3 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
                        Cargo Directivo *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant" />
                        <input 
                          type="text" 
                          required
                          value={formData.cargo}
                          onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                          placeholder="Ej: Rectores / IT"
                          className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-9 pr-3 p-3 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
                      WhatsApp de Contacto *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant" />
                      <input 
                        type="tel" 
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="+57 300 123 4567"
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-9 pr-3 p-3 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
                      Detalles Adicionales
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant" />
                      <textarea 
                        rows={2}
                        value={formData.nota}
                        onChange={(e) => setFormData({...formData, nota: e.target.value})}
                        placeholder="Coméntanos sobre la población estudiantil o retos principales..."
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-9 pr-3 p-3 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> SOLICITAR ACCESO PRIORITARIO
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-on-surface tracking-tight">
                    ¡Solicitud Recibida Correctamente!
                  </h4>
                  <p className="text-sm text-on-surface-variant max-w-sm mx-auto font-medium leading-relaxed">
                    Hola <strong>{formData.nombre}</strong>, hemos registrado tu solicitud para el <strong>{formData.institucion}</strong>. Un especialista escolar te contactará a través de WhatsApp (<strong>{formData.whatsapp}</strong>) en un plazo menor a 2 horas hábiles.
                  </p>
                  <div className="pt-6 border-t border-on-surface/5 mt-6">
                    <button
                      onClick={handleReset}
                      className="bg-primary/10 text-primary px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                      Aceptar y Cerrar
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
