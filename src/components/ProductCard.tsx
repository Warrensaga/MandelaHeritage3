/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { waProduct } from '../utils/whatsapp';
import { ProductData } from '../data/products';
import { getProductImage } from '../utils/images';

interface ProductCardProps {
  key?: any;
  product: ProductData;
  showLearnMore?: boolean;
  onWishlistToggle?: (slug: string) => void;
  isWishlisted?: boolean;
}

export default function ProductCard({
  product,
  onWishlistToggle,
  isWishlisted = false
}: ProductCardProps) {
  
  // Colors mapping for badge
  const badgeConfig: Record<string, string> = {
    "BEST SELLER": "bg-brand-accent text-brand-dark",
    "NEW": "bg-emerald-600 text-white",
    "SALE": "bg-red-500 text-white",
    "POPULAR": "bg-indigo-600 text-white"
  };

  const badgeClass = product.badge ? badgeConfig[product.badge] || "bg-brand-accent text-brand-dark" : "";

  return (
    <div
      id={`product-card-${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-border/40 bg-white p-3 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Image Canvas */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-50/70 border border-brand-border/10">
        
        {/* Floating Badges (Top Left) */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.badge && (
            <span className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md shadow-xs ${badgeClass}`}>
              {product.badge}
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md shadow-xs">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button (Top Right) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onWishlistToggle) onWishlistToggle(product.slug);
          }}
          className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-2 text-brand-dark backdrop-blur-xs transition-all duration-200 hover:bg-white hover:text-red-500 active:scale-90 shadow-xs cursor-pointer"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-4 w-4 transition-transform duration-300 ${isWishlisted ? "fill-red-500 text-red-500 scale-110" : "text-brand-dark hover:scale-105"}`}
          />
        </button>

        {/* High-quality Product Image */}
        <img
          src={getProductImage(product.slug, product.category)}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Product Content Details */}
      <div className="flex flex-1 flex-col pt-3 pb-1">
        
        {/* Category Badge Tracker */}
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#8A8070] uppercase">
          {product.categoryLabel}
        </span>
        
        {/* Title clamping for perfect alignment */}
        <h3 className="mt-1 text-sm sm:text-base font-serif font-bold text-brand-dark line-clamp-1 group-hover:text-brand-accent transition-colors">
          <Link to={`/shop/${product.slug}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>

        {/* Dynamic stars & sold counter */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 fill-current ${i < product.rating ? "text-amber-500" : "text-stone-300"}`}
              />
            ))}
          </div>
          {product.sold > 0 && (
            <span className="text-[10px] text-[#8A8070] font-sans">
              ({product.sold} sold)
            </span>
          )}
        </div>

        {/* Pricing & CTA Row */}
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-brand-border/10 pt-3">
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-[#8A8070] tracking-wider uppercase">PRICE</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm sm:text-base font-bold text-brand-dark">
                KES {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] line-through text-[#8A8070] opacity-80">
                  {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* View Details details controller */}
            <Link
              to={`/shop/${product.slug}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border hover:border-brand-dark hover:bg-brand-dark hover:text-white text-brand-dark transition-all duration-200"
              title="View Details"
            >
              <ShoppingBag className="h-4 w-4" />
            </Link>

            {/* Instant WhatsApp ordering option */}
            <a
              href={waProduct(product.name, `KES ${product.price.toLocaleString()}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center justify-center gap-1 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] px-3.5 text-xs font-bold text-white transition-all duration-200 active:scale-95 shadow-sm"
              title="Order on WhatsApp"
            >
              <span>Add</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
