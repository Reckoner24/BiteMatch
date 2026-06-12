import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RESTAURANTES_DATA = {
  1: {
      nombre: "La Mansión",
      tipo: "Asador Argentino & Prime Cuts",
      imagen: "assets/images/food6.jpg",
      rating: "4.8",
      reviews: "342",
      price: "$$$",
      tags: ["Cortes", "Lugar disponible"],
      desc: "La Mansión es un asador clásico en el corazón de Polanco. Con un ambiente elegante pero relajado, nos especializamos en cortes madurados y una selecta cava de vinos.",
      horario: "Lun - Dom: 13:00 - 00:00",
      estilo: "Casual Elegante",
      especialidades: [
          { nombre: "Chicharrón de Rib Eye", desc: "Troceado de Rib Eye Prime frito a la perfección con guacamole rústico.", img: "assets/images/food3.jpg", badge: "MÁS POPULAR" },
          { nombre: "Tuétanos a la Parrilla", desc: "Huesos asados a la leña, servidos con ensalada de perejil.", img: "assets/images/food5.jpg" }
      ]
  },
  2: {
      nombre: "Sushi Roll",
      tipo: "Cocina Japonesa Contemporánea",
      imagen: "assets/images/food4.jpg",
      rating: "4.5",
      reviews: "820",
      price: "$$",
      tags: ["Sushi", "Lugar disponible"],
      desc: "Disfruta del mejor sushi de la ciudad con un toque moderno. Rollos exclusivos, sashimis frescos y una barra de sakes espectacular.",
      horario: "Lun - Dom: 12:30 - 23:00",
      estilo: "Casual Moderno",
      especialidades: [
          { nombre: "Dragon Roll", desc: "Anguila, pepino, cubierto de aguacate y salsa dulce.", img: "assets/images/interior2.jpg", badge: "NUEVO" },
          { nombre: "Sashimi Corte Grueso", desc: "Selección del chef de atún aleta azul y salmón fresco.", img: "assets/images/food1.jpg" }
      ]
  },
  3: {
      nombre: "Pizzería Roma",
      tipo: "Auténtica Pizza Napolitana",
      imagen: "assets/images/food5.jpg",
      rating: "4.9",
      reviews: "1,205",
      price: "$$",
      tags: ["Pizza", "Poca disponibilidad"],
      desc: "Pizzas horneadas a la leña con ingredientes importados directamente desde Nápoles. El auténtico sabor italiano en cada rebanada.",
      horario: "Mar - Dom: 14:00 - 22:30",
      estilo: "Rústico y Acogedor",
      especialidades: [
          { nombre: "Pizza Margherita DOP", desc: "Tomate San Marzano, mozzarella di bufala y albahaca fresca.", img: "assets/images/food2.jpg", badge: "TRADICIONAL" },
          { nombre: "Burrata con Prosciutto", desc: "Burrata fresca cremosa envuelta en prosciutto di Parma.", img: "assets/images/food7.jpg" }
      ]
  },
  4: {
      nombre: "Tacos Orinoco",
      tipo: "Taquería Norteña Auténtica",
      imagen: "assets/images/food3.jpg",
      rating: "4.7",
      reviews: "3,400",
      price: "$",
      tags: ["Tacos", "Muy concurrido"],
      desc: "Los famosos tacos estilo Monterrey. Trompo rojo jugoso, chicharrón norteño y costras de queso que te harán regresar.",
      horario: "Lun - Dom: 13:00 - 05:00",
      estilo: "Informal Urbano",
      especialidades: [
          { nombre: "Taco de Trompo", desc: "Cerdo adobado en tortilla de maíz o harina con piña asada.", img: "assets/images/food1.jpg", badge: "EL CLÁSICO" },
          { nombre: "Chicharrón Norteño", desc: "Crujiente y carnoso chicharrón de cerdo servido en taco.", img: "assets/images/food6.jpg" }
      ]
  },
  5: {
      nombre: "Pujol",
      tipo: "Mexicana Contemp. • Polanco",
      imagen: "/assets/images/interior2.jpg",
      rating: "5.0",
      reviews: "4,500",
      price: "$$$$",
      tags: ["Mexicana", "Lugar disponible"],
      desc: "Clasificado entre los mejores restaurantes del mundo, Pujol reinventa la cocina tradicional mexicana utilizando técnicas ancestrales y de vanguardia.",
      horario: "Lun - Sab: 13:30 - 22:30",
      estilo: "Fine Dining",
      especialidades: [
          { nombre: "Mole Madre, Mole Nuevo", desc: "Mole madurado por más de 3000 días contrastado con mole fresco.", img: "/assets/images/food7.jpg", badge: "SIGNATURE" },
          { nombre: "Taco de Omakase", desc: "Selección de tacos al estilo degustación con ingredientes de temporada.", img: "/assets/images/food5.jpg" }
      ]
  }
};

