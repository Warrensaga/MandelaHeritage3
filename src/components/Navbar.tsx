/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, Search, Phone, Minus, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { waLink } from '../utils/whatsapp';
import { products, ProductData } from '../data/products';

interface NavbarProps {
  wishlistCount: number;
  cartItems: { product: ProductData; quantity: number; selectedColor: string }[];
  onUpdateCartQty: (slug: string, color: string, qty: number) => void;
  onRemoveFromCart: (slug: string, color: string) => void;
}

export default function Navbar({
  wishlistCount,
  cartItems,
  onUpdateCartQty,
  onRemoveFromCart
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // Sticky header shadow
  const [isShopHovered, setIsShopHovered] = useState(false); // Dropdown toggle
  const [isCartOpen, setIsCartOpen] = useState(false); // Slider Drawer cart
  const [searchQuery, setSearchQuery] = useState(''); // Global search
  const [searchResults, setSearchResults] = useState<ProductData[]>([]); // Search query results
  const [showSearch, setShowSearch] = useState(false); // Real-time search modal

  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true); // Control auto-hide of navbar on downscroll
  const lastScrollY = useRef(0);

  // Handle sticky header highlight and hide on downscroll on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky indicator
      setIsScrolled(currentScrollY > 40);

      // Hide/Show navbar based on scroll direction
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true); // near top
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsOpen(false);
    setIsCartOpen(false);
    setShowSearch(false);
    setSearchQuery('');
  }, [location.pathname]);

  // Real-time search effect
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const totalCartQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  // Generate Cart text message for WhatsApp
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const itemsList = cartItems
      .map((item, i) => `${i + 1}. [${item.product.name}] (Color: ${item.selectedColor}) x ${item.quantity} - KES ${(item.product.price * item.quantity).toLocaleString()}`)
      .join('\n');
    const message = `Hi Mandela Heritage, I'd like to place an order for the following items:\n\n${itemsList}\n\n*Total Amount: KES ${totalCartPrice.toLocaleString()}*\n\nPlease confirm availability and delivery!`;
    const fullWaLink = `https://wa.me/254701333358?text=${encodeURIComponent(message)}`;
    window.open(fullWaLink, '_blank');
  };

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="w-full bg-brand-accent text-brand-dark py-1.5 px-4 overflow-hidden border-b border-brand-accent/20 z-50 text-[11px] font-mono tracking-wider relative flex select-none">
        <div className="animate-ticker whitespace-nowrap flex text-center uppercase gap-8 font-bold">
          <span>🚚 Free Delivery on Orders Over KES 30,000 ·</span>
          <span>💳 M-Pesa Accepted ·</span>
          <span>🔧 Free Professional Installation ·</span>
          <span>📞 Inquiries Replied Within 1 Hour ·</span>
          <span>⭐ 4.0 Avg Google Showroom Rating ·</span>
          {/* Repeating for seamless transition */}
          <span>🚚 Free Delivery on Orders Over KES 30,000 ·</span>
          <span>💳 M-Pesa Accepted ·</span>
          <span>🔧 Free Professional Installation ·</span>
          <span>📞 Inquiries Replied Within 1 Hour ·</span>
          <span>⭐ 4.0 Avg Google Showroom Rating ·</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        id="app-navbar"
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'top-0 bg-brand-bg/90 backdrop-blur-lg border-b border-brand-border py-2.5 shadow-lg shadow-brand-dark/[0.03]'
            : 'top-8 bg-brand-bg border-b border-brand-border/45 py-4'
        } ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Brand Logo wordmark */}
          <Link to="/" className="flex flex-col select-none group focus:outline-none">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide uppercase text-brand-dark group-hover:text-brand-accent transition-colors duration-300">
              MANDELA HERITAGE
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-brand-accent uppercase -mt-0.5">
              FURNITURE & FURNISHING
            </span>
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <div className="hidden lg:flex items-center gap-7">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' }
            ].map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-brand-accent relative py-1 focus:outline-none select-none group ${isActive ? 'text-brand-accent' : 'text-brand-dark'}`}
                >
                  {link.label}
                  {/* Subtle underline hover effect */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  {/* Sliding active bar */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Shop Dropdown on hover/click */}
            <div
              className="relative py-1 group/cat"
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
            >
              <Link
                to="/shop"
                className={`font-sans text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-brand-accent flex items-center gap-1 relative py-1 select-none focus:outline-none group ${
                  location.pathname.startsWith('/shop') ? 'text-brand-accent' : 'text-brand-dark'
                }`}
              >
                Catalogue <span className="text-[9px] transition-transform duration-300 group-hover/cat:rotate-180">▼</span>
                
                {/* Subtle underline hover effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                {/* Sliding active bar for shop routes */}
                {location.pathname.startsWith('/shop') && (
                  <motion.div
                    layoutId="navActiveLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Enhanced Shop Dropdown MegaMenu with Framer Motion spring pop */}
              <AnimatePresence>
                {isShopHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-brand-surface border border-brand-border rounded-xl shadow-xl py-3 z-50 origin-top"
                  >
                    <div className="flex flex-col text-left">
                      <Link to="/shop" className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        All Products
                      </Link>
                      <hr className="border-brand-border/40 my-1" />
                      <Link to="/shop?category=sofas" className="px-4 py-1.5 text-xs text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        Sofas & Seating
                      </Link>
                      <Link to="/shop?category=bedroom" className="px-4 py-1.5 text-xs text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        Bedroom Furniture
                      </Link>
                      <Link to="/shop?category=dining" className="px-4 py-1.5 text-xs text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        Dining Sets
                      </Link>
                      <Link to="/shop?category=office" className="px-4 py-1.5 text-xs text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        Office Furniture
                      </Link>
                      <Link to="/shop?category=accent" className="px-4 py-1.5 text-xs text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        Accent & Décor
                      </Link>
                      <Link to="/shop?category=packages" className="px-4 py-1.5 text-xs text-brand-dark hover:bg-brand-bg hover:text-brand-accent transition-colors">
                        Full Packages
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { path: '/contact', label: 'Contact Us' },
              { path: '/location', label: 'Location' }
            ].map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-brand-accent relative py-1 focus:outline-none select-none group ${isActive ? 'text-brand-accent' : 'text-brand-dark'}`}
                >
                  {link.label}
                  {/* Subtle underline hover effect */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  {/* Sliding active bar */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Icons Right (Desktop) */}
          <div className="flex items-center gap-2 sm:gap-4 select-none">
            {/* Search Toggle */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-border/40 text-brand-dark transition-colors cursor-pointer"
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-border/40 text-brand-dark transition-colors relative"
              title="View wishlist"
            >
              <Heart className="w-4.5 h-4.5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-red-500 text-white leading-none flex items-center justify-center text-[10px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-border/40 text-brand-dark transition-colors relative cursor-pointer"
              title="View cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {totalCartQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-brand-accent text-brand-dark leading-none flex items-center justify-center text-[10px] font-mono font-bold">
                  {totalCartQty}
                </span>
              )}
            </button>

            {/* Primary Action Button (Desktop Only) */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark transition-all duration-300 font-sans font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-brand-border shadow-sm group"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-brand-accent group-hover:text-brand-dark" />
              WhatsApp Us
            </a>

            {/* Hamburger Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-border/40 text-brand-dark transition-colors cursor-pointer"
              title="Menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Global Real-Time Search Modal Overlay with Framer Motion entry/exit */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4 font-sans"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="bg-brand-surface w-full max-w-lg rounded-2xl shadow-2xl border border-brand-border p-5 text-left"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-border">
                <span className="font-serif font-bold text-lg text-brand-dark">Search Mandela Heritage</span>
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery('');
                  }}
                  className="w-7 h-7 rounded-full hover:bg-brand-border/40 flex items-center justify-center text-brand-dark"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sofas, beds, offices, dining sets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-bg rounded-xl py-3 pl-11 pr-4 border border-brand-border focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm"
                  autoFocus
                />
                <Search className="absolute left-4 top-3.5 w-4.5 h-4.5 text-brand-accent" />
              </div>

              {/* Results listing */}
              {searchQuery.trim().length > 1 && (
                <div className="mt-4 flex flex-col divide-y divide-brand-border/40 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/shop/${item.slug}`}
                        className="py-3 flex items-center gap-3.5 hover:text-brand-accent transition-colors shrink-0 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent font-mono text-xs">
                          {item.name.charAt(0)}
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-serif font-semibold text-sm leading-tight text-brand-dark group-hover:text-brand-accent truncated">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-brand-muted font-mono tracking-wider uppercase">
                            {item.categoryLabel} · KES {item.price.toLocaleString()}
                          </p>
                        </div>
                        <span className="text-[10px] text-brand-accent font-mono">VIEW ITEM →</span>
                      </Link>
                    ))
                  ) : (
                    <div className="py-6 text-center text-brand-muted text-xs font-mono">
                      No items found for "{searchQuery}"<br />
                      <a
                        href={waLink(`Hi, I am looking for raw details on ${searchQuery}, do you have it in stock?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-accent font-bold underline mt-1.5 inline-block"
                      >
                        WhatsApp Support — we may have it!
                      </a>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shopping Cart Drawer Sidebar with Framer Motion drawer-sliding */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-brand-dark/50 backdrop-blur-sm cursor-pointer"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-brand-surface border-l border-brand-border flex flex-col justify-between shadow-2xl"
            >
              {/* Header */}
              <div className="p-5 border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-accent" />
                  <span className="font-serif font-bold text-lg text-brand-dark">My Selection ({totalCartQty})</span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-brand-border/40 flex items-center justify-center text-brand-dark"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="p-5 flex-grow overflow-y-auto divide-y divide-brand-border/40">
                {cartItems.length > 0 ? (
                  cartItems.map((item, idx) => (
                    <div key={`${item.product.slug}-${item.selectedColor}-${idx}`} className="py-4 flex gap-3.5 text-left">
                      <div className="w-16 h-20 rounded-xl bg-brand-bg flex items-center justify-center font-bold text-brand-accent font-serif border border-brand-border/50">
                        {item.product.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-serif font-bold text-sm leading-tight text-brand-dark mb-0.5">
                          {item.product.name}
                        </h5>
                        <p className="text-[10px] text-brand-muted font-mono tracking-wider uppercase mb-2">
                          Color: {item.selectedColor}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-brand-border/80 rounded-full scale-90 -translate-x-2">
                            <button
                              onClick={() => onUpdateCartQty(item.product.slug, item.selectedColor, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-brand-muted hover:text-brand-dark"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-mono font-medium">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateCartQty(item.product.slug, item.selectedColor, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-brand-muted hover:text-brand-dark"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveFromCart(item.product.slug, item.selectedColor)}
                            className="text-brand-muted hover:text-red-500 transition-colors py-1 px-2 rounded hover:bg-red-500/5 cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <span className="text-xs font-sans font-bold text-brand-dark">
                          KES {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-20 text-center text-brand-muted">
                    <ShoppingBag className="w-12 h-12 text-brand-muted/30 stroke-[1.2] mb-3" />
                    <p className="font-serif font-semibold text-base mb-1 text-brand-dark">Your cart is empty</p>
                    <p className="text-xs max-w-[200px] leading-relaxed mb-6">Explore our showroom to draft your dream room setup!</p>
                    <Link
                      to="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark text-xs font-mono tracking-wider uppercase py-2.5 px-6 rounded-full font-bold shadow-md"
                    >
                      Browse Catalog
                    </Link>
                  </div>
                )}
              </div>

              {/* Checkout Footer */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-brand-border bg-brand-surface">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif font-medium text-brand-dark text-sm">Estimated Total Amount:</span>
                    <span className="font-sans font-bold text-lg text-brand-dark">
                      KES {totalCartPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[10px] text-brand-muted leading-relaxed font-sans text-center mb-4">
                    🔧 We include free professional installation and free delivery on all orders over KES 30,000 in Nairobi.
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-sans font-bold text-xs tracking-wider uppercase cursor-pointer shadow-md"
                  >
                    Send Order on WhatsApp →
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay Full Screen Drawer Menu with Framer Motion slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col justify-between pt-24 font-sans"
          >
            {/* Navigation Content */}
            <div className="flex flex-col gap-5 px-6 py-4 overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-bold text-left text-brand-dark hover:text-brand-accent transition-colors"
              >
                Home
              </Link>
              <hr className="border-brand-border/40" />
              <div className="flex flex-col gap-2.5 text-left pl-2">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-accent mb-0.5">SHOP DEPARTMENTS</span>
                <Link to="/shop" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  ★ All Products
                </Link>
                <Link to="/shop?category=sofas" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  🛋️ Sofas & Seating
                </Link>
                <Link to="/shop?category=bedroom" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  🛏️ Bedroom Furniture
                </Link>
                <Link to="/shop?category=dining" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  🍽️ Dining Sets
                </Link>
                <Link to="/shop?category=office" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  🏢 Office Furniture
                </Link>
                <Link to="/shop?category=accent" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  ✨ Accent & Décor
                </Link>
                <Link to="/shop?category=packages" onClick={() => setIsOpen(false)} className="text-sm font-sans font-medium text-brand-dark hover:text-brand-accent transition-colors">
                  📦 Full Packages
                </Link>
              </div>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-bold text-left text-brand-dark hover:text-brand-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-bold text-left text-brand-dark hover:text-brand-accent transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/location"
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-bold text-left text-brand-dark hover:text-brand-accent transition-colors"
              >
                Location
              </Link>
            </div>

            {/* Footer info inside mobile menu */}
            <div className="p-6 bg-brand-surface border-t border-brand-border text-center flex flex-col gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-accent text-brand-dark py-3.5 px-6 rounded-full font-sans font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-dark" />
                WhatsApp Showroom Support
              </a>
              <div>
                <p className="font-serif font-bold text-sm text-brand-dark mb-0.5">Mandela Heritage Furnitures</p>
                <p className="text-xs text-brand-muted">Eastern Bypass, Nairobi · +254 701 333358</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
