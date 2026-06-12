import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Map, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MOCK_RESTAURANTS } from '../data/mockRestaurants';

export default function Explorar_Mapa() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('mapa');
  
  const [viewState, setViewState] = useState({
      longitude: -99.1714,
      latitude: 19.41,
      zoom: 12.5
  });

  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- App Bar -->*/}
          <header className="flex-none z-50 bg-surface/90 backdrop-blur-md px-4 pt-4 pb-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                  <h1 className="text-[28px] font-bold font-headline-lg-mobile text-primary">Explorar</h1>
                  <div className="flex gap-2">
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container shadow-sm hover:bg-surface-variant transition-colors tap-scale relative" onClick={() => navigate('/Buscador_Filtros')}>
                          <span className="material-symbols-outlined text-on-surface">tune</span>
                          <span className="filter-badge absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-surface hidden"></span>
                      </button>
                  </div>
              </div>
              
              {/*<!-- Toggle Control -->*/}
              <div className="flex bg-surface-variant/50 p-1 rounded-xl">
                  <button onClick={() => setActiveView('mapa')} className={`flex-1 py-1.5 rounded-lg text-[14px] font-bold transition-all tap-scale ${activeView === 'mapa' ? 'bg-surface shadow-sm text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>Mapa</button>
                  <button onClick={() => setActiveView('lista')} className={`flex-1 py-1.5 rounded-lg text-[14px] font-bold transition-all tap-scale ${activeView === 'lista' ? 'bg-surface shadow-sm text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>Lista</button>
              </div>
          </header>

          {/*<!-- Map Canvas (View: Mapa) -->*/}
          <main className={`flex-1 min-h-0 relative ${activeView === 'mapa' ? 'block' : 'hidden'}`}>
              <Map
                  {...viewState}
                  onMove={evt => setViewState(evt.viewState)}
                  mapStyle="/mapStyle.json"
                  attributionControl={false}
                  style={{width: '100%', height: '100%'}}
              >
                  {MOCK_RESTAURANTS.map((rest) => {
                      const isZoomedIn = viewState.zoom > 13.5;
                      const isAvailable = rest.estado === 'disponible';
                      
                      return (
                          <Marker 
                              key={rest.id} 
                              longitude={rest.coordenadas[0]} 
                              latitude={rest.coordenadas[1]} 
                              anchor="bottom"
                              onClick={e => {
                                  e.originalEvent.stopPropagation();
                                  navigate('?menu=' + rest.id);
                              }}
                          >
                              {isZoomedIn ? (
                                  <div className="bg-surface p-1 rounded-xl shadow-lg border border-outline-variant/30 flex items-center gap-2 cursor-pointer transform hover:scale-105 transition-transform" style={{ width: '140px' }}>
                                      <img src={rest.imagen} alt={rest.nombre} className="w-10 h-10 rounded-lg object-cover" />
                                      <div className="flex-1 min-w-0">
                                          <h3 className="text-[12px] font-bold text-on-surface truncate">{rest.nombre}</h3>
                                          <div className="flex items-center gap-1 text-[10px] text-on-surface-variant">
                                              <span className="material-symbols-outlined text-[12px] text-primary fill">star</span>
                                              <span>{rest.rating}</span>
                                          </div>
                                      </div>
                                  </div>
                              ) : (
                                  <div className="relative flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
                                      {isAvailable && (
                                          <div className="absolute w-6 h-6 bg-primary/30 rounded-full animate-ping"></div>
                                      )}
                                      <div className={`w-4 h-4 rounded-full border-2 border-surface shadow-md ${isAvailable ? 'bg-primary' : 'bg-[#EF4444]'}`}></div>
                                  </div>
                              )}
                          </Marker>
                      );
                  })}
              </Map>
          </main>

          {/*<!-- List Canvas (View: Lista) -->*/}
          <main className={`flex-1 min-h-0 overflow-y-auto px-4 py-4 bg-surface ${activeView === 'lista' ? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[16px] font-bold text-on-surface">Cerca de ti</h2>
                  <span className="text-[13px] font-medium text-primary">{MOCK_RESTAURANTS.length} lugares</span>
              </div>
              
              <div className="flex flex-col gap-4">
                  {MOCK_RESTAURANTS.map((rest) => (
                      <div key={rest.id} className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 p-3 flex gap-4 tap-scale cursor-pointer" onClick={() => navigate('?menu=' + rest.id)}>
                          <img loading="lazy" src={rest.imagen} className="w-[90px] h-[90px] rounded-xl object-cover" alt={rest.nombre} />
                          <div className="flex-1 flex flex-col justify-center">
                              <h3 className="font-bold text-[16px] leading-tight mb-1 text-on-surface">{rest.nombre}</h3>
                              <p className="text-[13px] text-on-surface-variant mb-2">{rest.tipo}</p>
                              <div className="flex items-center gap-1 text-[13px] text-on-surface-variant font-medium">
                                  <span className="material-symbols-outlined text-[16px] text-primary fill">star</span> {rest.rating}
                                  <span className="mx-1 opacity-50">•</span> {rest.distancia}
                              </div>
                          </div>
                      </div>
                  ))}
                  
                  {/*<!-- End spacer -->*/}
                  <div className="h-6"></div>
              </div>
          </main>
      </div>
    </>
  );
}
