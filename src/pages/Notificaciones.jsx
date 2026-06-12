import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Notificaciones() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md pb-4 pt-6 border-b border-outline-variant/20">
              <div className="flex items-center px-edge_margin">
                  <button className="back-btn w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <div className="flex-grow flex flex-col justify-center px-2 text-center">
                      <h1 className="font-title-md text-[18px] font-bold text-on-surface leading-tight">Notificaciones</h1>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-primary cursor-pointer tap-scale" data-toast="Marcadas como leídas">
                      <span className="material-symbols-outlined">done_all</span>
                  </div>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow flex flex-col px-edge_margin pt-28 pb-10 overflow-y-auto">

              <h2 className="font-label-md text-[13px] text-primary font-bold uppercase tracking-widest mb-4 mt-2">Nuevas</h2>

              <div className="flex flex-col gap-3 mb-8">
                  {/*<!-- Notification Item 1 (Booking Confirmed) -->*/}
                  <div className="flex gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/20 shadow-sm cursor-pointer tap-scale" onClick={() => navigate('/Menu_Consistencia')}>
                      <div className="w-12 h-12 rounded-full bg-primary flex flex-shrink-0 items-center justify-center text-white shadow-md shadow-primary/30">
                          <span className="material-symbols-outlined text-[24px]">event_available</span>
                      </div>
                      <div>
                          <div className="flex justify-between items-start mb-1">
                              <h3 className="font-label-md text-[14px] font-bold text-on-surface">¡Reserva confirmada!</h3>
                              <span className="text-[10px] text-primary font-bold">Hace 5m</span>
                          </div>
                          <p className="font-body-md text-[13px] text-on-surface-variant leading-snug">Tu mesa en <strong>Asador La Mansión</strong> para hoy a las 14:00 hrs ha sido confirmada.</p>
                      </div>
                  </div>

                  {/*<!-- Notification Item 2 (Recommendation) -->*/}
                  <div className="flex gap-4 p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm cursor-pointer tap-scale" onClick={() => navigate('/Menu_Consistencia')}>
                      <div className="w-12 h-12 rounded-full bg-secondary flex flex-shrink-0 items-center justify-center text-white shadow-md shadow-secondary/30">
                          <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
                      </div>
                      <div>
                          <div className="flex justify-between items-start mb-1">
                              <h3 className="font-label-md text-[14px] font-bold text-on-surface">Nuevo Lugar en Tendencia</h3>
                              <span className="text-[10px] text-on-surface-variant">Hace 2h</span>
                          </div>
                          <p className="font-body-md text-[13px] text-on-surface-variant leading-snug">Descubre "El Japonez", un lugar de sushi que hace match con tus preferencias.</p>
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full absolute top-4 right-4"></div> {/*<!-- Unread Dot -->*/}
                  </div>
              </div>

              <h2 className="font-label-md text-[13px] text-on-surface-variant font-bold uppercase tracking-widest mb-4">Anteriores</h2>

              <div className="flex flex-col gap-3">
                  {/*<!-- Notification Item 3 (System) -->*/}
                  <div className="flex gap-4 p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 cursor-pointer tap-scale opacity-70" onClick={() => navigate('/Descubrir_CDMX')}>
                      <div className="w-12 h-12 rounded-full bg-surface-variant flex flex-shrink-0 items-center justify-center text-on-surface-variant">
                          <span className="material-symbols-outlined text-[24px]">verified</span>
                      </div>
                      <div>
                          <div className="flex justify-between items-start mb-1">
                              <h3 className="font-label-md text-[14px] font-bold text-on-surface">Bienvenido a BiteMatch</h3>
                              <span className="text-[10px] text-on-surface-variant">Ayer</span>
                          </div>
                          <p className="font-body-md text-[13px] text-on-surface-variant leading-snug">Tu cuenta ha sido creada exitosamente. ¡Empieza a descubrir!</p>
                      </div>
                  </div>
              </div>

          </main>

      </div>
    </>
  );
}
