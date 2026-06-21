/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function SocialProofTicker() {
  const tickerItems = [
    "⭐ 4.0 Google Rating",
    "✅ 500+ Products",
    "🚚 Nairobi-Wide Delivery",
    "🔧 Free Professional Installation",
    "📞 Reply Within 1 Hour",
    "💳 M-Pesa Accepted",
    "⭐ 4.0 Google Rating",
    "✅ 500+ Products",
    "🚚 Nairobi-Wide Delivery",
    "🔧 Free Professional Installation",
    "📞 Reply Within 1 Hour",
    "💳 M-Pesa Accepted"
  ];

  return (
    <section id="social-proof-ticker" className="bg-brand-accent text-brand-dark py-3.5 overflow-hidden border-y border-brand-accent/20 z-10 select-none relative flex">
      <div className="animate-ticker-fast whitespace-nowrap flex py-0 px-2 uppercase text-xs font-mono font-bold tracking-wider hover-pause gap-12">
        {tickerItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2">
            {item}
          </span>
        ))}
        {/* Mirror duplication for perfect continuous slide */}
        {tickerItems.slice(0, 6).map((item, idx) => (
          <span key={`dup-${idx}`} className="flex items-center gap-2">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
