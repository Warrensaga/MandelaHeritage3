/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Eye } from 'lucide-react';
import { waLink } from '../utils/whatsapp';
import { PROJECTS_IMAGES } from '../utils/images';
import { motion } from 'framer-motion';

interface TeaserProject {
  id: number;
  slug: string;
  location: string;
  type: string;
  title: string;
  gradient: string;
}

const teaserProjects: TeaserProject[] = [
  {
    id: 1,
    slug: "kilimani-3-bedroom-apartment",
    location: "📍 Kilimani",
    type: "Full Home Furnishing",
    title: "Kilimani — 3-Bedroom Apartment",
    gradient: "from-amber-100 to-amber-200"
  },
  {
    id: 2,
    slug: "westlands-executive-office",
    location: "📍 Westlands",
    type: "Office Furnishing",
    title: "Westlands — Corporate Hub Office",
    gradient: "from-stone-100 to-stone-200"
  },
  {
    id: 3,
    slug: "karen-family-living-room",
    location: "📍 Karen",
    type: "Room Transformation",
    title: "Karen — Family Home Living Room",
    gradient: "from-orange-100/50 to-amber-200/50"
  }
];

export default function ProjectsTeaser() {
  return (
    <section id="projects-teaser-section" className="bg-[#FAF7F2] py-20 border-y border-brand-border/40 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between items-start gap-5 mb-12 text-left"
        >
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
              OUR SPATIAL MASTERPIECES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-wide">
              Selected <span className="text-brand-accent italic font-normal">Projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group"
          >
            Explore all completions
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {teaserProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Link
                to="/projects"
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/40 bg-brand-bg shadow-sm"
              >
                {/* Real showcase staging project photograph */}
                <img
                  src={PROJECTS_IMAGES[proj.id]}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Gradient overlay for high contrast text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/25 to-transparent pointer-events-none z-[2]"></div>

                {/* Hover Screen Overlay */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark py-2.5 px-5 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-brand-dark" />
                    View Project DETAILS
                  </span>
                </div>

                {/* Bottom Label content */}
                <div className="absolute bottom-6 left-6 right-6 text-left text-white z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-brand-accent block mb-1">
                    {proj.location} · {proj.type}
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-bg leading-tight tracking-wide">
                    {proj.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center pt-4"
        >
          <p className="font-serif font-bold text-lg text-brand-dark mb-4">Have a unique residential or office space to furnish in Nairobi?</p>
          <a
            href={waLink("Hi, I have a space in Nairobi that I would like Mandela Heritage to help furnish. Let's arrange a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/95 cursor-pointer text-brand-dark font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-full shadow-md transition-all group hover:scale-[1.02]"
          >
            WhatsApp Us to Discuss Your Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-brand-dark stroke-[2.5]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

