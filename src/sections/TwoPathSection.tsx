/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Sofa, Landmark, ArrowRight } from 'lucide-react';
import { waFurnishing } from '../utils/whatsapp';
import { motion } from 'framer-motion';

export default function TwoPathSection() {
  return (
    <section id="two-path-section" className="bg-brand-bg py-20 px-4 md:px-6 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        
        {/* Card 1: Products Catalogue Path */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-dark text-brand-bg rounded-3xl p-8 sm:p-12 flex flex-col justify-between border border-brand-accent/15 shadow-xl relative overflow-hidden group/card"
        >
          <div className="absolute right-0 bottom-0 text-brand-accent/5 pointer-events-none translate-x-10 translate-y-10 transition-transform duration-500 group-hover/card:scale-105">
            <Sofa className="w-80 h-80 stroke-[0.5]" />
          </div>

          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-8">
              <Sofa className="w-8 h-8" />
            </div>
            
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 block">
              IMMEDIATE DELIVERY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white mb-4">
              Timber Furniture Store
            </h3>
            <p className="font-sans text-sm sm:text-base text-brand-bg/75 leading-relaxed max-w-md mb-8">
              Explore our meticulously curated catalogue — plush sofas, mahogany bedroom suites, hardwood dining sets, ergonomic office furniture, and refined accent pieces.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/95 text-brand-dark font-sans font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-full w-full sm:w-auto self-start transition-all shadow-md group/btn"
          >
            Browse Catalog
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Card 2: Interior Design Path */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-accent text-brand-dark rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group/card"
        >
          <div className="absolute right-0 bottom-0 text-brand-dark/5 pointer-events-none translate-x-10 translate-y-10 transition-transform duration-500 group-hover/card:scale-105">
            <Landmark className="w-80 h-80 stroke-[0.5]" />
          </div>

          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-dark/10 flex items-center justify-center text-brand-dark mb-8">
              <Landmark className="w-8 h-8" />
            </div>
            
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-dark/80 uppercase mb-2 block">
              FULL PROPERTY MAKEOVERS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-brand-dark mb-4">
              Furnishing Services
            </h3>
            <p className="font-sans text-sm sm:text-base text-brand-dark/80 leading-relaxed max-w-md mb-8">
              We coordinate, deliver, and style complete residential homes, corporate offices, and luxury commercial spaces. From spatial concepts to final premium setups.
            </p>
          </div>

          <a
            href={waFurnishing()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-dark/95 text-brand-bg font-sans font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-full w-full sm:w-auto self-start transition-all shadow-md group/btn"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 text-brand-accent" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

