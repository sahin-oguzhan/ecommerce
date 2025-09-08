import BestSeller from '../components/BestSeller';
import C2A from '../components/C2A';
import CategoryPick from '../components/CategoryPick';
import FeaturedPosts from '../components/FeaturedPosts';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import PageContent from '../layout/PageContent';
import Hero from './Hero';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      <CategoryPick />
      <BestSeller />
      <Slider />
      <C2A />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
