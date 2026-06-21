/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

interface NewArrivalsProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
}

export default function NewArrivals({ wishlist, onWishlistToggle }: NewArrivalsProps) {
  // Filter new arrivals from the products catalog
  const newProducts = products.filter(p => p.isNew || p.badge === 'NEW').slice(0, 4);

  // Stagger animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="new-arrivals-section" className="bg-brand-bg py-20 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Heading with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between items-start gap-5 mb-10 text-left"
        >
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase mb-1 block">
              FRESH FROM THE WORKSHOP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-wide">
              New <span className="text-brand-accent italic font-normal">Arrivals</span>
            </h2>
          </div>
          <Link
            to="/shop?filter=new"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-brand-dark hover:text-brand-accent transition-colors group"
          >
            Check all new additions
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Dynamic staggered card grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {newProducts.map((p) => (
            <motion.div key={p.id} variants={itemVariants} className="flex flex-col h-full">
              <ProductCard
                product={p}
                showLearnMore={true}
                onWishlistToggle={onWishlistToggle}
                isWishlisted={wishlist.includes(p.slug)}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
