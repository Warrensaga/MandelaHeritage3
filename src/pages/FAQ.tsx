/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, CornerDownRight } from 'lucide-react';
import { waLink } from '../utils/whatsapp';

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    q: "Do you deliver across Nairobi?",
    a: "Yes, we deliver across all metropolitan areas of Nairobi including Westlands, Karen, Kilimani, Lavington, Runda, Muthaiga, Gigiri, South B/C, and beyond. Doorstep transport is completely FREE for qualified orders exceeding KES 30,000."
  },
  {
    id: 2,
    q: "Is installation included?",
    a: "Absolutely! Assembly and room installation stage services are 100% free with allqualified orders. Our delivery crew includes skilled carpenters who will assemble tables, center bed slats, and arrange couches in your designated space."
  },
  {
    id: 3,
    q: "Can I inspect the timber designs before purchasing?",
    a: "Certainly! You are warmly invited to visit our physical showroom located off the Eastern Bypass, Nairobi. This lets you inspect timber finish varnishes, cushion density, and wood grains in person. We are open Monday through Sunday."
  },
  {
    id: 4,
    q: "What payment systems do you accept?",
    a: "We accept Lipa na M-Pesa (Buy Goods Till Number directly registered to Mandela Heritage), bank wire transfers, and cash collections at our Eastern Bypass showroom check. Standard deposits apply on customized workshop orders."
  },
  {
    id: 5,
    q: "Can you stage or furnish my entire home or office?",
    a: "Yes, this is our core division expertise! We manage comprehensive property transformations from spatial mapping configurations to final staging styling. Our packages start from KES 150,000 for homes and Custom Quotations for businesses."
  },
  {
    id: 6,
    q: "Do you build custom size or custom fabric furniture?",
    a: "Yes! Since we operate local carpentry workshops in Nairobi, we can readily customize frame lengths, timber finishes, and upholstery colors to suit your spatial parameters. Simply consult Grace Wanjiku on WhatsApp to initiate a custom order."
  },
  {
    id: 7,
    q: "How long does direct home delivery take?",
    a: "Standard in-stock display items are dispatched within 1–3 working days. For bespoke, custom-sized carpentry models modeled in our workshop, completion stands between 7-14 working days depending on structural complexity."
  },
  {
    id: 8,
    q: "Can I log returns or exchange items?",
    a: "Yes, we support full customer satisfaction. We accept returns or direct model exchanges within 30 days of shipment, provided the timber or fabrics are in their immaculate, unmodified original state with no physical blemishes."
  },
  {
    id: 9,
    q: "Do you offer structural product warranties?",
    a: "Yes. Every individual Mandela Heritage furniture item is secured under our standard 1-Year structural timber warranty framework, protecting against carpentry joinery slips, structural splits, or framing structural wraps."
  },
  {
    id: 10,
    q: "How do I place an official order with you?",
    a: "Order placement is fast! Pick your items into your wishlist/cart on this catalog website, then click 'Send Order on WhatsApp' to dispatch your selection to our sales rep. We will confirm dates, coordinates, and details in under 1 hour."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div id="faq-information-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Page Headings */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            ANSWERS CONCERNING CRAFT & STAGING
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            Frequently Asked <span className="text-brand-accent italic font-normal">Questions</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
            Quickly browse through answers covering timber sourcing details, customized showroom order configurations, return timelines, and Nairobi shipping terms.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4 mb-16">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#FAF7F2] border border-brand-border rounded-2xl overflow-hidden shadow-sm transition-all focus:outline-none"
              >
                
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5.5 text-left font-serif font-bold text-base md:text-lg text-brand-dark cursor-pointer select-none"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-brand-accent font-mono text-xs mt-1">Q{faq.id}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-brand-accent" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Animated content body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5.5 pt-0 border-t border-brand-border/45 font-sans text-xs sm:text-sm text-brand-muted leading-relaxed flex items-start gap-2.5">
                        <CornerDownRight className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout block */}
        <div className="bg-brand-dark text-brand-bg rounded-3xl p-8 text-center flex flex-col items-center">
          <h3 className="font-serif font-bold text-xl text-white mb-2 leading-tight">Still have unlisted question points?</h3>
          <p className="font-sans text-xs text-brand-bg/70 leading-relaxed mb-6 max-w-sm">We are here to help. Reach out to Grace Wanjiku directly on live support.</p>
          
          <a
            href={waLink("Hi Grace, I checked your FAQ and want to ask a specialized question regarding Mandela Heritage products.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-accent text-brand-dark py-3 px-6 rounded-xl font-sans font-bold text-xs tracking-wider uppercase shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            Direct Inquiry on WhatsApp
            <ArrowRight className="w-3.5 h-3.5 text-brand-dark stroke-[2.5]" />
          </a>
        </div>

      </div>
    </div>
  );
}
