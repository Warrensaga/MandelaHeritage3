/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';

interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
  featured: boolean;
}

const testimonialsList: TestimonialItem[] = [
  {
    id: 1,
    text: "Absolutely love my new dining set. The walnut finish is stunning and fits perfectly in our Karen residence. Delivery was flawless and assembly fast.",
    author: "Samuel Otieno",
    location: "Karen Suburb",
    rating: 5,
    featured: false
  },
  {
    id: 2,
    text: "The timber quality exceeded all my expectations. The sofa is highly stylish and feels far more expensive than what we paid. Will order again — absolutely stunning.",
    author: "Olivia Martinez",
    location: "Kilimani Estate",
    rating: 5,
    featured: true // Amber background card!
  },
  {
    id: 3,
    text: "They transformed our joint Westlands office completely. Going from a fully empty shell floor to beautifully finished desks in just 3 days. Our partners love it.",
    author: "David Otieno",
    location: "Westlands Hub",
    rating: 5,
    featured: false
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="bg-brand-dark text-brand-bg py-24 select-none relative overflow-hidden">
      
      {/* Background Decorative Graphic */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 block">
            CLIENT CORRESPONDENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            What our <span className="text-brand-accent italic font-normal">Clients Say</span>
          </h2>
          <p className="font-mono text-[10px] tracking-wider uppercase text-brand-bg/50 mt-3">
            ⭐ Avg 4.8 / 5 Rating across 2,400+ Nairobi Reviews
          </p>
        </div>

        {/* Grid of 3 Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {testimonialsList.map((t, idx) => {
            const isFeatured = t.featured;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-2xl p-8 shadow-xl flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? "bg-brand-accent text-brand-dark border-2 border-[#fff]/10"
                    : "bg-white text-brand-dark border border-brand-border/20"
                }`}
              >
                
                {/* Decorative Giant Quote icon */}
                <Quote className={`w-10 h-10 absolute right-6 top-6 ${isFeatured ? "text-brand-dark/10" : "text-brand-accent/10"}`} />

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 fill-current ${isFeatured ? "text-brand-dark" : "text-brand-accent"}`}
                      />
                    ))}
                  </div>

                  {/* Body Text Quote */}
                  <blockquote className="font-serif text-base sm:text-lg leading-relaxed italic mb-8">
                    "{t.text}"
                  </blockquote>
                </div>

                {/* Author Avatar & Bio */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-brand-border/15">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm shadow-inner ${
                    isFeatured ? "bg-brand-dark text-brand-accent" : "bg-brand-bg text-brand-dark"
                  }`}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm tracking-wide">
                      {t.author}
                    </h4>
                    <p className={`text-[10px] font-mono tracking-wider uppercase ${isFeatured ? "text-brand-dark/75 font-semibold" : "text-brand-muted"}`}>
                      {t.location}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
