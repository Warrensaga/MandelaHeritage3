/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../sections/Hero';
import SocialProofTicker from '../sections/SocialProofTicker';
import CategoryScrollBar from '../sections/CategoryScrollBar';
import ShopByCategory from '../sections/ShopByCategory';
import BestSellers from '../sections/BestSellers';
import NewArrivals from '../sections/NewArrivals';
import SpecialOffers from '../sections/SpecialOffers';
import TwoPathSection from '../sections/TwoPathSection';
import BrandStory from '../sections/BrandStory';
import FurnishingServices from '../sections/FurnishingServices';
import BeforeAfter from '../sections/BeforeAfter';
import ProjectsTeaser from '../sections/ProjectsTeaser';
import Testimonials from '../sections/Testimonials';
import WhyUs from '../sections/WhyUs';
import InstagramFeed from '../sections/InstagramFeed';
import Newsletter from '../sections/Newsletter';
import TrustBadges from '../sections/TrustBadges';

interface HomeProps {
  wishlist: string[];
  onWishlistToggle: (slug: string) => void;
}

export default function Home({ wishlist, onWishlistToggle }: HomeProps) {
  return (
    <div id="homepage-container" className="animate-in fade-in duration-300">
      <Hero />
      <SocialProofTicker />
      <CategoryScrollBar />
      <ShopByCategory />
      <BestSellers wishlist={wishlist} onWishlistToggle={onWishlistToggle} />
      <NewArrivals wishlist={wishlist} onWishlistToggle={onWishlistToggle} />
      <SpecialOffers wishlist={wishlist} onWishlistToggle={onWishlistToggle} />
      <TwoPathSection />
      <BrandStory />
      <FurnishingServices />
      <BeforeAfter />
      <ProjectsTeaser />
      <Testimonials />
      <WhyUs />
      <InstagramFeed />
      <Newsletter />
      <TrustBadges />
    </div>
  );
}
