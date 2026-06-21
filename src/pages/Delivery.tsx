/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Check, MapPin, Truck, Hammer, ShieldAlert, ArrowRight } from 'lucide-react';
import { waLink } from '../utils/whatsapp';

interface TimelineStep {
  idx: string;
  icon: string;
  title: string;
  desc: string;
}

const steps: TimelineStep[] = [
  {
    idx: "01",
    icon: "📞",
    title: "Order on WhatsApp",
    desc: "Send your wishlist selection, custom sizing, or packages choice. Representatives reply within 1 hour."
  },
  {
    idx: "02",
    icon: "✅",
    title: "Confirm Availability",
    desc: "We verify active showroom stock, timber details, and schedules directly with Edwin Baraza."
  },
  {
    idx: "03",
    icon: "🚚",
    title: "Deliver to Your Door",
    desc: "Our dispatch truck handles transport directly to your property floor in absolute safety."
  },
  {
    idx: "04",
    icon: "🔧",
    title: "Assemble & Install",
    desc: "Mandela specialists unbox, align, and construct everything, ensuring robust fittings for no extra cost."
  }
];

const neighborhoods = [
  "Westlands", "Karen", "Kilimani", "Lavington", "Runda",
  "Muthaiga", "Gigiri", "Parklands", "Upper Hill", "Hurlingham",
  "South B", "South C", "Embakasi", "Utawala", "Ruai",
  "Donholm", "Fedha", "Tassia", "Imara Daima", "Kasarani",
  "Roysambu", "Kahawa", "Zimmerman", "Buruburu", "Umoja",
  "Kayole", "Pipeline", "Githurai", "Thika Road", "Eastern Bypass"
];

export default function Delivery() {
  return (
    <div id="delivery-info-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Page Heading */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            DOORSTEP WHITE-GLOVE DEPLOYMENTS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            Delivery & <span className="text-brand-accent italic font-normal">Installation</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
            Everything you need to know about our swift shipping timelines, covered Nairobi estates, and 100% free professional installation rules.
          </p>
        </div>

        {/* SECTION 1: How it Works Timeline */}
        <div className="mb-20">
          <div className="text-left mb-10 max-w-md">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-1">
              CHOREOGRAPHED DISPATCH STAGES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((st, i) => (
              <div key={st.idx} className="bg-[#FAF7F2] p-6.5 rounded-2xl border border-brand-border/40 text-left flex flex-col justify-between relative group hover:border-brand-accent/50 transition-colors">
                <div>
                  <div className="absolute top-4 right-4 font-serif text-2xl font-bold text-brand-accent/15 select-none font-bold">
                    {st.idx}
                  </div>
                  <span className="text-2xl mb-4 block select-all">{st.icon}</span>
                  <h3 className="font-serif font-bold text-lg text-brand-dark mb-1.5">{st.title}</h3>
                  <p className="font-sans text-xs text-brand-muted leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Coverage Areas grid list */}
        <div className="mb-20">
          <div className="text-left mb-8 max-w-md">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-1">
              NAIROBI METROPOLITAN REACH
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">Delivery Coverage</h2>
          </div>

          <div className="bg-[#FAF7F2] border border-brand-border rounded-2xl p-8 text-left select-all">
            <p className="font-serif font-bold text-lg text-brand-dark mb-6 flex items-center gap-1">
              <MapPin className="w-5 h-5 text-brand-accent animate-bounce" />
              We Deliver & Install across All Nairobi Estates:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 text-xs font-sans text-brand-dark/85 font-medium uppercase font-semibold">
              {neighborhoods.map((n, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></span>
                  <span>{n}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-brand-muted mt-8 leading-relaxed font-sans normal-case italic">
              * Living slightly outside of the greater Nairobi metropolitan area (e.g. Ruiru, Juja, Thika, Athi River, Kitengela)? Get in touch on WhatsApp — we regularly make transport concessions for custom clients!
            </p>
          </div>
        </div>

        {/* SECTION 3: Cost details & WhatsApp Call */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-4">
          
          <div className="col-span-1 md:col-span-12 lg:col-span-8 bg-[#FAF7F2] border border-brand-border p-8 rounded-2xl text-left flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-1">TARIFF STRUCTURE</span>
              <h3 className="font-serif font-bold text-xl text-brand-dark mb-4">Rates & Timelines</h3>
              
              <div className="flex flex-col gap-4 text-xs sm:text-sm font-sans text-brand-muted leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><Check className="w-3 h-3 stroke-[3]" /></div>
                  <p><span className="font-semibold text-brand-dark">FREE Delivery:</span> Included automatically for qualified orders sum above KES 30,000.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><Check className="w-3 h-3 stroke-[3]" /></div>
                  <p><span className="font-semibold text-brand-dark">Showroom Assembly setup:</span> Always 100% Free with all orders. Handled professionally on location.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><Check className="w-3 h-3 stroke-[3]" /></div>
                  <p><span className="font-semibold text-brand-dark">Small Items transport:</span> From KES 500 depending on exact geographical coordinates.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><Check className="w-3 h-3 stroke-[3]" /></div>
                  <p><span className="font-semibold text-brand-dark">Express Dispatch options:</span> Same day dispatch available for pre-assembled stock display selections.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-brand-dark text-brand-bg rounded-2xl p-8 text-left border border-brand-accent/20">
            <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-brand-accent mb-2 block">DISPATCH DIRECTS</span>
            <h3 className="font-serif font-bold text-lg text-white mb-2 leading-tight">Got Delivery Concerns?</h3>
            <p className="font-sans text-xs text-brand-bg/70 leading-relaxed mb-6">Ask Edwin Baraza directly on WhatsApp. We coordinate flexible scheduling options readily.</p>
            
            <a
              href={waLink("Hi Edwin, I am placing an order and want to double check delivery times and free installation parameters. Can you assist?")}
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center inline-flex items-center gap-1.5 bg-brand-accent text-brand-dark py-3 px-4 rounded-xl font-sans font-bold text-xs tracking-wider uppercase shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Consult Dispatch Representative
              <ArrowRight className="w-3.5 h-3.5 text-brand-dark stroke-[2.5]" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
