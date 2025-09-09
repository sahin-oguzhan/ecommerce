import PageContent from '../layout/PageContent';
import HeroSlider from '../components/Home/HeroSlider';
import CategoryPick from '../components/Home/CategoryPick';
import BestSeller from '../components/Home/BestSeller';
import Slider from '../components/Home/Slider';
import C2A from '../components/Home/C2A';
import FeaturedPosts from '../components/Home/FeaturedPosts';

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
