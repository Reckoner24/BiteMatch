import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu_Interactivo() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([2]); // Dish 2 favorited by default
  
  const toggleFav = (e, id) => {
      e.stopPropagation();
      setFavorites(prev => 
        prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
      );
  };

  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md pt-6 pb-2 border-b border-outline-variant/20">
              <div className="flex items-center px-edge_margin">
                  <button className="back-btn w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <div className="flex-grow flex flex-col justify-center px-2 text-center">
                      <h1 className="font-title-md text-[18px] font-bold text-on-surface leading-tight">Menú Interactivo</h1>
                      <p className="font-label-md text-[12px] text-on-surface-variant">La Mansión</p>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-on-surface-variant tap-scale cursor-pointer" onClick={() => navigate('/Buscador_Filtros')}>
                      <span className="material-symbols-outlined">search</span>
                  </div>
              </div>

              {/*<!-- Categories Scroll -->*/}
              <div className="flex gap-4 overflow-x-auto hide-scroll px-edge_margin mt-4 pb-2">
                  <button className="flex-shrink-0 font-label-md text-[14px] font-bold text-primary border-b-2 border-primary pb-1">
                      Entradas
                  </button>
                  <button className="flex-shrink-0 font-label-md text-[14px] font-bold text-on-surface-variant pb-1">
                      Cortes Prime
                  </button>
                  <button className="flex-shrink-0 font-label-md text-[14px] font-bold text-on-surface-variant pb-1">
                      Guarniciones
                  </button>
                  <button className="flex-shrink-0 font-label-md text-[14px] font-bold text-on-surface-variant pb-1">
                      Bebidas
                  </button>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow flex flex-col px-edge_margin pt-36 pb-10 overflow-y-auto">
              
              <h2 className="font-title-md text-[20px] font-bold text-on-surface mb-4">Entradas</h2>

              <div className="flex flex-col gap-4">
                  
                  {/*<!-- Dish 1 -->*/}
                  <div className="flex gap-4 items-center bg-surface-container-lowest rounded-2xl p-3 shadow-sm border border-outline-variant/20 tap-scale cursor-pointer" data-toast="Tuétanos">
                      <img loading="lazy" alt="Tuétanos" className="w-24 h-24 rounded-xl object-cover" src="assets/images/food2.jpg"/>
                      <div className="flex-1">
                          <h3 className="font-label-md font-bold text-on-surface text-[15px] leading-tight mb-1">Tuétanos a la Parrilla</h3>
                          <p className="text-on-surface-variant text-[12px] line-clamp-2 leading-relaxed">Huesos asados a la leña con perejil, acompañados de tortillas recién hechas y salsa macha.</p>
                          <div className="flex items-center justify-between mt-2">
                              <span className="font-bold text-[14px] text-on-surface">$280 MXN</span>
                              <button onClick={(e) => toggleFav(e, 1)} className={`w-8 h-8 rounded-full flex items-center justify-center text-primary ${favorites.includes(1) ? 'bg-primary-container' : 'bg-primary/10'}`}>
                                  <span className={`material-symbols-outlined text-[16px] ${favorites.includes(1) ? 'fill' : ''}`}>{favorites.includes(1) ? 'favorite' : 'favorite_border'}</span>
                              </button>
                          </div>
                      </div>
                  </div>

                  {/*<!-- Dish 2 -->*/}
                  <div className="flex gap-4 items-center bg-surface-container-lowest rounded-2xl p-3 shadow-sm border border-outline-variant/20 tap-scale cursor-pointer">
                      <img loading="lazy" alt="Chicharrón de Rib Eye" className="w-24 h-24 rounded-xl object-cover" src="assets/images/food3.jpg"/>
                      <div className="flex-1">
                          <h3 className="font-label-md font-bold text-on-surface text-[15px] leading-tight mb-1">Chicharrón de Rib Eye</h3>
                          <p className="text-on-surface-variant text-[12px] line-clamp-2 leading-relaxed">Troceado frito a la perfección sobre una cama de guacamole rústico artesanal.</p>
                          <div className="flex items-center justify-between mt-2">
                              <span className="font-bold text-[14px] text-on-surface">$450 MXN</span>
                              <button onClick={(e) => toggleFav(e, 2)} className={`w-8 h-8 rounded-full flex items-center justify-center text-primary ${favorites.includes(2) ? 'bg-primary-container' : 'bg-primary/10'}`}>
                                  <span className={`material-symbols-outlined text-[16px] ${favorites.includes(2) ? 'fill' : ''}`}>{favorites.includes(2) ? 'favorite' : 'favorite_border'}</span>
                              </button>
                          </div>
                      </div>
                  </div>

                  {/*<!-- Dish 3 (No image) -->*/}
                  <div className="flex gap-4 items-center bg-surface-container-lowest rounded-2xl p-3 shadow-sm border border-outline-variant/20 tap-scale cursor-pointer">
                      <div className="flex-1">
                          <h3 className="font-label-md font-bold text-on-surface text-[15px] leading-tight mb-1">Queso Fundido con Chorizo</h3>
                          <p className="text-on-surface-variant text-[12px] line-clamp-2 leading-relaxed">Mezcla de quesos fundidos al horno de piedra con chorizo estilo argentino.</p>
                          <div className="flex items-center justify-between mt-2">
                              <span className="font-bold text-[14px] text-on-surface">$190 MXN</span>
                              <button onClick={(e) => toggleFav(e, 3)} className={`w-8 h-8 rounded-full flex items-center justify-center text-primary ${favorites.includes(3) ? 'bg-primary-container' : 'bg-primary/10'}`}>
                                  <span className={`material-symbols-outlined text-[16px] ${favorites.includes(3) ? 'fill' : ''}`}>{favorites.includes(3) ? 'favorite' : 'favorite_border'}</span>
                              </button>
                          </div>
                      </div>
                  </div>

              </div>

              <h2 className="font-title-md text-[20px] font-bold text-on-surface mb-4 mt-8">Cortes Prime</h2>

              <div className="flex flex-col gap-4">
                  {/*<!-- Dish 4 -->*/}
                  <div className="flex gap-4 items-center bg-surface-container-lowest rounded-2xl p-3 shadow-sm border border-outline-variant/20 tap-scale cursor-pointer">
                      <img loading="lazy" alt="Rib Eye" className="w-24 h-24 rounded-xl object-cover" src="assets/images/profile1.jpg"/>
                      <div className="flex-1">
                          <h3 className="font-label-md font-bold text-on-surface text-[15px] leading-tight mb-1">Rib Eye al Carbón (400g)</h3>
                          <p className="text-on-surface-variant text-[12px] line-clamp-2 leading-relaxed">Corte marmoleado asado en su jugo, servido en tabla de sal.</p>
                          <div className="flex items-center justify-between mt-2">
                              <span className="font-bold text-[14px] text-on-surface">$890 MXN</span>
                              <button onClick={(e) => toggleFav(e, 4)} className={`w-8 h-8 rounded-full flex items-center justify-center text-primary ${favorites.includes(4) ? 'bg-primary-container' : 'bg-primary/10'}`}>
                                  <span className={`material-symbols-outlined text-[16px] ${favorites.includes(4) ? 'fill' : ''}`}>{favorites.includes(4) ? 'favorite' : 'favorite_border'}</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>

          </main>

      </div>
    </>
  );
}
