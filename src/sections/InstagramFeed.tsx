/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  Clock, 
  PhoneCall
} from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';

interface ShowroomVideo {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  videoUrl: string;
  likes: string;
  timberSource: string;
  location: string;
}

const SHOWROOM_PLAYLIST: ShowroomVideo[] = [
  {
    id: 1,
    title: "Twin-Slat Dining & Credenza Set",
    subtitle: "Showroom Exhibition Masterwork",
    category: "01. SHOWROOM EXHIBIT",
    description: "Explore our physical showroom tour in Nairobi. This cinematic display showcases the elegant vertical-slat central pedestal table, circular-backed hand-upholstered premium linen chairs, and the matching bespoke groove-fronted buffet sideboard structured against traditional earthy backdrops.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-dining-table-in-a-modern-room-41581-large.mp4",
    likes: "4.9K Likes",
    timberSource: "Mvule Hardwood & Mahogany",
    location: "Nairobi Headquarters Showroom"
  },
  {
    id: 2,
    title: "Staged Residential Fine Dining Staging",
    subtitle: "Completed Home Installation",
    category: "02. COMPLETED RESIDENCY",
    description: "A close-up high-fidelity walkthrough of a fully completed private residential installation in Kilimani. Watch how our custom-crafted timber frames, brass accent details, premium finish surfaces, and organic botanicals combine to establish warmth and immediate structural elegance.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-decorating-a-table-for-dinner-with-plates-34284-large.mp4",
    likes: "3.2K Likes",
    timberSource: "Solid African Walnut",
    location: "Residential Suite, Kilimani"
  },
  {
    id: 3,
    title: "Minimalist Lounge & Floating Woodwork",
    subtitle: "Contemporary Architectural Living",
    category: "03. DESIGN CONCEPTS",
    description: "Experience the spacious layout of our modern living room configurations. Showcasing premium jointing systems, floating solid wood shelving units, low-profile central tea tables, and custom-cushioned loungers built to endure generations of laughter.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-elegant-minimalist-furniture-41578-large.mp4",
    likes: "2.8K Likes",
    timberSource: "Bespoke Nairobi Cedar & Teak",
    location: "Lounge Concept Staging"
  }
];

