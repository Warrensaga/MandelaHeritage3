/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Bed, Utensils, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORY_CARD_IMAGES } from '../utils/images';

interface CategoryCard {
  title: string;
  countKey: string;
  countText: string;
  roomPath: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categoryCards: CategoryCard[] = [
  {
    title: "Living Room Space",
    countKey: "living-room",
    countText: "12 products available",
    roomPath: "/shop?room=living-room",
    gradient: "from-amber-100 to-amber-200/90",
    icon: Sofa
  },
  {
    title: "Bedroom Haven",
    countKey: "bedroom",
    countText: "9 products available",
    roomPath: "/shop?room=bedroom",
    gradient: "from-stone-100 to-stone-200",
    icon: Bed
  },
  {
    title: "Dining Gatherings",
    countKey: "dining-room",
    countText: "8 products available",
    roomPath: "/shop?room=dining-room",
    gradient: "from-orange-100/70 to-amber-100",
    icon: Utensils
  },
  {
    title: "Office Workstations",
    countKey: "home-office",
    countText: "10 products available",
    roomPath: "/shop?room=home-office",
    gradient: "from-gray-150 to-stone-200",
    icon: Briefcase
  }
];

export default function ShopByCategory() {
  return (
    <section id="shop-by-category-section" className="bg-brand-bg py-16 px-4 md:px-6 max-w-7xl mx-auto select-none">
      
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between items-start gap-4 mb-10 text-left">
        <div>
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
            GALLERY DEPARTMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-brand-dark">
            Shop by <span className="text-brand-accent italic font-normal">Category</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group"
        >
          View all rooms
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid of 4 categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryCards.map((card, idx) => {
          const IconComp = card.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={card.roomPath}
                className="group relative block aspect-square rounded-2xl overflow-hidden border border-brand-border/40 bg-brand-surface shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Real Category space scene photo */}
                <img
                  src={CATEGORY_CARD_IMAGES[card.countKey]}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Clean, low-offset floating icon badge */}
                <div className="absolute top-4 right-4 bg-brand-dark/50 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-brand-accent transition-all duration-300 group-hover:scale-110 z-10 border border-white/10">
                  <IconComp className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Ambient dark overlay for maximum text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent pointer-events-none z-[2]"></div>

                {/* Content Block bottom left */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-white z-10">
                  <h3 className="font-serif font-bold text-lg text-brand-bg mb-0.5 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-[10px] font-mono tracking-wider uppercase text-brand-bg/75">
                    {card.countText}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
