import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Buscador_Filtros() {
  const navigate = useNavigate();

  // State for chips
  const [activeChips, setActiveChips] = useState(['Cortes y Parrilla']);
  const toggleChip = (chip) => {
    setActiveChips(prev => 
      prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip]
    );
  };

  // State for price
  const [activePrices, setActivePrices] = useState(['$$$']);
  const togglePrice = (price) => {
    setActivePrices(prev => 
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    );
  };

  // State for distance
  const [distance, setDistance] = useState(5);

  const clearFilters = () => {
    setActiveChips([]);
    setActivePrices([]);
    setDistance(5);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top AppBar (Search embedded) -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 px-edge_margin py-sm">
              <div className="flex items-center gap-3">
                  <button className="back-btn w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <div className="flex-grow relative shadow-sm rounded-full bg-surface-container-lowest">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-primary">
                          <span className="material-symbols-outlined">search</span>
                      </div>
                      <input className="w-full h-12 pl-12 pr-10 bg-transparent border border-outline-variant/30 rounded-full text-[15px] font-body-lg text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Buscar asados, pizza..." type="text" autoFocus />
                      <div className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-on-surface-variant hover:text-on-surface" onClick={() => navigate('/Descubrir_CDMX')}>
                          <span className="material-symbols-outlined text-[18px]">close</span>
                      </div>
                  </div>
              </div>
          </header>

          {/*<!-- Scrollable Content -->*/}
          <main className="flex-1 min-h-0 overflow-y-auto px-4 pt-20 pb-6">
              
              {/*<!-- Recientes -->*/}
              <section className="mb-8">
                  <h2 className="font-title-md text-[16px] font-bold text-on-surface mb-3 flex items-center justify-between">
                      Búsquedas recientes
                      <span className="text-[12px] font-medium text-primary cursor-pointer hover:underline" onClick={clearFilters}>Borrar</span>
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1.5 rounded-md text-[13px] font-medium text-on-surface-variant flex items-center gap-1 cursor-pointer tap-scale hover:bg-surface-container transition-colors" onClick={() => navigate('/Menu_Consistencia')}>
                          <span className="material-symbols-outlined text-[14px] opacity-60">history</span> Asador La Mansión
                      </span>
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1.5 rounded-md text-[13px] font-medium text-on-surface-variant flex items-center gap-1 cursor-pointer tap-scale hover:bg-surface-container transition-colors" onClick={() => navigate('/Descubrir_CDMX')}>
                          <span className="material-symbols-outlined text-[14px] opacity-60">history</span> Sushi
                      </span>
                  </div>
              </section>

              <hr className="border-outline-variant/20 mb-6" />

              {/*<!-- Categorías / Cuisines -->*/}
              <section className="mb-8">
                  <h2 className="font-title-md text-[16px] font-bold text-on-surface mb-4">Cocina y Especialidades</h2>
                  <div className="flex flex-wrap gap-2">
                      {['Mexicana', 'Cortes y Parrilla', 'Italiana', 'Sushi'].map(chip => {
                        const isActive = activeChips.includes(chip);
                        return (
                          <button 
                            key={chip}
                            onClick={() => toggleChip(chip)}
                            className={`px-4 py-2 rounded-full font-label-md text-[13px] border transition-colors tap-scale shadow-sm ${isActive ? 'bg-on-surface text-surface border-transparent' : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/50'}`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                      <button className="bg-surface-container-lowest text-on-surface-variant px-4 py-2 rounded-full font-label-md text-[13px] border border-outline-variant/50 transition-colors tap-scale shadow-sm flex items-center gap-1" onClick={() => navigate('/Descubrir_CDMX')}><span className="material-symbols-outlined text-[14px]">tune</span> Ver todas</button>
                  </div>
              </section>

              {/*<!-- Vibra del Lugar (Mood) -->*/}
              <section className="mb-8">
                  <h2 className="font-title-md text-[16px] font-bold text-on-surface mb-4">Vibra del Lugar ✨</h2>
                  <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Romántico', icon: 'wine_bar' }, 
                        { name: 'Con Amigos', icon: 'sports_bar' }, 
                        { name: 'Para Hablar', icon: 'volume_off' }, 
                        { name: 'Trabajar', icon: 'laptop_mac' }
                      ].map(mood => {
                        const isActive = activeChips.includes(mood.name);
                        return (
                          <button 
                            key={mood.name}
                            onClick={() => toggleChip(mood.name)}
                            className={`px-4 py-2 rounded-full font-label-md text-[13px] border transition-colors tap-scale shadow-sm flex items-center gap-1.5 ${isActive ? 'bg-on-surface text-surface border-transparent' : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/50'}`}
                          >
                            <span className="material-symbols-outlined text-[16px]">{mood.icon}</span> {mood.name}
                          </button>
                        )
                      })}
                  </div>
              </section>

              {/*<!-- Rango de Precio -->*/}
              <section className="mb-8">
                  <h2 className="font-title-md text-[16px] font-bold text-on-surface mb-4">Precio</h2>
                  <div className="flex rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm h-12 w-full">
                      {['$', '$$', '$$$', '$$$$'].map(price => {
                        const isActive = activePrices.includes(price);
                        return (
                          <button 
                            key={price}
                            onClick={() => togglePrice(price)}
                            className={`flex-1 font-bold text-[14px] transition-colors tap-scale ${isActive ? 'bg-on-surface text-surface border-transparent' : 'bg-surface-container-high text-on-surface-variant border-r border-outline-variant/30 hover:bg-surface-variant'}`}
                          >
                            {price}
                          </button>
                        )
                      })}
                  </div>
              </section>

              {/*<!-- Distancia -->*/}
              <section className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                      <h2 className="font-title-md text-[16px] font-bold text-on-surface">Distancia</h2>
                      <span className="text-on-surface font-bold text-[14px] bg-surface-container px-2 py-0.5 rounded-md shadow-sm border border-outline-variant/20">Hasta {distance} km</span>
                  </div>
                  
                  <div className="relative w-full mt-2 flex items-center h-6">
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={distance} 
                        onChange={(e) => setDistance(e.target.value)}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer" 
                        style={{ 
                          outline: "none", 
                          background: `linear-gradient(to right, #1f1f1f ${((distance - 1) * 100) / 19}%, #e5e7eb ${((distance - 1) * 100) / 19}%)` 
                        }} 
                      />
                  </div>
                  <style dangerouslySetInnerHTML={{__html: `
                    input[type=range]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%; 
                        background: #fff;
                        cursor: pointer;
                        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                        border: 2px solid #1f1f1f;
                    }
                  `}} />
                  
                  <div className="flex justify-between mt-3 text-on-surface-variant text-[12px] font-medium">
                      <span>Caminando (1km)</span>
                      <span>En coche (10km+)</span>
                  </div>
              </section>
              
              {/*<!-- Opciones adicionales -->*/}
              <section>
                  <h2 className="font-title-md text-[16px] font-bold text-on-surface mb-4">Características</h2>
                  <div className="flex flex-col gap-3">
                      <label className="flex items-center justify-between p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-sm cursor-pointer tap-scale">
                          <span className="font-medium text-[14px] flex items-center gap-2"><span className="material-symbols-outlined text-on-surface text-[20px]">pets</span> Pet Friendly</span>
                          <input type="checkbox" className="w-5 h-5 text-on-surface border-outline-variant rounded focus:ring-on-surface focus:ring-2 accent-on-surface" />
                      </label>
                      <label className="flex items-center justify-between p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-sm cursor-pointer tap-scale">
                          <span className="font-medium text-[14px] flex items-center gap-2"><span className="material-symbols-outlined text-on-surface text-[20px]">deck</span> Con Terraza</span>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-on-surface border-outline-variant rounded focus:ring-on-surface focus:ring-2 accent-on-surface" />
                      </label>
                  </div>
              </section>

          </main>

          {/*<!-- Bottom Fixed Action -->*/}
          <div className="flex-none bg-surface/90 backdrop-blur-md px-edge_margin py-4 border-t border-outline-variant/20 flex gap-3 pb-8">
              <button className="w-1/3 bg-surface-container text-on-surface py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm tap-scale border border-outline-variant/20 hover:bg-surface-variant transition-colors" onClick={clearFilters}>
                  Limpiar
              </button>
              <button className="w-2/3 bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors" onClick={() => navigate('/Descubrir_CDMX')}>
                  Mostrar 45 Lugares
              </button>
          </div>

      </div>
    </>
  );
}
