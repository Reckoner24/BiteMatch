import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top Action Bar (Skip) -->*/}
          <div className="absolute top-0 w-full z-50 flex justify-end px-edge_margin pt-6">
              <button className="font-label-md text-on-surface-variant font-bold tap-scale text-[14px]" onClick={() => navigate('/Login')}>
                  Saltar
              </button>
          </div>

          {/*<!-- Carousel Container -->*/}
          <div id="carousel" className="flex-grow flex overflow-x-auto snap-container hide-scroll w-full h-full pb-32">
              
              {/*<!-- Slide 1 -->*/}
              <div className="snap-item min-w-full flex flex-col items-center justify-center px-8 pt-10">
                  <div className="w-full aspect-square bg-surface-container rounded-full mb-8 relative overflow-hidden shadow-sm">
                      <img loading="lazy" src="assets/images/food3.jpg" className="w-full h-full object-cover" alt="Descubre" />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                  </div>
                  <h2 className="font-title-md text-[28px] font-bold text-on-surface text-center leading-tight mb-3">Descubre joyas ocultas</h2>
                  <p className="font-body-md text-[15px] text-on-surface-variant text-center">Encuentra los mejores restaurantes y platillos de tu ciudad con recomendaciones personalizadas.</p>
              </div>

              {/*<!-- Slide 2 -->*/}
              <div className="snap-item min-w-full flex flex-col items-center justify-center px-8 pt-10">
                  <div className="w-full aspect-square bg-surface-container rounded-full mb-8 relative overflow-hidden shadow-sm">
                      <img loading="lazy" src="assets/images/food4.jpg" className="w-full h-full object-cover" alt="Guarda" />
                      <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
                  </div>
                  <h2 className="font-title-md text-[28px] font-bold text-on-surface text-center leading-tight mb-3">Guarda tus favoritos</h2>
                  <p className="font-body-md text-[15px] text-on-surface-variant text-center">Haz match con los lugares que más se te antojan y arma tu colección de experiencias.</p>
              </div>

              {/*<!-- Slide 3 -->*/}
              <div className="snap-item min-w-full flex flex-col items-center justify-center px-8 pt-10">
                  <div className="w-full aspect-square bg-surface-container rounded-full mb-8 relative overflow-hidden shadow-sm">
                      <img loading="lazy" src="assets/images/interior2.jpg" className="w-full h-full object-cover" alt="Reserva" />
                      <div className="absolute inset-0 bg-tertiary/20 mix-blend-multiply"></div>
                  </div>
                  <h2 className="font-title-md text-[28px] font-bold text-on-surface text-center leading-tight mb-3">Conecta y reserva</h2>
                  <p className="font-body-md text-[15px] text-on-surface-variant text-center">Visualiza su menú completo, llama o planea tu ruta para llegar directamente desde la app.</p>
              </div>

          </div>

          {/*<!-- Bottom Actions & Indicators -->*/}
          <div className="absolute bottom-0 w-full bg-surface pt-4 pb-8 px-edge_margin flex flex-col items-center">
              
              {/*<!-- Dots -->*/}
              <div className="flex gap-2 mb-6" id="dots-container">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary transition-all duration-300" id="dot-0"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-variant transition-all duration-300" id="dot-1"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-variant transition-all duration-300" id="dot-2"></div>
              </div>

              {/*<!-- Buttons -->*/}
              <div className="w-full flex flex-col gap-3">
                  <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors" onClick={() => navigate('/Login')}>
                      Crear una cuenta
                  </button>
                  <button className="w-full bg-surface-container text-on-surface py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-surface-variant transition-colors border border-outline-variant/20" onClick={() => navigate('/Login')}>
                      Ya tengo cuenta
                  </button>
              </div>
          </div>

      </div>
    </>
  );
}
