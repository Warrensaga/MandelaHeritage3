/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Eye, ArrowRight, Paintbrush } from 'lucide-react';
import { waLink } from '../utils/whatsapp';
import { PROJECTS_IMAGES } from '../utils/images';

interface ShowroomProject {
  id: number;
  location: string;
  type: string;
  title: string;
  desc: string;
  gradient: string;
}

const projectsList: ShowroomProject[] = [
  {
    id: 1,
    location: "Kilimani Estate",
    type: "Full Home Furnishing",
    title: "Kilimani — 3-Bedroom Apartment",
    desc: "Complete luxury apartment staging including mahogany dining tables, deep plush sofas, and custom accent stagers.",
    gradient: "from-amber-100 to-amber-200"
  },
  {
    id: 2,
    location: "Westlands District",
    type: "Office Furnishing & Setup",
    title: "Westlands — Corporate Hub Office",
    desc: "Designed and configured ergonomic high-back chairs, executive workstations, bookshelves, and high-quality reception counters.",
    gradient: "from-stone-100 to-stone-200"
  },
  {
    id: 3,
    location: "Karen Suburb",
    type: "Room Transformation",
    title: "Karen — Family Home Living Room",
    desc: "Crafted a bespoke, rustic fireplace layout featuring velvet corner sofas, custom ottomans, and console display cabinets.",
    gradient: "from-orange-100 to-amber-100"
  },
  {
    id: 4,
    location: "Lavington Estate",
    type: "Full Furnishing",
    title: "Lavington — Premium Studio Apartment",
    desc: "Engineered space-saving beds with storage, foldable dining sets, and custom TV units for compact premium living.",
    gradient: "from-gray-150 to-stone-200"
  },
  {
    id: 5,
    location: "Upper Hill",
    type: "Office Setup",
    title: "Upper Hill — Financial Firm Headquarters",
    desc: "Comprehensive boardroom styling incorporating custom 12-seater conference tables, filing cabinets, and ergonomic mesh task seats.",
    gradient: "from-yellow-105 to-amber-100"
  },
  {
    id: 6,
    location: "Runda Gated Community",
    type: "Complete Home Package",
    title: "Runda — Neo-Classical Luxury Dwelling",
    desc: "Staged 4 master bedroom suites, formal dining dining suites, and heavy outdoor patio solid timber setups.",
    gradient: "from-stone-200 to-amber-100"
  }
];

export default function Projects() {
  return (
    <div id="projects-showroom-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Page Heading */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            OUR SPATIAL TRANSFORMATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            Our <span className="text-brand-accent italic font-normal">Projects</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
            Take an inspiring tour through residential apartments, corporate workspace floors, and luxury suburban villas styled and furnished by Mandela Heritage across Nairobi.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsList.map((proj) => (
            <div
              key={proj.id}
              className="bg-brand-surface rounded-3xl overflow-hidden border border-brand-border/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              
              {/* Visual Aspect placeholder */}
              <div className="aspect-[4/5] relative overflow-hidden bg-brand-bg/30">
                <img
                  src={PROJECTS_IMAGES[proj.id]}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/15 to-transparent pointer-events-none z-[2]"></div>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <a
                    href={waLink(`Hi Mandela Heritage, I saw your project: ${proj.title} and want to inquire about a similar setup.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark py-2.5 px-5.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="w-4 h-4 text-brand-dark" />
                    Inquire layout
                  </a>
                </div>

                {/* Label contents overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-left text-white z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-1 text-brand-accent mb-1.5 focus:outline-none">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent fill-none" />
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase">{proj.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-bg leading-tight tracking-wide">
                    {proj.title}
                  </h3>
                </div>

              </div>

              {/* Bottom text brief */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2.5 block">
                    PROJECT CATEGORY: {proj.type}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-brand-border/40 pt-4 text-left">
                  <a
                    href={`https://wa.me/254701333358?text=${encodeURIComponent(`Hi, I'm interested in the furnishing process of your Upper Project: ${proj.title}. Can we talk?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group/link"
                  >
                    Discuss layout process
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="bg-[#FAF7F2] border border-brand-border/45 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h3 className="font-serif font-bold text-2xl text-brand-dark mb-4">
            Staged, Delivered, and Hand-Styled perfectly.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed max-w-xl mx-auto mb-8">
            Tell us about your property space, timber preferences, budgetary dimensions – our master carpenters and staging specialists handles the entire process flawlessly.
          </p>
          <a
            href={waLink("Hi, I want to request a free interior design quotation from Mandela Heritage Furnitures.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-4 px-8 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md group border border-brand-border/10 cursor-pointer"
          >
            WhatsApp Support to Discuss Your Space
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-brand-accent stroke-[2.5]" />
          </a>
        </div>

      </div>
    </div>
  );
}
