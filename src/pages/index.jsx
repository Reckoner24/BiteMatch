import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <>
      

    <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container text-primary mb-4 shadow-sm">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '\'FILL\' 1' }}>restaurant</span>
            </div>
            <h1 className="text-4xl font-title font-bold text-primary tracking-tight mb-2">BiteMatch</h1>
            <p className="text-on-surface-variant text-lg">Prototipo Interactivo - Material Design 3</p>
        </div>

        {/* Links List */}
        <div className="bg-surface-container rounded-3xl p-4 shadow-sm space-y-3">
            <h2 className="px-4 py-2 font-title font-semibold text-on-surface-variant uppercase tracking-wider text-sm">Pantallas Disponibles</h2>
            
            <Link to="/Descubrir_CDMX" className="flex items-center p-4 bg-surface rounded-2xl hover:bg-surface-container-high transition-colors active:scale-[0.98] group shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mr-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">style</span>
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-lg">1. Descubrir CDMX</h3>
                    <p className="text-sm text-on-surface-variant">Pantalla principal de exploración (Home)</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
            </Link>

            <Link to="/Menu_Consistencia" className="flex items-center p-4 bg-surface rounded-2xl hover:bg-surface-container-high transition-colors active:scale-[0.98] group shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mr-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">restaurant_menu</span>
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-lg">2. Menú Consistencia</h3>
                    <p className="text-sm text-on-surface-variant">Vista detallada de platillos de un restaurante</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
            </Link>

            <Link to="/Seleccionar_Ubicacion" className="flex items-center p-4 bg-surface rounded-2xl hover:bg-surface-container-high transition-colors active:scale-[0.98] group shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mr-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>my_location</span>
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-lg">3. Seleccionar Ubicación</h3>
                    <p className="text-sm text-on-surface-variant">Búsqueda de ciudades o ubicaciones</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
            </Link>

            <Link to="/Ubicacion_Restaurante" className="flex items-center p-4 bg-surface rounded-2xl hover:bg-surface-container-high transition-colors active:scale-[0.98] group shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mr-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>map</span>
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-lg">4. Ubicación Restaurante</h3>
                    <p className="text-sm text-on-surface-variant">Mapa flotante interactivo y detalles</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
            </Link>

            <Link to="/Perfil_Usuario" className="flex items-center p-4 bg-surface rounded-2xl hover:bg-surface-container-high transition-colors active:scale-[0.98] group shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mr-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>person</span>
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-lg">5. Perfil Usuario</h3>
                    <p className="text-sm text-on-surface-variant">Configuraciones y cuenta de usuario</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
            </Link>

        </div>

        <div className="mt-8 text-center text-sm text-on-surface-variant">
            Abre cualquiera de estos enlaces para previsualizar el diseño actual basado en MD3.
        </div>
    </div>


    </>
  );
}
