import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Helper to determine if tab is active
  const isActive = (tabPath) => path.includes(tabPath.toLowerCase());

  return (
    <nav id="main-bottom-nav" className="flex-none h-[80px] w-full z-50 bg-surface-container flex justify-around items-center px-2 pb-2 pt-2 border-t border-surface-variant">
        <Link to="/Descubrir_CDMX" className="nav-btn flex flex-col items-center justify-center w-[80px] group relative active:scale-95 transition-transform">
            <div className={`icon-container w-16 h-8 rounded-full flex items-center justify-center mb-1 transition-all ${isActive('descubrir') ? 'bg-secondary-container' : 'hover:bg-surface-variant'}`}>
                <span className={`material-symbols-outlined ${isActive('descubrir') ? 'text-on-secondary-container fill' : 'text-on-surface-variant'}`}>style</span>
            </div>
            <span className={`font-label-md text-[12px] font-medium leading-none ${isActive('descubrir') ? 'text-on-surface' : 'text-on-surface-variant'}`}>Descubrir</span>
        </Link>
        
        <Link to="/Explorar_Mapa" className="nav-btn flex flex-col items-center justify-center w-[80px] group relative active:scale-95 transition-transform">
            <div className={`icon-container w-16 h-8 rounded-full flex items-center justify-center mb-1 transition-all ${isActive('explorar') ? 'bg-secondary-container' : 'hover:bg-surface-variant'}`}>
                <span className={`material-symbols-outlined ${isActive('explorar') ? 'text-on-secondary-container fill' : 'text-on-surface-variant'}`}>explore</span>
            </div>
            <span className={`font-label-md text-[12px] font-medium leading-none ${isActive('explorar') ? 'text-on-surface' : 'text-on-surface-variant'}`}>Explorar</span>
        </Link>
        
        <Link to="/Matches_Guardados" className="nav-btn flex flex-col items-center justify-center w-[80px] group relative active:scale-95 transition-transform">
            <div className={`icon-container w-16 h-8 rounded-full flex items-center justify-center mb-1 transition-all ${isActive('matches') ? 'bg-secondary-container' : 'hover:bg-surface-variant'}`}>
                <span className={`material-symbols-outlined ${isActive('matches') ? 'text-on-secondary-container fill' : 'text-on-surface-variant'}`}>favorite</span>
            </div>
            <span className={`font-label-md text-[12px] font-medium leading-none ${isActive('matches') ? 'text-on-surface' : 'text-on-surface-variant'}`}>Matches</span>
        </Link>
        
        <Link to="/Perfil_Usuario" className="nav-btn flex flex-col items-center justify-center w-[80px] group relative active:scale-95 transition-transform">
            <div className={`icon-container w-16 h-8 rounded-full flex items-center justify-center mb-1 transition-all ${isActive('perfil') ? 'bg-secondary-container' : 'hover:bg-surface-variant'}`}>
                <span className={`material-symbols-outlined ${isActive('perfil') ? 'text-on-secondary-container fill' : 'text-on-surface-variant'}`}>person</span>
            </div>
            <span className={`font-label-md text-[12px] font-medium leading-none ${isActive('perfil') ? 'text-on-surface' : 'text-on-surface-variant'}`}>Perfil</span>
        </Link>
    </nav>
  );
}
