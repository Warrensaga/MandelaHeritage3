/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, ArrowUp } from 'lucide-react';
import { waLink } from '../utils/whatsapp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-brand-dark text-brand-bg pt-16 pb-8 border-t border-brand-accent/20 relative select-none">
      
      {/* Scroll to top floating style button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-16 w-12 h-12 rounded-full bg-brand-accent text-brand-dark hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center cursor-pointer group"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 stroke-[2.5]" />
      </button>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-12 text-left">
          
          {/* Main info Column */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide uppercase text-white">
                MANDELA HERITAGE
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] font-semibold text-brand-accent uppercase -mt-0.5">
                FURNITURE & FURNISHING
              </span>
            </div>
            
            <p className="text-xs text-brand-bg/75 leading-relaxed font-sans max-w-sm">
              Handcrafting premium, timeless timber furniture and design installations for modern Nairobi homes and office setups. 
              Open everyday along the Eastern Bypass.
            </p>

            {/* Address & Hours */}
            <div className="text-xs text-brand-bg/60 font-sans flex flex-col gap-1">
              <p>📍 Showroom: Eastern Bypass, Nairobi, Kenya</p>
              <p>🕒 Mon–Sat 9AM–7PM · Sun 11AM–4PM</p>
              <p>📞 Phone: +254 701 333358</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-brand-bg/20 flex items-center justify-center text-brand-bg/85 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-brand-bg/20 flex items-center justify-center text-brand-bg/85 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-brand-bg/20 flex items-center justify-center text-brand-bg/85 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-brand-bg/20 flex items-center justify-center text-brand-bg/85 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* SHOP COLUMN */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] font-bold tracking-wider uppercase text-brand-accent">
              SHOP SPECIALTIES
            </h4>
            <div className="flex flex-col gap-2 text-xs text-brand-bg/75 font-sans">
              <Link to="/shop?category=sofas" className="hover:text-brand-accent transition-colors">Sofas & Lounge Chairs</Link>
              <Link to="/shop?category=bedroom" className="hover:text-brand-accent transition-colors">Bedroom Suites & Beds</Link>
              <Link to="/shop?category=dining" className="hover:text-brand-accent transition-colors">Dining Tables & Sideboards</Link>
              <Link to="/shop?category=office" className="hover:text-brand-accent transition-colors">Executive Office Desks</Link>
              <Link to="/shop?category=accent" className="hover:text-brand-accent transition-colors">Accent Tables & TV Units</Link>
              <Link to="/shop?category=packages" className="hover:text-brand-accent transition-colors">Complete Home Packages</Link>
              <Link to="/shop?filter=new" className="hover:text-amber-400 transition-colors">New Showroom Arrivals</Link>
              <Link to="/shop?filter=sale" className="hover:text-red-400 transition-colors">Direct Clearance Sale</Link>
            </div>
          </div>

          {/* COMPANY COLUMN */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] font-bold tracking-wider uppercase text-brand-accent">
              OUR COMPANY
            </h4>
            <div className="flex flex-col gap-2 text-xs text-brand-bg/75 font-sans">
              <Link to="/about" className="hover:text-brand-accent transition-colors">About Showroom</Link>
              <Link to="/about" className="hover:text-brand-accent transition-colors">Our Timber Story</Link>
              <Link to="/projects" className="hover:text-brand-accent transition-colors">Furnishing Projects</Link>
              <Link to="/faq" className="hover:text-brand-accent transition-colors">Customer FAQs</Link>
              <Link to="/delivery" className="hover:text-brand-accent transition-colors">Delivery Timeline</Link>
              <Link to="/contact" className="hover:text-brand-accent transition-colors">Location Directions</Link>
              <a href={waLink()} className="hover:text-brand-accent transition-colors">Custom Timber Booking</a>
            </div>
          </div>

          {/* SUPPORT COLUMN */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] font-bold tracking-wider uppercase text-brand-accent">
              SUPPORT & TRUST
            </h4>
            <div className="flex flex-col gap-2 text-xs text-brand-bg/75 font-sans">
              <Link to="/delivery" className="hover:text-brand-accent transition-colors">Delivery Info & Rates</Link>
              <Link to="/delivery" className="hover:text-brand-accent transition-colors">Free Assembly Guidelines</Link>
              <Link to="/faq" className="hover:text-brand-accent transition-colors">Return Policy (30 Days)</Link>
              <Link to="/contact" className="hover:text-brand-accent transition-colors">Product Showroom Maps</Link>
              <a href={waLink("Hi, I'd like to ask about some custom sizing options.")} target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors font-bold text-amber-300">
                💬 Chat with live representative
              </a>
              <Link to="/contact" className="hover:text-brand-accent transition-colors">Warranty & Claim Forms</Link>
              <span className="text-[10px] text-brand-bg/40 font-mono inline-block mt-2">
                SECURE SSL CHECKOUT VIA MPESA
              </span>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <hr className="border-brand-bg/10 my-6" />

        {/* Bottom copyright info and trust seals */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center select-none text-[10px] sm:text-xs text-brand-bg/60 font-sans">
          <p>© 2026 Mandela Heritage Furnitures · Eastern Bypass, Nairobi · All rights reserved</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-medium text-brand-accent/90">
            <span>✓ M-Pesa Accepted</span>
            <span>·</span>
            <span>✓ Free Assembly Included</span>
            <span>·</span>
            <span>✓ Delivery Nairobi-Wide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
