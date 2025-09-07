import BestSeller from '../components/BestSeller';
import C2A from '../components/C2A';
import CategoryPick from '../components/CategoryPick';
import FeaturedPosts from '../components/FeaturedPosts';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import PageContent from '../layout/PageContent';
import Hero from './Hero';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="h-screen overflow-hidden">
        <Hero />
      </div>
      <CategoryPick />
      <BestSeller />
      <Slider />
      <C2A />
      <FeaturedPosts />
    </div>
  );
}
