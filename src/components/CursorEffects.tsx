import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Bee {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  delay: number;
}

export function CursorEffects() {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [bees, setBees] = useState<Bee[]>([]);
  const [showBird, setShowBird] = useState(true);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Clear existing timer
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // Remove bees when moving
      setBees([]);

      // Set new timer for bees to appear from random corners
      idleTimerRef.current = setTimeout(() => {
        const newBees: Bee[] = [];
        const corners = [
          { x: 0, y: 0 }, // top-left
          { x: window.innerWidth, y: 0 }, // top-right
          { x: 0, y: window.innerHeight }, // bottom-left
          { x: window.innerWidth, y: window.innerHeight }, // bottom-right
        ];

        for (let i = 0; i < 4; i++) {
          const randomCorner = corners[Math.floor(Math.random() * corners.length)];
          newBees.push({
            id: i,
            startX: randomCorner.x,
            startY: randomCorner.y,
            targetX: e.clientX,
            targetY: e.clientY,
            delay: i * 0.3,
          });
        }
        setBees(newBees);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  // Calculate bird rotation to look at cursor
  const birdX = window.innerWidth - 120;
  const birdY = 100;
  const angle = Math.atan2(mousePos.y - birdY, mousePos.x - birdX);
  const headRotation = (angle * 180) / Math.PI;

  return (
    <>
      {/* Bird at top right corner */}
      <AnimatePresence>
        {showBird && (
          <motion.div
            initial={{ x: 200, y: -100 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: 200, y: -100 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
            className="fixed right-0 top-20 z-50 pointer-events-none"
          >
            <div className="relative">
              {/* Bird body */}
              <div className="w-24 h-28 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full relative shadow-2xl">
                {/* Wing */}
                <motion.div
                  animate={{ rotate: [0, -15, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-2 top-10 w-12 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full origin-top-right shadow-lg"
                  style={{ transform: 'rotate(30deg)' }}
                />

                {/* Head that follows cursor */}
                <motion.div
                  animate={{ rotate: headRotation }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  className="absolute -left-6 top-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full origin-right shadow-xl"
                >
                  {/* Beak */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[16px] border-r-orange-600 border-b-[8px] border-b-transparent" />

                  {/* Eye */}
                  <div className="absolute left-4 top-5 w-4 h-4 bg-white rounded-full shadow-inner">
                    <motion.div
                      animate={{
                        x: Math.cos(angle) * 2,
                        y: Math.sin(angle) * 2,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"
                    />
                  </div>

                  {/* Eyebrow for expression */}
                  <motion.div
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-3 top-3 w-6 h-1 bg-orange-600 rounded-full"
                    style={{ transform: 'rotate(-20deg)' }}
                  />
                </motion.div>

                {/* Tail feathers */}
                <div className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2">
                  <div className="w-10 h-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full" />
                  <div className="w-10 h-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mt-1" />
                  <div className="w-10 h-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mt-1" />
                </div>

                {/* Belly spot */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-yellow-300 to-orange-300 rounded-full opacity-60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Realistic Bees flying from corners */}
      <AnimatePresence>
        {bees.map((bee) => {
          // Calculate flight path with bezier curve for natural movement
          const midX = (bee.startX + mousePos.x) / 2 + (Math.random() - 0.5) * 200;
          const midY = (bee.startY + mousePos.y) / 2 + (Math.random() - 0.5) * 200;

          return (
            <motion.div
              key={bee.id}
              initial={{ 
                x: bee.startX, 
                y: bee.startY,
                scale: 0,
                rotate: 0
              }}
              animate={{ 
                x: [bee.startX, midX, mousePos.x],
                y: [bee.startY, midY, mousePos.y],
                scale: [0, 1.2, 1],
                rotate: [0, 360, 720],
              }}
              exit={{ 
                scale: 0,
                x: bee.startX,
                y: bee.startY,
                transition: { duration: 0.8 }
              }}
              transition={{
                delay: bee.delay,
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="fixed pointer-events-none z-50"
              style={{
                left: 0,
                top: 0,
              }}
            >
              {/* 3D Bee with perspective */}
              <div className="relative w-12 h-12" style={{ 
                transform: 'perspective(400px) rotateY(20deg)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}>
                {/* Bee body - segmented */}
                <div className="absolute inset-0">
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full shadow-lg">
                    {/* Eyes */}
                    <div className="absolute top-1 left-0.5 w-1.5 h-1.5 bg-black rounded-full" />
                    <div className="absolute top-1 right-0.5 w-1.5 h-1.5 bg-black rounded-full" />
                    {/* Antennae */}
                    <div className="absolute -top-1 left-1 w-0.5 h-2 bg-black rounded-full" style={{ transform: 'rotate(-20deg)' }} />
                    <div className="absolute -top-1 right-1 w-0.5 h-2 bg-black rounded-full" style={{ transform: 'rotate(20deg)' }} />
                  </div>

                  {/* Main body with stripes */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full shadow-xl">
                    {/* Black stripes */}
                    <div className="absolute top-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-80" />
                    <div className="absolute top-5 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-80" />
                    <div className="absolute top-8 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-80" />
                  </div>

                  {/* Stinger */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full" />

                  {/* Wings - animated */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 25, 0],
                      scaleX: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="absolute top-4 -left-1 w-6 h-8 bg-gradient-to-br from-blue-100/80 via-white/60 to-blue-200/70 rounded-full blur-[0.5px] origin-right shadow-lg"
                    style={{ 
                      transform: 'rotate(-45deg)',
                      clipPath: 'ellipse(50% 70% at 50% 30%)'
                    }}
                  />
                  <motion.div
                    animate={{ 
                      rotate: [0, -25, 0],
                      scaleX: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="absolute top-4 -right-1 w-6 h-8 bg-gradient-to-bl from-blue-100/80 via-white/60 to-blue-200/70 rounded-full blur-[0.5px] origin-left shadow-lg"
                    style={{ 
                      transform: 'rotate(45deg)',
                      clipPath: 'ellipse(50% 70% at 50% 30%)'
                    }}
                  />

                  {/* Back wings (smaller) */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 20, 0],
                      scaleX: [1, 1.15, 1]
                    }}
                    transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
                    className="absolute top-6 -left-0.5 w-4 h-6 bg-gradient-to-br from-blue-50/70 via-white/40 to-blue-100/60 rounded-full blur-[0.5px] origin-right shadow-md"
                    style={{ 
                      transform: 'rotate(-35deg)',
                      clipPath: 'ellipse(50% 70% at 50% 30%)'
                    }}
                  />
                  <motion.div
                    animate={{ 
                      rotate: [0, -20, 0],
                      scaleX: [1, 1.15, 1]
                    }}
                    transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
                    className="absolute top-6 -right-0.5 w-4 h-6 bg-gradient-to-bl from-blue-50/70 via-white/40 to-blue-100/60 rounded-full blur-[0.5px] origin-left shadow-md"
                    style={{ 
                      transform: 'rotate(35deg)',
                      clipPath: 'ellipse(50% 70% at 50% 30%)'
                    }}
                  />

                  {/* Legs */}
                  <div className="absolute bottom-2 left-2 w-0.5 h-3 bg-black rounded-full" style={{ transform: 'rotate(-30deg)' }} />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-black rounded-full" />
                  <div className="absolute bottom-2 right-2 w-0.5 h-3 bg-black rounded-full" style={{ transform: 'rotate(30deg)' }} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
}