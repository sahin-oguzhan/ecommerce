import PageContent from '../layout/PageContent';
import HeroSlider from '../components/HeroSlider';
import CategoryPick from '../components/CategoryPick';
import BestSeller from '../components/BestSeller';
import Slider from '../components/Slider';
import C2A from '../components/C2A';
import FeaturedPosts from '../components/FeaturedPosts';

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <PageContent>
        <HeroSlider />
        <CategoryPick />
        <BestSeller />
        <Slider />
        <C2A />
        <FeaturedPosts />
      </PageContent>
    </div>
  );
}
