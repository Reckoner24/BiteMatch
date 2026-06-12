import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Seleccionar_Ubicacion() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Unified Top App Bar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20">
              <div className="flex items-center justify-between px-edge_margin py-sm">
                  <button className="back-btn w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  
                  <h1 className="font-title-md text-[18px] text-on-surface font-bold">Seleccionar ubicación</h1>
                  
                  <div className="w-12 h-12"></div> {/*<!-- Spacer -->*/}
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow pb-28 px-edge_margin relative overflow-y-auto pt-20">
              
              {/*<!-- Current Location -->*/}
              <section className="mb-xl">
                  <button className="w-full flex items-center p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 tap-scale transition-transform duration-200" data-toast="Ubicación GPS actualizada a Ciudad de México">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 rounded-full text-primary mr-4">
                          <span className="material-symbols-outlined fill">my_location</span>
                      </div>
                      <div className="text-left">
                          <h2 className="font-label-md text-[16px] text-on-surface font-bold">Ubicación actual</h2>
                          <p className="font-body-md text-[13px] text-on-surface-variant mt-0.5">Usar mi ubicación actual</p>
                      </div>
                  </button>
              </section>

              {/*<!-- Popular Cities Section -->*/}
              <section>
                  <div className="flex items-center justify-between mb-4">
                      <h3 className="font-title-md text-[16px] font-extrabold text-on-surface tracking-tight">Ciudades Populares</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                      {/*<!-- Ciudad de México -->*/}
                      <button onClick={() => navigate(-1)} className="flex items-center p-3 bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors tap-scale border border-outline-variant/20 shadow-sm">
                          <div className="w-14 h-14 rounded-lg overflow-hidden mr-4 flex-shrink-0 shadow-sm">
                              <img loading="lazy" alt="Ciudad de México" className="w-full h-full object-cover" src="assets/images/food1.jpg" />
                          </div>
                          <div className="flex-grow text-left">
                              <span className="font-label-md text-[15px] text-on-surface font-semibold">Ciudad de México</span>
                          </div>
                          <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                      </button>
                      
                      {/*<!-- Guadalajara -->*/}
                      <button onClick={() => navigate(-1)} className="flex items-center p-3 bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors tap-scale border border-outline-variant/20 shadow-sm">
                          <div className="w-14 h-14 rounded-lg overflow-hidden mr-4 flex-shrink-0 shadow-sm">
                              <img loading="lazy" alt="Guadalajara" className="w-full h-full object-cover" src="assets/images/food2.jpg" />
                          </div>
                          <div className="flex-grow text-left">
                              <span className="font-label-md text-[15px] text-on-surface font-semibold">Guadalajara</span>
                          </div>
                          <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                      </button>
                      
                      {/*<!-- Monterrey -->*/}
                      <button onClick={() => navigate(-1)} className="flex items-center p-3 bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors tap-scale border border-outline-variant/20 shadow-sm">
                          <div className="w-14 h-14 rounded-lg overflow-hidden mr-4 flex-shrink-0 shadow-sm">
                              <img loading="lazy" alt="Monterrey" className="w-full h-full object-cover" src="assets/images/food3.jpg" />
                          </div>
                          <div className="flex-grow text-left">
                              <span className="font-label-md text-[15px] text-on-surface font-semibold">Monterrey</span>
                          </div>
                          <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                      </button>
                  </div>
              </section>
          </main>
      </div>
    </>
  );
}
