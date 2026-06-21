/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

interface CategoryItem {
  id: string;
  label: string;
  path: string;
}

const scrollCategories: CategoryItem[] = [
  { id: "all", label: "ALL DEPARTMENTS", path: "/shop" },
  { id: "sofas", label: "SOFAS & LOUNGES", path: "/shop?category=sofas" },
  { id: "bedroom", label: "BEDROOM SUPPORT", path: "/shop?category=bedroom" },
  { id: "dining", label: "DINING TABLES & SETS", path: "/shop?category=dining" },
  { id: "office", label: "OFFICE FURNITURE", path: "/shop?category=office" },
  { id: "accent", label: "ACCENT & TV UNITS", path: "/shop?category=accent" },
  { id: "packages", label: "PREMIUM PACKAGES", path: "/shop?category=packages" },
  { id: "new", label: "NEW ARRIVALS", path: "/shop?filter=new" },
  { id: "sale", label: "ON CLEARANCE SALE", path: "/shop?filter=sale" }
];

interface CategoryScrollBarProps {
  activeCategory?: string;
  onCategoryChange?: (id: string) => void;
}

export default function CategoryScrollBar({ activeCategory = "all", onCategoryChange }: CategoryScrollBarProps) {
  return (
    <section id="category-scroll-bar" className="bg-brand-surface py-4 border-b border-brand-border/40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-5">
        
        {/* Label */}
        <span className="shrink-0 font-mono text-[10px] font-bold tracking-widest text-brand-muted uppercase hidden md:inline-block">
          DEPARTMENTS:
        </span>

        {/* Scrollable track with hidden scrollbar */}
        <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none py-1.5 px-1 flex-grow">
          {scrollCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <div key={cat.id} className="flex items-center shrink-0">
                {idx > 0 && (
                  <span className="text-brand-accent mx-3 text-xs opacity-60 font-serif">·</span>
                )}
                {onCategoryChange ? (
                  <button
                    onClick={() => onCategoryChange(cat.id)}
                    className={`font-mono text-xs tracking-wider uppercase py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "bg-brand-accent text-brand-dark font-bold shadow-sm"
                        : "text-brand-muted hover:text-brand-dark hover:bg-brand-border/20"
                    }`}
                  >
                    {cat.label}
                  </button>
                ) : (
                  <Link
                    to={cat.path}
                    className={`font-mono text-xs tracking-wider uppercase py-1.5 px-4 rounded-full transition-all ${
                      isActive
                        ? "bg-brand-accent text-brand-dark font-bold shadow-sm"
                        : "text-brand-muted hover:text-brand-dark hover:bg-brand-border/20"
                    }`}
                  >
                    {cat.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
