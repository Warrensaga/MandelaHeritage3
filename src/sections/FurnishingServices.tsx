/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sofa, Landmark, Truck, ArrowRight } from 'lucide-react';
import { waLink } from '../utils/whatsapp';

interface ServiceItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  desc: string;
  waMsg: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: Home,
    title: "Full Home Furnishing",
    price: "From KES 150,000",
    desc: "Moving into a new home or apartment? We choreograph full furniture curation, doorstep delivery, room staging, and luxury styling.",
    waMsg: "Hi, I'm interested in Mandela Heritage's Full Home Furnishing service starting at KES 150,000. Can I get more info?"
  },
  {
    id: 2,
    icon: Sofa,
    title: "Single Room Makeovers",
    price: "From KES 50,000",
    desc: "Breathe fresh life into a single space — master bedroom or lounge parlor. We source, deliver, and install everything perfectly.",
    waMsg: "Hi, I'm interested in a Single Room Makeover service starting at KES 50,000. Can you guide me on the next step?"
  },
  {
    id: 3,
    icon: Landmark,
    title: "Office & Corporate Furnishing",
    price: "Fully Custom Quote",
    desc: "Complete, ergonomic commercial furniture setup solutions for modern startups, office halls, lobbies, and co-working environments.",
    waMsg: "Hi, I'd like to consult for Mandela Heritage's Office & Corporate Furnishing solutions. Can we discuss a custom rate?"
  },
  {
    id: 4,
    icon: Truck,
    title: "Assembly & White-Glove Install",
    price: "Free with qualified orders",
    desc: "Professional timber assembly, safe product placement, and immediate item installation across any estate in greater Nairobi.",
    waMsg: "Hi, I'm ordering from Mandela Heritage and want to double-check assembly and installation rates."
  }
];

export default function FurnishingServices() {
  return (
    <section id="furnishing-services-section" className="bg-brand-dark text-brand-bg py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 block">
            PROFESSIONAL STAGING & STYLING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
            Our Premium <span className="text-brand-accent italic font-normal">Furnishing Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-bg/60 mt-4 leading-relaxed">
            We handle everything from initial space selection to seamless safe transport and live room styling. Over 2,400 completed projects in Nairobi.
          </p>
        </div>

        {/* Grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const IconComp = svc.icon;

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-bg/[0.04] hover:bg-brand-bg/[0.08] border border-brand-bg/10 hover:border-brand-accent/30 rounded-2xl p-8 text-left transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <IconComp className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-accent bg-brand-accent/10 py-1.5 px-3.5 rounded-full">
                      {svc.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide mb-3">
                    {svc.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-brand-bg/75 leading-relaxed mb-8">
                    {svc.desc}
                  </p>
                </div>

                <a
                  href={`https://wa.me/254701333358?text=${encodeURIComponent(svc.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-accent hover:text-white transition-colors group/link self-start"
                >
                  Consult on WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
