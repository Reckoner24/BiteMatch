import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const RESTAURANTES_DATA = {
  1: { nombre: "Asador La Mansión", imagen: "assets/images/food6.jpg" },
  2: { nombre: "Sushi Roll", imagen: "assets/images/food4.jpg" },
  3: { nombre: "Pizzería Roma", imagen: "assets/images/food5.jpg" },
  4: { nombre: "Tacos Orinoco", imagen: "assets/images/food3.jpg" }
};

export default function Reservacion_Flow() {
  const navigate = useNavigate();
  const location = useLocation();
  const restaurantId = location.state?.restaurantId || 1;
  const restaurant = RESTAURANTES_DATA[restaurantId] || RESTAURANTES_DATA[1];

  const [success, setSuccess] = useState(false);
  const [people, setPeople] = useState(2);
  const [activeDate, setActiveDate] = useState(14);
  const [activeTime, setActiveTime] = useState('14:00');
  const [toastMessage, setToastMessage] = useState(null);
  
  const handleConfirm = () => {
      setSuccess(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden bg-surface">

          {/* Toast Notification */}
          {toastMessage && (
              <div className="absolute top-20 left-0 right-0 flex justify-center z-[100] animate-fade-in-up pointer-events-none">
                  <div className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full shadow-lg font-medium border border-outline/10 text-[14px]">
                      {toastMessage}
                  </div>
              </div>
          )}

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md pb-2 pt-6">
              <div className="flex items-center px-edge_margin">
                  <button className="back-btn w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">close</span>
                  </button>
                  <h1 className="font-title-md text-[18px] font-bold text-on-surface text-center flex-grow pr-12">Reservar Mesa</h1>
              </div>
          </header>

          {!success ? (
              <>
                  {/*<!-- Main Booking Form Canvas -->*/}
                  <main id="booking-form" className="flex-grow flex flex-col px-edge_margin pt-24 pb-32 overflow-y-auto">
                      
                      {/*<!-- Restaurant Header -->*/}
                      <div className="flex items-center gap-4 bg-surface-container-low p-3 rounded-2xl border border-outline-variant/30 mb-8 shadow-sm">
                          <img src={restaurant.imagen} className="w-16 h-16 rounded-xl object-cover" />
                          <div>
                              <h2 className="font-title-md text-[16px] font-bold text-on-surface leading-tight">{restaurant.nombre}</h2>
                              <p className="font-body-md text-[13px] text-on-surface-variant flex items-center gap-1 mt-1">
                                  <span className="material-symbols-outlined text-[14px]">location_on</span> Polanco
                              </p>
                          </div>
                      </div>

                      {/*<!-- 1. Fecha -->*/}
                      <section className="mb-8">
                          <h3 className="font-title-md text-[16px] font-bold text-on-surface mb-3 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span> Fecha
                          </h3>
                          <div className="flex gap-3 overflow-x-auto hide-scroll pb-2 -mx-edge_margin px-edge_margin">
                              
                              {[14, 15, 16, 17].map((day, idx) => {
                                  const labels = ["Hoy", "Mar", "Mié", "Jue"];
                                  const isActive = activeDate === day;
                                  return (
                                      <button key={day} onClick={() => setActiveDate(day)} className={`date-btn flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl border shadow-sm tap-scale transition-colors ${isActive ? 'date-active' : 'date-inactive'}`}>
                                          <span className="font-label-md text-[12px] uppercase opacity-80 mb-1">{labels[idx]}</span>
                                          <span className="font-title-lg text-[22px] font-bold">{day}</span>
                                      </button>
                                  )
                              })}

                              <button className="date-btn date-inactive flex-shrink-0 flex flex-col items-center justify-center w-[4rem] h-20 rounded-2xl border border-dashed border-outline-variant/60 shadow-sm tap-scale transition-colors bg-surface-container-lowest" onClick={() => showToast("Calendario completo próximamente")}>
                                  <span className="material-symbols-outlined text-on-surface-variant">calendar_add_on</span>
                              </button>

                          </div>
                      </section>

                      {/*<!-- 2. Hora -->*/}
                      <section className="mb-8">
                          <h3 className="font-title-md text-[16px] font-bold text-on-surface mb-3 flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[20px]">schedule</span> Hora
                          </h3>
                          
                          <p className="font-label-md text-[12px] text-on-surface-variant mb-2 font-bold uppercase tracking-widest">Comida</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                              {['13:30', '14:00', '14:30', '15:00'].map(time => (
                                  <button key={time} onClick={() => setActiveTime(time)} className={`time-btn px-4 py-2.5 rounded-xl font-label-md font-bold text-[14px] border transition-colors tap-scale shadow-sm ${activeTime === time ? 'time-active' : 'time-inactive'}`}>{time}</button>
                              ))}
                          </div>

                          <p className="font-label-md text-[12px] text-on-surface-variant mb-2 font-bold uppercase tracking-widest mt-2">Cena</p>
                          <div className="flex flex-wrap gap-2">
                              {['19:00', '19:30', '20:00', '20:30'].map(time => {
                                  if (time === '20:00') {
                                      return <button key={time} className="time-btn time-inactive px-4 py-2.5 rounded-xl font-label-md font-bold text-[14px] border transition-colors shadow-sm opacity-50 cursor-not-allowed">{time}</button>
                                  }
                                  return (
                                      <button key={time} onClick={() => setActiveTime(time)} className={`time-btn px-4 py-2.5 rounded-xl font-label-md font-bold text-[14px] border transition-colors tap-scale shadow-sm ${activeTime === time ? 'time-active' : 'time-inactive'}`}>{time}</button>
                                  )
                              })}
                          </div>
                      </section>

                      {/*<!-- 3. Tamaño del Grupo -->*/}
                      <section className="mb-8">
                          <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30 shadow-sm">
                              <div>
                                  <h3 className="font-title-md text-[16px] font-bold text-on-surface flex items-center gap-2">
                                      <span className="material-symbols-outlined text-primary text-[20px]">group</span> Personas
                                  </h3>
                              </div>
                              <div className="flex items-center gap-4 bg-surface-container rounded-full p-1 border border-outline-variant/20">
                                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface-variant shadow-sm tap-scale" onClick={() => setPeople(Math.max(1, people - 1))}>
                                      <span className="material-symbols-outlined text-[18px]">remove</span>
                                  </button>
                                  <span id="p-count" className="font-title-md font-bold text-[16px] w-4 text-center">{people}</span>
                                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm tap-scale" onClick={() => setPeople(people + 1)}>
                                      <span className="material-symbols-outlined text-[18px]">add</span>
                                  </button>
                              </div>
                          </div>
                      </section>

                  </main>

                  {/*<!-- Bottom Fixed Action for Form -->*/}
                  <div id="bottom-action" className="absolute bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 px-edge_margin py-4 z-50">
                      <button id="btn-confirm" onClick={handleConfirm} className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors flex items-center justify-center gap-2">
                          <span>Confirmar Reserva</span>
                          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                      </button>
                  </div>
              </>
          ) : (
              <main id="success-view" className="flex-grow flex flex-col items-center justify-center px-edge_margin pt-20 pb-10 h-full mt-24">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
                          <span className="material-symbols-outlined text-[36px]">check</span>
                      </div>
                  </div>
                  <h1 className="font-title-lg text-[28px] font-bold text-on-surface text-center mb-2">¡Reserva Confirmada!</h1>
                  <p className="font-body-md text-[15px] text-on-surface-variant text-center mb-8">Te esperamos el <strong>Día {activeDate}</strong> a las <strong>{activeTime} hrs</strong> para {people} personas en <strong>{restaurant.nombre}</strong>.</p>
                  
                  <div className="w-full flex flex-col gap-3">
                      <button className="w-full bg-surface-container-high text-on-surface py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm flex items-center justify-center gap-2 tap-scale hover:bg-surface-variant transition-colors border border-outline-variant/20" onClick={() => showToast("Añadido a tu calendario")}>
                          <span className="material-symbols-outlined text-[20px]">calendar_add_on</span> Añadir al Calendario
                      </button>
                      <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md font-bold text-[16px] shadow-sm tap-scale hover:bg-[#8f2b00] transition-colors" onClick={() => navigate('/index')}>
                          Volver a Inicio
                      </button>
                  </div>
              </main>
          )}

      </div>
    </>
  );
}
