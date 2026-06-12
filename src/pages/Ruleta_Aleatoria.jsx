import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Ruleta_Aleatoria() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden bg-surface items-center">

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md px-edge_margin py-sm flex justify-between items-center border-b border-outline-variant/20">
              <button onClick={() => navigate(-1)} className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale">
                  <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
              <span className="font-title-md font-bold text-[16px]">Ruleta de Matches</span>
              <div className="w-12 h-12"></div>
          </header>

          <main className="flex-grow flex flex-col items-center justify-center w-full px-edge_margin pt-20 pb-10 text-center">
              
              <h1 className="font-headline-lg-mobile text-[32px] font-bold text-on-surface leading-tight mb-2">¿No sabes qué comer?</h1>
              <p className="font-body-md text-[15px] text-on-surface-variant mb-12">Gira la ruleta y dejaremos que el destino elija tu próxima parada culinaria.</p>

              {/*<!-- Wheel Element -->*/}
              <div className="wheel-container">
                  <div className="wheel-pointer"></div>
                  <div className="wheel" id="wheel"></div>
                  <div className="wheel-center">
                      <span className="material-symbols-outlined text-primary text-[28px]">restaurant</span>
                  </div>
              </div>

              {/*<!-- Result Card (Hidden Initially) -->*/}
              <div id="result-card" className="mt-12 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 w-full shadow-md3-2 opacity-0 transform translate-y-4 transition-all duration-500 pointer-events-none">
                  <h3 className="font-label-md text-[13px] uppercase tracking-widest text-primary font-bold mb-3">El destino ha hablado</h3>
                  <div className="flex gap-4 items-center cursor-pointer tap-scale" onClick={() => navigate('/Menu_Consistencia')}>
                      <img loading="lazy" alt="La Mansión" className="w-16 h-16 rounded-xl object-cover" src="assets/images/food4.jpg" />
                      <div className="flex-1 text-left">
                          <h4 className="font-title-md text-[18px] font-bold">La Mansión</h4>
                          <p className="text-[13px] text-on-surface-variant mt-0.5">Asador Argentino • 1.2 km</p>
                      </div>
                      <span className="material-symbols-outlined text-primary">chevron_right</span>
                  </div>
              </div>

              <button id="spin-btn" className="mt-auto w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-md3-3 tap-scale hover:bg-[#8f2b00] transition-colors flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-[22px]">casino</span>
                  Girar Ruleta
              </button>
              
          </main>

      </div>
    </>
  );
}
