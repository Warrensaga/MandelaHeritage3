/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Check, Sofa, Sparkles, BookOpen } from 'lucide-react';

export default function BrandStory() {
  const checkmarks = [
    {
      title: "Sustainably sourced timber",
      desc: "Every piece of hardwood is responsibly sourced from managed East African timber farms."
    },
    {
      title: "Decades of manual experience",
      desc: "Each item is built by hand-selected master carpenters with decades of manual expertise."
    },
    {
      title: "Full 30-day showroom assurance",
      desc: "No questions asked full resource refund guarantee if you are not fully satisfied."
    }
  ];

  return (
    <section id="brand-story-section" className="bg-[#FAF7F2] py-24 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Handcrafted overlap images */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center relative min-h-[440px] px-4 md:px-12"
        >
          
          {/* Main larger card */}
          <div className="w-[85%] aspect-[4/5] rounded-3xl bg-gradient-to-tr from-amber-100/70 to-amber-200/50 shadow-lg border border-brand-accent/20 relative overflow-hidden flex items-center justify-center p-6 text-brand-dark/20">
            <div className="absolute inset-0 bg-[radial-gradient(#C8872A_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
            <Sofa className="w-28 h-28 stroke-[1]" />
          </div>

          {/* Overlapping smaller thumbnail card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-[50%] aspect-[4/5] rounded-2xl bg-gradient-to-br from-stone-200 to-amber-100 shadow-2xl border-4 border-[#FAF7F2] absolute right-0 bottom-4 overflow-hidden flex items-center justify-center text-brand-dark/20"
          >
            <Sparkles className="w-12 h-12 stroke-[1]" />
          </motion.div>

          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-10 right-4 bg-brand-accent text-brand-dark p-5 rounded-2xl shadow-xl border border-white/20 select-none text-left flex flex-col"
          >
            <span className="font-serif font-bold text-3xl leading-none">15</span>
            <span className="font-mono text-[9px] font-bold tracking-widest uppercase leading-tight mt-1">YRS ACTIVE</span>
            <span className="font-sans text-[11px] font-medium leading-tight text-brand-dark/80 max-w-[80px] mt-0.5">TIMBER CRAFT</span>
          </motion.div>

        </motion.div>

        {/* Right Side: Narrative text */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-left flex flex-col items-start"
        >
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
            OUR BRAND NARRATIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-wide mb-6">
            Furniture should tell<br />
            a genuine <span className="text-brand-accent italic font-normal">living story</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed mb-10 max-w-xl">
            At Mandela Heritage, we believe a room is only as meaningful as the premium items placed within it. 
            All of our items are built to last generations, utilizing solid hardwoods, durable performance fabrics, 
            and rich hand-finished varnishes that look even more profound with age, not less.
          </p>

          {/* 3 checkmark features */}
          <div className="flex flex-col gap-6 w-full max-w-xl mb-4">
            {checkmarks.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-brand-accent/25 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-dark">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

