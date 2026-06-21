/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Award, Heart, Check, ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { waLink } from '../utils/whatsapp';

interface TeamMember {
  name: string;
  role: string;
  desc: string;
}

const team: TeamMember[] = [
  {
    name: "Arthur Mandela",
    role: "Founder & Master Carpenter",
    desc: "Established the workshop over 10 years ago, championing local timber artistry and high-density Cypress joinery."
  },
  {
    name: "Grace Wanjiku",
    role: "Lead Showroom Designer",
    desc: "Oversees spatial coordination, customized upholstery fabrics, and property staging projects across Kilimani & Westlands."
  },
  {
    name: "Edwin Baraza",
    role: "Head of Dispatch & Installation",
    desc: "Coordinates safe white-glove transport, complex on-site assemblies, and free home installations."
  }
];

export default function About() {
  const directionsLink = "https://maps.google.com/?q=-1.2748849,36.9725608";

  return (
    <div id="about-brand-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none">
      
      {/* SECTION 1: Brand Story Narrative */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
              ESTABLISHED IN NAIROBI
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark mb-6 tracking-wide">
              Built on Quality.<br />
              Driven by <span className="text-brand-accent italic font-normal">Trust.</span>
            </h1>
            <div className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed flex flex-col gap-4">
              <p>
                From our showroom along the Eastern Bypass, Nairobi, <span className="font-semibold text-brand-dark">Mandela Heritage Furnitures</span> has earned a premier reputation for building authentic timber structures and luxury furniture modules.
              </p>
              <p>
                We believe that every family residence and office workspace deserves the dignity of premium furniture without the burden of inflated prices or middleman commissions. 
                Everything is hand-cut, seasoned, and fitted in our local studio by skilled carpenters, keeping our values centered on authentic East African timber craft.
              </p>
              <p>
                Whether you are checking out a single dresser drawer cabinet or looking to execute a complete, multi-room property transformation, our team stands with you. 
                We manage the entire cycle — draft consulting, workshop modeling, doorstep delivery, and free skilled assembly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Visual representation card overlaps */}
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-amber-100 to-amber-250 shadow-lg border border-brand-accent/25 relative flex items-center justify-center p-8 text-brand-dark/15 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#C8872A_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
              <ShieldCheck className="w-32 h-32 stroke-[1] text-brand-accent/20" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left text-brand-dark">
                <p className="font-mono text-[9px] font-bold tracking-widest uppercase mb-1">MANDELA FACTORY WORKSHOP</p>
                <p className="font-serif font-bold text-base text-brand-dark">Authentic Timber Carvers off the Eastern Bypass · Nairobi</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: Showroom Statistics */}
      <div className="bg-brand-dark text-brand-bg py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center select-none font-sans">
          <div>
            <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-accent mb-1.5">500+</p>
            <p className="text-[10px] sm:text-xs text-brand-bg/50 uppercase tracking-widest font-mono">Premium Models</p>
          </div>
          <div>
            <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-accent mb-1.5">10+ Yrs</p>
            <p className="text-[10px] sm:text-xs text-brand-bg/50 uppercase tracking-widest font-mono">Serving Nairobi</p>
          </div>
          <div>
            <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-accent mb-1.5">100%</p>
            <p className="text-[10px] sm:text-xs text-brand-bg/50 uppercase tracking-widest font-mono">Assembly Guarantee</p>
          </div>
          <div>
            <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-accent mb-1.5">7 Days</p>
            <p className="text-[10px] sm:text-xs text-brand-bg/50 uppercase tracking-widest font-mono">Showroom Open</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Brand Core values */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-20 text-left select-none">
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">OUR COMMITMENTS</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">Showroom Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF7F2] p-8 border border-brand-border rounded-2xl flex flex-col items-start">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center text-brand-accent mb-5 font-serif font-bold text-lg select-all">🏆</div>
            <h3 className="font-serif font-bold text-lg text-brand-dark mb-2.5">Quality First</h3>
            <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
              We source raw Timber and Mahogany. No cheap fiberboards or composite wood substitutes that compromise integrity.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-8 border border-brand-border rounded-2xl flex flex-col items-start">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center text-brand-accent mb-5 font-serif font-bold text-lg select-all">🤝</div>
            <h3 className="font-serif font-bold text-lg text-brand-dark mb-2.5">Trust Always</h3>
            <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
              Transparent, fair timber pricing structures. Direct workshop coordinates with honest, reliable delivery timelines.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-8 border border-brand-border rounded-2xl flex flex-col items-start">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center text-brand-accent mb-5 font-serif font-bold text-lg select-all">🚚</div>
            <h3 className="font-serif font-bold text-lg text-brand-dark mb-2.5">Service Matters</h3>
            <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
              We remain fully accountable. Offering free doorstep transport and assemblies to ensure qualified setups.
            </p>
          </div>

        </div>
      </div>

      {/* SECTION 4: Team members */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-20 text-left select-none">
        
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">MANUAL ARTISANS</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">Our Handcrafters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, idx) => (
            <div key={idx} className="bg-[#FAF7F2] border border-brand-border/45 rounded-2xl p-6.5 text-left flex flex-col items-start">
              {/* Profile Avatar Placeholder */}
              <div className="w-14 h-14 rounded-full bg-brand-accent/15 flex items-center justify-center font-serif text-lg font-bold text-brand-accent mb-4.5">
                {m.name.charAt(0)}
              </div>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-0.5">{m.name}</h4>
              <p className="font-mono text-[9px] font-bold tracking-widest uppercase text-brand-accent mb-3">{m.role}</p>
              <p className="font-sans text-xs text-brand-muted leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* SECTION 5: Showroom Coordinates */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-brand-dark text-brand-bg rounded-3xl p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left relative overflow-hidden">
          
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 block">LOCAL SHOWROOM VISIT DESCRIPTION</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Come Touch & Feel<br />Our timber Pieces
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-brand-bg/75 leading-relaxed mb-8 max-w-md">
              There is nothing like observing natural grain and fine mortise fitting with your own eyes. Visit our showroom block off the Eastern Bypass, Nairobi. 
              We are open 7 days a week. Keep in touch on WhatsApp before your visit!
            </p>

            <div className="flex flex-col gap-3.5 mb-8 text-xs font-sans text-brand-bg/80">
              <p className="flex items-center gap-2">📍 Showroom address: Eastern Bypass, Nairobi, Kenya</p>
              <p className="flex items-center gap-2">🕒 Mon–Sat: 9.00 AM – 7.00 PM · Sun: 11.00 AM – 4.00 PM</p>
              <p className="flex items-center gap-2">📞 Phone line inquiries: +254 701 333358</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={directionsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark py-3.5 px-6 rounded-full font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-brand-dark" /> Get Showroom Directions
              </a>
              <a
                href={waLink("Hi Grass Wanjiku, I want to visit the Mandela Heritage showroom on the Eastern Bypass. Is Edwin Baraza available around to assist?")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-brand-bg py-3.5 px-6 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-sm border border-brand-bg/25"
              >
                <Phone className="w-4 h-4 text-brand-accent" /> WhatsApp Before you Visit
              </a>
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-100/10 to-brand-accent/15 border border-brand-accent/30 relative flex items-center justify-center p-8 opacity-90">
            <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center text-brand-accent/20">
              <Clock className="w-24 h-24 stroke-[1]" />
            </div>
            
            <div className="relative text-center select-none">
              <h3 className="font-serif font-bold text-xl text-white mb-1.5">📍 Showroom Coordinates</h3>
              <p className="font-sans text-xs text-brand-accent font-semibold mb-4">-1.2748849, 36.9725608</p>
              <p className="text-[10px] font-mono tracking-wider text-brand-bg/60 uppercase">Eastern Bypass, Nairobi</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
