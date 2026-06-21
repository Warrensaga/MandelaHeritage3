/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Hammer } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  const stages = [
    "Kiln-Dried African Hardwood...",
    "Artesian Joinery & Craft...",
    "Belgian Fine Weave Fabric...",
    "Mandela Heritage Design..."
  ];

  useEffect(() => {
    // Elegant incremental progress logic
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Speed up near the end or increment randomly
        const diff = Math.random() * 8 + 3;
        return Math.min(Math.floor(prev + diff), 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Update text stages based on progress
  useEffect(() => {
    if (progress < 25) {
      setStageIndex(0);
    } else if (progress < 55) {
      setStageIndex(1);
    } else if (progress < 85) {
      setStageIndex(2);
    } else {
      setStageIndex(3);
    }

    if (progress === 100) {
      // Small timeout to allow user to appreciate the brand loading
      const delay = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.03,
        filter: "blur(8px)",
        transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark text-white select-none overflow-hidden"
    >
      {/* Immersive radial glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,135,42,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Subtle lines drawing attention */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8872A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative text-center flex flex-col items-center max-w-lg px-6">
        
        {/* Main Icon with circular pulse */}
        <div className="relative mb-8">
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-brand-accent/20 rounded-full blur-xl scale-125"
          />
          <motion.div
            initial={{ rotate: 0, scale: 0.9 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="relative w-20 h-20 rounded-2xl border border-brand-accent/30 bg-brand-dark/95 flex items-center justify-center text-brand-accent shadow-2xl"
          >
            <Hammer className="w-9 h-9 stroke-[1.2]" />
          </motion.div>
        </div>

        {/* Brand Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-1"
        >
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase block">
            CRAFTING NAIROBI'S BEST
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-3xl font-bold tracking-wide text-white mb-6"
        >
          MANDELA <span className="text-brand-accent italic font-normal">HERITAGE</span>
        </motion.h2>

        {/* Elegant loading bar */}
        <div className="w-56 h-[2px] bg-white/10 rounded-full mb-4 overflow-hidden relative">
          <motion.div
            className="h-full bg-brand-accent shadow-[0_0_8px_#C8872A]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Counters & text states */}
        <div className="flex flex-col items-center justify-center">
          <motion.span 
            className="font-mono text-xs text-brand-accent font-semibold tracking-widest mb-1.5"
            key={progress}
          >
            {progress}%
          </motion.span>
          
          <div className="h-6 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={stageIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.7, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="font-sans text-[11px] font-medium tracking-wide text-[#E8E0D0]/80 uppercase"
              >
                {stages[stageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Tiny foot decoration */}
        <div className="mt-12 flex items-center gap-2 text-[9px] font-mono tracking-widest text-brand-muted/50 uppercase">
          <Sparkles className="w-3 h-3 text-brand-accent/40" />
          ESTD 2012
          <Sparkles className="w-3 h-3 text-brand-accent/40" />
        </div>

      </div>
    </motion.div>
  );
}