export default function InstagramFeed() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeVideo = SHOWROOM_PLAYLIST[activeIdx];


  return (
    <section id="showroom-cinematic-section" className="bg-[#FAF7F2] py-20 md:py-28 border-y border-brand-border/40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-[#C8872A] uppercase mb-3 block">
            CINEMATIC SHOWROOM WALKTHROUGH
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-[#1C1A14] tracking-tight leading-tight mb-4">
            Craftsmanship <span className="text-[#C8872A] italic font-normal">in Perpetual Motion</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#8A8070] leading-relaxed">
            Move past flat photographs. Experience the rich depths of real timber grain, masterfully hand-slatted sideboards, and ambient dining stagers through high-resolution cinematic viewports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Narrative Block & Selector */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="flex flex-col items-start">
              
              {/* Swahili "Pole Pole" craft mindset section */}
              <div className="relative border-l-2 border-[#C8872A] pl-5 py-2 mb-8 bg-amber-50/40 rounded-r-xl pr-4 w-full">
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#C8872A] block mb-1">
                  “POLE POLE, USIJALI SAFARI”
                </span>
                <p className="font-serif italic text-xs md:text-sm text-[#1C1A14]/90 leading-relaxed">
                  Slowly, slowly, trust the journey. Elite timber design is never rushed. Each linear vertical joint, hand-painted protective coat, and steam-bent curve is shaped with patient Nairobi mastery.
                </p>
              </div>

              <span className="font-mono text-[10px] font-bold tracking-wider text-[#8A8070] uppercase mb-4">
                CHOOSE STAGING DEMO
              </span>

              {/* Showcase Selector playlist tabs */}
              <div className="w-full flex flex-col gap-3.5 mb-8">
                {SHOWROOM_PLAYLIST.map((video, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={video.id}
                      onClick={() => setActiveIdx(idx)}
                      id={`tab-btn-${video.id}`}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-white border-[#C8872A]/70 shadow-[0_4px_24px_rgba(43,34,22,0.06)]' 
                          : 'bg-[#FAF7F2] border-[#E8E0D0]/40 hover:bg-[#FAF7F2]/80 hover:border-[#C8872A]/20'
                      }`}
                    >
                      <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-[#C8872A] text-white font-bold text-xs' : 'bg-[#E8E0D0]/60 text-[#8A8070] text-xs'
                      }`}>
                        {video.id}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-2">
                          <span className="block font-mono text-[9px] tracking-widest text-[#C8872A] uppercase font-bold">
                            {video.category}
                          </span>
                          {isActive && (
                            <span className="flex h-1.5 w-1.5 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8872A] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8872A]"></span>
                            </span>
                          )}
                        </div>
                        <span className="block font-serif text-sm font-bold text-[#1C1A14] mt-0.5">
                          {video.title}
                        </span>
                        <span className="block text-xs text-[#8A8070] mt-1.5 leading-relaxed line-clamp-2">
                          {video.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Premium details block */}
            <div className="border-t border-[#E8E0D0] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block font-serif font-bold text-sm text-[#1C1A14] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#C8872A]" />
                  Mandela Heritage Woodcraft
                </span>
                <span className="block font-mono text-[9px] tracking-widest text-[#8A8070] uppercase mt-1">
                  100% ETHICAL EAST AFRICAN HARDWOOD
                </span>
              </div>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                id="virtual-tour-btn"
                className="group inline-flex items-center justify-center gap-2 bg-[#1C1A14] hover:bg-[#C8872A] text-white py-3.5 px-6 rounded-full font-sans font-bold text-[11px] tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Book Live Video Call
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Wide Cinematic Player Block - Responsive, Self-Hosted */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="bg-white rounded-3xl p-5 border border-[#E8E0D0]/50 shadow-[0_15px_45px_rgba(43,34,22,0.05)] w-full">
              
              {/* Top metadata display */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E8E0D0]/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#1C1A14] flex items-center justify-center text-white text-[10px] font-serif">
                    M
                  </div>
                  <div>
                    <span className="block text-[11px] font-serif font-bold text-[#1C1A14]">
                      {activeVideo.title}
                    </span>
                    <span className="block text-[9px] font-mono tracking-widest text-[#8A8070] uppercase">
                      {activeVideo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-[#FAF7F2] border border-[#E8E0D0] text-[#C8872A] font-mono text-[9px] tracking-wider px-2 py-1 rounded-md uppercase font-semibold">
                    TIMBER: {activeVideo.timberSource}
                  </span>
                </div>
              </div>

              {/* Robust HTML5 Self-Hosted Widescreen Video Player */}
              <VideoPlayer 
                src={activeVideo.videoUrl} 
                className="w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-[#E8E0D0]/30"
                autoPlay={true}
                muted={true}
                loop={true}
                controls={false}
                showOverlayControls={true}
              />

              {/* Lower description and spec cards */}
              <div className="mt-5 text-left bg-[#FAF7F2] border border-[#E8E0D0]/40 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-md">
                  <h4 className="font-serif text-sm font-bold text-[#1C1A14] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#C8872A] shrink-0" />
                    {activeVideo.subtitle}
                  </h4>
                  <p className="text-xs text-[#8A8070] mt-1 leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 bg-white border border-[#E8E0D0]/30 rounded-lg py-2 px-3 self-start md:self-center shrink-0">
                  <Clock className="w-4 h-4 text-[#C8872A]" />
                  <div>
                    <span className="block text-[8px] font-mono tracking-wider text-[#8A8070] uppercase">REEL LENGTH</span>
                    <span className="block font-serif text-xs font-bold text-[#1C1A14]">30 Seconds Loop</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
