import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Colecciones() {
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
                      <h1 className="font-title-md text-[18px] font-bold text-on-surface leading-tight">Mis Colecciones</h1>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-primary cursor-pointer tap-scale" data-toast="Crear nueva lista">
                      <span className="material-symbols-outlined">playlist_add</span>
                  </div>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow flex flex-col px-edge_margin pt-28 pb-10 overflow-y-auto">

              <div className="grid grid-cols-2 gap-4">
                  
                  {/*<!-- Collection 1 -->*/}
                  <div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 shadow-sm cursor-pointer tap-scale group" onClick={() => navigate('/Matches_Guardados')}>
                      <div className="w-full aspect-square rounded-xl bg-surface-container mb-3 overflow-hidden grid grid-cols-2 grid-rows-2 gap-0.5">
                          <img loading="lazy" src="assets/images/profile1.jpg" className="w-full h-full object-cover" />
                          <img loading="lazy" src="assets/images/food6.jpg" className="w-full h-full object-cover" />
                          <img loading="lazy" src="assets/images/food7.jpg" className="w-full h-full object-cover" />
                          <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[14px]">+12</div>
                      </div>
                      <h3 className="font-label-md font-bold text-[14px] text-on-surface">Favoritos Guardados</h3>
                      <p className="font-body-md text-[11px] text-on-surface-variant">15 lugares</p>
                  </div>

                  {/*<!-- Collection 2 -->*/}
                  <div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 shadow-sm cursor-pointer tap-scale group" onClick={() => navigate('/Matches_Guardados')}>
                      <div className="w-full aspect-square rounded-xl bg-surface-container mb-3 overflow-hidden relative">
                          <img loading="lazy" src="assets/images/interior1.jpg" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20"></div>
                          <span className="absolute bottom-2 right-2 material-symbols-outlined text-white text-[16px]">lock</span>
                      </div>
                      <h3 className="font-label-md font-bold text-[14px] text-on-surface">Citas Románticas</h3>
                      <p className="font-body-md text-[11px] text-on-surface-variant">4 lugares • Privado</p>
                  </div>

                  {/*<!-- Collection 3 -->*/}
                  <div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 shadow-sm cursor-pointer tap-scale group" onClick={() => navigate('/Matches_Guardados')}>
                      <div className="w-full aspect-square rounded-xl bg-surface-container mb-3 overflow-hidden">
                          <img loading="lazy" src="assets/images/food1.jpg" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-label-md font-bold text-[14px] text-on-surface">Brunch de Domingo</h3>
                      <p className="font-body-md text-[11px] text-on-surface-variant">8 lugares</p>
                  </div>

                  {/*<!-- Add New Collection -->*/}
                  <div className="bg-primary/5 rounded-2xl p-3 border-2 border-dashed border-primary/30 shadow-sm cursor-pointer tap-scale flex flex-col items-center justify-center min-h-[160px]" data-toast="Crear nueva lista">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                          <span className="material-symbols-outlined text-[24px]">add</span>
                      </div>
                      <h3 className="font-label-md font-bold text-[14px] text-primary">Nueva Lista</h3>
                  </div>

              </div>

          </main>

      </div>
    </>
  );
}
