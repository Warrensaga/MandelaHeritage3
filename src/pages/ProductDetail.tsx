/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Send, Phone, CheckCircle, Truck, RefreshCw, Star, Info, List, ThumbsUp, ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products, ProductData } from '../data/products';
import { waProduct, waGeneral } from '../utils/whatsapp';
import { getProductImage } from '../utils/images';
import ProductCard from '../components/ProductCard';

interface ProductDetailProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
  onAddToCart: (product: ProductData, quantity: number, color: string) => void;
}

export default function ProductDetail({
  wishlist,
  onWishlistToggle,
  onAddToCart
}: ProductDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = getProductBySlug(slug || '');

  // Thumbnail indicators
  const [activeThumb, setActiveThumb] = useState(0);
  // Color selection
  const [selectedColor, setSelectedColor] = useState('');
  // Quantity counter
  const [qty, setQty] = useState(1);
  // Tabs active state
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  // Success state on Add to Cart
  const [showCartSuccess, setShowCartSuccess] = useState(false);

  // Sync default selected color when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colours[0] || 'Default');
      setActiveThumb(0);
      setQty(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  // Handle product not found gracefully
  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center select-none max-w-md mx-auto">
        <h2 className="font-serif text-3xl font-bold mb-4 text-brand-dark">Item Not Found</h2>
        <p className="text-sm text-brand-muted mb-8 leading-relaxed">
          The requested product showroom model could not be located in our contemporary inventory list.
        </p>
        <Link
          to="/shop"
          className="bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-brand-bg py-3 px-6 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-colors"
        >
          Return to Showroom
        </Link>
      </div>
    );
  }

  const isLiked = wishlist.includes(product.slug);
  const related = getRelatedProducts(product);

  const handleCheckout = () => {
    window.open(waProduct(product.name, `KES ${product.price.toLocaleString()}`), '_blank');
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, qty, selectedColor);
    setShowCartSuccess(true);
    setTimeout(() => {
      setShowCartSuccess(false);
    }, 3000);
  };

  // Thumbnail gradients mapping
  const grads = [
    "from-amber-100 to-amber-200",
    "from-stone-100 to-stone-200",
    "from-orange-100 to-amber-100",
    "from-gray-100 to-gray-200"
  ];
  const mainGradient = grads[product.id % grads.length];

  return (
    <div id="product-detail-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumb Navigation links */}
        <div className="mb-8 select-none text-xs text-brand-muted font-sans flex items-center flex-wrap gap-2">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-accent transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-brand-accent transition-colors capitalize">{product.categoryLabel}</Link>
          <span>/</span>
          <span className="text-brand-dark font-medium italic select-all">{product.name}</span>
        </div>

        {/* Back Link mobile icon */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-muted hover:text-brand-accent transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
        </button>

        {/* Top Product Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Block: Image View & 4 Thumbnails */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-4 select-none">
            
            {/* Main Interactive image frame */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-brand-border/40 bg-brand-surface relative flex items-center justify-center select-none shadow-sm">
              <img
                src={getProductImage(product.slug, product.category)}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle visual gradient shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent pointer-events-none opacity-50"></div>

              {/* Badges on detail frame */}
              {product.badge && (
                <span className="absolute top-5 left-5 bg-brand-accent text-brand-dark text-xs font-mono font-bold tracking-widest uppercase py-1.5 px-3.5 rounded-full shadow-md z-10">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Row (4 Cards) */}
            <div className="grid grid-cols-4 gap-4 select-none">
              {[...Array(4)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  className={`aspect-square rounded-xl overflow-hidden bg-brand-surface border transition-all cursor-pointer relative flex items-center justify-center text-brand-dark/15 ${
                    activeThumb === idx
                      ? "border-brand-accent ring-2 ring-brand-accent/20"
                      : "border-brand-border/45 hover:border-brand-accent/50"
                  }`}
                  aria-label={`View thumbnail ${idx + 1}`}
                >
                  <img
                    src={getProductImage(product.slug, product.category)}
                    alt={`${product.name} angle ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                      activeThumb === idx ? "opacity-100 scale-105" : "opacity-60 hover:opacity-85"
                    }`}
                  />
                  {/* Subtle photographic filter variations to simulate alternate studio lighting angles */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    idx === 1 ? "bg-amber-900/5 mix-blend-color-burn" :
                    idx === 2 ? "bg-stone-900/10 mix-blend-multiply" :
                    idx === 3 ? "bg-white/5 mix-blend-soft-light" : "bg-transparent"
                  }`}></div>
                </button>
              ))}
            </div>

          </div>

          {/* Right Block: Order Form Specifications */}
          <div className="col-span-1 lg:col-span-6 text-left flex flex-col items-start select-none">
            
            {/* Category tag */}
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1">
              {product.categoryLabel} DEPT
            </span>

            {/* Primary Name Display */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-wide mb-3">
              {product.name}
            </h1>

            {/* Star Rating & Showroom counts */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 fill-current ${i < product.rating ? "text-amber-500" : "text-stone-300"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans border-l border-brand-border/60 pl-2">
                4.8 Avg rating (47 customer logs)
              </span>
              <span className="text-xs text-brand-accent font-sans font-semibold border-l border-brand-border/60 pl-2">
                {product.sold} showroom units sold
              </span>
            </div>

            {/* Show Pricing details */}
            <div className="flex items-baseline gap-3.5 mb-6">
              <span className="font-sans font-bold text-2xl sm:text-3xl text-brand-dark">
                KES {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-base line-through text-brand-muted/75">
                  KES {product.originalPrice.toLocaleString()}
                </span>
              )}

              {/* Stock badges */}
              <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ml-4 ${
                product.inStock
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${product.inStock ? "bg-emerald-500" : "bg-red-500 animate-ping"}`}></span>
                {product.inStock ? "Showroom In Stock" : "Backorder Request"}
              </span>
            </div>

            <hr className="w-full border-brand-border/45 mb-6" />

            {/* Brief Narrative */}
            <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed mb-6 max-w-xl text-left">
              {product.description}
            </p>

            {/* Color Option Selector */}
            {product.colours.length > 0 && (
              <div className="mb-6 w-full text-left">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted mb-2.5 block text-left">
                  Showroom Color Option: <span className="text-brand-dark font-sans font-semibold normal-case">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {product.colours.map(color => {
                    const isSelected = selectedColor === color;

                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`py-2 px-4.5 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-brand-accent text-brand-dark border-brand-accent font-bold"
                            : "bg-[#FAF7F2] text-brand-muted border-brand-border/80 hover:border-brand-accent/50"
                        }`}
                      >
                        {color}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity selection framework */}
            <div className="mb-8 flex items-center gap-4 text-left select-none">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted">
                  QTY
                </span>
                <div className="flex items-center border border-brand-border/80 rounded-xl bg-[#FAF7F2]">
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-dark"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-semibold font-mono">{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-dark"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Heart Wishlist button next to quantity */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-muted">
                  SAVE
                </span>
                <button
                  onClick={() => onWishlistToggle(product.slug)}
                  className={`w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-brand-dark hover:bg-red-500/5 hover:text-red-500 transition-colors cursor-pointer ${
                    isLiked ? "bg-red-500/5 text-red-500 border-red-200" : "bg-[#FAF7F2]"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4.5 h-4.5 ${isLiked ? "fill-red-500 text-red-500 animate-pulse" : ""}`} />
                </button>
              </div>
            </div>

            {/* Prime Commerce Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mb-8">
              
              {/* Send Order on WhatsApp */}
              <button
                onClick={handleCheckout}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-sans font-bold text-xs tracking-wider uppercase cursor-pointer transition-shadow shadow-md"
              >
                <Phone className="w-4 h-4 fill-current stroke-[0.5]" />
                WhatsApp to Order Instantly
              </button>

              {/* Add to sliding Drawer Cart */}
              <button
                onClick={handleAddToCartClick}
                className="flex-1 bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-sans font-bold text-xs tracking-wider uppercase border border-brand-border/20 cursor-pointer transition-all shadow-md"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                Add to Cart Selection
              </button>
            </div>

            {/* Inline Toast notification on Add to Cart */}
            {showCartSuccess && (
              <div className="w-full bg-emerald-500 text-white p-3 rounded-xl flex items-center gap-2 mb-6 text-xs font-semibold animate-in slide-in-from-top-3 duration-200 justify-center">
                <CheckCircle className="w-4.5 h-4.5" /> Added {qty}x {product.name} ({selectedColor}) successfully to your catalog drawer!
              </div>
            )}

            {/* Trust assurances check lines */}
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 w-full text-left text-xs text-brand-muted border-t border-brand-border/45 pt-6">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-accent" />
                <span>Nairobi Doorstep Delivery (1-3 working Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-accent" />
                <span>Free On-Site Installation assembly</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-brand-accent" />
                <span>Showroom Warranty & direct 30-Day returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-brand-accent" />
                <span>Secure local M-Pesa ledger payment check</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Details Tabs Framework */}
        <div className="border border-brand-border bg-[#FAF7F2] p-6 rounded-3xl mb-20 text-left select-none">
          
          {/* Tabs header line */}
          <div className="flex items-center gap-1 border-b border-brand-border/65 pb-0.5 mb-6 text-xs font-semibold uppercase">
            <button
              onClick={() => setActiveTab('desc')}
              className={`py-3 px-6 rounded-t-xl flex items-center gap-1.5 border-b-2 transition-all cursor-pointer ${
                activeTab === 'desc'
                  ? "border-brand-accent font-bold text-brand-dark bg-brand-bg/20"
                  : "border-transparent text-brand-muted hover:text-brand-dark"
              }`}
            >
              <Info className="w-3.5 h-3.5" /> Description
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3 px-6 rounded-t-xl flex items-center gap-1.5 border-b-2 transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? "border-brand-accent font-bold text-brand-dark bg-brand-bg/20"
                  : "border-transparent text-brand-muted hover:text-brand-dark"
              }`}
            >
              <List className="w-3.5 h-3.5" /> Technical Specs
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-3 px-6 rounded-t-xl flex items-center gap-1.5 border-b-2 transition-all cursor-pointer ${
                activeTab === 'reviews'
                  ? "border-brand-accent font-bold text-brand-dark bg-brand-bg/20"
                  : "border-transparent text-brand-muted hover:text-brand-dark"
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" /> Customer Reviews (3)
            </button>
          </div>

          {/* Active Tab window wrapper */}
          <div>
            {activeTab === 'desc' && (
              <div className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed flex flex-col gap-4 text-left p-2">
                <p>
                  The <span className="font-semibold text-brand-dark italic">{product.name}</span> by Mandela Heritage Furnitures represents the absolute pinnacle of Kenyan timber engineering. 
                  Every piece of hardwood involved is meticulously hand-inspected in our workshop off the Eastern Bypass, Nairobi, seasoned with advanced moisture extraction procedures to guarantee the wood fibers remain fully stable from warping through all seasons.
                </p>
                <p>
                  Our joint structures utilize interlocking, legacy mortise-and-tenon wood fitting joineries that contain no weak metals or artificial plastics, forming structurally sound frames designed to sustain years of functional family pressure. 
                  Upholstered items utilize density-filled comfort cushions wrapped inside performance-tested fabric blends equipped with liquid/stain spill resistances.
                </p>
                <p>
                  We coordinate white-glove transport directly to your doorstep in any estate in Nairobi (Karen, Runda, Kilimani, Westlands, etc). 
                  Our technical staging technicians will carry, unbox, and fully assemble the piece for you in your designated room at no additional cost. 
                  Contact us on WhatsApp to discuss custom sizes or custom fabrics for your space!
                </p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="p-2 table-fixed shrink-0 w-full text-left font-sans text-xs sm:text-sm">
                <table className="w-full divide-y divide-brand-border/40 select-none">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <tr key={key} className="border-b border-brand-border/30">
                        <td className="py-3 font-semibold text-brand-muted uppercase tracking-wider w-[35%]">{key}</td>
                        <td className="py-3 text-brand-dark">{val}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-brand-border/30">
                      <td className="py-3 font-semibold text-brand-muted uppercase tracking-wider">Origin Location</td>
                      <td className="py-3 text-brand-dark">Showroom Show - Eastern Bypass, Nairobi, Kenya</td>
                    </tr>
                    <tr className="border-b border-brand-border/30">
                      <td className="py-3 font-semibold text-brand-muted uppercase tracking-wider">Free Delivery</td>
                      <td className="py-3 text-brand-dark">Included across Nairobi (orders above KES 30,000)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-brand-muted uppercase tracking-wider">Installation & Setup</td>
                      <td className="py-3 text-brand-dark">100% Free assembly staged by Mandela Professionals</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="p-2 divide-y divide-brand-border/40 text-left font-sans">
                
                {/* Review 1 */}
                <div className="py-4">
                  <div className="flex items-center gap-1.5 mb-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />)}
                    <span className="text-xs font-bold text-brand-dark font-sans ml-2">Perfect finish!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic mb-3">
                    "Absolutely thrilled with my {product.name}! The joinery is highly rigid and fits nicely. Delivery to Karen was accomplished the morning following my WhatsApp order confirmation."
                  </p>
                  <p className="text-[10px] text-brand-muted uppercase font-mono tracking-wider">
                    Samuel O. — Karen, Nairobi · 12 June 2026
                  </p>
                </div>

                {/* Review 2 */}
                <div className="py-4">
                  <div className="flex items-center gap-1.5 mb-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />)}
                    <span className="text-xs font-bold text-brand-dark font-sans ml-2">Exceeded all expectations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic mb-3">
                    "Highly stylized design and extremely comfortable timber structures. It looks much more luxury than what it costs. Highly recommended brand!"
                  </p>
                  <p className="text-[10px] text-brand-muted uppercase font-mono tracking-wider">
                    Olivia M. — Kilimani Estate · 30 May 2026
                  </p>
                </div>

                {/* Review 3 */}
                <div className="py-4">
                  <div className="flex items-center gap-1.5 mb-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />)}
                    <span className="text-xs font-bold text-brand-dark font-sans ml-2">Excellent Office Staging</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic mb-3">
                    "Configured our Westlands offices. Highly communicative, rapid transport, and set up all desks perfectly."
                  </p>
                  <p className="text-[10px] text-brand-muted uppercase font-mono tracking-wider">
                    David O. — Westlands Hub · 14 April 2026
                  </p>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* You May Also Like Block (Related Products) */}
        {related.length > 0 && (
          <div className="border-t border-brand-border/45 pt-16 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-wide mb-8">
              You May <span className="text-brand-accent italic font-normal text-brand-accent">Also Like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  showLearnMore={true}
                  onWishlistToggle={onWishlistToggle}
                  isWishlisted={wishlist.includes(p.slug)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MOBILE STICKY BOTTOM BAR FOR REAL-TIME DIRECT CHECKOUT */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-brand-border py-3 px-4 flex items-center justify-between z-40 lg:hidden shadow-lg select-none">
        <div>
          <span className="text-[10px] font-mono tracking-wider text-brand-muted block uppercase leading-none">TOTAL UNIT RATE</span>
          <span className="font-sans font-bold text-base text-brand-dark">KES {product.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onWishlistToggle(product.slug)}
            className={`w-11 h-11 border border-brand-border rounded-xl flex items-center justify-center text-brand-dark active:scale-90 transition-all ${
              isLiked ? "bg-red-50 text-red-500 border-red-200" : ""
            }`}
            aria-label="Wishlist"
          >
            <Heart className={`w-4.5 h-4.5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </button>
          
          <button
            onClick={handleCheckout}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl flex items-center gap-1.5 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 fill-current stroke-[0.5]" />
            Order on WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
}
