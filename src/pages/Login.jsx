import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

          {/*<!-- Top AppBar -->*/}
          <header className="absolute top-0 left-0 right-0 z-50">
              <div className="flex items-center px-edge_margin py-4">
                  <button className="back-btn w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant tap-scale" onClick={() => navigate(-1)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                  </button>
              </div>
          </header>

          {/*<!-- Main Content Canvas -->*/}
          <main className="flex-grow flex flex-col px-edge_margin pt-20 pb-10">
              
              <div className="flex-grow flex flex-col justify-center">
                  <h1 className="font-title-md text-[32px] font-bold text-on-surface leading-tight mb-2">Bienvenido a BiteMatch</h1>
                  <p className="font-body-md text-[15px] text-on-surface-variant mb-10">Inicia sesión o crea una cuenta para guardar tus restaurantes favoritos.</p>

                  <div className="flex flex-col gap-4">
                      {/*<!-- Google Button -->*/}
                      <button className="w-full bg-surface-container-lowest text-on-surface py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm flex items-center justify-center gap-3 tap-scale border border-outline-variant/30 hover:bg-surface-container transition-colors" onClick={() => navigate('/Preferencias_Setup')}>
                          {/*<!-- Google SVG Icon -->*/}
                          <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                          Continuar con Google
                      </button>

                      {/*<!-- Apple Button -->*/}
                      <button className="w-full bg-[#000000] text-white py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm flex items-center justify-center gap-3 tap-scale hover:bg-black/80 transition-colors" onClick={() => navigate('/Preferencias_Setup')}>
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78.78-.04 1.82-.8 3.25-.66 1.06.05 1.98.45 2.65 1.25-2.24 1.46-1.89 4.19.4 5.37-.62 1.6-1.4 3.22-2.7 4.54l1.32 1.69zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                          </svg>
                          Continuar con Apple
                      </button>

                      <div className="relative flex py-5 items-center">
                          <div className="flex-grow border-t border-outline-variant/30"></div>
                          <span className="flex-shrink-0 mx-4 text-on-surface-variant text-[12px] font-medium">o</span>
                          <div className="flex-grow border-t border-outline-variant/30"></div>
                      </div>

                      {/*<!-- Email Button -->*/}
                      <button onClick={() => navigate('/Preferencias_Setup')} className="w-full bg-surface-container text-on-surface py-4 rounded-full font-label-md font-bold text-[15px] shadow-sm flex items-center justify-center gap-3 tap-scale border border-outline-variant/20 hover:bg-surface-variant transition-colors" data-toast="Redirigiendo a registro con correo...">
                          <span className="material-symbols-outlined text-[20px]">mail</span>
                          Continuar con Correo
                      </button>
                  </div>
                  
                  <p className="text-center text-[12px] text-on-surface-variant mt-10 px-4">
                      Al continuar, aceptas nuestros <a href="#" className="text-primary font-bold underline">Términos de Servicio</a> y <a href="#" className="text-primary font-bold underline">Política de Privacidad</a>.
                  </p>
              </div>
          </main>

      </div>
    </>
  );
}
