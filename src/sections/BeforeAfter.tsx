/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Eye, Scaling } from 'lucide-react';
import { BEFORE_AFTER_IMAGES } from '../utils/images';

interface ComparisonData {
  id: number;
  location: string;
  type: string;
  beforeGrad: string; // before gradient definition
  afterGrad: string; // after gradient definition
  desc: string;
}

const comparisonList: ComparisonData[] = [
  {
    id: 1,
    location: "Kilimani Estate",
    type: "3-Bedroom Apartment Setup",
    beforeGrad: "from-stone-300 to-stone-400 text-stone-600/30",
    afterGrad: "from-amber-100 to-amber-200 text-brand-dark/20",
    desc: "From an empty concrete hall to a warm, styled mahogany-finished family parlor."
  },
  {
    id: 2,
    location: "Westlands Office",
    type: "6-Team Coworking space",
    beforeGrad: "from-gray-300 to-stone-350 text-gray-500/30",
    afterGrad: "from-gray-100 to-amber-100/50 text-brand-accent/20",
    desc: "Optimized corporate floor plan containing double executive workstations and task chairs."
  },
  {
    id: 3,
    location: "Karen Suburb",
    type: "Formal High-Ceiling Salon",
    beforeGrad: "from-stone-250 to-stone-300 text-stone-500/25",
    afterGrad: "from-orange-100/80 to-amber-100/60 text-amber-600/10",
    desc: "A custom walnut-stained dining set and cozy velvet lounge corner installation."
  }
];

export default function BeforeAfter() {
  // Let's store individual slider percentages in state
  const [sliders, setSliders] = useState<Record<number, number>>({
    1: 45,
    2: 50,
    3: 55
  });

  const activeDragRef = useRef<number | null>(null);

  const handleSliderMove = (id: number, clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const pct = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliders(prev => ({ ...prev, [id]: pct }));
  };

  const startDrag = (id: number) => {
    activeDragRef.current = id;
  };

  const endDrag = () => {
    activeDragRef.current = null;
  };

  return (
    <section id="transformations-before-after" className="bg-brand-bg py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-5 mb-16 text-left">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
              REAL STAGING PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-wide">
              Before & After <span className="text-brand-accent italic font-normal">Showcases</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brand-muted max-w-sm mt-1 leading-relaxed">
            Drag the amber vertical slider handles left and right to inspect the transformation of properties staged in Nairobi.
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {comparisonList.map((item) => {
            const currentPct = sliders[item.id] || 50;

            return (
              <div
                key={item.id}
                className="flex flex-col text-left"
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchEnd={endDrag}
              >
                
                {/* Visual Draggable Container */}
                <div
                  className="w-full aspect-[4/5] rounded-3xl overflow-hidden border border-brand-border/40 relative bg-brand-surface shadow-md select-none touch-none"
                  onMouseDown={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleSliderMove(item.id, e.clientX, rect);
                    startDrag(item.id);
                  }}
                  onMouseMove={(e) => {
                    if (activeDragRef.current !== item.id) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleSliderMove(item.id, e.clientX, rect);
                  }}
                  onTouchStart={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleSliderMove(item.id, e.touches[0].clientX, rect);
                    startDrag(item.id);
                  }}
                  onTouchMove={(e) => {
                    if (activeDragRef.current !== item.id) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleSliderMove(item.id, e.touches[0].clientX, rect);
                  }}
                >
                  
                  {/* BEFORE LAYER (Background) */}
                  <div className="absolute inset-0 bg-brand-dark">
                    <img
                      src={BEFORE_AFTER_IMAGES[item.id].before}
                      alt="Before staging empty room"
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay shading to support text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-brand-dark/20 pointer-events-none"></div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                      <span className="bg-brand-dark/65 backdrop-blur-md text-white text-[10px] font-mono tracking-widest font-bold py-1 px-3.5 rounded-full select-none self-start">
                        BEFORE MANDELA
                      </span>
                      
                      <div className="font-serif text-sm font-bold tracking-wider text-white/90 bg-brand-dark/40 backdrop-blur-sm rounded-xl px-4 py-2.5 self-start select-none uppercase font-mono">
                        Empty Space
                      </div>
                    </div>
                  </div>

                  {/* AFTER LAYER (Overlay - percentage width clip) */}
                  <div
                    className="absolute inset-0 select-none overflow-hidden"
                    style={{ width: `${currentPct}%` }}
                  >
                    {/* Un-squeezed wrapper box */}
                    <div className="absolute inset-0 w-[550px] h-full">
                      <img
                        src={BEFORE_AFTER_IMAGES[item.id].after}
                        alt="After Mandela Heritage staging"
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-brand-dark/10 pointer-events-none"></div>
                    </div>

                    {/* Floating elements above the overlay image */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none">
                      <span className="bg-brand-accent text-brand-dark text-[10px] font-mono tracking-widest font-bold py-1 px-3.5 rounded-full select-none self-start shadow-md whitespace-nowrap">
                        ★ AFTER SETUP
                      </span>

                      <div className="font-serif text-sm font-bold tracking-wider text-brand-accent bg-brand-dark/50 backdrop-blur-sm rounded-xl px-4 py-2.5 self-start select-none uppercase font-mono">
                        Staged & Styled
                      </div>
                    </div>
                  </div>

                  {/* Vertically Scrolling Drag Handle Bar */}
                  <div
                    className="absolute inset-y-0 w-1 bg-brand-accent/80 cursor-ew-resize z-10"
                    style={{ left: `${currentPct}%` }}
                  >
                    {/* Center Handle Button circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-accent border-2 border-white flex items-center justify-center shadow-lg text-brand-dark cursor-ew-resize">
                      <Scaling className="w-3.5 h-3.5 rotate-90 stroke-[2.5]" />
                    </div>
                  </div>

                </div>

                {/* Info Text Tags Bottom */}
                <div className="mt-4">
                  <div className="flex items-center gap-1 text-brand-accent mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider">{item.location}</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-brand-dark mb-1 leading-tight">{item.type}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans">{item.desc}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
