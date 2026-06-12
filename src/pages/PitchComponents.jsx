import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const RESTAURANTS = [
  { id: '1', name: 'Asador La Mansión', image: '/steak.png', type: 'Asador Argentino' },
  { id: '2', name: 'Burger Joint', image: '/burger.png', type: 'Hamburguesas' },
  { id: '3', name: 'El Tizoncito', image: '/tacos2.png', type: 'Taquería' },
];

export function HeroSwipeMockup() {
  return (
    <>
      <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden shadow-[#ab3500]/20 z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
          <img src="/Descubrir.png" className="w-full h-full object-cover" alt="App Preview" />
      </div>
      {/* Floating elements */}
      <div className="absolute top-1/4 -right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
          <span className="text-3xl">🔥</span>
          <div className="text-left">
              <p className="font-bold text-sm">Match Perfecto</p>
          </div>
      </div>
    </>
  );
}

export function FeatureSwipeDemo() {
  const [cards, setCards] = useState([
      { ...RESTAURANTS[0], renderId: 'r1' },
      { ...RESTAURANTS[1], renderId: 'r2' },
      { ...RESTAURANTS[2], renderId: 'r3' }
  ]);
  
  const handleDragEnd = (e, info) => {
    if (Math.abs(info.offset.x) > 100) {
      handleSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  const handleSwipe = (direction) => {
      // Tomamos la primera carta
      const activeCard = cards[0];
      
      // La animamos hacia afuera de forma manual mediante el DOM para evitar pelear con React en este micro-segundo
      const el = document.getElementById(`swipe-card-${activeCard.renderId}`);
      if (el) {
          const x = direction === 'right' ? window.innerWidth : -window.innerWidth;
          const rotate = direction === 'right' ? 30 : -30;
          el.style.transform = `translate(${x}px, -50px) rotate(${rotate}deg)`;
          el.style.opacity = '0';
      }
      
      // A los 300ms la removemos y la ponemos al final
      setTimeout(() => {
          setCards(prev => {
              const newArr = [...prev];
              const popped = newArr.shift();
              // Generamos un nuevo renderId para que React lo trate como un elemento nuevo al entrar por atrás
              popped.renderId = Math.random().toString(36).substring(7);
              newArr.push(popped);
              return newArr;
          });
      }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-[#ab3500] to-[#ff5964] p-1.5 rounded-[2.5rem] w-[290px] h-[550px] mx-auto lg:mx-0 shadow-2xl shadow-[#ab3500]/50 relative flex flex-col bg-white">
        
        <div className="hidden">
            {RESTAURANTS.map(r => <img key={r.id} src={r.image} alt="preload" />)}
        </div>

        <div className="absolute inset-1.5 bg-white rounded-[2.3rem] overflow-hidden flex flex-col">
            <div className="h-12 flex justify-between items-center px-4 pt-2">
                <span className="material-symbols-outlined text-gray-400">menu</span>
                <span className="font-bold text-[#ab3500]">Descubrir</span>
                <span className="material-symbols-outlined text-gray-400">tune</span>
            </div>
            
            <div className="flex-1 relative w-full p-3 overflow-hidden">
                {/* Renderizamos en reversa para que el index 0 quede arriba */}
                {[...cards].reverse().map((card, i) => {
                    const originalIndex = cards.length - 1 - i;
                    const isTop = originalIndex === 0;
                    const offset = originalIndex;

                    return (
                        <motion.div 
                            key={card.renderId}
                            id={`swipe-card-${card.renderId}`}
                            drag={isTop ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={isTop ? handleDragEnd : undefined}
                            className="absolute inset-3 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out bg-gray-200"
                            style={{ 
                                zIndex: 10 - offset,
                                transform: offset > 0 ? `scale(${1 - offset * 0.05}) translateY(${offset * 10}px)` : 'none'
                            }}
                        >
                            <img src={card.image} className="w-full h-full object-cover" alt="Food" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 pointer-events-none">
                                <h3 className="text-white font-bold text-xl drop-shadow-md">{card.name}</h3>
                                <p className="text-white/80 text-sm drop-shadow-md flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> A 1.2 km</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="h-16 flex justify-center items-center gap-6 pb-2 relative z-20">
                <button 
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-red-500 border border-gray-100 hover:bg-gray-50 transition-colors" 
                    onClick={() => handleSwipe('left')}
                >
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                <button 
                    className="w-12 h-12 rounded-full bg-[#ab3500] shadow-md flex items-center justify-center text-white hover:bg-[#8f2b00] transition-colors" 
                    onClick={() => handleSwipe('right')}
                >
                    <span className="material-symbols-outlined text-2xl fill">favorite</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export function FeatureStoryDemo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setCurrentIndex(c => (c + 1) % RESTAURANTS.length);
                        return 0;
                    }
                    return prev + 1; // 50ms * 100 = 5000ms duration
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    const handleNext = () => {
        setProgress(0);
        setCurrentIndex(c => (c + 1) % RESTAURANTS.length);
    };

    const currentStory = RESTAURANTS[currentIndex];

    return (
        <div className="bg-gray-900 p-1.5 rounded-[2.5rem] w-[280px] h-[550px] mx-auto lg:mx-0 shadow-2xl overflow-hidden relative cursor-pointer"
             onPointerDown={() => setIsPaused(true)}
             onPointerUp={() => setIsPaused(false)}
             onPointerLeave={() => setIsPaused(false)}
             onClick={handleNext}
        >
            <div className="absolute inset-1.5 rounded-[2.3rem] overflow-hidden bg-black">
                
                <AnimatePresence mode="popLayout">
                    <motion.img 
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        src={currentStory.image} 
                        className="absolute inset-0 w-full h-full object-cover" 
                        alt="Story" 
                    />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

                {/* Progress Bars */}
                <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
                    {RESTAURANTS.map((_, idx) => (
                        <div key={idx} className="h-1 bg-white/30 flex-1 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-white transition-none" 
                                style={{ width: idx < currentIndex ? '100%' : (idx === currentIndex ? `${progress}%` : '0%') }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-4 right-4 text-white z-10 pointer-events-none">
                    <h5 className="font-bold text-xl drop-shadow-md">{currentStory.name}</h5>
                    <p className="text-sm text-white/90 drop-shadow-md">{currentStory.type}</p>
                    <button className="mt-4 w-full bg-white/20 backdrop-blur-md text-white py-2.5 rounded-xl font-bold text-sm border border-white/30 flex justify-center items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">add_location</span>
                        Ver Restaurante
                    </button>
                </div>
            </div>
        </div>
    );
}

export function FeatureRouletteDemo() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);

    const newRotation = rotation + 1080 + Math.floor(Math.random() * 1080);
    setRotation(newRotation);

    setTimeout(() => {
        setIsSpinning(false);
        setResult(RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)].name);
    }, 3000);
  };

  return (
    <div className="relative flex items-center justify-center w-[300px] h-[300px] cursor-pointer group mx-auto" onClick={spin}>
        {/* The Spinning Wheel */}
        <div 
            className="absolute inset-0 rounded-full border-[10px] border-[#ab3500] shadow-[0_0_50px_rgba(171,53,0,0.5)] overflow-hidden" 
            style={{
                background: 'conic-gradient(#ffb59d 0deg 60deg, #ff6b35 60deg 120deg, #ffdad9 120deg 180deg, #ff5964 180deg 240deg, #ffdbd0 240deg 300deg, #b62135 300deg 360deg)',
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
        ></div>
        
        {/* The Indicator (Doesn't spin) */}
        <div className="absolute top-[-10px] w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-transparent border-t-white z-20 filter drop-shadow-md"></div>
        
        {/* The Center Button (Doesn't spin) */}
        <div className={`w-20 h-20 bg-white rounded-full z-20 flex items-center justify-center shadow-lg transition-transform ${isSpinning ? 'scale-95' : 'group-active:scale-95'}`}>
            <span className="material-symbols-outlined text-[#ab3500] text-4xl">casino</span>
        </div>
        
        {/* Result Message */}
        <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 transition-all duration-500 z-30 whitespace-nowrap ${result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <span className="inline-block bg-white text-[#ab3500] border-2 border-[#ffdbd0] px-5 py-2.5 rounded-full font-bold shadow-xl text-sm">
                🎉 Match Sorpresa: <span className="text-[#2d1610]">{result}</span>
            </span>
        </div>
    </div>
  );
}
