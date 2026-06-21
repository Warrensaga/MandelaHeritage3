/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MessageCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  slug: string;
  tag: string;
  badge: "BEST SELLER" | "NEW" | "POPULAR" | "EXCLUSIVE" | null;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  waText: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    slug: "3-seater-fabric-sofa-set",
    tag: "LIVING ROOM LUXURY",
    badge: "BEST SELLER",
    name: "3-Seater Fabric Sofa Set",
    subtitle: "Nairobi's Most-loved Comfort",
    description: "Indulge in artisanal comfort. Handcrafted with kiln-dried African hardwood frames and premium water-repellent Belgian weave fabric.",
    price: "KES 45,000",
    waText: "Hi Mandela Heritage, I'm interested in ordering the 3-Seater Fabric Sofa Set at KES 45,000 from your website's main hero feature.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 2,
    slug: "queen-size-bedroom-suite",
    tag: "SANCTUARY OF REST",
    badge: "NEW",
    name: "Queen Size Bedroom Suite",
    subtitle: "Complete Nighttime Perfection",
    description: "Transform your master bedroom. Includes a majestic solid wood queen frame, dual bedside consoles, and a premium vanity with matching mirror.",
    price: "KES 85,000",
    waText: "Hi Mandela Heritage, I'm interested in ordering the Queen Size Bedroom Suite at KES 85,000 from your website's main hero feature.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    slug: "6-seater-dining-table-set",
    tag: "CONVIVIAL DINING",
    badge: "POPULAR",
    name: "6-Seater Dining Table Set",
    subtitle: "Gather Around Kenyan Woodcraft",
    description: "Feast with friends on a table built for generations. Solid Mahogany tabletop paired with six ergonomic cushioned chairs in a scratch-resistant finish.",
    price: "KES 55,000",
    waText: "Hi Mandela Heritage, I'm interested in ordering the 6-Seater Dining Table Set at KES 55,000 from your website's main hero feature.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 4,
    slug: "executive-office-package",
    tag: "BOUNDLESS PRODUCTIVITY",
    badge: "EXCLUSIVE",
    name: "Executive Office Suite",
    subtitle: "Command and Create",
    description: "Designed for high-impact minds in Nairobi. Ergonomic support mesh task chair combined with an elegant genuine timber workdesk and filing storage.",
    price: "KES 85,000",
    waText: "Hi Mandela Heritage, I'm interested in ordering the Executive Office Suite at KES 85,000 from your website's main hero feature.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 5,
    slug: "complete-living-room-package",
    tag: "THE DESIGNER VALUE",
    badge: "BEST SELLER",
    name: "Complete Living Room Package",
    subtitle: "A Seamless Home Makeover",
    description: "One complete aesthetic transformation curated by our styling experts. Combines our signature 3-seater sofa, a gorgeous coffee table, and an entryway console set.",
    price: "KES 150,000",
    waText: "Hi Mandela Heritage, I'm interested in ordering the Complete Living Room Package at KES 150,000 from your website's main hero feature.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const progressIntervalRef = useRef<number | null>(null);

  // Auto-play interval timer
  useEffect(() => {
    if (isHovered) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    const startProgress = () => {
      const startTime = Date.now();
      setProgress(0);

      progressIntervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
        setProgress(currentProgress);

        if (elapsed >= SLIDE_DURATION) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          handleNext();
        }
      }, 50);
    };

    startProgress();

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentIndex];

  // Slide variation styles to ensure perfect coverage animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8, ease: "easeOut" }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  return (
    <section 
      id="hero-section" 
      className="relative w-full h-[100vh] min-h-[640px] md:min-h-[760px] flex items-center justify-center bg-brand-dark overflow-hidden select-none group/hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Immersive Slide Transition Base with Unified Soft Crossfade and Ken Burns Effect */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          {/* Animated Background Image with Ken Burns zoom-out effect */}
          <motion.img 
            src={activeSlide.image} 
            alt={activeSlide.name}
            referrerPolicy="no-referrer"
            initial={{ scale: 1.06, filter: "brightness(0.85)" }}
            animate={{ scale: 1.01, filter: "brightness(0.93)" }}
            exit={{ scale: 0.98, filter: "brightness(0.80)" }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Soft designer overlay gradients for high readability of texts in light/dark surroundings */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/65 to-transparent z-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-brand-dark/25 z-1"></div>

          {/* Main Content Containers nested within the animated slide container */}
          <div className="absolute inset-0 z-20 flex items-center justify-start pt-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="max-w-3xl text-left"
              >
                
                {/* Eyebrow Tagline & Slide Indicator Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-brand-accent uppercase">
                    <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse text-brand-accent" />
                    {activeSlide.tag}
                  </div>

                  {activeSlide.badge && (
                    <span className="bg-brand-accent text-brand-dark text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full shadow-md shrink-0">
                      {activeSlide.badge}
                    </span>
                  )}
                </div>

                {/* Majestic display typography headlines */}
                <div className="mb-6">
                  <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-white tracking-tight">
                    {activeSlide.name.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="text-brand-accent italic font-normal">
                      {activeSlide.name.split(" ").slice(-2).join(" ")}
                    </span>
                  </h1>
                  
                  <p className="mt-2 text-lg sm:text-xl font-sans text-brand-accent/90 tracking-wide font-medium">
                    {activeSlide.subtitle}
                  </p>
                </div>

                {/* Descriptive narrative */}
                <p className="text-base sm:text-lg text-brand-bg/85 leading-relaxed font-sans max-w-xl mb-8">
                  {activeSlide.description}
                </p>

                {/* Showcase Price Block */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] font-mono font-semibold text-brand-bg/60 tracking-wider uppercase">EXCLUSIVE PRICE</span>
                  <div className="bg-brand-bg/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-brand-accent tracking-wide">{activeSlide.price}</span>
                  </div>
                </div>

                {/* Interactive CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* Shop Product detail Button */}
                  <Link
                    to={`/shop/${activeSlide.slug}`}
                    className="inline-flex items-center gap-2 bg-white hover:bg-brand-accent text-brand-dark py-4 px-8 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl group shrink-0"
                  >
                    <ShoppingBag className="w-4 h-4 text-brand-dark" />
                    View Product
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Instant WhatsApp ordering option */}
                  <a
                    href={`https://wa.me/254701333358?text=${encodeURIComponent(activeSlide.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-8 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Order on WhatsApp
                  </a>
                </div>

              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Grid Pattern Overlay to anchor premium layout */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8872A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-10"></div>

      {/* Extreme Touch/Cursor edge arrow buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-black/15 backdrop-blur-md flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 active:scale-90 transition-all opacity-0 group-hover/hero:opacity-100 cursor-pointer shadow-md"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-black/15 backdrop-blur-md flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 active:scale-90 transition-all opacity-0 group-hover/hero:opacity-100 cursor-pointer shadow-md"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 stroke-[1.5]" />
      </button>

      {/* Glowing horizontal auto-play progress bar at the absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-30 overflow-hidden">
        <div 
          className="h-full bg-brand-accent transition-all duration-75 shadow-[0_0_10px_#C8872A] ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress Dots Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-35 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex
                ? "bg-brand-accent w-7 shadow-[0_0_8px_#C8872A]"
                : "bg-white/40 hover:bg-white/65"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
