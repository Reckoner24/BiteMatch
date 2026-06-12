import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Preferencias_Setup() {
  const navigate = useNavigate();
  const [selectedChips, setSelectedChips] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const toggleChip = (chip) => {
      setSelectedChips(prev => prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip]);
  }

  const toggleCuisine = (c) => {
      setSelectedCuisines(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  }
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md">
              <div className="flex items-center justify-between px-edge_margin py-4">
                  <h1 className="font-title-md text-[18px] font-bold text-on-surface">Personaliza tu experiencia</h1>
                  <button className="font-label-md text-primary font-bold tap-scale text-[14px]" onClick={() => navigate('/Descubrir_CDMX')}>
                      Omitir
                  </button>
              </div>
              {/*<!-- Progress Bar -->*/}
              <div className="w-full h-1 bg-surface-variant">
                  <div className="h-full bg-primary w-1/2"></div>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow flex flex-col px-edge_margin pt-24 pb-32 overflow-y-auto">
              
              <p className="font-body-md text-[15px] text-on-surface-variant mb-8">Cuéntanos un poco sobre tus gustos para mostrarte los mejores lugares para ti.</p>

              {/*<!-- Section 1: Restrictions -->*/}
              <section className="mb-10">
                  <h2 className="font-label-md text-[13px] text-primary mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">no_meals</span> Restricciones Dietéticas
                  </h2>
                  <div className="flex flex-wrap gap-2">
                      {['Vegetariano', 'Vegano', 'Sin Gluten', 'Keto', 'Alergia a Nueces'].map(chip => (
                          <button key={chip} onClick={() => toggleChip(chip)} className={`chip px-4 py-2 rounded-full font-label-md text-[13px] border transition-colors tap-scale shadow-sm ${selectedChips.includes(chip) ? 'bg-primary text-on-primary border-primary' : 'chip-inactive'}`}>{chip}</button>
                      ))}
                  </div>
              </section>

              {/*<!-- Section 2: Favorite Cuisines -->*/}
              <section>
                  <h2 className="font-label-md text-[13px] text-primary mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">restaurant_menu</span> Cocinas Favoritas
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                      {/*<!-- Visual Card Chips -->*/}
                      {[
                          { name: 'Mexicana', img: 'food3.jpg' },
                          { name: 'Italiana', img: 'food4.jpg' },
                          { name: 'Japonesa', img: 'interior2.jpg' },
                          { name: 'Hamburguesas', img: 'food5.jpg' }
                      ].map(c => (
                          <div key={c.name} onClick={() => toggleCuisine(c.name)} className={`cuisine-card relative h-24 rounded-xl overflow-hidden cursor-pointer tap-scale group border border-outline-variant/30 shadow-sm ${selectedCuisines.includes(c.name) ? 'active' : ''}`}>
                              <img loading="lazy" src={`assets/images/${c.img}`} className="w-full h-full object-cover" />
                              <div className={`absolute inset-0 transition-colors ${selectedCuisines.includes(c.name) ? 'bg-primary/60' : 'bg-black/40 group-hover:bg-black/60'}`}></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-white font-bold text-[14px]">{c.name}</span>
                              </div>
                              <div className={`absolute top-2 right-2 text-white transition-opacity ${selectedCuisines.includes(c.name) ? 'opacity-100' : 'opacity-0'}`}>
                                  <span className="material-symbols-outlined fill text-[18px]">check_circle</span>
                              </div>
                          </div>
                      ))}
                  </div>
              </section>

          </main>

          {/*<!-- Bottom Fixed Action -->*/}
          <div className="absolute bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 px-edge_margin py-4 z-50">
              <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors" onClick={() => navigate('/Descubrir_CDMX')}>
                  Empezar a Descubrir
              </button>
          </div>

      </div>
    </>
  );
}
