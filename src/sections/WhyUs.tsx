/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, PenTool, Award } from 'lucide-react';
import ScrollAnimate from '../components/ScrollAnimate';

interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const features: FeatureItem[] = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Premium Timber & Fabrics",
    desc: "We source authentic high-density mahogany, teak, and solid cypress timber with moisture control alongside rub-tested performance fabrics."
  },
  {
    id: "02",
    icon: Leaf,
    title: "Responsible Forest Sourcing",
    desc: "100% of our wood supply chains respect regional East African farm conservation policies to offset carbon and print footprints."
  },
  {
    id: "03",
    icon: PenTool,
    title: "Bespoke Structural Finishes",
    desc: "Sturdy mortise-and-tenon framing joinery paired with weather-safe varnish protective coats that remain pristine through climate cycles."
  },
  {
    id: "04",
    icon: Award,
    title: "Attentive Showroom Support",
    desc: "White-glove home staging delivery, free on-site installation assembly, and a direct 30-day showroom replacement policy."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us-decor-section" className="bg-brand-bg py-24 select-none border-b border-brand-border/45 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header with Animation */}
        <ScrollAnimate variant="fadeUp" duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 items-end text-left">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
                MANDELA ADVANTAGES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-wide">
                Why Choose Mandela Heritage?
              </h2>
            </div>
            <p className="font-serif text-lg sm:text-xl text-brand-accent italic font-normal leading-relaxed lg:text-right max-w-md ml-auto">
              "Your absolute lifelong comfort and satisfaction drives every joint and stitch we seal."
            </p>
          </div>
        </ScrollAnimate>

        {/* Grid of 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col relative pt-12 group"
              >
                {/* Large Background Decorative Number */}
                <div className="absolute top-0 left-0 font-serif text-7xl font-bold text-brand-accent/15 tracking-tight pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                  {feat.id}
                </div>

                {/* Relative Content */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 transition-colors group-hover:bg-brand-accent group-hover:text-brand-dark">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-brand-dark tracking-wide mb-2.5">
                    {feat.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
