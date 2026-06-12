import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSwipeMockup, FeatureSwipeDemo, FeatureStoryDemo, FeatureRouletteDemo } from './PitchComponents';

export default function Pitch_BiteMatch() {
  return (
    <div className="w-full min-h-screen bg-[#fbf8f7] flex flex-col">
      

    {/* Navbar */}
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#e1bfb5]/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ab3500] text-3xl">restaurant</span>
                <span className="font-montserrat font-bold text-2xl tracking-tight text-[#ab3500]">BiteMatch</span>
            </div>
            <Link to="/Descubrir_CDMX" className="bg-[#ab3500] text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-full font-bold text-sm lg:text-base hover:bg-[#8f2b00] transition-colors shadow-lg shadow-[#ab3500]/30 flex items-center gap-1 lg:gap-2">
                <span className="hidden sm:inline">Probar Prototipo</span>
                <span className="sm:hidden">Probar</span>
                <span className="material-symbols-outlined text-[16px] lg:text-[18px]">arrow_forward</span>
            </Link>
        </div>
    </nav>

    {/* Hero Section */}
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Background elements */}
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#ffdbd0] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ffb59d] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Copy */}
            <div className="lg:w-1/2 text-center lg:text-left reveal active">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffdbd0]/50 text-[#ab3500] font-bold text-sm mb-6 border border-[#ab3500]/20">
                    <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                    El futuro del descubrimiento gastronómico
                </div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-[#2d1610]">
                    Menos buscar,<br />
                    <span className="text-[#ab3500]">más disfrutar.</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#594139] mb-8 leading-relaxed">
                    Eliminamos la fatiga de decisión. BiteMatch es la app "Visual-First" que transforma la eterna pregunta de <em>"¿Qué comemos hoy?"</em> en una experiencia rápida, intuitiva y divertida.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <a href="#solucion" className="bg-[#2d1610] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors">
                        Conócenos
                    </a>
                </div>
            </div>
            
            {/* Mockup */}
            <div className="lg:w-1/2 flex justify-center relative reveal active">
                <HeroSwipeMockup />
            </div>
        </div>
    </header>

    {/* El Problema */}
    <section className="py-24 bg-white" id="problema">
        <div className="max-w-4xl mx-auto px-6 text-center reveal active">
            <h2 className="text-[#ab3500] font-bold tracking-widest uppercase text-sm mb-2">El Problema</h2>
            <h3 className="text-3xl lg:text-5xl font-black mb-8 text-[#2d1610]">La Parálisis por Análisis</h3>
            <p className="text-xl leading-relaxed text-[#594139] mb-12">
                Los usuarios se pierden en listas interminables de texto, reseñas abrumadoras y discusiones eternas con sus parejas sobre dónde ir a comer. <strong>Buscar un restaurante se ha vuelto un trabajo aburrido.</strong>
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#fbf8f7] p-8 rounded-3xl border border-[#e1bfb5]/30">
                    <span className="material-symbols-outlined text-5xl text-[#ab3500] mb-4">article</span>
                    <h4 className="font-bold text-xl mb-2">Mucho Texto</h4>
                    <p className="text-sm">Las apps actuales se basan en listados de texto y reviews aburridas.</p>
                </div>
                <div className="bg-[#fbf8f7] p-8 rounded-3xl border border-[#e1bfb5]/30">
                    <span className="material-symbols-outlined text-5xl text-[#ab3500] mb-4">forum</span>
                    <h4 className="font-bold text-xl mb-2">Discusiones</h4>
                    <p className="text-sm">El eterno "¿Tú qué quieres? No sé, lo que sea" que no llega a nada.</p>
                </div>
                <div className="bg-[#fbf8f7] p-8 rounded-3xl border border-[#e1bfb5]/30">
                    <span className="material-symbols-outlined text-5xl text-[#ab3500] mb-4">hourglass_bottom</span>
                    <h4 className="font-bold text-xl mb-2">Tiempo Perdido</h4>
                    <p className="text-sm">Inviertes más tiempo buscando dónde comer que disfrutando la comida.</p>
                </div>
            </div>
        </div>
    </section>

    {/* La Solucion (Features Infographic) */}
    <section className="py-24 bg-[#2d1610] text-white overflow-hidden" id="solucion">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20 reveal active">
                <h2 className="text-[#ffb59d] font-bold tracking-widest uppercase text-sm mb-2">La Solución BiteMatch</h2>
                <h3 className="text-4xl lg:text-5xl font-black mb-6">Elige con la vista,<br />disfruta con el alma.</h3>
            </div>

            {/* Feature 1: Swipe */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-24 reveal active">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <FeatureSwipeDemo />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <span className="material-symbols-outlined text-5xl text-[#ffb59d] mb-4">swipe</span>
                    <h4 className="text-3xl font-bold mb-4">Interacción Visual "Tinder-Style"</h4>
                    <p className="text-gray-300 text-lg mb-6">
                        Adiós a las listas. Te presentamos los platillos más icónicos en pantalla completa. ¿Te antoja? Desliza a la derecha. ¿Pasas? Desliza a la izquierda. 
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffb59d]">check_circle</span> 100% Visual-First</li>
                        <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffb59d]">check_circle</span> Decisiones instintivas en segundos</li>
                    </ul>
                </div>
            </div>

            {/* Feature 2: Inmersive / Realtime */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-24 reveal active">
                <div className="lg:w-1/2">
                    <span className="material-symbols-outlined text-5xl text-[#ffb59d] mb-4">play_circle</span>
                    <h4 className="text-3xl font-bold mb-4">Experiencia Inmersiva & Tiempo Real</h4>
                    <p className="text-gray-300 text-lg mb-6">
                        Integramos vistas tipo <em>"Stories" o "TikTok"</em> para que sientas la vibra del lugar. <strong>Para los restaurantes, esto es oro:</strong> les permite promocionar fácilmente sus platillos estrella con contenido dinámico. Además, indicadores térmicos te dicen si hay mesa disponible en este instante.
                    </p>
                    <div className="flex gap-2 flex-wrap mt-4">
                        <span className="bg-green-500/20 text-green-300 px-3 py-1.5 rounded-md flex items-center gap-2 border border-green-400/30 font-bold text-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Lugar Disponible
                        </span>
                        <span className="bg-white/10 text-white px-3 py-1.5 rounded-md flex items-center gap-2 font-bold text-sm">
                            <span className="material-symbols-outlined text-[18px]">wine_bar</span> Romántico
                        </span>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <FeatureStoryDemo />
                </div>
            </div>

            {/* Feature 3: Gamification */}
            <div className="flex flex-col lg:flex-row items-center gap-12 reveal active">
                <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start">
                    <FeatureRouletteDemo />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <span className="material-symbols-outlined text-5xl text-[#ffb59d] mb-4">videogame_asset</span>
                    <h4 className="text-3xl font-bold mb-4">Gamificación: Ruleta de Matches</h4>
                    <p className="text-gray-300 text-lg mb-6">
                        ¿Hicieron Match en varios lugares pero siguen sin decidirse? Entra a la **Ruleta de la Suerte** y deja que el destino decida tu próxima parada culinaria.
                    </p>
                </div>
            </div>

        </div>
    </section>

    {/* Publico Objetivo */}
    <section className="py-24 bg-[#fbf8f7]">
        <div className="max-w-6xl mx-auto px-6 text-center reveal active">
            <h2 className="text-4xl font-black text-[#2d1610] mb-16">¿Para quién es BiteMatch?</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1bfb5]/50">
                    <span className="material-symbols-outlined text-4xl block mb-4 text-[#ab3500]">diversity_1</span>
                    <h4 className="font-bold mb-2">La pareja indecisa</h4>
                    <p className="text-sm text-gray-600">Ambos deslizan en sus teléfonos hasta que haya un match perfecto.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1bfb5]/50">
                    <span className="material-symbols-outlined text-4xl block mb-4 text-[#ab3500]">explore</span>
                    <h4 className="font-bold mb-2">El viajero</h4>
                    <p className="text-sm text-gray-600">Guía instantánea para encontrar la mejor comida local rápido.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1bfb5]/50">
                    <span className="material-symbols-outlined text-4xl block mb-4 text-[#ab3500]">bolt</span>
                    <h4 className="font-bold mb-2">El antojo rápido</h4>
                    <p className="text-sm text-gray-600">Busca por distancia y estado de ánimo (mood).</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1bfb5]/50">
                    <span className="material-symbols-outlined text-4xl block mb-4 text-[#ab3500]">travel_explore</span>
                    <h4 className="font-bold mb-2">El aventurero</h4>
                    <p className="text-sm text-gray-600">Descubre joyas ocultas regionales lejos del turismo masivo.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="py-32 relative overflow-hidden bg-[#ab3500] text-center text-white">
        <div className="absolute inset-0 bg-[url('/assets/images/food1.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 reveal active">
            <h2 className="text-5xl font-black mb-6">El Match Perfecto con tu Antojo.</h2>
            <p className="text-xl mb-10 text-white/90">El prototipo 100% funcional ya está listo. Navega por las pantallas, interactúa con el menú, la ruleta y las tarjetas de descubrir.</p>
            <Link to="/Descubrir_CDMX" className="inline-flex items-center gap-3 bg-white text-[#ab3500] px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-2xl">
                <span className="material-symbols-outlined text-[28px]">smartphone</span>
                Interactuar con el Prototipo
            </Link>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-[#2d1610] py-8 text-center text-gray-400">
        <p className="font-bold font-montserrat flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-xl">restaurant</span> BiteMatch 2026
        </p>
        <p className="text-sm mt-2">Menos buscar, más disfrutar.</p>
    </footer>

    </div>
  );
}
