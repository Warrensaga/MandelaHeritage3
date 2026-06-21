/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass, Car, Train, Milestone, Sparkles } from 'lucide-react';

export default function LocationPage() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  // Physical coordinates for Ruiru Eastern Bypass opposite Shell
  const lat = -1.196395;
  const lng = 36.953578;
  const address = "Eastern Bypass, Ruiru (Opposite Shell Station), Greater Nairobi, Kenya";
  
  // Real embedded Google Maps source pointing to the coordinates on the Eastern Bypass
  const mapIframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9482705051834!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f40076a0d42cf%3A0x8e83348ea61eb00e!2sShell!5e0!3m2!1sen!2ske!4v1718918231234!5m2!1sen!2ske`;

  // Calculate if the showroom is currently open based on Kenya Time (UTC +3)
  useEffect(() => {
    const checkOpenStatus = () => {
      // Get current date under UTC, then convert to Nairobi (UTC+3)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const kenyaTime = new Date(utc + (3600000 * 3));
      
      const day = kenyaTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
      const hour = kenyaTime.getHours();
      const minutes = kenyaTime.getMinutes();
      const currentDecimalTime = hour + minutes / 60;

      // Monday - Saturday: 9:00 AM - 7:00 PM (9 to 19)
      // Sunday: 11:00 AM - 4:00 PM (11 to 16)
      let open = false;
      if (day >= 1 && day <= 6) {
        if (currentDecimalTime >= 9 && currentDecimalTime < 19) {
          open = true;
        }
      } else if (day === 0) { // Sunday
        if (currentDecimalTime >= 11 && currentDecimalTime < 16) {
          open = true;
        }
      }
      setIsOpenNow(open);

      // Render hours string
      const timeFormatter = new Intl.DateTimeFormat('en-KE', {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTimeStr(timeFormatter.format(kenyaTime));
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="showroom-location-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Page Title Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            VISIT THE PHYSICAL SHOWROOM
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            Showroom <span className="text-brand-accent italic font-normal">Location</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
            Experience the exquisite kiln-dried timbers, premium fabrics, and touch-finished solid wood joints firsthand at our experiential showroom block.
          </p>
        </div>

        {/* Dynamic Status Banner */}
        <div className="mb-10 bg-[#FAF7F2] border border-brand-border/60 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className={`relative flex h-3 w-3`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <div>
              <p className="font-serif font-bold text-sm text-brand-dark">
                {isOpenNow ? "Showroom is Currently Open Now!" : "Showroom is Currently Closed"}
              </p>
              <p className="text-xs text-brand-muted font-mono">
                Current Showroom Local Time: <span className="text-brand-accent font-semibold">{currentTimeStr || "Nairobi Time"}</span>
              </p>
            </div>
          </div>
          
          <div className="text-left xs:text-right">
            <p className="text-xs font-serif font-medium text-brand-dark">Our Schedule:</p>
            <p className="text-[11px] text-brand-muted font-mono uppercase">
              Mon – Sat: 9am – 7pm · Sun: 11am – 4pm
            </p>
          </div>
        </div>

        {/* Master Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Embed Google Maps (Large Frame) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative w-full flex-grow min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden border border-brand-border shadow-md group bg-brand-surface">
              <iframe
                title="Mandela Heritage Furniture Showroom on Google Maps"
                src={mapIframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter saturate-105 contrast-95"
              ></iframe>
              
              {/* Floating directional quick-badge overlay */}
              <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md text-white border border-white/10 rounded-2xl p-4 max-w-xs text-left select-all shadow-xl hidden sm:block z-10 font-sans pointer-events-auto">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif font-bold text-xs text-white">Showroom Hub</h5>
                    <p className="text-[10px] text-brand-bg/85 mt-1 leading-normal">
                      Eastern Bypass, Ruiru (Opposite Shell Station), Nairobi, Kenya
                    </p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-brand-accent font-bold mt-2.5 font-mono tracking-wider hover:underline"
                    >
                      GET GPS ROUTE <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Action controls under map */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 bg-brand-surface border border-brand-border/40 p-4 rounded-xl shadow-sm">
              <span className="text-[11px] font-mono font-medium text-brand-muted tracking-wide flex items-center gap-1.5 uppercase">
                <Compass className="w-4 h-4 text-brand-accent" />
                Coordinates: {lat.toFixed(5)}° S, {lng.toFixed(5)}° E
              </span>

              <div className="flex gap-2">
                <a
                  href={`https://maps.google.com/?q=${lat},${lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#faf7f2] hover:bg-brand-accent/15 border border-brand-border hover:border-brand-accent/50 text-brand-dark py-2 px-4 rounded-lg font-mono text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Larger Map
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-2 px-4 rounded-lg font-mono text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-accent group-hover:text-brand-dark" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direction guides and details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Direct Coordinates card */}
            <div className="bg-[#FAF7F2] p-6 border border-brand-border rounded-3xl text-left shadow-sm">
              <span className="font-mono text-[9px] font-bold tracking-widest text-brand-accent uppercase block mb-1">
                LOCATION SNAPSHOT
              </span>
              <h3 className="font-serif font-bold text-xl text-brand-dark mb-4">Location Details</h3>
              
              <div className="flex flex-col gap-4 font-sans text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-brand-dark text-xs">Physical Coordinates</h5>
                    <p className="text-brand-muted mt-0.5 leading-relaxed">
                      Opposite Shell Petrol Station, Eastern Bypass Roads, Ruiru, Nairobi outer ring
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                    <Milestone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-brand-dark text-xs">Notable Landmarks</h5>
                    <p className="text-brand-muted mt-0.5 leading-relaxed">
                      Directly opposite the Shell Service Station on the Eastern Bypass, neighboring the major residential development zones of Ruiru & Kamakis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-brand-dark text-xs">Showroom Contact Desk</h5>
                    <p className="text-brand-muted mt-0.5 font-mono">
                      +254 701 333358
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Driving directions card */}
            <div className="bg-brand-surface p-6 border border-brand-border rounded-3xl text-left flex-grow shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] font-bold tracking-widest text-brand-accent uppercase block mb-1">
                  TRANSIT & LOGISTICS
                </span>
                <h3 className="font-serif font-bold text-base text-brand-dark mb-4">How to Get Here</h3>

                <div className="flex flex-col gap-4 font-sans text-xs">
                  <div className="flex gap-3">
                    <Car className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif font-bold text-brand-dark text-[11px] uppercase tracking-wider">Driving from Nairobi CBD (Thika Rd)</p>
                      <p className="text-brand-muted mt-0.5 leading-relaxed text-[11px]">
                        Take Thika Road Superhighway toward Thika. Underpass the Eastern Bypass flyover and take the slip road onto the Eastern Bypass towards Ruiru. Keep left and proceed about 1.5km. We are on the left, directly opposite the Shell Service Station.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Train className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif font-bold text-brand-dark text-[11px] uppercase tracking-wider">Public Transit (Matatu Directions)</p>
                      <p className="text-brand-muted mt-0.5 leading-relaxed text-[11px]">
                        Board Matatu route number 45 or any Thika-bound commuter from CBD. Alight at Ruiru Underpass or Eastern Bypass junction, board a local connecting bypass matatu or bike and request to alight at "Shell Bypass".
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-brand-border/40 text-center bg-brand-accent/5 rounded-xl p-3">
                <p className="text-[10px] text-brand-muted font-mono leading-normal">
                  <Sparkles className="w-3.5 h-3.5 text-brand-accent inline-block mr-1 -mt-0.5 fill-current" />
                  We have dedicated customer parking slots and high-security surveillance with on-premises guides.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
