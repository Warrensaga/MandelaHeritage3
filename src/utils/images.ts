/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Mapping of specific product slugs to premium high-resolution furniture photographs
const PRODUCT_SLUG_IMAGES: Record<string, string> = {
  // Sofas & Seating
  "3-seater-fabric-sofa-set": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
  "l-shaped-corner-sofa": "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80",
  "2-seater-loveseat-sofa": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
  "recliner-armchair": "https://images.unsplash.com/photo-1598191301114-1f513511a9fc?auto=format&fit=crop&w=1000&q=80",
  "5-seater-sofa-set": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
  "ottoman-coffee-footstool": "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80",

  // Bedroom Collection
  "queen-size-bedroom-suite": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
  "king-size-bed-frame": "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80",
  "orthopedic-mattress": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
  "6x6-wood-wardrobe": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
  "wooden-bedside-locker": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
  "folding-wooden-screen": "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&w=1000&q=80",

  // Dining
  "6-seater-dining-table-set": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
  "4-seater-compact-dining": "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80",
  "8-seater-grand-dining": "https://images.unsplash.com/photo-1530018607912-eff2df11a11b?auto=format&fit=crop&w=1000&q=80",
  "wooden-bar-stool-set": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80",
  "tableware-hutch-cabinet": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",

  // Office Space
  "executive-office-package": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
  "study-desk-and-bookshelf": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
  "ergonomic-office-chair": "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=1000&q=80",
  "stylish-filing-cabinet": "https://images.unsplash.com/photo-1595514534839-8f8e52aed26c?auto=format&fit=crop&w=1000&q=80",

  // Accent & Living room items
  "tv-stand-cabinet": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80",
  "modern-wood-coffee-table": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
  "entryway-console-table": "https://images.unsplash.com/photo-1565538810844-1e119fea2ec5?auto=format&fit=crop&w=1000&q=80",
  "accent-armchair": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",

  // Full Packages
  "complete-living-room-package": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  "complete-dining-room-set": "https://images.unsplash.com/photo-1544457070-4cd96414002e?auto=format&fit=crop&w=1000&q=80",
  "bedroom-upgrade-package": "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1000&q=80",
  "smart-home-office-suite": "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5c?auto=format&fit=crop&w=1000&q=80"
};

// Fallback high-resolution category specific pictures
const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  "sofas": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
  "bedroom": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
  "dining": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
  "office": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
  "accent": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
  "packages": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
};

// Generic beautiful room aesthetic when no keys match or as loaded fallback
const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80";

// Before and After stage slider image comparisons
export const BEFORE_AFTER_IMAGES: Record<number, { before: string; after: string }> = {
  1: {
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", // Empty room, white space
    after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" // High-quality wooden lounge set
  },
  2: {
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Bare office window corporate hall
    after: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" // Staged designer workstation desks
  },
  3: {
    before: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80", // Clean empty room with window
    after: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80" // Cozy walnut stained family lounge sofa
  }
};

// Projects and Showroom completions mapped by IDs
export const PROJECTS_IMAGES: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", // Kilimani — 3-Bedroom Apartment
  2: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", // Westlands — Corporate Hub Office
  3: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", // Karen — Family Home Living Room
  4: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", // Lavington — Premium Studio Apartment
  5: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80", // Upper Hill — Financial Headquarters
  6: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"  // Runda — Neo-Classical Luxury Dwelling
};

// Category Card images representation
export const CATEGORY_CARD_IMAGES: Record<string, string> = {
  "living-room": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  "bedroom": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "dining-room": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
  "home-office": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
};

/**
 * Returns a high-quality Unsplash image URL for a given product or slug.
 */
export function getProductImage(slug: string, category?: string): string {
  if (slug && PRODUCT_SLUG_IMAGES[slug]) {
    return PRODUCT_SLUG_IMAGES[slug];
  }
  if (category && CATEGORY_DEFAULT_IMAGES[category]) {
    return CATEGORY_DEFAULT_IMAGES[category];
  }
  return DEFAULT_FALLBACK_IMAGE;
}
