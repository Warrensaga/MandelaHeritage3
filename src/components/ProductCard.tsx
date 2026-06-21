/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Star, Sofa, Bed, Utensils, Briefcase, Sparkles, Box } from 'lucide-react';
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

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  sofas: Sofa,
  bedroom: Bed,
  dining: Utensils,
  office: Briefcase,
  accent: Sparkles,
  packages: Box
};

export default function ProductCard({
  product,
  showLearnMore = true,
  onWishlistToggle,
  isWishlisted = false
}: ProductCardProps) {
  const IconComponent = categoryIcons[product.category] || Sofa;

  // Let's set a gradient based on the product category or ID for beautiful deterministic variety
  const gradients = [
    "from-amber-50 to-orange-100/50",
    "from-stone-50 to-stone-100",
    "from-orange-50 to-amber-100/40",
    "from-gray-50 to-stone-100/80"
  ];
  const gradient = gradients[product.id % gradients.length];

  // Colors mapping for badge
  const badgeConfig = {
    "BEST SELLER": "bg-brand-accent text-brand-dark mr-2",
    "NEW": "bg-emerald-500 text-white mr-2",
    "SALE": "bg-red-500 text-white mr-2",
    "POPULAR": "bg-purple-600 text-white mr-2"
  };

  const badgeClass = product.badge ? badgeConfig[product.badge] || "bg-brand-accent text-brand-dark" : "";

  return (
    <div
      id={`product-card-${product.slug}`}
      className="bg-brand-surface rounded-2xl overflow-hidden border border-brand-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full"
    >
      {/* Image Area with gorgeous real furniture photograph */}
      <div className="aspect-[4/5] relative flex items-center justify-center overflow-hidden bg-brand-bg/30">
        <img
          src={getProductImage(product.slug, product.category)}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle overlay shading for elegant card visual depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-brand-dark/5 opacity-50"></div>

        {/* Floating Badges (Top Left) */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm ${badgeClass}`}>
              {product.badge}
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              % PRICE DROP
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
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-brand-dark hover:bg-white hover:text-red-500 active:scale-90 transition-all shadow-sm"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4.5 h-4.5 ${isWishlisted ? "fill-red-500 text-red-500 animate-pulse" : "text-brand-dark"}`}
          />
        </button>

        {/* Quick Order WhatsApp Button (Bottom Right) */}
        <a
          href={waProduct(product.name, `KES ${product.price.toLocaleString()}`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-brand-accent hover:bg-brand-accent/90 flex items-center justify-center text-brand-dark shadow-md active:scale-90 transition-all hover:scale-105 group/btn"
          title="Order instantly on WhatsApp"
        >
          <Plus className="w-5 h-5 transition-transform group-hover/btn:rotate-90 text-brand-dark stroke-[2.5]" />
        </a>
      </div>

      {/* Info Area */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          {/* Category Label */}
          <p className="text-[10px] font-mono font-semibold tracking-wider text-brand-accent uppercase mb-1">
            {product.categoryLabel}
          </p>

          {/* Product Name */}
          <h4 className="font-serif text-lg font-semibold leading-tight text-brand-dark tracking-wide hover:text-brand-accent transition-colors mb-1.5">
            <Link to={`/shop/${product.slug}`} className="focus:outline-none">
              {product.name}
            </Link>
          </h4>

          {/* Stars & Sold count */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 fill-current ${i < product.rating ? "text-amber-500" : "text-stone-300"}`}
                />
              ))}
            </div>
            {product.sold > 0 && (
              <span className="text-[11px] text-brand-muted font-sans">
                ({product.sold} sold)
              </span>
            )}
          </div>
        </div>

        {/* Price Row */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-sans font-bold text-base text-brand-dark">
              KES {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-brand-muted/75">
                KES {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Learn More link */}
          {showLearnMore && (
            <Link
              to={`/shop/${product.slug}`}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group/link"
            >
              Learn More
              <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
