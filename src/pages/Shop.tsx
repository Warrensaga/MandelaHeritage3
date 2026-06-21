/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sliders, X, Sparkles, AlertCircle, ShoppingBag } from 'lucide-react';
import { products, categories, rooms, filterProducts, ProductData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { waLink } from '../utils/whatsapp';

interface ShopProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
}

export default function Shop({ wishlist, onWishlistToggle }: ShopProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter States
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [room, setRoom] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(350000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);
  const [productType, setProductType] = useState(''); // individual, set, package
  const [sortBy, setSortBy] = useState('featured'); // featured, lowToHigh, highToLow, bestSellers, newest, nameAZ

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category & filters from search url-queries (e.g. ?category=sofas or ?filter=new)
  useEffect(() => {
    const catQuery = searchParams.get('category');
    if (catQuery) {
      setCategory(catQuery);
    } else {
      setCategory('all');
    }

    const filterQuery = searchParams.get('filter');
    if (filterQuery === 'new') {
      // Toggle New products by sorting/filtering or we can just apply states accordingly
      setSearch('');
      setRoom('');
    } else if (filterQuery === 'sale') {
      // Show sales
      setMinPrice(0);
      setMaxPrice(350000);
    } else if (filterQuery === 'popular') {
      setOnlyBestSellers(true);
    } else {
      setOnlyBestSellers(false);
    }

    const roomQuery = searchParams.get('room');
    if (roomQuery) {
      setRoom(roomQuery);
    } else {
      setRoom('');
    }
  }, [searchParams]);

  // Handle clearing all filters
  const handleClearAll = () => {
    setSearch('');
    setCategory('all');
    setRoom('');
    setMinPrice(0);
    setMaxPrice(350000);
    setOnlyInStock(false);
    setOnlyBestSellers(false);
    setProductType('');
    setSortBy('featured');
    setSearchParams({});
  };

  // Run dynamic filtering
  const rawFiltered = filterProducts({
    category,
    minPrice,
    maxPrice,
    room: room || undefined,
    type: productType || undefined,
    bestSellersOnly: onlyBestSellers,
    search: search || undefined
  });

  // Additional Availability filtering
  const availabilityFiltered = onlyInStock
    ? rawFiltered.filter(p => p.inStock)
    : rawFiltered;

  // Let's filter URL specials (sales or new arrivals)
  const finalFiltered = availabilityFiltered.filter(p => {
    const filterQuery = searchParams.get('filter');
    if (filterQuery === 'new') return p.isNew;
    if (filterQuery === 'sale') return p.isSale;
    return true;
  });

  // Apply sorting algorithm
  const sortedProducts = [...finalFiltered].sort((a, b) => {
    switch (sortBy) {
      case 'lowToHigh':
        return a.price - b.price;
      case 'highToLow':
        return b.price - a.price;
      case 'bestSellers':
        return (b.sold || 0) - (a.sold || 0);
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'nameAZ':
        return a.name.localeCompare(b.name);
      case 'featured':
      default:
        // Default Featured list
        return a.id - b.id;
    }
  });

  return (
    <div id="shop-catalog-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Page Headings */}
        <div className="mb-10 text-center md:text-left select-none">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            NATIVE EXCLUSIVE timber COLLECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-3">
            Furniture <span className="text-brand-accent italic font-normal">Catalogue</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted max-w-lg leading-relaxed">
            Premium, sustainable couches, suite beds, extendable dining tables, and workstations. Free white-glove custom room stagers in Nairobi.
          </p>
        </div>

        {/* Global Search & Search bar */}
        <div className="mb-8 relative flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search product names, details, specs (e.g. 3-Seater Sofa, Walnut bed, Desk)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#FAF7F2] rounded-2xl py-4.5 pl-12 pr-6 border border-brand-border/85 focus:outline-none focus:ring-1 focus:ring-brand-accent text-sm shadow-inner"
            />
            <Search className="absolute left-4.5 top-4.5 w-5 h-5 text-brand-accent stroke-[2.5]" />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2.5 shrink-0 select-none">
            <span className="font-mono text-xs font-bold text-brand-muted uppercase whitespace-nowrap">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF7F2] font-sans text-xs font-bold py-3 px-4.5 rounded-xl border border-brand-border cursor-pointer focus:outline-none focus:border-brand-accent"
            >
              <option value="featured">Featured / Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="bestSellers">Best Sellers first</option>
              <option value="newest">Newest First</option>
              <option value="nameAZ">Name: A to Z</option>
            </select>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-1.5 bg-brand-accent text-brand-dark hover:bg-brand-accent/95 py-3 px-4.5 rounded-xl text-xs font-bold uppercase tracking-wider relative border border-white/10"
            >
              <Sliders className="w-4 h-4 text-brand-dark" />
              Filters
            </button>
          </div>
        </div>

        {/* Active Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 select-none">
          {category !== 'all' && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              Category: {category}
              <button onClick={() => setCategory('all')} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          {room && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              Room: {room}
              <button onClick={() => setRoom('')} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          {search && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              Search: "{search}"
              <button onClick={() => setSearch('')} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          {(minPrice > 0 || maxPrice < 350000) && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              KES {minPrice.toLocaleString()} - {maxPrice.toLocaleString()}
              <button onClick={() => { setMinPrice(0); setMaxPrice(350000); }} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          {onlyInStock && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              Only in stock items
              <button onClick={() => setOnlyInStock(false)} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          {onlyBestSellers && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              Only Best Sellers
              <button onClick={() => setOnlyBestSellers(false)} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          {productType && (
            <span className="bg-brand-accent/15 border border-brand-accent/25 text-brand-dark text-xs py-1.5 px-3.5 rounded-full font-sans font-medium flex items-center gap-1.5">
              Type: {productType}
              <button onClick={() => setProductType('')} className="hover:text-red-500 font-bold"><X className="w-3 h-3" /></button>
            </span>
          )}
          
          {/* Clear all link */}
          {(category !== 'all' || room || search || minPrice > 0 || maxPrice < 350000 || onlyInStock || onlyBestSellers || productType) && (
            <button
              onClick={handleClearAll}
              className="text-xs font-mono font-bold tracking-wider uppercase text-red-500 hover:underline cursor-pointer"
            >
              [ Clear All Filters ]
            </button>
          )}

          {/* Showing metrics counter */}
          <span className="ml-auto text-xs font-mono font-bold text-brand-muted uppercase">
            Showing {sortedProducts.length} of {products.length} products
          </span>
        </div>

        {/* Master Catalog Layout (Sidebar + Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* STATIC SIDEBAR FILTERS (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-3 bg-[#FAF7F2] p-6 border border-brand-border rounded-2xl select-none text-left">
            
            {/* Department filters */}
            <div className="mb-6 pb-6 border-b border-brand-border/50 text-left">
              <h3 className="font-serif font-bold text-base text-brand-dark mb-4">Shop Department</h3>
              <div className="flex flex-col gap-2.5">
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer text-xs font-sans text-brand-dark uppercase">
                    <input
                      type="radio"
                      name="categoryGroup"
                      checked={category === cat.id}
                      onChange={() => setCategory(cat.id)}
                      className="accent-brand-accent"
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price slider range filter */}
            <div className="mb-6 pb-6 border-b border-brand-border/50 text-left">
              <h3 className="font-serif font-bold text-base text-brand-dark mb-2.5">Price Filter (KES)</h3>
              <div className="flex flex-col gap-3">
                <input
                  type="range"
                  min="0"
                  max="350000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
                <div className="flex items-center justify-between text-xs font-mono font-bold text-brand-muted">
                  <span>KES 0</span>
                  <span className="text-brand-accent">Max: KES {maxPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Availability Radio */}
            <div className="mb-6 pb-6 border-b border-brand-border/50 text-left">
              <h3 className="font-serif font-bold text-base text-brand-dark mb-3">Availability</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-brand-dark uppercase font-sans">
                  <input
                    type="radio"
                    name="availGroup"
                    checked={!onlyInStock}
                    onChange={() => setOnlyInStock(false)}
                    className="accent-brand-accent"
                  />
                  <span>All Catalog Items</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-brand-dark uppercase font-sans">
                  <input
                    type="radio"
                    name="availGroup"
                    checked={onlyInStock}
                    onChange={() => setOnlyInStock(true)}
                    className="accent-brand-accent"
                  />
                  <span>● Direct In Stock</span>
                </label>
              </div>
            </div>

            {/* Room selection block */}
            <div className="mb-6 pb-6 border-b border-brand-border/50 text-left">
              <h3 className="font-serif font-bold text-base text-brand-dark mb-3">Filter by Room</h3>
              <div className="flex flex-col gap-2">
                {rooms.map(rm => (
                  <label key={rm.id} className="flex items-center gap-2.5 cursor-pointer text-xs text-brand-dark uppercase font-sans">
                    <input
                      type="radio"
                      name="roomGroup"
                      checked={room === rm.id}
                      onChange={() => setRoom(rm.id)}
                      className="accent-brand-accent"
                    />
                    <span>{rm.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Product layout type block */}
            <div className="mb-6 pb-6 border-b border-brand-border/50 text-left">
              <h3 className="font-serif font-bold text-base text-brand-dark mb-3">Product Type</h3>
              <div className="flex flex-col gap-2 text-xs uppercase font-mono tracking-wide text-brand-dark">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="typeGroup"
                    checked={productType === ''}
                    onChange={() => setProductType('')}
                    className="accent-brand-accent"
                  />
                  <span>All Forms</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="typeGroup"
                    checked={productType === 'individual'}
                    onChange={() => setProductType('individual')}
                    className="accent-brand-accent"
                  />
                  <span>Individual Pieces</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="typeGroup"
                    checked={productType === 'set'}
                    onChange={() => setProductType('set')}
                    className="accent-brand-accent"
                  />
                  <span>Configured Sets</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="typeGroup"
                    checked={productType === 'package'}
                    onChange={() => setProductType('package')}
                    className="accent-brand-accent"
                  />
                  <span>Complete Packages</span>
                </label>
              </div>
            </div>

            {/* Best Sellers Filter Toggle */}
            <div className="mb-6 text-left pb-4">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-serif font-bold text-brand-dark">
                <input
                  type="checkbox"
                  checked={onlyBestSellers}
                  onChange={() => setOnlyBestSellers(!onlyBestSellers)}
                  className="accent-brand-accent w-4 h-4 rounded"
                />
                <span className="flex items-center gap-1 text-brand-accent">
                  ⭐ Only Best Sellers
                </span>
              </label>
            </div>

            <button
              onClick={handleClearAll}
              className="w-full bg-brand-dark text-brand-bg hover:bg-brand-accent hover:text-brand-dark border-0 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
            >
              Reset Filters
            </button>

          </div>

          {/* MAIN PRODUCT GRID (9 Column default desktop) */}
          <div className="col-span-1 lg:col-span-9">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    showLearnMore={true}
                    onWishlistToggle={onWishlistToggle}
                    isWishlisted={wishlist.includes(p.slug)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center border border-dashed border-brand-border rounded-3xl bg-[#FAF7F2] p-8 max-w-lg mx-auto">
                <AlertCircle className="w-12 h-12 text-brand-accent/50 mx-auto stroke-[1.2] mb-4 animate-bounce" />
                <h3 className="font-serif font-bold text-xl text-brand-dark mb-1">
                  No matching products found
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                  No products matched your exact search query: <span className="font-semibold italic font-serif">"{search || category}"</span>. Try searching simple indicators like "sofas", "bed", "dining", or "office".
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                  <button
                    onClick={handleClearAll}
                    className="w-full sm:w-auto bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-brand-bg py-2.5 px-6 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm cursor-pointer"
                  >
                    Reset Catalogue
                  </button>
                  <a
                    href={waLink(`Hi, I'm checking if you have custom options or unlisted timber stock related to: ${search || category}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-brand-dark py-2.5 px-6 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm"
                  >
                    Consult on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* MOBILE FILTERS DRAWER PANEL OVERLAY */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none transition-opacity duration-300">
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-brand-dark/50 backdrop-blur-sm pointer-events-auto"
          ></div>
          <div className="absolute bottom-0 inset-x-0 w-full max-h-[85vh] overflow-y-auto bg-brand-surface rounded-t-3xl p-6 shadow-2xl pointer-events-auto flex flex-col justify-between border-t border-brand-border text-left">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border/40 select-none">
              <span className="font-serif font-bold text-lg text-brand-dark flex items-center gap-1.5">
                <Sliders className="w-4.5 h-4.5" /> Showroom Filters
              </span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-brand-border/40 flex items-center justify-center text-brand-dark"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Mobile Department Radio filters */}
            <div className="py-5 divide-y divide-brand-border/40 flex flex-col gap-6 select-none font-sans">
              
              <div className="text-left">
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-3">Shop Departments</h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`py-2 px-3 border rounded-xl text-left uppercase font-bold tracking-wide ${
                        category === cat.id
                          ? "bg-brand-accent border-brand-accent text-brand-dark"
                          : "bg-brand-bg border-brand-border text-brand-muted"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price selector */}
              <div className="pt-6 text-left">
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-2.5 text-left">Price Range (KES)</h4>
                <input
                  type="range"
                  min="0"
                  max="350000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
                <div className="flex items-center justify-between text-xs font-semibold text-brand-muted">
                  <span>KES 0</span>
                  <span className="text-brand-accent">Max: KES {maxPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Room option */}
              <div className="pt-6 text-left">
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-3">Room Type</h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  {rooms.map(rm => (
                    <button
                      key={rm.id}
                      onClick={() => setRoom(rm.id)}
                      className={`py-2 px-3 border rounded-xl text-left uppercase font-bold ${
                        room === rm.id
                          ? "bg-brand-accent border-brand-accent text-brand-dark"
                          : "bg-brand-bg border-brand-border text-brand-muted"
                      }`}
                    >
                      {rm.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout option */}
              <div className="pt-6 text-left">
                <h4 className="font-serif font-bold text-sm text-brand-dark mb-3">Product Type</h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold uppercase">
                  {['', 'individual', 'set', 'package'].map(type => (
                    <button
                      key={type}
                      onClick={() => setProductType(type)}
                      className={`py-2 px-3 border rounded-xl text-left ${
                        productType === type
                          ? "bg-brand-accent border-brand-accent text-brand-dark"
                          : "bg-brand-bg border-brand-border text-brand-muted"
                      }`}
                    >
                      {type === '' ? "All Forms" : type === 'individual' ? "Individual" : type === 'set' ? "Sets" : "Packages"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Best seller & stock details */}
              <div className="pt-6 flex flex-col gap-3 text-left">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase select-none text-brand-dark">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={() => setOnlyInStock(!onlyInStock)}
                    className="accent-brand-accent w-4.5 h-4.5 rounded"
                  />
                  <span>● Only show available In Stock</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-semibold uppercase select-none text-brand-dark">
                  <input
                    type="checkbox"
                    checked={onlyBestSellers}
                    onChange={() => setOnlyBestSellers(!onlyBestSellers)}
                    className="accent-brand-accent w-4.5 h-4.5 rounded"
                  />
                  <span className="text-brand-accent">⭐ Only Show Best Sellers</span>
                </label>
              </div>

            </div>

            {/* Mobile Actions bottom buttons */}
            <div className="pt-4 border-t border-brand-border/40 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  handleClearAll();
                  setMobileFiltersOpen(false);
                }}
                className="bg-brand-bg border border-brand-border text-brand-dark py-3.5 rounded-xl text-xs font-mono font-bold uppercase cursor-pointer"
              >
                Reset All
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="bg-brand-dark text-brand-bg hover:bg-brand-accent hover:text-brand-dark py-3.5 rounded-xl text-xs font-mono font-bold uppercase cursor-pointer shadow-md"
              >
                Apply Filters
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
