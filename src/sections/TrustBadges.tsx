/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lock, CreditCard, Truck, Hammer, Smile } from 'lucide-react';

export default function TrustBadges() {
  const badgeList = [
    {
      icon: Lock,
      title: "Secure Shopping",
      desc: "Direct SSL connections"
    },
    {
      icon: CreditCard,
      title: "M-Pesa Accepted",
      desc: "Instant ledger processing"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      desc: "On orders above KES 30K"
    },
    {
      icon: Hammer,
      title: "Free Installation",
      desc: "Assembled by specialists"
    },
    {
      icon: Smile,
      title: "Trusted In Nairobi",
      desc: "4.8/5 show average rating"
    }
  ];

  return (
    <section id="trust-badges-strip" className="bg-[#FAF7F2] py-8 border-t border-brand-border/45 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 md:divide-x md:divide-brand-border/60">
          
          {badgeList.map((badge, idx) => {
            const IconComp = badge.icon;

            return (
              <div key={idx} className={`flex items-center gap-3.5 ${idx > 0 ? "md:pl-6" : ""}`}>
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <IconComp className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-brand-dark leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] font-sans tracking-wide text-brand-muted uppercase mt-0.5">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
