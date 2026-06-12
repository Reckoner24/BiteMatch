import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Comunidad_Resenas() {
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
                      <h1 className="font-title-md text-[18px] font-bold text-on-surface leading-tight">La Mansión</h1>
                      <p className="font-label-md text-[12px] text-on-surface-variant">Reseñas de la Comunidad</p>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-primary cursor-pointer tap-scale" data-toast="Ordenar reseñas">
                      <span className="material-symbols-outlined">sort</span>
                  </div>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow flex flex-col px-edge_margin pt-28 pb-28 overflow-y-auto">
              
              {/*<!-- Ratings Overview -->*/}
              <section className="flex gap-6 items-center mb-8 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 shadow-sm">
                  {/*<!-- Global Score -->*/}
                  <div className="flex flex-col items-center justify-center">
                      <span className="font-headline-lg text-[42px] font-black leading-none text-on-surface">4.8</span>
                      <div className="flex items-center text-yellow-400 my-1">
                          <span className="material-symbols-outlined text-[16px] fill">star</span>
                          <span className="material-symbols-outlined text-[16px] fill">star</span>
                          <span className="material-symbols-outlined text-[16px] fill">star</span>
                          <span className="material-symbols-outlined text-[16px] fill">star</span>
                          <span className="material-symbols-outlined text-[16px] fill">star_half</span>
                      </div>
                      <span className="font-label-md text-[11px] text-on-surface-variant">342 reseñas</span>
                  </div>
                  
                  {/*<!-- Bars -->*/}
                  <div className="flex-grow flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant">
                          <span className="w-2">5</span>
                          <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary" style={{"width":"85%"}}></div></div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant">
                          <span className="w-2">4</span>
                          <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary" style={{"width":"10%"}}></div></div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant">
                          <span className="w-2">3</span>
                          <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary/50" style={{"width":"3%"}}></div></div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant">
                          <span className="w-2">2</span>
                          <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary/50" style={{"width":"1%"}}></div></div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant">
                          <span className="w-2">1</span>
                          <div className="flex-grow h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-error" style={{"width":"1%"}}></div></div>
                      </div>
                  </div>
              </section>

              {/*<!-- Divider -->*/}
              <hr className="border-outline-variant/30 mb-6" />

              {/*<!-- Reviews List -->*/}
              <div className="flex flex-col gap-6">
                  
                  {/*<!-- Review Item 1 -->*/}
                  <article className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/20">
                      <div className="flex items-start justify-between mb-3 cursor-pointer tap-scale" onClick={() => navigate('/Perfil_Usuario')}>
                          <div className="flex items-center gap-3">
                              <img loading="lazy" src="assets/images/profile1.jpg" className="w-10 h-10 rounded-full object-cover" />
                              <div>
                                  <h3 className="font-label-md font-bold text-[14px] text-on-surface">Sofía M.</h3>
                                  <p className="text-[11px] text-on-surface-variant">Hace 2 días • Local Guide</p>
                              </div>
                          </div>
                          <div className="flex items-center text-yellow-400 bg-yellow-50 px-2 py-0.5 rounded text-[12px] border border-yellow-200">
                              <span className="font-bold text-yellow-700 mr-1">5</span>
                              <span className="material-symbols-outlined text-[14px] fill">star</span>
                          </div>
                      </div>
                      <p className="font-body-md text-[14px] text-on-surface leading-relaxed mb-3">
                          El ambiente es espectacular y el Rib Eye estaba en su punto exacto. La atención de los meseros fue muy buena. Recomiendo pedir la terraza si vienen de noche, la iluminación le da un toque muy romántico.
                      </p>
                      {/*<!-- Photos Grid -->*/}
                      <div className="flex gap-2 overflow-x-auto hide-scroll pb-1">
                          <img loading="lazy" src="assets/images/food5.jpg" className="w-24 h-24 object-cover rounded-xl flex-shrink-0 cursor-pointer tap-scale border border-outline-variant/30" />
                          <img loading="lazy" src="assets/images/food6.jpg" className="w-24 h-24 object-cover rounded-xl flex-shrink-0 cursor-pointer tap-scale border border-outline-variant/30" />
                      </div>
                      {/*<!-- Actions -->*/}
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-outline-variant/20">
                          <button className="flex items-center gap-1 text-[12px] font-medium text-on-surface-variant tap-scale hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-[16px]">thumb_up</span> Útil (12)
                          </button>
                          <button className="flex items-center gap-1 text-[12px] font-medium text-on-surface-variant tap-scale hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-[16px]">share</span> Compartir
                          </button>
                      </div>
                  </article>

                  {/*<!-- Review Item 2 -->*/}
                  <article className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/20">
                      <div className="flex items-start justify-between mb-3 cursor-pointer tap-scale" onClick={() => navigate('/Perfil_Usuario')}>
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                                  AL
                              </div>
                              <div>
                                  <h3 className="font-label-md font-bold text-[14px] text-on-surface">Andrés L.</h3>
                                  <p className="text-[11px] text-on-surface-variant">Hace 1 semana</p>
                              </div>
                          </div>
                          <div className="flex items-center text-yellow-400 bg-yellow-50 px-2 py-0.5 rounded text-[12px] border border-yellow-200">
                              <span className="font-bold text-yellow-700 mr-1">4</span>
                              <span className="material-symbols-outlined text-[14px] fill">star</span>
                          </div>
                      </div>
                      <p className="font-body-md text-[14px] text-on-surface leading-relaxed mb-3">
                          Muy buenos cortes, pero hubo un pequeño retraso al traer las bebidas. Fuera de eso, una gran experiencia culinaria.
                      </p>
                      <div className="flex items-center gap-4 mt-1 pt-3 border-t border-outline-variant/20">
                          <button className="flex items-center gap-1 text-[12px] font-medium text-on-surface-variant tap-scale hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-[16px]">thumb_up</span> Útil (3)
                          </button>
                      </div>
                  </article>

              </div>
          </main>

          {/*<!-- Bottom Fixed Action for Review -->*/}
          <div className="absolute bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 px-edge_margin py-4 z-50">
              <button onClick={() => navigate('/Dejar_Resena')} className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">rate_review</span>
                  Escribir una reseña
              </button>
          </div>

      </div>
    </>
  );
}
