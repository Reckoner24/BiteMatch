import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SideDrawer({ isOpen, onClose, showToast }) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[999]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-[80%] h-full bg-[#fcf8f8] z-[1000] flex flex-col shadow-2xl"
          >
            <div className="bg-primary text-on-primary p-6 pt-12 rounded-br-3xl shadow-md3-2 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px]">restaurant</span>
              </div>
              <h2 className="font-title-md text-[24px] font-bold leading-tight">BiteMatch</h2>
              <p className="font-body-md text-[13px] opacity-80 mt-1">Descubre tu próximo lugar favorito</p>
            </div>
            
            <div className="flex-grow flex flex-col p-4 gap-2 pt-6 overflow-y-auto">
              <button onClick={() => { onClose(); navigate('/Perfil_Usuario'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors tap-scale text-left">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
                <span className="font-label-md text-[15px] font-bold text-on-surface">Mi Perfil</span>
              </button>
              <button onClick={() => { onClose(); navigate('/Matches_Guardados'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors tap-scale text-left">
                <span className="material-symbols-outlined text-on-surface-variant">favorite</span>
                <span className="font-label-md text-[15px] font-bold text-on-surface">Matches Guardados</span>
              </button>
              <button onClick={() => { onClose(); navigate('/Colecciones'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors tap-scale text-left">
                <span className="material-symbols-outlined text-on-surface-variant">bookmarks</span>
                <span className="font-label-md text-[15px] font-bold text-on-surface">Colecciones</span>
              </button>
              <button onClick={() => { onClose(); navigate('/Notificaciones'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors tap-scale text-left">
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                <span className="font-label-md text-[15px] font-bold text-on-surface">Notificaciones</span>
              </button>
              
              <hr className="border-outline-variant/30 my-4" />
              
              <button onClick={() => { onClose(); navigate('/Ruleta_Aleatoria'); }} className="flex items-center gap-4 p-3 rounded-xl bg-primary-container/20 text-primary-fixed-variant hover:bg-primary-container/30 transition-colors tap-scale text-left">
                <span className="material-symbols-outlined fill">casino</span>
                <span className="font-label-md text-[15px] font-bold">Ruleta de Matches 🎲</span>
              </button>
              
              <hr className="border-outline-variant/30 my-4" />
              
              <button onClick={() => { onClose(); showToast && showToast('Abriendo Ajustes'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors tap-scale text-left">
                <span className="material-symbols-outlined text-on-surface-variant">settings</span>
                <span className="font-label-md text-[15px] font-bold text-on-surface">Ajustes</span>
              </button>
              <button onClick={() => { onClose(); showToast && showToast('Centro de Ayuda'); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors tap-scale text-left">
                <span className="material-symbols-outlined text-on-surface-variant">help</span>
                <span className="font-label-md text-[15px] font-bold text-on-surface">Ayuda y Soporte</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
