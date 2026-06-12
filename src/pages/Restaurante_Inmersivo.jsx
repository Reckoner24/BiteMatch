import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Restaurante_Inmersivo() {
  const navigate = useNavigate();
  
  return (
    <>
      {/*<!-- App Wrapper -->*/}
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          <div className="story-container" id="story-container">
              
              {/*<!-- Media Elements (Images/Videos) -->*/}
              <img loading="lazy" id="story-media" className="w-full h-full object-cover" src="assets/images/food6.jpg" alt="Restaurant Story" />
              
              {/*<!-- Top Overlay -->*/}
              <div className="absolute top-0 left-0 w-full gradient-top z-10 pt-safe">
                  {/*<!-- Progress Bars -->*/}
                  <div className="progress-bar-container" id="progress-container">
                      <div className="progress-segment"><div className="progress-fill"></div></div>
                      <div className="progress-segment"><div className="progress-fill"></div></div>
                      <div className="progress-segment"><div className="progress-fill"></div></div>
                  </div>
                  
                  {/*<!-- Header Info -->*/}
                  <div className="flex items-center justify-between px-4 mt-8 pb-4">
                      <div className="flex items-center gap-3">
                          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white tap-scale">
                              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                          </button>
                          <div className="flex items-center gap-2">
                              <img loading="lazy" src="assets/images/food7.jpg" alt="Logo" className="w-8 h-8 rounded-full border border-white/20 object-cover" />
                              <span className="font-title-md text-white font-bold text-[14px] shadow-sm">Asador La Mansión</span>
                          </div>
                      </div>
                      <button className="w-8 h-8 flex items-center justify-center text-white tap-scale">
                          <span className="material-symbols-outlined text-[24px]">more_horiz</span>
                      </button>
                  </div>
              </div>

              {/*<!-- Tap Zones -->*/}
              <div className="tap-zone tap-left" id="tap-left"></div>
              <div className="tap-zone tap-right" id="tap-right"></div>

              {/*<!-- Bottom Overlay -->*/}
              <div className="absolute bottom-0 left-0 w-full gradient-bottom z-10 p-5 pt-12">
                  <div className="flex flex-col gap-2 mb-4">
                      <span className="bg-primary/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md w-fit font-bold text-[11px] uppercase tracking-wider">Recomendación</span>
                      <p className="text-white font-body-md text-[15px] font-medium drop-shadow-md leading-snug" id="story-caption">
                          Nuestro famoso Rib Eye madurado a la perfección. ¡Un clásico que no te puedes perder! 🔥🥩
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-[16px] text-white/80">location_on</span>
                          <span className="text-white/80 text-[13px]">Polanco, CDMX</span>
                      </div>
                  </div>

                  {/*<!-- Action Buttons -->*/}
                  <div className="flex items-center gap-3">
                      <button className="flex-1 bg-primary text-on-primary py-3.5 rounded-full font-label-md font-bold text-[15px] shadow-lg tap-scale active:scale-95 flex items-center justify-center gap-2" onClick={() => navigate('/Reservacion_Flow')}>
                          <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                          Reservar Mesa
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center border border-white/20 tap-scale active:scale-95" data-toast="Compartir experiencia">
                          <span className="material-symbols-outlined text-[20px]">send</span>
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center border border-white/20 tap-scale active:scale-95" id="like-btn">
                          <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                  </div>
              </div>

          </div>
      </div>
    </>
  );
}
