/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { waLink } from '../utils/whatsapp';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Custom inquiry');
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email || !msg) return;
    setIsSubmitted(true);
  };

  return (
    <div id="contact-channels-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Page Headings */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            LIVE SHOWROOM COMMUNICATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            Get in <span className="text-brand-accent italic font-normal">Touch</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
            Stop by our physical Eastern Bypass catalog block, submit an email form, or connect immediately on WhatsApp to discuss custom dimensions or spatial staging packages.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels list */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-8 border border-brand-border rounded-3xl text-left select-all">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-1">
              DIRECT OFFICE DEPARTMENTS
            </span>
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Our Coordinates</h2>

            <div className="flex flex-col gap-6.5 text-xs sm:text-sm font-sans mb-10 leading-normal">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-dark">Physical Showroom Address</h4>
                  <p className="text-brand-muted mt-1 leading-relaxed">
                    Eastern Bypass, Ruiru (Opposite Shell Station), Greater Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Phone className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-dark">Phone Lines & Support</h4>
                  <p className="text-brand-muted mt-1">
                    +254 701 333358 (Eastern Bypass Sales Desk)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-dark">Email Inquiries</h4>
                  <p className="text-brand-muted mt-1">
                    info@mandelaheritagefurnitures.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Clock className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-brand-dark">Showroom Working Hours</h4>
                  <p className="text-brand-muted mt-1 leading-relaxed">
                    Monday – Saturday: 9.00 AM – 7.00 PM<br />
                    Sunday: 11.00 AM – 4.00 PM
                  </p>
                </div>
              </div>

            </div>

            <hr className="border-brand-border/45 mb-8" />

            {/* Direct Whatsapp button */}
            <h3 className="font-serif font-bold text-base text-brand-dark mb-2.5">Prefer Immediate live Chat?</h3>
            <p className="font-sans text-xs text-brand-muted leading-relaxed mb-6">Talk directly to master carpenter Arthur Mandela or designer Grace Wanjiku instantly.</p>
            <a
              href={waLink("Hi, I'm reaching out from your contact form and would like to discuss custom home furnishings or a showroom visit.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current stroke-[0.5]" />
              Chat on WhatsApp Now
            </a>

          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 select-none">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-[#FAF7F2] p-8 border border-brand-border rounded-3xl shadow-sm text-left font-sans">
                <div className="border-b border-brand-border/40 pb-4 mb-6">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-1">
                    CORRESPONDENCE RECORDING
                  </span>
                  <h3 className="font-serif font-bold text-xl text-brand-dark">Send an Written Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col">
                    <label htmlFor="form-first-name" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5">First name</label>
                    <input
                      id="form-first-name"
                      type="text"
                      required
                      placeholder="e.g. Grace"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-last-name" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5">Last name</label>
                    <input
                      id="form-last-name"
                      type="text"
                      required
                      placeholder="e.g. Wambui"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col">
                    <label htmlFor="form-phone" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5">Active Phone Lines (e.g. WhatsApp)</label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="e.g. 0701333358"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-email" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5">Email address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. grace@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <label htmlFor="form-subject" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5">Inquiry Subject</label>
                  <select
                    id="form-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-brand-bg rounded-xl py-3.5 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm cursor-pointer"
                  >
                    <option value="General Custom inquiry">General Custom Inquiry</option>
                    <option value="Custom Size timber Carpentry consultation">Custom Size Sizing Consultation</option>
                    <option value="Complete Home / Office furniture packages">Full Home / Office Staging</option>
                    <option value="Showroom directions & order tracking queries">Order Status Inquiries</option>
                  </select>
                </div>

                <div className="flex flex-col mb-6">
                  <label htmlFor="form-message" className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-1.5">Message detail</label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    placeholder="Hello Arthur, I am interested in custom 3-Seater dimensions. Could you model it in cypress?"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="bg-brand-bg rounded-xl py-3 px-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-3.5 px-6 rounded-xl font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 stroke-[2]" />
                  Submit Inquiry Message
                </button>
              </form>
            ) : (
              <div className="bg-brand-accent/15 border-2 border-brand-accent/25 p-12 rounded-3xl shadow-inner text-center animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-14 h-14 text-brand-accent animate-bounce mx-auto mb-4" />
                <h3 className="font-serif font-bold text-2xl text-brand-dark mb-1">Inquiry Submitted!</h3>
                <h4 className="font-sans text-xs text-brand-accent font-bold tracking-widest uppercase mb-4">
                  Thank you, {firstName} {lastName}!
                </h4>
                <p className="font-sans text-xs sm:text-sm text-brand-dark/85 leading-relaxed max-w-sm mx-auto mb-8">
                  We have recorded your email address (<span className="font-semibold">{email}</span>) and message detail concerning: <span className="font-semibold italic font-serif">"{subject}"</span>. A Mandela Heritage staging expert will call you on your WhatsApp number (<span className="font-semibold font-mono">{phone}</span>) shortly!
                </p>
                <button
                  onClick={() => {
                    setFirstName('');
                    setLastName('');
                    setPhone('');
                    setEmail('');
                    setMsg('');
                    setIsSubmitted(false);
                  }}
                  className="bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-2.5 px-6 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  [ Send Another Inquiry ]
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
