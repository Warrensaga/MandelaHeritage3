/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductData {
  id: number;
  name: string;
  slug: string;
  category: string; // sofas, bedroom, dining, office, accent, packages
  categoryLabel: string;
  price: number;
  originalPrice: number | null;
  badge: 'BEST SELLER' | 'NEW' | 'SALE' | 'POPULAR' | null;
  badgeType: 'bestseller' | 'new' | 'sale' | 'popular' | null;
  rating: number;
  sold: number;
  inStock: boolean;
  colours: string[];
  description: string;
  fullDescription: string;
  specs: Record<string, string>;
  room: 'living-room' | 'bedroom' | 'dining-room' | 'home-office';
  type: 'individual' | 'set' | 'package';
  isNew: boolean;
  isSale: boolean;
}

export const products: ProductData[] = [
  // SOFAS & SEATING
  {
    id: 1,
    name: "3-Seater Fabric Sofa Set",
    slug: "3-seater-fabric-sofa-set",
    category: "sofas",
    categoryLabel: "Sofas & Seating",
    price: 45000,
    originalPrice: null,
    badge: "BEST SELLER",
    badgeType: "bestseller",
    rating: 5,
    sold: 47,
    inStock: true,
    colours: ["Grey", "Brown", "Cream"],
    description: "Premium fabric sofa set with solid wood frame. Available in multiple colours. Free delivery and installation across Nairobi.",
    fullDescription: "The 3-Seater Fabric Sofa Set from Mandela Heritage is crafted with premium quality fabric upholstery and a solid hardwood frame built to last. Available in Grey, Brown, and Cream to match any interior. Includes free delivery and professional installation across all Nairobi areas.",
    specs: {
      Dimensions: "220cm x 90cm x 85cm",
      Material: "Premium Fabric",
      Frame: "Solid Wood",
      Colours: "Grey, Brown, Cream",
      Weight: "65kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 2,
    name: "L-Shaped Corner Sofa",
    slug: "l-shaped-corner-sofa",
    category: "sofas",
    categoryLabel: "Sofas & Seating",
    price: 75000,
    originalPrice: null,
    badge: "BEST SELLER",
    badgeType: "bestseller",
    rating: 5,
    sold: 24,
    inStock: true,
    colours: ["Grey", "Beige", "Dark Wood"],
    description: "Large corner sofa perfect for spacious living rooms. Fabric and leather options available.",
    fullDescription: "The L-Shaped Corner Sofa is the statement piece your living room deserves. Perfect for large spaces in Karen, Runda, Kilimani and other Nairobi estates. Available in fabric and leather finishes.",
    specs: {
      Dimensions: "280cm x 200cm x 85cm",
      Material: "Premium Fabric / Leather",
      Frame: "Solid Wood",
      Colours: "Grey, Beige, Dark Brown",
      Weight: "95kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: "2-Seater Loveseat Sofa",
    slug: "2-seater-loveseat-sofa",
    category: "sofas",
    categoryLabel: "Sofas & Seating",
    price: 32000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 18,
    inStock: true,
    colours: ["Grey", "Cream", "Blue"],
    description: "Compact and stylish. Perfect for smaller spaces and apartments.",
    fullDescription: "The 2-Seater Loveseat Sofa is ideal for studio apartments, bedrooms, or as an accent piece in larger rooms. Compact design with premium fabric upholstery.",
    specs: {
      Dimensions: "150cm x 85cm x 80cm",
      Material: "Premium Fabric",
      Frame: "Solid Wood",
      Colours: "Grey, Cream, Blue",
      Weight: "42kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 4,
    name: "Recliner Armchair",
    slug: "recliner-armchair",
    category: "sofas",
    categoryLabel: "Sofas & Seating",
    price: 28000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 12,
    inStock: true,
    colours: ["Brown", "Black", "Grey"],
    description: "Single recliner chair. Fabric upholstery. Manual recline mechanism.",
    fullDescription: "The Recliner Armchair offers the ultimate in comfort with a smooth manual recline mechanism. Premium fabric upholstery in three colour options.",
    specs: {
      Dimensions: "90cm x 95cm x 105cm",
      Material: "Premium Fabric",
      Frame: "Steel and Wood",
      Colours: "Brown, Black, Grey",
      Weight: "38kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 5,
    name: "5-Seater Sofa Set",
    slug: "5-seater-sofa-set",
    category: "sofas",
    categoryLabel: "Sofas & Seating",
    price: 95000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 5,
    sold: 8,
    inStock: true,
    colours: ["Grey", "Beige", "Brown"],
    description: "Complete sofa set — 3-seater plus 2 armchairs. Premium fabric finish.",
    fullDescription: "The 5-Seater Sofa Set includes a 3-seater sofa and 2 matching armchairs. Perfect for larger families and spacious living rooms across Nairobi.",
    specs: {
      Dimensions: "3-Seater: 220x90x85cm, Chairs: 90x90x85cm",
      Material: "Premium Fabric",
      Frame: "Solid Wood",
      Colours: "Grey, Beige, Brown",
      Weight: "120kg total",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "set",
    isNew: false,
    isSale: false
  },
  {
    id: 6,
    name: "Ottoman Coffee Footstool",
    slug: "ottoman-coffee-footstool",
    category: "sofas",
    categoryLabel: "Sofas & Seating",
    price: 12000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 31,
    inStock: true,
    colours: ["Grey", "Brown", "Cream", "Navy"],
    description: "Fabric ottoman with storage compartment inside. Multiple colours available.",
    fullDescription: "The Ottoman Coffee Footstool doubles as a coffee table and hidden storage unit. Lift the lid to reveal generous storage space inside. Available in 4 colours.",
    specs: {
      Dimensions: "80cm x 80cm x 45cm",
      Material: "Premium Fabric",
      Frame: "Solid Wood",
      Colours: "Grey, Brown, Cream, Navy",
      Storage: "Yes — hidden compartment",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },

  // BEDROOM
  {
    id: 7,
    name: "Queen Size Bedroom Suite",
    slug: "queen-size-bedroom-suite",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 85000,
    originalPrice: null,
    badge: "BEST SELLER",
    badgeType: "bestseller",
    rating: 5,
    sold: 38,
    inStock: true,
    colours: ["Walnut", "White", "Oak"],
    description: "Complete suite — bed frame, 2 bedside tables, dressing table with mirror.",
    fullDescription: "The Queen Size Bedroom Suite is a complete bedroom solution. Includes a solid wood queen bed frame, 2 matching bedside tables, and a full dressing table with mirror. Delivered and installed free across Nairobi.",
    specs: {
      Bed: "Queen — 160cm x 200cm",
      Material: "Solid Wood",
      Finish: "Walnut, White, or Oak",
      Includes: "Bed frame, 2 bedside tables, dressing table, mirror",
      Mattress: "Not included",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "set",
    isNew: true,
    isSale: false
  },
  {
    id: 8,
    name: "King Size Bed Frame",
    slug: "king-size-bed-frame",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 65000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 5,
    sold: 19,
    inStock: true,
    colours: ["Walnut", "White", "Grey"],
    description: "Solid wood king size bed frame with slat base. Mattress not included.",
    fullDescription: "The King Size Bed Frame is crafted from solid hardwood with a sturdy slat base that supports any mattress type. Available in 3 finishes to match your bedroom decor.",
    specs: {
      Size: "King — 180cm x 200cm",
      Material: "Solid Hardwood",
      Base: "Wooden slat",
      Colours: "Walnut, White, Grey",
      Mattress: "Not included",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 9,
    name: "Single Bed with Storage",
    slug: "single-bed-with-storage",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 22000,
    originalPrice: 28000,
    badge: "SALE",
    badgeType: "sale",
    rating: 4,
    sold: 27,
    inStock: true,
    colours: ["White", "Oak"],
    description: "Single bed with built-in drawers underneath. Perfect for children's rooms.",
    fullDescription: "The Single Bed with Storage features 2 large pull-out drawers built into the base — perfect for maximising storage in children's rooms or smaller spaces.",
    specs: {
      Size: "Single — 90cm x 200cm",
      Material: "Engineered Wood",
      Storage: "2 pull-out drawers",
      Colours: "White, Oak",
      Mattress: "Not included",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "individual",
    isNew: false,
    isSale: true
  },
  {
    id: 10,
    name: "4-Door Wardrobe",
    slug: "4-door-wardrobe",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 55000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 22,
    inStock: true,
    colours: ["White", "Walnut", "Grey"],
    description: "Large 4-door wardrobe with mirror. Hanging rail and shelf sections.",
    fullDescription: "The 4-Door Wardrobe provides generous storage with a full-length mirror on 2 of the 4 doors. Includes hanging rail section and multiple adjustable shelves.",
    specs: {
      Dimensions: "200cm x 60cm x 220cm",
      Material: "Engineered Wood",
      Doors: "4 — 2 with mirrors",
      Interior: "Hanging rail + shelves",
      Colours: "White, Walnut, Grey",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 11,
    name: "Bedside Table Set of 2",
    slug: "bedside-table-set",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 18000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 44,
    inStock: true,
    colours: ["White", "Walnut", "Oak"],
    description: "Pair of matching bedside tables with drawer. Fits all bed sizes.",
    fullDescription: "Set of 2 matching bedside tables each with 1 drawer and an open lower shelf. Perfectly proportioned for queen and king beds.",
    specs: {
      Dimensions: "45cm x 40cm x 55cm each",
      Material: "Engineered Wood",
      Storage: "1 drawer + open shelf",
      Sold: "As a pair of 2",
      Colours: "White, Walnut, Oak",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 12,
    name: "Dressing Table with Mirror",
    slug: "dressing-table-with-mirror",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 25000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 16,
    inStock: true,
    colours: ["White", "Walnut"],
    description: "Vanity dressing table with large mirror and 4 storage drawers.",
    fullDescription: "The Dressing Table with Mirror features a large frameless mirror, 4 storage drawers, and a generous tabletop surface. Perfect as a standalone piece or paired with our bedroom suites.",
    specs: {
      Dimensions: "120cm x 45cm x 150cm",
      Material: "Engineered Wood",
      Mirror: "Full-width frameless",
      Storage: "4 drawers",
      Colours: "White, Walnut",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "individual",
    isNew: false,
    isSale: false
  },

  // DINING
  {
    id: 13,
    name: "6-Seater Dining Table Set",
    slug: "6-seater-dining-table-set",
    category: "dining",
    categoryLabel: "Dining",
    price: 55000,
    originalPrice: null,
    badge: "BEST SELLER",
    badgeType: "bestseller",
    rating: 5,
    sold: 29,
    inStock: true,
    colours: ["Dark Wood", "Light Oak"],
    description: "Solid wood dining table with 6 matching chairs. Dark and light wood finishes.",
    fullDescription: "The 6-Seater Dining Table Set brings the family together in style. Solid hardwood construction with 6 matching upholstered chairs. Available in Dark Wood and Light Oak finishes.",
    specs: {
      Table: "180cm x 90cm x 76cm",
      Chairs: "6 matching upholstered",
      Material: "Solid Hardwood",
      Colours: "Dark Wood, Light Oak",
      Seats: "6 people",
      Warranty: "1 Year"
    },
    room: "dining-room",
    type: "set",
    isNew: false,
    isSale: false
  },
  {
    id: 14,
    name: "4-Seater Glass Dining Set",
    slug: "4-seater-glass-dining-set",
    category: "dining",
    categoryLabel: "Dining",
    price: 30000,
    originalPrice: 38000,
    badge: "SALE",
    badgeType: "sale",
    rating: 4,
    sold: 21,
    inStock: true,
    colours: ["Clear Glass / Chrome", "Smoked Glass / Black"],
    description: "Tempered glass top dining table with 4 upholstered chairs. Modern design.",
    fullDescription: "The 4-Seater Glass Dining Set features a tempered safety glass top with a sleek metal base. Comes with 4 fully upholstered chairs. Perfect for modern apartments in Nairobi.",
    specs: {
      Table: "120cm x 80cm x 76cm",
      Glass: "12mm tempered safety glass",
      Chairs: "4 upholstered",
      Colours: "Clear/Chrome or Smoked/Black",
      Seats: "4 people",
      Warranty: "1 Year"
    },
    room: "dining-room",
    type: "set",
    isNew: false,
    isSale: true
  },
  {
    id: 15,
    name: "8-Seater Dining Table",
    slug: "8-seater-dining-table",
    category: "dining",
    categoryLabel: "Dining",
    price: 85000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 5,
    sold: 7,
    inStock: true,
    colours: ["Dark Walnut", "Natural Oak"],
    description: "Large solid wood table for big families. Chairs sold separately.",
    fullDescription: "The 8-Seater Dining Table is a statement piece for large dining rooms. Solid hardwood construction that will last generations. Chairs available separately.",
    specs: {
      Dimensions: "240cm x 100cm x 76cm",
      Material: "Solid Hardwood",
      Colours: "Dark Walnut, Natural Oak",
      Seats: "8 people",
      Chairs: "Sold separately",
      Warranty: "1 Year"
    },
    room: "dining-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 16,
    name: "Bar Stools Set of 4",
    slug: "bar-stools-set-of-4",
    category: "dining",
    categoryLabel: "Dining",
    price: 22000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 33,
    inStock: true,
    colours: ["Black", "White", "Walnut"],
    description: "Counter height bar stools. Swivel seat with footrest.",
    fullDescription: "Set of 4 counter-height bar stools with 360-degree swivel seats and integrated footrests. Perfect for kitchen islands or home bars.",
    specs: {
      Height: "Counter — 65cm seat height",
      Swivel: "360 degrees",
      Footrest: "Yes — integrated",
      Sold: "Set of 4",
      Colours: "Black, White, Walnut",
      Warranty: "1 Year"
    },
    room: "dining-room",
    type: "set",
    isNew: false,
    isSale: false
  },
  {
    id: 17,
    name: "Dining Buffet Sideboard",
    slug: "dining-buffet-sideboard",
    category: "dining",
    categoryLabel: "Dining",
    price: 35000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 11,
    inStock: true,
    colours: ["Walnut", "White"],
    description: "Large dining room storage cabinet. 3 doors and 2 drawers. Solid wood.",
    fullDescription: "The Dining Buffet Sideboard adds essential storage to any dining room. Features 3 cabinet doors and 2 drawers — perfect for storing crockery, table linen, and dining accessories.",
    specs: {
      Dimensions: "160cm x 45cm x 80cm",
      Material: "Solid Wood",
      Storage: "3 doors + 2 drawers",
      Colours: "Walnut, White",
      Weight: "48kg",
      Warranty: "1 Year"
    },
    room: "dining-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 18,
    name: "Foldable Dining Table",
    slug: "foldable-dining-table",
    category: "dining",
    categoryLabel: "Dining",
    price: 18000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 25,
    inStock: true,
    colours: ["White", "Oak"],
    description: "Space-saving foldable table. Seats 4 comfortably. Perfect for apartments.",
    fullDescription: "The Foldable Dining Table is the smart solution for smaller Nairobi apartments. Folds flat when not in use and extends to comfortably seat 4 people.",
    specs: {
      Folded: "80cm x 80cm x 76cm",
      Extended: "120cm x 80cm x 76cm",
      Material: "Engineered Wood",
      Seats: "4 people extended",
      Colours: "White, Oak",
      Warranty: "1 Year"
    },
    room: "dining-room",
    type: "individual",
    isNew: false,
    isSale: false
  },

  // OFFICE
  {
    id: 19,
    name: "Executive Office Desk",
    slug: "executive-office-desk",
    category: "office",
    categoryLabel: "Office",
    price: 28000,
    originalPrice: 35000,
    badge: "SALE",
    badgeType: "sale",
    rating: 5,
    sold: 34,
    inStock: true,
    colours: ["Dark Walnut", "White"],
    description: "Large executive desk with storage drawers and cable management.",
    fullDescription: "The Executive Office Desk provides a commanding workspace with 3 storage drawers, integrated cable management, and a large work surface. Perfect for home offices and corporate settings across Nairobi.",
    specs: {
      Dimensions: "160cm x 80cm x 76cm",
      Material: "Engineered Wood",
      Storage: "3 drawers + cable management",
      Colours: "Dark Walnut, White",
      Weight: "55kg",
      Warranty: "1 Year"
    },
    room: "home-office",
    type: "individual",
    isNew: false,
    isSale: true
  },
  {
    id: 20,
    name: "High-Back Office Chair",
    slug: "high-back-office-chair",
    category: "office",
    categoryLabel: "Office",
    price: 18000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 52,
    inStock: true,
    colours: ["Black", "Grey"],
    description: "Ergonomic high-back chair. Adjustable height. Armrests. Lumbar support.",
    fullDescription: "The High-Back Office Chair provides full ergonomic support for long work days. Features adjustable seat height, fixed armrests, and built-in lumbar support.",
    specs: {
      Back: "High-back with lumbar support",
      Adjustment: "Pneumatic height adjustment",
      Armrests: "Fixed padded",
      Base: "5-star chrome base with castors",
      Colours: "Black, Grey",
      Warranty: "1 Year"
    },
    room: "home-office",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 21,
    name: "Office Bookshelf Unit",
    slug: "office-bookshelf-unit",
    category: "office",
    categoryLabel: "Office",
    price: 22000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 18,
    inStock: true,
    colours: ["White", "Walnut"],
    description: "5-shelf bookcase. Solid construction. Home office or corporate use.",
    fullDescription: "The Office Bookshelf Unit provides 5 adjustable shelves of organised storage. Suitable for books, files, and display items in home offices and corporate environments.",
    specs: {
      Dimensions: "80cm x 30cm x 180cm",
      Shelves: "5 adjustable",
      Material: "Engineered Wood",
      Colours: "White, Walnut",
      Weight: "35kg",
      Warranty: "1 Year"
    },
    room: "home-office",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 22,
    name: "2-Person Office Workstation",
    slug: "2-person-office-workstation",
    category: "office",
    categoryLabel: "Office",
    price: 55000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 9,
    inStock: true,
    colours: ["White / Grey", "Walnut / Black"],
    description: "Double workstation desk for shared office spaces with divider panel.",
    fullDescription: "The 2-Person Office Workstation creates two dedicated workspaces with a central privacy divider panel. Ideal for small offices, co-working spaces, and home office setups.",
    specs: {
      Dimensions: "240cm x 120cm x 76cm",
      Workspaces: "2 with divider",
      Material: "Engineered Wood + Steel",
      Colours: "White/Grey or Walnut/Black",
      Weight: "80kg",
      Warranty: "1 Year"
    },
    room: "home-office",
    type: "set",
    isNew: false,
    isSale: false
  },
  {
    id: 23,
    name: "Filing Cabinet 3-Drawer",
    slug: "filing-cabinet-3-drawer",
    category: "office",
    categoryLabel: "Office",
    price: 15000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 28,
    inStock: true,
    colours: ["Black", "Grey", "White"],
    description: "Metal filing cabinet. 3 lockable drawers. A4 and foolscap compatible.",
    fullDescription: "The Filing Cabinet features 3 lockable drawers compatible with both A4 and foolscap files. Steel construction with anti-tip safety mechanism. Includes 2 keys.",
    specs: {
      Dimensions: "46cm x 62cm x 102cm",
      Material: "Cold-rolled steel",
      Drawers: "3 lockable",
      File: "A4 and foolscap",
      Colours: "Black, Grey, White",
      Warranty: "1 Year"
    },
    room: "home-office",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 24,
    name: "Reception Desk",
    slug: "reception-desk",
    category: "office",
    categoryLabel: "Office",
    price: 65000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 5,
    sold: 6,
    inStock: true,
    colours: ["White / Grey", "Walnut / Black"],
    description: "Modern reception counter for offices and businesses. Custom sizes available.",
    fullDescription: "The Reception Desk creates a professional first impression for any Nairobi office or business. Features a raised counter section, storage cabinet below, and integrated cable management. Custom sizes available on request.",
    specs: {
      Dimensions: "160cm x 80cm x 110cm",
      Material: "Engineered Wood + Laminate",
      Storage: "Cabinet below counter",
      Colours: "White/Grey or Walnut/Black",
      Custom: "Yes — WhatsApp for custom sizes",
      Warranty: "1 Year"
    },
    room: "home-office",
    type: "individual",
    isNew: false,
    isSale: false
  },

  // ACCENT & DECOR
  {
    id: 25,
    name: "Decorative Coffee Table",
    slug: "decorative-coffee-table",
    category: "accent",
    categoryLabel: "Accent & Décor",
    price: 22000,
    originalPrice: null,
    badge: "NEW",
    badgeType: "new",
    rating: 5,
    sold: 14,
    inStock: true,
    colours: ["Walnut", "White", "Black"],
    description: "Multi-tiered or classic coffee table with storage. Elegant design.",
    fullDescription: "This beautifully crafted coffee table is styled to fit elegantly in your family room, featuring solid supports and a premium surface finish.",
    specs: {
      Dimensions: "100cm x 60cm x 45cm",
      Material: "Engineered Wood / Glass",
      Colours: "Walnut, White, Black",
      Weight: "20kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: true,
    isSale: false
  },
  {
    id: 26,
    name: "TV Stand Unit",
    slug: "tv-stand-unit",
    category: "accent",
    categoryLabel: "Accent & Décor",
    price: 28000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 37,
    inStock: true,
    colours: ["Walnut", "White", "Black"],
    description: "Large TV unit with storage cabinets and open shelving. Fits up to 65 inch TV.",
    fullDescription: "The TV Stand Unit accommodates TVs up to 65 inches with cable management built in. Features 2 cabinet doors and open shelving for media equipment and décor.",
    specs: {
      Dimensions: "180cm x 40cm x 55cm",
      TV: "Up to 65 inches",
      Storage: "2 cabinets + open shelves",
      Colours: "Walnut, White, Black",
      Weight: "42kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 27,
    name: "Rattan Accent Chair",
    slug: "rattan-accent-chair",
    category: "accent",
    categoryLabel: "Accent & Décor",
    price: 24000,
    originalPrice: null,
    badge: "NEW",
    badgeType: "new",
    rating: 5,
    sold: 19,
    inStock: true,
    colours: ["Natural Rattan", "White Rattan"],
    description: "Statement rattan accent chair. Perfect for living rooms and bedrooms.",
    fullDescription: "The Rattan Accent Chair brings natural texture and warmth to any room. Handwoven rattan construction with a comfortable cushioned seat. Perfect as a reading chair or bedroom accent.",
    specs: {
      Dimensions: "75cm x 70cm x 80cm",
      Material: "Natural Rattan + Cushion",
      Weight: "8kg",
      Colours: "Natural or White",
      Cushion: "Removable and washable",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: true,
    isSale: false
  },
  {
    id: 28,
    name: "Bookshelf Display Unit",
    slug: "bookshelf-display-unit",
    category: "accent",
    categoryLabel: "Accent & Décor",
    price: 18000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 22,
    inStock: true,
    colours: ["White", "Walnut", "Black"],
    description: "Open display bookshelf. 5 shelves. Perfect for books, plants, and décor.",
    fullDescription: "The Bookshelf Display Unit is an open shelving unit with 5 shelves for displaying books, plants, ornaments, and décor items. Lightweight and easy to assemble.",
    specs: {
      Dimensions: "80cm x 25cm x 175cm",
      Shelves: "5 fixed open",
      Material: "Engineered Wood",
      Colours: "White, Walnut, Black",
      Weight: "22kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 29,
    name: "Floor Mirror",
    slug: "floor-mirror",
    category: "accent",
    categoryLabel: "Accent & Décor",
    price: 12000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 41,
    inStock: true,
    colours: ["Gold Frame", "Black Frame", "Natural Wood"],
    description: "Full length standing mirror with wooden frame. Leaning or wall mount.",
    fullDescription: "The Floor Mirror is a full-length statement mirror with a premium wooden frame. Can be used leaning against a wall or wall-mounted. Instantly makes any room feel larger and brighter.",
    specs: {
      Dimensions: "50cm x 150cm",
      Frame: "Solid wood",
      Mount: "Floor lean or wall mount",
      Colours: "Gold, Black, Natural Wood",
      Weight: "12kg",
      Warranty: "1 Year"
    },
    room: "bedroom",
    type: "individual",
    isNew: false,
    isSale: false
  },
  {
    id: 30,
    name: "Console Table",
    slug: "console-table",
    category: "accent",
    categoryLabel: "Accent & Décor",
    price: 15000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 4,
    sold: 16,
    inStock: true,
    colours: ["Walnut", "White", "Black"],
    description: "Slim hallway or living room console table with 2 drawers.",
    fullDescription: "The Console Table is perfect for entryways, hallways, and living rooms. Features 2 drawers for keys, remotes, and small items. Slim profile — fits in tight spaces.",
    specs: {
      Dimensions: "120cm x 35cm x 80cm",
      Material: "Engineered Wood",
      Storage: "2 drawers",
      Colours: "Walnut, White, Black",
      Weight: "18kg",
      Warranty: "1 Year"
    },
    room: "living-room",
    type: "individual",
    isNew: false,
    isSale: false
  },

  // FULL PACKAGES
  {
    id: 31,
    name: "Complete Living Room Package",
    slug: "complete-living-room-package",
    category: "packages",
    categoryLabel: "Full Packages",
    price: 150000,
    originalPrice: null,
    badge: "POPULAR",
    badgeType: "popular",
    rating: 5,
    sold: 12,
    inStock: true,
    colours: ["Grey Theme", "Beige Theme", "Brown Theme"],
    description: "3-seater sofa, 2 armchairs, coffee table, TV stand, accent pieces. Fully installed.",
    fullDescription: "The Complete Living Room Package transforms your empty living room into a fully furnished, professionally styled space. Includes all furniture, delivery, and installation. Choose your colour theme and we handle everything.",
    specs: {
      Includes: "3-seater sofa, 2 armchairs, coffee table, TV stand, floor mirror, accent chair",
      Delivery: "Free — included",
      Installation: "Free — professional team",
      Themes: "Grey, Beige, or Brown",
      Timeline: "3–5 days",
      Warranty: "1 Year all pieces"
    },
    room: "living-room",
    type: "package",
    isNew: false,
    isSale: false
  },
  {
    id: 32,
    name: "Complete Bedroom Package",
    slug: "complete-bedroom-package",
    category: "packages",
    categoryLabel: "Full Packages",
    price: 120000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 5,
    sold: 8,
    inStock: true,
    colours: ["Walnut Theme", "White Theme"],
    description: "King bed, wardrobe, 2 bedside tables, dressing table. Fully installed.",
    fullDescription: "The Complete Bedroom Package gives you everything needed for a beautiful master bedroom. King bed frame, 4-door wardrobe, 2 bedside tables, and a dressing table with mirror — all delivered and installed.",
    specs: {
      Includes: "King bed frame, 4-door wardrobe, 2 bedside tables, dressing table + mirror",
      Mattress: "Not included — WhatsApp for recommendations",
      Delivery: "Free — included",
      Installation: "Free — professional team",
      Themes: "Walnut or White",
      Warranty: "1 Year all pieces"
    },
    room: "bedroom",
    type: "package",
    isNew: false,
    isSale: false
  },
  {
    id: 33,
    name: "New Home Setup Package",
    slug: "new-home-setup-package",
    category: "packages",
    categoryLabel: "Full Packages",
    price: 350000,
    originalPrice: null,
    badge: "POPULAR",
    badgeType: "popular",
    rating: 5,
    sold: 4,
    inStock: true,
    colours: ["Custom — WhatsApp to discuss"],
    description: "Complete 3-bedroom home — living room, master bedroom, dining set, accent pieces.",
    fullDescription: "The New Home Setup Package is our most comprehensive offering. We furnish your entire 3-bedroom home from the living room to the dining room and master bedroom. One team, one delivery, one installation day. Moving into your new Nairobi home has never been easier.",
    specs: {
      Includes: "Full living room set, master bedroom suite, dining table set, accent pieces",
      Bedrooms: "Master bedroom — secondary bedrooms optional extra",
      Delivery: "Free — included",
      Installation: "Free — professional team",
      Timeline: "5–7 days from order",
      Warranty: "1 Year all pieces"
    },
    room: "living-room",
    type: "package",
    isNew: false,
    isSale: false
  },
  {
    id: 34,
    name: "Office Starter Package",
    slug: "office-starter-package",
    category: "packages",
    categoryLabel: "Full Packages",
    price: 85000,
    originalPrice: null,
    badge: null,
    badgeType: null,
    rating: 5,
    sold: 6,
    inStock: true,
    colours: ["White / Grey", "Walnut / Black"],
    description: "4 workstations, 4 chairs, reception desk, bookshelf, filing cabinet. Installed.",
    fullDescription: "The Office Starter Package is everything a new Nairobi office needs to open its doors. Includes 4 workstation desks, 4 ergonomic chairs, a reception desk, bookshelf, and filing cabinet — all delivered and installed.",
    specs: {
      Includes: "4 workstations, 4 chairs, reception desk, bookshelf, filing cabinet",
      Workstations: "Individual desks or shared workstation",
      Delivery: "Free — included",
      Installation: "Free — professional team",
      Colours: "White/Grey or Walnut/Black",
      Warranty: "1 Year all pieces"
    },
    room: "home-office",
    type: "package",
    isNew: false,
    isSale: false
  }
];

export const categories = [
  { id: "all", label: "All Items", count: 34 },
  { id: "sofas", label: "Sofas & Seating", count: 6 },
  { id: "bedroom", label: "Bedroom Support", count: 6 },
  { id: "dining", label: "Dining Sets", count: 6 },
  { id: "office", label: "Office Systems", count: 6 },
  { id: "accent", label: "Accent & Décor", count: 6 },
  { id: "packages", label: "Premium Packages", count: 4 }
];

export const rooms = [
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "dining-room", label: "Dining Room" },
  { id: "home-office", label: "Home Office" }
];

export const getBestSellers = () =>
  products.filter(p => p.badge === "BEST SELLER").slice(0, 6);

export const getNewArrivals = () =>
  products.filter(p => p.isNew).slice(0, 4);

export const getOnSale = () =>
  products.filter(p => p.isSale).slice(0, 3);

export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug);

export const getRelatedProducts = (product: ProductData) =>
  products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  room?: string;
  type?: string;
  bestSellersOnly?: boolean;
  search?: string;
}

export const filterProducts = ({ category, minPrice, maxPrice, room, type, bestSellersOnly, search }: FilterOptions) => {
  return products.filter(p => {
    if (category && category !== "all" && p.category !== category) return false;
    if (minPrice !== undefined && p.price < minPrice) return false;
    if (maxPrice !== undefined && p.price > maxPrice) return false;
    if (room && p.room !== room) return false;
    if (type && p.type !== type) return false;
    if (bestSellersOnly && p.badge !== "BEST SELLER") return false;
    if (search) {
      const cleanSearch = search.toLowerCase();
      const inName = p.name.toLowerCase().includes(cleanSearch);
      const inDesc = p.description.toLowerCase().includes(cleanSearch);
      if (!inName && !inDesc) return false;
    }
    return true;
  });
};
