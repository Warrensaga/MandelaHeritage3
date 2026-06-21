/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles, Smile, ShoppingBag } from 'lucide-react';
import { products, ProductData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { waLink } from '../utils/whatsapp';

interface WishlistProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
}

export default function Wishlist({ wishlist, onWishlistToggle }: WishlistProps) {
  // Filter core products list matching active slugs inside wishlist
  const wishlistedItems = products.filter((p) => wishlist.includes(p.slug));

  // WhatsApp order message for the full wishlist selection!
  const getFullWishlistMsg = () => {
    const listNames = wishlistedItems.map(item => `• ${item.name} (KES ${item.price.toLocaleString()})`).join("\n");
    const totalSum = wishlistedItems.reduce((acc, curr) => acc + curr.price, 0);
    return `Hi Mandela Heritage sales, I've curated my custom product wishlist on your website and would like a quotation to deliver and install these pieces:\n\n${listNames}\n\nTotal Wishlist Value: KES ${totalSum.toLocaleString()}\n\nCan you confirm availability?`;
  };

  return (
    <div id="wishlist-display-page" className="animate-in fade-in duration-300 pt-32 pb-24 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Page Headings */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1.5 block">
            CUSTOMIZABLE TIMBER CURATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-4">
            My <span className="text-brand-accent italic font-normal">Wishlist</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed max-w-md">
            Your saved selection of premium, handcrafted furniture. Share the entire list directly on WhatsApp to coordinate a bulk showroom rate discount!
          </p>
        </div>

        {wishlistedItems.length > 0 ? (
          <div>
            
            {/* Top Bulk order ribbon */}
            <div className="bg-[#FAF7F2] border border-brand-border p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 mb-10 text-left">
              <div>
                <h3 className="font-serif font-bold text-lg text-brand-dark flex items-center gap-1.5 leading-none">
                  <Sparkles className="w-4.5 h-4.5 text-brand-accent animate-pulse" /> Create Bulk Showroom Quote
                </h3>
                <p className="font-sans text-xs text-brand-muted mt-1 leading-relaxed">
                  Send all <span className="font-bold text-brand-dark">{wishlistedItems.length} items</span> in a single dispatch directly to Arthur Mandela on WhatsApp & inquire for tailored packages!
                </p>
              </div>

              <a
                href={waLink(getFullWishlistMsg())}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-dark hover:bg-brand-accent text-brand-bg hover:text-brand-dark py-3 px-6 rounded-xl font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap self-stretch sm:self-auto justify-center"
              >
                Send Wishlist to WhatsApp
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </a>
            </div>

            {/* Grid display layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistedItems.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  showLearnMore={true}
                  onWishlistToggle={onWishlistToggle}
                  isWishlisted={true}
                />
              ))}
            </div>

          </div>
        ) : (
          <div className="py-24 text-center border-2 border-dashed border-brand-border rounded-3xl bg-[#FAF7F2] p-8 max-w-md mx-auto">
            <Heart className="w-12 h-12 text-brand-accent/50 mx-auto stroke-[1.2] mb-4 animate-pulse fill-none" />
            <h3 className="font-serif font-bold text-xl text-brand-dark mb-1">
              Your Wishlist is empty
            </h3>
            <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed mb-8">
              Browse through our premium timber catalogue to save sofas, dining suites, bed frames, or setups using the heart badges.
            </p>
            <Link
              to="/shop"
              className="bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-brand-bg py-3 px-6 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
            >
              Browse Catalogue
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
