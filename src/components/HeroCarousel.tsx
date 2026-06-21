/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sofa, Bed, Utensils, Briefcase, Sparkles, Paintbrush, ArrowRight } from 'lucide-react';
import { waProduct, waGeneral } from '../utils/whatsapp';

interface Slide {
  id: number;
  gradient: string;
  tag: string;
  name: string;
  price: string;
  waText: string;
  icon: ComponentType<{ className?: string }>;
}

const slides: Slide[] = [
  {
    id: 1,
    gradient: "from-amber-100/80 to-amber-200/80",
    tag: "SOFAS & SEATING",
    name: "3-Seater Fabric Sofa Set",
    price: "KES 45,000",
    waText: "Hi, I'm interested in the 3-Seater Fabric Sofa Set at KES 45,000. Is it available?",
    icon: Sofa
  },
  {
    id: 2,
    gradient: "from-stone-100 to-stone-200",
    tag: "BEDROOM",
    name: "Queen Size Bedroom Suite",
    price: "KES 85,000",
    waText: "Hi, I'm interested in the Queen Size Bedroom Suite at KES 85,000. Is it available?",
    icon: Bed
  },
  {
    id: 3,
    gradient: "from-orange-100 to-amber-100",
    tag: "DINING",
    name: "6-Seater Dining Table Set",
    price: "KES 55,000",
    waText: "Hi, I'm interested in the 6-Seater Dining Table Set at KES 55,000. Is it available?",
    icon: Utensils
  },
  {
    id: 4,
    gradient: "from-gray-100 to-gray-200",
    tag: "OFFICE",
    name: "Executive Office Package",
    price: "KES 85,000",
    waText: "Hi, I'm interested in the Executive Office Package at KES 85,000. Is it available?",
    icon: Briefcase
  },
  {
    id: 5,
    gradient: "from-yellow-100/60 to-amber-100/80",
    tag: "FULL PACKAGES",
    name: "Complete Living Room Package",
    price: "KES 150,000",
    waText: "Hi, I'm interested in the Complete Living Room Package at KES 150,000. Is it available?",
    icon: Sparkles
  },
  {
    id: 6,
    gradient: "from-stone-200 to-amber-100/60",
    tag: "FURNISHING SERVICES",
    name: "We Transform Your Space",
    price: "From KES 50,000",
    waText: "Hi, I'd like a quote for furnishing services for my space.",
    icon: Paintbrush
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSlide = slides[currentIndex];
  const IconComponent = activeSlide.icon;

  return (
    <div
      id="hero-carousel"
      className="relative w-full h-[50vh] md:h-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 w-full h-full bg-gradient-to-tr ${activeSlide.gradient} flex flex-col items-center justify-center p-8`}
        >
          {/* Centered Large SVG Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute text-brand-dark/30 pointer-events-none"
          >
            <IconComponent className="w-56 h-56 stroke-[1]" />
          </motion.div>

          {/* Decorative Pattern in background */}
          <div className="absolute inset-0 bg-[radial-gradient(#C8872A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

          {/* Bottom Dark Gradient Shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent pointer-events-none z-10"></div>

          {/* Overlay Text Block - bottom left */}
          <div className="absolute bottom-8 left-8 right-8 z-20 text-white flex flex-col items-start text-left md:bottom-12 md:left-12">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-accent font-mono text-xs tracking-wider uppercase mb-1"
            >
              {activeSlide.tag}
            </motion.p>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-2xl md:text-3xl font-bold leading-tight tracking-wide text-brand-bg drop-shadow-sm mb-1"
            >
              {activeSlide.name}
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-brand-bg/90 font-semibold text-lg mb-3"
            >
              {activeSlide.price}
            </motion.p>
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href={`https://wa.me/254701333358?text=${encodeURIComponent(activeSlide.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/95 active:bg-brand-accent/90 text-brand-dark font-sans font-medium text-xs tracking-wide uppercase py-2 px-4 rounded-full transition-all duration-300 shadow-md group-hover:scale-[1.02]"
            >
              Order on WhatsApp
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots Bottom Right */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? "bg-brand-accent w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
