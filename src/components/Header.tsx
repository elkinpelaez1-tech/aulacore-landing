import { useState } from 'react';
import { Menu, X, BrainCircuit, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentTab: 'presentation' | 'dashboard';
  setTab: (tab: 'presentation' | 'dashboard') => void;
  onOpenDemo: () => void;
}

export default function Header({ currentTab, setTab, onOpenDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'presentation' | 'dashboard') => {
    setTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white md:bg-white/95 md:backdrop-blur-md border-b border-outline-variant shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Brand Logo with dynamic sparkle badge */}
        <div 
          onClick={() => handleNavClick('presentation')}
          className="flex items-center gap-2 cursor-pointer group"
          id="header-logo-container"
        >
          <img 
            src="https://res.cloudinary.com/dgk2vhigg/image/upload/v1780322231/AULA_CORE_HORIZONTAL_anqvwk.png" 
            alt="AulaCore Logo" 
            id="brand-logo-img"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-secondary-container/30 text-on-secondary-container py-0.5 px-2 rounded-full font-bold ml-1 border border-secondary-container/50">
            <Sparkles className="w-2.5 h-2.5 text-secondary" /> V3.0 Predictive
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('presentation')}
            className={`font-medium text-sm py-1 transition-all relative ${
              currentTab === 'presentation' 
                ? 'text-primary font-bold' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Inicio
            {currentTab === 'presentation' && (
              <motion.div 
                layoutId="activeUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" 
              />
            )}
          </button>
          
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`font-medium text-sm py-1 transition-all relative flex items-center gap-1 ${
              currentTab === 'dashboard' 
                ? 'text-primary font-bold' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Comando Central (Simulador)
            {currentTab === 'dashboard' && (
              <motion.div 
                layoutId="activeUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" 
              />
            )}
          </button>

          <a href="#modulos" onClick={() => { if (currentTab !== 'presentation') setTab('presentation'); }} className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm py-1">
            Módulos
          </a>

          <a href="#testimonios" onClick={() => { if (currentTab !== 'presentation') setTab('presentation'); }} className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm py-1">
            Casos de Éxito
          </a>

          <a href="#precios" onClick={() => { if (currentTab !== 'presentation') setTab('presentation'); }} className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm py-1">
            Precios
          </a>

          <a 
            id="nav-req-demo"
            href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-95 active:opacity-90 transition-all shadow-md shadow-primary/20 cursor-pointer flex items-center justify-center gap-1.5"
          >
            Solicitar demostración <span className="font-bold text-base leading-none">→</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary hover:text-primary/80 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-on-surface/5 absolute w-full top-[65px] left-0 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              <button
                onClick={() => handleNavClick('presentation')}
                className={`text-left text-base py-2 font-medium ${currentTab === 'presentation' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick('dashboard')}
                className={`text-left text-base py-2 font-medium ${currentTab === 'dashboard' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
              >
                Comando Central (Simulador IA/RFID)
              </button>
              <a 
                href="#modulos" 
                onClick={() => { setMobileMenuOpen(false); if(currentTab !== 'presentation') setTab('presentation'); }}
                className="text-left text-base py-2 font-medium text-on-surface-variant"
              >
                Módulos del Sistema
              </a>
              <a 
                href="#testimonios" 
                onClick={() => { setMobileMenuOpen(false); if(currentTab !== 'presentation') setTab('presentation'); }}
                className="text-left text-base py-2 font-medium text-on-surface-variant"
              >
                Casos de Éxito
              </a>
              <a 
                href="#precios" 
                onClick={() => { setMobileMenuOpen(false); if(currentTab !== 'presentation') setTab('presentation'); }}
                className="text-left text-base py-2 font-medium text-on-surface-variant"
              >
                Precios e Impacto (ROI)
              </a>
              <a
                href="https://wa.me/573217452834?text=Quiero%20un%20demo%20o%20contacto%20del%20software%20AulaCore"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white py-3.5 rounded-xl font-bold text-center text-sm shadow-md block"
              >
                Solicitar demostración →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
