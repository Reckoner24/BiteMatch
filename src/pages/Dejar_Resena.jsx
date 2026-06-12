import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dejar_Resena() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md pb-4 pt-6 border-b border-outline-variant/20">
              <div className="flex items-center px-edge_margin">
                  <button className="back-btn w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">close</span>
                  </button>
                  <div className="flex-grow flex flex-col justify-center px-2 text-center">
                      <h1 className="font-title-md text-[18px] font-bold text-on-surface leading-tight">Escribir Reseña</h1>
                      <p className="font-label-md text-[12px] text-on-surface-variant">La Mansión</p>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      {/*<!-- Spacer for centering -->*/}
                  </div>
              </div>
          </header>

          {!success ? (
              <>
                  {/*<!-- Main Content Canvas -->*/}
                  <main className="flex-grow flex flex-col px-edge_margin pt-28 pb-32 overflow-y-auto">
                      
                      {/*<!-- Stars Picker -->*/}
                      <section className="flex flex-col items-center justify-center mb-8">
                          <h2 className="font-title-md text-[20px] font-bold text-on-surface mb-4">¿Qué te pareció?</h2>
                          <div className="flex gap-2" id="star-picker">
                              <span className="material-symbols-outlined star-interactive text-[42px] text-yellow-400 fill cursor-pointer">star</span>
                              <span className="material-symbols-outlined star-interactive text-[42px] text-yellow-400 fill cursor-pointer">star</span>
                              <span className="material-symbols-outlined star-interactive text-[42px] text-yellow-400 fill cursor-pointer">star</span>
                              <span className="material-symbols-outlined star-interactive text-[42px] text-yellow-400 fill cursor-pointer">star</span>
                              <span className="material-symbols-outlined star-interactive text-[42px] text-surface-variant cursor-pointer">star</span>
                          </div>
                          <p className="font-label-md text-[14px] text-primary font-bold mt-3" id="rating-text">¡Muy bueno!</p>
                      </section>

                      {/*<!-- Text Area -->*/}
                      <section className="mb-8">
                          <label className="font-title-md text-[16px] font-bold text-on-surface mb-3 block">Cuéntanos tu experiencia</label>
                          <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 font-body-md text-[14px] text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none h-32" placeholder="¿Qué fue lo que más te gustó? ¿Cómo estuvo el servicio?"></textarea>
                      </section>

                      {/*<!-- Image Upload -->*/}
                      <section className="mb-8">
                          <label className="font-title-md text-[16px] font-bold text-on-surface mb-3 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[20px]">add_a_photo</span> Añadir fotografías
                          </label>
                          
                          <div className="flex gap-3 overflow-x-auto hide-scroll pb-2">
                              {/*<!-- Add Button -->*/}
                              <button className="flex-shrink-0 w-24 h-24 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-primary tap-scale transition-colors hover:bg-primary/10">
                                  <span className="material-symbols-outlined text-[24px] mb-1">upload</span>
                                  <span className="font-label-md text-[11px] font-bold uppercase">Subir</span>
                              </button>
                              
                              {/*<!-- Mock Uploaded Photo -->*/}
                              <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm group">
                                  <img loading="lazy" src="assets/images/profile1.jpg" className="w-full h-full object-cover" />
                                  <button className="absolute top-1 right-1 w-6 h-6 bg-black/50 backdrop-blur-sm rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                      <span className="material-symbols-outlined text-[14px]">close</span>
                                  </button>
                              </div>
                          </div>
                      </section>

                  </main>

                  {/*<!-- Bottom Fixed Action for Form -->*/}
                  <div id="bottom-action" className="absolute bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 px-edge_margin py-4 z-50">
                      <button id="btn-submit" onClick={() => setSuccess(true)} className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors flex items-center justify-center gap-2">
                          Publicar reseña
                      </button>
                  </div>
              </>
          ) : (
              <main id="success-view" className="flex-grow flex flex-col items-center justify-center px-edge_margin pt-20 pb-10 h-full mt-24">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
                          <span className="material-symbols-outlined text-[36px]">check_circle</span>
                      </div>
                  </div>
                  <h1 className="font-title-lg text-[28px] font-bold text-on-surface text-center mb-2">¡Gracias por tu reseña!</h1>
                  <p className="font-body-md text-[15px] text-on-surface-variant text-center mb-8">Tu opinión ayuda a miles de usuarios a descubrir mejores lugares en BiteMatch.</p>
                  
                  <button className="w-full bg-surface-container-high text-on-surface py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm flex items-center justify-center tap-scale hover:bg-surface-variant transition-colors border border-outline-variant/20" onClick={() => navigate('/Comunidad_Resenas')}>
                      Volver a la comunidad
                  </button>
              </main>
          )}

      </div>
    </>
  );
}
