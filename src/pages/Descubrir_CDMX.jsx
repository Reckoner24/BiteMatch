import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import SideDrawer from '../components/SideDrawer';

import { MOCK_RESTAURANTS } from '../data/mockRestaurants';

let globalCardsState = [...MOCK_RESTAURANTS];

const SwipeableCard = ({ card, isFront, handleDragEnd, exitDirectionRef, navigate }) => {
    const x = useMotionValue(0);
    // Maps the x offset to an opacity from 0 to 1
    const likeOpacity = useTransform(x, [20, 100], [0, 1]);
    const nopeOpacity = useTransform(x, [-20, -100], [0, 1]);

    return (
        <motion.div 
            key={card.id}
            className="absolute inset-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl bg-white flex flex-col justify-end"
            style={{ 
                zIndex: isFront ? 10 : 0,
                x: isFront ? x : 0
            }}
            drag={isFront ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={isFront ? handleDragEnd : undefined}
            initial={false} // Prevent initial animation on mount
            animate={{
                scale: isFront ? 1 : 0.95,
                y: isFront ? 0 : 15,
                opacity: isFront ? 1 : 0.8,
                rotate: 0
            }}
            exit={() => ({
                x: exitDirectionRef.current === 'right' ? 400 : -400,
                opacity: 0,
                scale: 0.9,
                rotate: exitDirectionRef.current === 'right' ? 15 : -15
            })}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
            }}
            whileDrag={{
                cursor: "grabbing",
                scale: 1.02
            }}
        >
            <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={card.imagen} alt={card.nombre} />
            
            {/* NOPE Overlay */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none z-20"
                style={{ opacity: nopeOpacity }}
            >
                <div className="border-[6px] border-[#EF4444] rounded-full p-6 transform -rotate-12 bg-surface/20 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[#EF4444] text-[80px]">close</span>
                </div>
            </motion.div>

            {/* LIKE Overlay */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none z-20"
                style={{ opacity: likeOpacity }}
            >
                <div className="border-[6px] border-[#4ADE80] rounded-full p-6 transform rotate-12 bg-surface/20 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[#4ADE80] text-[80px] fill">favorite</span>
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full p-5 text-white flex flex-col gap-3 pt-12 z-30" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }}>
                <div className="flex justify-between items-end mb-1">
                    <div className="flex flex-col gap-2">
                        <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-md w-fit flex items-center gap-1 font-label-md text-[12px] shadow-sm">
                            <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                            {card.badge}
                        </span>
                        <h2 className="font-headline-lg-mobile text-[26px] font-bold leading-tight drop-shadow-md cursor-pointer hover:underline" onClick={() => navigate('?menu=' + card.id)}>{card.nombre}</h2>
                        <p className="font-body-md text-[15px] opacity-90 drop-shadow-sm font-medium">{card.tipo}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 mt-2 opacity-95 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => navigate('/Ubicacion_Restaurante')}>
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        <span className="text-[13px] font-medium">{card.distancia}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/90">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                        <span className="text-[13px] font-medium">Lugar disponible</span>
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                        <span className="text-[13px] font-bold">{card.rating}</span>
                        <span className="material-symbols-outlined text-[14px] text-yellow-400 fill">star</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Descubrir_CDMX() {
  const navigate = useNavigate();
  
  const [toastMessage, setToastMessage] = useState(null);
  const [cards, setCards] = useState(globalCardsState);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const exitDirectionRef = React.useRef('left');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const handleDragEnd = (e, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipeThreshold = 100;

    if (offset > swipeThreshold || velocity > 500) {
      exitDirectionRef.current = 'right';
      showToast("Match guardado!");
      removeCard();
    } else if (offset < -swipeThreshold || velocity < -500) {
      exitDirectionRef.current = 'left';
      removeCard();
    }
  };

  const removeCard = () => {
    setCards(prev => {
        const newArray = [...prev];
        newArray.shift(); // No longer push it back to the end
        globalCardsState = newArray;
        return newArray;
    });
  };

  const swipeProgrammatically = (direction) => {
    exitDirectionRef.current = direction;
    if (direction === 'right') showToast("Match guardado!");
    removeCard();
  };

  return (
    <>
      <div className="w-full h-full flex flex-col relative overflow-hidden">

        <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} showToast={showToast} />

        {toastMessage && (
            <div className="absolute top-20 left-0 right-0 flex justify-center z-[100] animate-fade-in-up">
                <div className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full shadow-lg font-medium border border-outline/10">
                    {toastMessage}
                </div>
            </div>
        )}

        <header className="flex-none h-[70px] z-50 bg-surface/80 backdrop-blur-md flex items-center justify-between px-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface tap-scale" onClick={() => setIsDrawerOpen(true)}>
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div onClick={() => navigate('/Seleccionar_Ubicacion')} className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full shadow-sm hover:bg-surface-container transition-colors active:scale-95 cursor-pointer border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px] fill">location_on</span>
                <span className="text-label-md text-on-surface font-semibold">Ciudad de México</span>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface relative tap-scale" onClick={() => navigate('/Buscador_Filtros')}>
                <span className="material-symbols-outlined">tune</span>
                <span className="filter-badge absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface hidden"></span>
            </button>
        </header>

        <main className="flex-1 min-h-0 flex flex-col relative px-4 pb-2 pt-2">
            
            <div className="flex-1 relative w-full rounded-[1.5rem]" id="card-stack">
                {cards.length === 0 && (
                    <motion.div 
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-surface-container-lowest rounded-[1.5rem] border-2 border-dashed border-outline-variant/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.y > 100 || info.velocity.y > 500) {
                                globalCardsState = [...MOCK_RESTAURANTS];
                                setCards(globalCardsState);
                                showToast("Lista actualizada");
                            }
                        }}
                    >
                        <div className="w-20 h-20 bg-surface-variant rounded-full flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-[36px] text-on-surface-variant">swipe_down</span>
                        </div>
                        <h3 className="font-headline-sm text-[22px] font-bold text-on-surface mb-2">No hay más restaurantes</h3>
                        <p className="text-on-surface-variant text-[15px] mb-6">Desliza hacia abajo para volver a cargar la lista de restaurantes.</p>
                        
                        <button 
                            className="bg-primary text-on-primary font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-md tap-scale hover:bg-[#8f2b00]"
                            onClick={() => {
                                globalCardsState = [...MOCK_RESTAURANTS];
                                setCards(globalCardsState);
                                showToast("Lista actualizada");
                            }}
                        >
                            <span className="material-symbols-outlined">refresh</span>
                            Volver a cargar
                        </button>
                    </motion.div>
                )}
                
                <AnimatePresence mode="popLayout">
                    {cards.slice(0, 2).reverse().map((card, index) => {
                        const isFront = index === 1;
                        return (
                            <SwipeableCard 
                                key={card.id} 
                                card={card} 
                                isFront={isFront} 
                                handleDragEnd={handleDragEnd} 
                                exitDirectionRef={exitDirectionRef}
                                navigate={navigate}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="flex-none h-[80px] flex gap-6 items-center justify-center w-full z-40 px-4 mt-4 mb-2">
                <button 
                  className={`w-14 h-14 rounded-2xl shadow-md flex items-center justify-center transition-colors active:scale-95 border ${cards.length === 0 ? 'bg-surface-variant text-on-surface-variant/50 border-outline/10 cursor-not-allowed' : 'bg-surface text-on-surface-variant hover:bg-surface-variant border-outline-variant/30'}`}
                  onClick={() => cards.length > 0 && swipeProgrammatically('left')}
                  disabled={cards.length === 0}
                >
                    <span className="material-symbols-outlined text-[28px]">close</span>
                </button>
                <button 
                  className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-colors active:scale-95 border ${cards.length === 0 ? 'bg-surface-variant text-on-surface-variant/50 border-outline/10 cursor-not-allowed' : 'bg-surface text-primary hover:bg-primary/10 border-outline-variant/30'}`} 
                  onClick={() => cards.length > 0 && navigate('?menu=' + cards[0].id)}
                  disabled={cards.length === 0}
                >
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                </button>
                <button 
                  className={`w-14 h-14 rounded-2xl shadow-md flex items-center justify-center transition-colors active:scale-95 ${cards.length === 0 ? 'bg-surface-variant text-on-surface-variant/50 cursor-not-allowed' : 'bg-primary text-on-primary hover:bg-[#8f2b00]'}`} 
                  onClick={() => cards.length > 0 && swipeProgrammatically('right')}
                  disabled={cards.length === 0}
                >
                    <span className="material-symbols-outlined text-[28px] fill">favorite</span>
                </button>
            </div>
        </main>
      </div>
    </>
  );
}
