import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Ubicacion_Restaurante() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top App Bar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 p-4 pt-6 pointer-events-none flex justify-between">
              <button className="back-btn pointer-events-auto w-12 h-12 bg-surface/90 backdrop-blur-md flex items-center justify-center rounded-full shadow-md text-on-surface tap-scale border border-outline-variant/30" onClick={() => navigate(-1)}>
                  <span className="material-symbols-outlined">arrow_back</span>
              </button>
          </header>

          {/*<!-- Map Canvas -->*/}
          <main className="flex-grow relative map-bg">
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none"></div>

              {/*<!-- Fake Route Line (SVG) -->*/}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 800" preserveAspectRatio="none">
                  <path d="M 200 600 C 150 500, 250 400, 200 300" stroke="#ab3500" strokeWidth="5" stroke-dasharray="10,10" fill="none" className="animate-pulse" />
              </svg>

              {/*<!-- Destination Pin -->*/}
              <div className="absolute top-[300px] left-[200px] transform -translate-x-1/2 -translate-y-full cursor-pointer tap-scale" onClick={() => navigate('/Menu_Consistencia')}>
                  <div className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl border border-white/20 whitespace-nowrap mb-2 relative">
                      Asador La Mansión
                      <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-primary"></div>
                  </div>
              </div>

              {/*<!-- User Location Pin -->*/}
              <div className="absolute top-[600px] left-[200px] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer tap-scale">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
              </div>
          </main>

          {/*<!-- Bottom Action Sheet -->*/}
          <div className="absolute bottom-0 left-0 w-full z-50 bottom-sheet px-6 pt-2 pb-8">
              <div className="w-12 h-1.5 bg-outline-variant/50 rounded-full mx-auto mb-6"></div>
              
              <h2 className="font-headline-sm text-[24px] font-bold mb-2">Asador La Mansión</h2>
              <p className="text-on-surface-variant font-medium mb-6">Presidente Masaryk 275, Polanco</p>
              
              <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined fill">directions_car</span>
                      </div>
                      <div>
                          <p className="font-bold">15 min</p>
                          <p className="text-sm text-on-surface-variant">Tráfico ligero</p>
                      </div>
                  </div>
                  <div className="text-right">
                      <p className="font-bold">1.2 km</p>
                      <p className="text-sm text-on-surface-variant">Distancia</p>
                  </div>
              </div>
              
              <div className="flex gap-4">
                  <button className="flex-1 bg-surface-container-high text-on-surface px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 tap-scale shadow-sm">
                      <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Uber_App_Icon.svg" className="w-6 h-6" alt="Uber" />
                      Pedir Uber
                  </button>
                  <button onClick={() => navigate('/Menu_Consistencia')} className="flex-1 bg-primary text-on-primary px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 tap-scale shadow-md" data-toast="Abriendo Google Maps...">
                      <span className="material-symbols-outlined fill">navigation</span>
                      Iniciar
                  </button>
              </div>
          </div>

      </div>
    </>
  );
}
