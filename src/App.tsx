/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Projects from './pages/Projects';
import About from './pages/About';
import Delivery from './pages/Delivery';
import FAQ from './pages/FAQ';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import LocationPage from './pages/Location';

import { ProductData } from './data/products';

// Utility component to guarantee window viewport scroll restoration on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Elegant page container animate entry
function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  // Global Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('mandela_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Global Cart state
  const [cartItems, setCartItems] = useState<{ product: ProductData; quantity: number; selectedColor: string }[]>(() => {
    const saved = localStorage.getItem('mandela_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Synchronize Wishlist changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('mandela_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Synchronize Cart changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('mandela_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Wishlist toggle handler
  const handleWishlistToggle = (slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  // Add item selection to sliding cart drawer
  const handleAddToCart = (product: ProductData, quantity: number, color: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.slug === product.slug && item.selectedColor === color
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      }
      return [...prev, { product, quantity, selectedColor: color }];
    });
  };

  // Update item quantity directly inside sliding cart drawer
  const handleUpdateCartQty = (slug: string, color: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.slug === slug && item.selectedColor === color
          ? { ...item, quantity: Math.max(1, qty) }
          : item
      )
    );
  };

  // Delete item from sliding cart drawer
  const handleRemoveFromCart = (slug: string, color: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.slug === slug && item.selectedColor === color))
    );
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Immersive Preloading Overlay */}
      <AnimatePresence mode="wait">
        {appLoading && (
          <Preloader key="app-preloader" onComplete={() => setAppLoading(false)} />
        )}
      </AnimatePresence>

      {/* Root Layout wrapper */}
      <div className="bg-brand-bg min-h-screen text-brand-dark font-sans flex flex-col justify-between relative">
        
        {/* Sticky Header Navbar */}
        <Navbar
          wishlistCount={wishlist.length}
          cartItems={cartItems}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
        />

        {/* Primary Page window router */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home wishlist={wishlist} onWishlistToggle={handleWishlistToggle} />
                </AnimatedPage>
              }
            />
            <Route
              path="/shop"
              element={
                <AnimatedPage>
                  <Shop wishlist={wishlist} onWishlistToggle={handleWishlistToggle} />
                </AnimatedPage>
              }
            />
            <Route
              path="/shop/:slug"
              element={
                <AnimatedPage>
                  <ProductDetail
                    wishlist={wishlist}
                    onWishlistToggle={handleWishlistToggle}
                    onAddToCart={handleAddToCart}
                  />
                </AnimatedPage>
              }
            />
            <Route
              path="/projects"
              element={
                <AnimatedPage>
                  <Projects />
                </AnimatedPage>
              }
            />
            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />
            <Route
              path="/delivery"
              element={
                <AnimatedPage>
                  <Delivery />
                </AnimatedPage>
              }
            />
            <Route
              path="/faq"
              element={
                <AnimatedPage>
                  <FAQ />
                </AnimatedPage>
              }
            />
            <Route
              path="/wishlist"
              element={
                <AnimatedPage>
                  <Wishlist wishlist={wishlist} onWishlistToggle={handleWishlistToggle} />
                </AnimatedPage>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />
            <Route
              path="/location"
              element={
                <AnimatedPage>
                  <LocationPage />
                </AnimatedPage>
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Fixed floating interactive WhatsApp button */}
        <FloatingWhatsApp />


      </div>
    </Router>
  );
}
