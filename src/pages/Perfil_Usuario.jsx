import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Perfil_Usuario() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Unified Top App Bar -->*/}
          <header className="flex-none z-50 bg-surface/80 backdrop-blur-md">
              <div className="flex items-center justify-between px-edge_margin py-sm">
                  <button className="back-btn w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  
                  <h1 className="font-title-md text-[18px] text-on-surface font-bold">Mi Perfil</h1>
                  
                  <button onClick={() => navigate('/Notificaciones')} className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale relative">
                      <span className="material-symbols-outlined">notifications</span>
                      <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface"></div>
                  </button>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-1 min-h-0 relative overflow-y-auto px-edge_margin pt-4 pb-28">
              
              {/*<!-- Profile Header Section -->*/}
              <section className="flex flex-col items-center mb-8">
                  <div className="relative group tap-scale cursor-pointer" data-toast="Actualizar foto de perfil">
                      <div className="w-28 h-28 rounded-full p-1 bg-surface-container shadow-sm border border-outline-variant/30 flex items-center justify-center">
                          <img loading="lazy" alt="Alex Chen Profile" className="w-full h-full rounded-full object-cover" src="assets/images/profile1.jpg" />
                      </div>
                      <div className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-md">
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                      </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                      <h2 className="font-title-md text-[24px] font-bold text-on-surface leading-tight">Alex Chen</h2>
                      <div className="flex items-center justify-center gap-1 mt-1">
                          <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-md text-[12px] flex items-center gap-1 border border-primary/10">
                              <span className="material-symbols-outlined text-[14px] fill">verified</span>
                              Foodie Experto
                          </span>
                      </div>
                  </div>
              </section>

              {/*<!-- Profile Sections -->*/}
              <div className="space-y-6">
                  
                  {/*<!-- Section: Personal Information -->*/}
                  <div>
                      <h3 className="font-label-md text-[13px] text-primary mb-2 uppercase tracking-widest px-1 font-bold">Información Personal</h3>
                      <div className="bg-surface-container-lowest rounded-xl overflow-hidden divide-y divide-outline-variant/10 border border-outline-variant/20 shadow-sm">
                          <div data-toast="Editar perfil" className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer tap-scale">
                              <div className="flex items-center gap-4">
                                  <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
                                  <span className="font-label-md text-[15px] text-on-surface">Editar Perfil</span>
                              </div>
                              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                          </div>
                          <div data-toast="Cambiar correo" className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer tap-scale">
                              <div className="flex items-center gap-4">
                                  <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                                  <div className="flex flex-col">
                                      <span className="font-label-md text-[15px] text-on-surface">Correo Electrónico</span>
                                      <span className="text-[12px] text-on-surface-variant font-body-md mt-0.5">alex.chen@bitematch.com</span>
                                  </div>
                              </div>
                              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                          </div>
                      </div>
                  </div>

                  {/*<!-- Section: Preferences -->*/}
                  <div>
                      <h3 className="font-label-md text-[13px] text-primary mb-2 uppercase tracking-widest px-1 font-bold">Preferencias</h3>
                      <div className="bg-surface-container-lowest rounded-xl overflow-hidden divide-y divide-outline-variant/10 border border-outline-variant/20 shadow-sm">
                          <div data-toast="Configurar restricciones" className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer tap-scale">
                              <div className="flex items-center gap-4">
                                  <span className="material-symbols-outlined text-primary text-[20px]">no_meals</span>
                                  <div className="flex flex-col">
                                      <span className="font-label-md text-[15px] text-on-surface">Restricciones</span>
                                      <div className="flex gap-2 mt-1">
                                          <span className="px-2 py-0.5 bg-surface-variant text-[10px] rounded uppercase font-bold text-on-surface-variant">Vegano</span>
                                      </div>
                                  </div>
                              </div>
                              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                          </div>
                          <div data-toast="Cambiar gustos" className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer tap-scale">
                              <div className="flex items-center gap-4">
                                  <span className="material-symbols-outlined text-primary text-[20px]">restaurant_menu</span>
                                  <div className="flex flex-col">
                                      <span className="font-label-md text-[15px] text-on-surface">Cocinas Favoritas</span>
                                      <span className="text-[12px] text-on-surface-variant font-body-md mt-0.5">Mexicana, Japonesa</span>
                                  </div>
                              </div>
                              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                          </div>
                      </div>
                  </div>

                  {/*<!-- Section: Support & Settings -->*/}
                  <div>
                      <h3 className="font-label-md text-[13px] text-primary mb-2 uppercase tracking-widest px-1 font-bold">Cuenta y Soporte</h3>
                      <div className="bg-surface-container-lowest rounded-xl overflow-hidden divide-y divide-outline-variant/10 border border-outline-variant/20 shadow-sm">
                          <div data-toast="Ajustes generales" className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer tap-scale">
                              <div className="flex items-center gap-4">
                                  <span className="material-symbols-outlined text-primary text-[20px]">settings</span>
                                  <span className="font-label-md text-[15px] text-on-surface">Ajustes</span>
                              </div>
                              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                          </div>
                          <div data-toast="Abriendo centro de ayuda" className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer tap-scale">
                              <div className="flex items-center gap-4">
                                  <span className="material-symbols-outlined text-primary text-[20px]">help</span>
                                  <span className="font-label-md text-[15px] text-on-surface">Centro de Ayuda</span>
                              </div>
                              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                          </div>
                      </div>
                  </div>

                  {/*<!-- Logout Button -->*/}
                  <button onClick={() => navigate('/Login')} className="w-full flex items-center justify-center gap-2 py-3.5 mt-4 rounded-xl border border-secondary text-secondary font-bold hover:bg-secondary/5 tap-scale transition-colors shadow-sm bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Cerrar Sesión
                  </button>

                  {/*<!-- Footer Meta -->*/}
                  <div className="text-center mt-6">
                      <p className="text-on-surface-variant text-[12px] opacity-60">BiteMatch Versión 2.0.0</p>
                  </div>

              </div>
          </main>
      </div>
    </>
  );
}
