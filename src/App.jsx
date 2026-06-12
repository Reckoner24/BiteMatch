import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import BottomNav from './components/BottomNav';

// Global Image Preloader
const preloadImages = () => {
  if (typeof window !== 'undefined') {
    const imagesToPreload = [
      "assets/images/food1.jpg",
      "assets/images/food2.jpg",
      "assets/images/food3.jpg",
      "assets/images/food4.jpg",
      "assets/images/food5.jpg",
      "assets/images/food6.jpg",
      "assets/images/food7.jpg",
      "assets/images/interior1.jpg",
      "assets/images/interior2.jpg",
      "assets/images/profile1.jpg"
    ];
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
};
preloadImages();


import Buscador_Filtros from './pages/Buscador_Filtros';
import Colecciones from './pages/Colecciones';
import Comunidad_Resenas from './pages/Comunidad_Resenas';
import Dejar_Resena from './pages/Dejar_Resena';
import Descubrir_CDMX from './pages/Descubrir_CDMX';
import Explorar_Mapa from './pages/Explorar_Mapa';
import index from './pages/index';
import Login from './pages/Login';
import Matches_Guardados from './pages/Matches_Guardados';
import Menu_Consistencia from './pages/Menu_Consistencia';
import Menu_Interactivo from './pages/Menu_Interactivo';
import Notificaciones from './pages/Notificaciones';
import Onboarding from './pages/Onboarding';
import Perfil_Usuario from './pages/Perfil_Usuario';
import Pitch_BiteMatch from './pages/Pitch_BiteMatch';
import Preferencias_Setup from './pages/Preferencias_Setup';
import Reservacion_Flow from './pages/Reservacion_Flow';
import Restaurante_Inmersivo from './pages/Restaurante_Inmersivo';
import Ruleta_Aleatoria from './pages/Ruleta_Aleatoria';
import Seleccionar_Ubicacion from './pages/Seleccionar_Ubicacion';
import Splash from './pages/Splash';
import Ubicacion_Restaurante from './pages/Ubicacion_Restaurante';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-surface">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/Buscador_Filtros" element={<PageTransition><Buscador_Filtros /></PageTransition>} />
          <Route path="/Colecciones" element={<PageTransition><Colecciones /></PageTransition>} />
          <Route path="/Comunidad_Resenas" element={<PageTransition><Comunidad_Resenas /></PageTransition>} />
          <Route path="/Dejar_Resena" element={<PageTransition><Dejar_Resena /></PageTransition>} />
          <Route path="/Descubrir_CDMX" element={<PageTransition><Descubrir_CDMX /></PageTransition>} />
          <Route path="/Explorar_Mapa" element={<PageTransition><Explorar_Mapa /></PageTransition>} />
          <Route path="/index" element={<PageTransition><index /></PageTransition>} />
          <Route path="/Login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/Matches_Guardados" element={<PageTransition><Matches_Guardados /></PageTransition>} />
          <Route path="/Menu_Consistencia/:id" element={<PageTransition><Menu_Consistencia /></PageTransition>} />
          <Route path="/Menu_Consistencia" element={<PageTransition><Menu_Consistencia /></PageTransition>} />
          <Route path="/Menu_Interactivo" element={<PageTransition><Menu_Interactivo /></PageTransition>} />
          <Route path="/Notificaciones" element={<PageTransition><Notificaciones /></PageTransition>} />
          <Route path="/Onboarding" element={<PageTransition><Onboarding /></PageTransition>} />
          <Route path="/Perfil_Usuario" element={<PageTransition><Perfil_Usuario /></PageTransition>} />
          <Route path="/Preferencias_Setup" element={<PageTransition><Preferencias_Setup /></PageTransition>} />
          <Route path="/Reservacion_Flow" element={<PageTransition><Reservacion_Flow /></PageTransition>} />
          <Route path="/Restaurante_Inmersivo" element={<PageTransition><Restaurante_Inmersivo /></PageTransition>} />
          <Route path="/Ruleta_Aleatoria" element={<PageTransition><Ruleta_Aleatoria /></PageTransition>} />
          <Route path="/Seleccionar_Ubicacion" element={<PageTransition><Seleccionar_Ubicacion /></PageTransition>} />
          <Route path="/Splash" element={<PageTransition><Splash /></PageTransition>} />
          <Route path="/Ubicacion_Restaurante" element={<PageTransition><Ubicacion_Restaurante /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.toLowerCase();
  
  // Menu Overlay Logic
  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get('menu');

  const closeMenuOverlay = () => {
      // Remove query param without pushing new history entry (or push depending on UX)
      navigate(location.pathname, { replace: true });
  };
  
  // Hide bottom nav on specific screens like Splash, Login, Onboarding
  const hideBottomNavPaths = ['/splash', '/login', '/onboarding', '/pitch_bitematch', '/', '/index'];
  const shouldShowBottomNav = !hideBottomNavPaths.some(p => path === p);

  return (
    <div className="max-w-[430px] w-full mx-auto bg-surface relative overflow-hidden shadow-2xl flex flex-col" style={{ height: "100dvh", maxHeight: "100%" }}>
      {/* Route Content Area */}
      <div className="flex-grow flex relative overflow-hidden">
        <AnimatedRoutes />
      </div>
      
      {/* Persistent Bottom Navigation */}
      {shouldShowBottomNav && <BottomNav />}

      {/* Global Overlays */}
      <AnimatePresence>
          {menuId && (
              <Menu_Consistencia id={menuId} onClose={closeMenuOverlay} />
          )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <div className="font-['Plus_Jakarta_Sans'] text-[#594139] bg-[#f3f3f3] min-h-screen relative overflow-hidden flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pitch_BiteMatch />} />
          <Route path="/*" element={<AppShell />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
