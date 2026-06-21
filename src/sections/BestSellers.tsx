/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, getBestSellers } from '../data/products';
import ProductCard from '../components/ProductCard';

interface BestSellersProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
}

export default function BestSellers({ wishlist, onWishlistToggle }: BestSellersProps) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'sofas', label: 'Sofas' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining' },
    { id: 'office', label: 'Office' },
    { id: 'accent', label: 'Accent' }
  ];

  // Get best sellers (which have "badge: BEST SELLER") or are top popular
  const bestSellers = products.filter(p => p.badge === 'BEST SELLER' || p.badge === 'POPULAR');

  // Filter based on active tab
  const filteredProducts = activeTab === 'all'
    ? bestSellers.slice(0, 6)
    : bestSellers.filter(p => p.category === activeTab).slice(0, 6);

  // Framer Motion animation variants
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="best-sellers-section" className="bg-[#FAF7F2] py-20 border-y border-brand-border/40 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Heading with scroll entry trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between items-start gap-5 mb-10 text-left"
        >
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
              MOST IN-DEMAND DESIGNS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-wide">
              Our <span className="text-brand-accent italic font-normal">Best Sellers</span>
            </h2>
          </div>
          <Link
            to="/shop?filter=popular"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group"
          >
            View all popular designs
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Category Filter Tabs with animated sliding highlight indicator */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 border-b border-brand-border/35 text-left">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2 rounded-full font-sans text-xs tracking-wide uppercase transition-colors duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "text-brand-dark font-bold"
                    : "text-brand-muted hover:text-brand-dark hover:bg-brand-bg/60"
                }`}
              >
                {/* Simulated background transition for premium micro-interaction */}
                {isActive && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-brand-accent rounded-full -z-10 shadow-sm border border-brand-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 bg-transparent border border-brand-border rounded-full -z-20 pointer-events-none" />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid inside AnimatePresence for dynamic tab change animations */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeTab}
              variants={gridContainerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((p) => (
                <motion.div key={p.id} variants={cardVariants} className="flex flex-col h-full">
                  <ProductCard
                    product={p}
                    showLearnMore={true}
                    onWishlistToggle={onWishlistToggle}
                    isWishlisted={wishlist.includes(p.slug)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="fallback-empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center border border-dashed border-brand-border/60 rounded-2xl bg-white max-w-md mx-auto"
            >
              <p className="font-serif font-semibold text-base mb-1 text-brand-dark">No Best Sellers Found</p>
              <p className="text-xs text-brand-muted max-w-[280px] mx-auto leading-relaxed mb-4">
                We do not currently have recorded best sellers in this division.
              </p>
              <Link to="/shop" className="text-xs font-mono font-bold text-brand-accent uppercase underline">
                Browse Entire Showroom
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
