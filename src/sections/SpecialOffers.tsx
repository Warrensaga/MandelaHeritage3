/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

interface SpecialOffersProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
}

export default function SpecialOffers({ wishlist, onWishlistToggle }: SpecialOffersProps) {
  // Filter items in the sale catalog
  const saleProducts = products.filter(p => p.isSale || p.badge === 'SALE').slice(0, 3);

  return (
    <section id="special-offers-section" className="bg-[#FAF7F2] py-20 border-y border-brand-border/40 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-5 mb-10 text-left">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
              LIMITED TIME DISCOUNTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-wide flex items-center gap-2">
              Special <span className="text-brand-accent italic font-normal">Offers</span>
              <Tag className="w-5 h-5 text-red-500 animate-bounce hidden sm:inline-block" />
            </h2>
          </div>
          <Link
            to="/shop?filter=sale"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group"
          >
            Explore clearance items
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Target 3 Cards on Sale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {saleProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              showLearnMore={true}
              onWishlistToggle={onWishlistToggle}
              isWishlisted={wishlist.includes(p.slug)}
            />
          ))}
        </div>

        {/* Small Notice Disclaimer */}
        <div className="text-center">
          <p className="text-xs text-brand-muted/80 italic font-sans">
            * Special promotional offers valid only while showroom stock lasts. Contact a Mandela Heritage representative on WhatsApp to confirm delivery dates.
          </p>
        </div>

      </div>
    </section>
  );
}
