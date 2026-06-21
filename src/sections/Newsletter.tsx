/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="newsletter-subscription" className="bg-brand-bg py-24 select-none relative overflow-hidden">
      
      {/* Decorative Blur graphics */}
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-6 text-left">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
            WEEKLY BRIEFINGS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-wide mb-4">
            Stay in the <span className="text-brand-accent italic font-normal">Loop</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed max-w-lg">
            New handcrafted furniture arrivals, limited workshop runs, design trends, and exclusive showroom clearance discounts. No spam — only genuine, good things.
          </p>
        </div>

        {/* Right column: Form Fields */}
        <div className="lg:col-span-6 text-left">
          {!isSubmitted ? (
            <form onSubmit={handleSubscribe} className="bg-[#FAF7F2] p-8 border border-brand-border/45 rounded-2xl shadow-md w-full max-w-xl">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {/* First name field */}
                <div className="flex-1 flex flex-col">
                  <label htmlFor="news-first-name" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5 text-left">
                    First Name
                  </label>
                  <input
                    id="news-first-name"
                    type="text"
                    required
                    placeholder="e.g. Samuel"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                  />
                </div>

                {/* Email address field */}
                <div className="flex-1 flex flex-col">
                  <label htmlFor="news-email" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5 text-left">
                    Email address
                  </label>
                  <input
                    id="news-email"
                    type="email"
                    required
                    placeholder="e.g. sam@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                  />
                </div>
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                className="w-full bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-3.5 px-6 rounded-xl font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 stroke-[2]" />
                Subscribe to Showcase
              </button>
            </form>
          ) : (
            <div className="bg-brand-accent/15 border-2 border-brand-accent/20 p-8 rounded-2xl shadow-inner w-full max-w-xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle className="w-12 h-12 text-brand-accent animate-bounce mb-3.5" />
              <h4 className="font-serif font-bold text-xl text-brand-dark mb-1">
                Thank you, {firstName}!
              </h4>
              <p className="font-sans text-xs sm:text-sm text-brand-dark/85 leading-relaxed">
                You've successfully subscribed. We have recorded your email address (<span className="font-semibold">{email}</span>) and will send you our next newsletter catalog!
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
