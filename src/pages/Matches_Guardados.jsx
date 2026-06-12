import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Matches_Guardados() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- App Bar -->*/}
          <header className="flex-none z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 px-4 pt-4 pb-2">
              <div className="flex items-center justify-between mb-4">
                  <h1 className="text-[28px] font-bold font-headline-lg-mobile text-primary flex items-center gap-2">
                      Matches <span className="material-symbols-outlined text-[24px] fill">favorite</span>
                  </h1>
              </div>
              {/*<!-- Quick Filters -->*/}
              <div className="flex overflow-x-auto gap-2 pb-2 px-4 -mx-4 no-scrollbar" style={{ scrollbarWidth: "none" }}>
                  <button className="px-4 py-1.5 rounded-full font-label-md text-[13px] bg-on-surface text-surface flex-shrink-0 shadow-sm">Todos</button>
                  <button className="px-4 py-1.5 rounded-full font-label-md text-[13px] border border-outline-variant/50 text-on-surface flex-shrink-0 hover:bg-surface-variant transition-colors">Abierto Ahora</button>
                  <button className="px-4 py-1.5 rounded-full font-label-md text-[13px] border border-outline-variant/50 text-on-surface flex-shrink-0 hover:bg-surface-variant transition-colors">A menos de 2km</button>
                  <button className="px-4 py-1.5 rounded-full font-label-md text-[13px] border border-outline-variant/50 text-on-surface flex-shrink-0 hover:bg-surface-variant transition-colors">Cortes</button>
                  <button className="px-4 py-1.5 rounded-full font-label-md text-[13px] border border-outline-variant/50 text-on-surface flex-shrink-0 hover:bg-surface-variant transition-colors">Para Citas</button>
              </div>
          </header>

          {/*<!-- Main Content -->*/}
          <main className="flex-1 min-h-0 overflow-y-auto px-4 pt-6 pb-6">
              <div className="flex flex-col gap-5">
                  
                  {/*<!-- Match Card 1 -->*/}
                  <div className="bg-surface-container-lowest rounded-[24px] shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col tap-scale cursor-pointer" onClick={(e) => {
                      if(!e.target.closest('button')) {
                          navigate('?menu=1');
                      }
                  }}>
                      <div className="relative h-[160px] w-full">
                          <img loading="lazy" src="assets/images/food6.jpg" className="w-full h-full object-cover" alt="Mansion" />
                          <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-surface-variant/50">
                              <span className="material-symbols-outlined text-[14px] text-primary fill">favorite</span>
                              <span className="text-[12px] font-bold text-on-surface">Match Perfecto</span>
                          </div>
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                          <div className="flex justify-between items-center">
                              <h3 className="font-bold text-[18px] leading-tight text-on-surface">Asador La Mansión</h3>
                              <span className="text-[12px] text-on-surface-variant font-medium">Hace 2d</span>
                          </div>
                          <p className="text-[14px] text-on-surface-variant mb-3">Cortes Finos • Polanco</p>
                          <button onClick={(e) => { e.stopPropagation(); navigate('/Reservacion_Flow', { state: { restaurantId: 1 } }); }} className="w-full bg-primary/10 text-primary font-bold py-3 rounded-xl text-[14px] hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                              <span className="material-symbols-outlined text-[18px]">calendar_month</span> Reservar Mesa
                          </button>
                      </div>
                  </div>

                  {/*<!-- Match Card 2 -->*/}
                  <div className="bg-surface-container-lowest rounded-[24px] shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col tap-scale cursor-pointer" onClick={(e) => {
                      if(!e.target.closest('button')) {
                          navigate('?menu=2');
                      }
                  }}>
                      <div className="relative h-[160px] w-full">
                          <img loading="lazy" src="assets/images/interior1.jpg" className="w-full h-full object-cover" alt="Sushi" />
                          <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-surface-variant/50">
                              <span className="material-symbols-outlined text-[14px] text-on-surface-variant">favorite</span>
                              <span className="text-[12px] font-bold text-on-surface-variant">Tú le diste Match</span>
                          </div>
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                          <div className="flex justify-between items-center">
                              <h3 className="font-bold text-[18px] leading-tight text-on-surface">Suntory</h3>
                              <span className="text-[12px] text-on-surface-variant font-medium">Hace 1 sem</span>
                          </div>
                          <p className="text-[14px] text-on-surface-variant mb-3">Japonesa • Del Valle</p>
                          <button onClick={(e) => { e.stopPropagation(); navigate('/Reservacion_Flow', { state: { restaurantId: 2 } }); }} className="w-full bg-primary/10 text-primary font-bold py-3 rounded-xl text-[14px] hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                              <span className="material-symbols-outlined text-[18px]">calendar_month</span> Reservar Mesa
                          </button>
                      </div>
                  </div>

              </div>
          </main>
      </div>
    </>
  );
}