export default function Menu_Consistencia({ id, onClose }) {
  const navigate = useNavigate();
  const parsedId = parseInt(id, 10);
  const data = RESTAURANTES_DATA[parsedId] || RESTAURANTES_DATA[1];
  
  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute inset-0 z-[100] bg-surface w-full h-full flex flex-col overflow-hidden"
    >
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Unified Top App Bar matching Descubrir_CDMX -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md">
              <div className="flex items-center justify-between px-edge_margin py-sm">
                  <button className="back-btn w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={onClose}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  
                  {/*<!-- Centered Location Pill -->*/}
                  <div onClick={() => navigate('/Seleccionar_Ubicacion')} className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full shadow-sm hover:bg-surface-container transition-colors active:scale-95 cursor-pointer border border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary text-[20px] fill">location_on</span>
                      <span className="text-label-md text-on-surface font-semibold">Ciudad de México</span>
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span>
                  </div>
                  
                  <div className="w-12 h-12"></div> {/*<!-- Spacer -->*/}
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow pb-28 relative overflow-y-auto pt-20">
              
              {/*<!-- Hero Section -->*/}
              <div className="relative w-full h-64 bg-surface-container">
                  <img alt={data.nombre} className="w-full h-full object-cover" src={data.imagen} loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/*<!-- Floating Badge -->*/}
                  <div className="absolute bottom-4 right-4 bg-surface/20 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1 text-white border border-white/20 cursor-pointer tap-scale" onClick={() => navigate('/Comunidad_Resenas')}>
                      <span className="text-[14px] font-bold">{data.rating}</span>
                      <span className="material-symbols-outlined text-[16px] text-yellow-400 fill">star</span>
                      <span className="text-[12px] opacity-80">({data.reviews} reseñas)</span>
                  </div>
                  
                  {/*<!-- Immersive Experience Button -->*/}
                  <button onClick={() => navigate('/Restaurante_Inmersivo')} className="absolute inset-0 m-auto w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 tap-scale hover:bg-black/60 transition-colors shadow-xl group">
                      <span className="material-symbols-outlined text-white text-[32px] group-hover:scale-110 transition-transform">play_arrow</span>
                  </button>
              </div>

              <div className="px-edge_margin -mt-6 relative z-10">
                  {/*<!-- Brand Info Card -->*/}
                  <div className="bg-surface rounded-md3-xl p-5 shadow-md3-3 border border-outline-variant/20 flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                          <div>
                              <h1 className="font-headline-lg text-[28px] leading-tight font-bold text-on-surface">{data.nombre}</h1>
                              <p className="text-on-surface-variant font-label-md mt-1">{data.tipo}</p>
                          </div>
                          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary tap-scale shadow-sm" data-toast="Guardado en tus Matches">
                              <span className="material-symbols-outlined fill">favorite</span>
                          </button>
                      </div>

                      <div className="flex items-center gap-3 text-[14px] font-medium mt-1">
                          <span className="bg-surface-container-high px-2 py-1 rounded-md text-on-surface-variant flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">restaurant</span>
                              {data.tags[0]}
                          </span>
                          <span className="text-on-surface-variant flex items-center gap-1.5 text-[13px] font-medium">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                              {data.tags[1]}
                          </span>
                          <span className="text-on-surface-variant">{data.price}</span>
                      </div>
                  </div>

                  {/*<!-- Action Buttons (Contact/Booking) -->*/}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                      {/* Navigate with ID to Reservations so context is kept if needed */}
                      <button onClick={() => navigate('/Reservacion_Flow', { state: { restaurantId: id } })} className="bg-primary text-on-primary py-3.5 rounded-full font-label-md font-bold shadow-md3-2 flex items-center justify-center gap-2 tap-scale hover:bg-[#8f2b00] transition-colors">
                          <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                          Reservar
                      </button>
                      <button onClick={() => navigate('/Ubicacion_Restaurante')} className="bg-surface-container-high text-on-surface py-3.5 rounded-full font-label-md font-bold shadow-sm flex items-center justify-center gap-2 tap-scale hover:bg-surface-variant transition-colors">
                          <span className="material-symbols-outlined text-[20px] text-primary">directions</span>
                          Cómo llegar
                      </button>
                  </div>

                  <div className="w-full flex justify-center mt-3">
                      <button onClick={() => navigate('/Menu_Interactivo')} className="text-primary font-label-md font-bold flex items-center gap-1 py-2 px-4 rounded-full hover:bg-primary/5 transition-colors tap-scale">
                          <span className="material-symbols-outlined text-[18px]">menu_book</span>
                          Ver menú completo oficial
                      </button>
                  </div>

                  {/*<!-- Divider -->*/}
                  <hr className="border-outline-variant/30 my-6" />

                  {/*<!-- Showcase / Especialidades -->*/}
                  <h2 className="font-title-md text-[20px] font-bold text-on-surface mb-4">Especialidades del Chef</h2>

                  <div className="flex flex-col gap-4">
                      {data.especialidades.map((esp, idx) => (
                        <div key={idx} className="flex gap-4 items-center bg-surface-container-lowest rounded-md3-md p-3 shadow-sm border border-outline-variant/20 tap-scale cursor-pointer" data-toast={esp.nombre}>
                            <img alt={esp.nombre} className="w-24 h-24 rounded-lg object-cover" src={esp.img} loading="lazy" />
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <h3 className="font-label-md font-bold text-on-surface text-[15px] leading-tight">{esp.nombre}</h3>
                                </div>
                                <p className="text-on-surface-variant text-[12px] mt-1 line-clamp-2">{esp.desc}</p>
                                {esp.badge && <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-sm mt-2 inline-block">{esp.badge}</span>}
                            </div>
                        </div>
                      ))}
                  </div>

                  {/*<!-- Divider -->*/}
                  <hr className="border-outline-variant/30 my-6" />

                  {/*<!-- About / Info -->*/}
                  <h2 className="font-title-md text-[20px] font-bold text-on-surface mb-3">Conoce el Lugar</h2>
                  <p className="text-on-surface-variant text-[14px] leading-relaxed mb-4">
                      {data.desc}
                  </p>
                  
                  <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-[14px] text-on-surface-variant py-2 border-b border-surface-variant">
                          <span className="material-symbols-outlined text-[20px] text-primary">schedule</span>
                          <span>{data.horario}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-on-surface-variant py-2 border-b border-surface-variant">
                          <span className="material-symbols-outlined text-[20px] text-primary">style</span>
                          <span>{data.estilo}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-on-surface-variant py-2">
                          <span className="material-symbols-outlined text-[20px] text-primary">pets</span>
                          <span>Pet Friendly en Terraza</span>
                      </div>
                  </div>

                  {/*<!-- Redes Sociales -->*/}
                  <div className="flex items-center gap-4 mt-4">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:bg-surface-container tap-scale transition-colors text-on-surface-variant">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:bg-surface-container tap-scale transition-colors text-on-surface-variant">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest shadow-sm hover:bg-surface-container tap-scale transition-colors text-on-surface-variant">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                      </button>
                  </div>

              </div>
          </main>

      </div>
    </motion.div>
  );
}
