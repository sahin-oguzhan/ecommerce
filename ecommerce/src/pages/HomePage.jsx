import PageContent from '../layout/PageContent';
import HeroSlider from '../components/Home/HeroSlider';
import CategoryPick from '../components/Home/CategoryPick';
import BestSeller from '../components/BestSeller';
import Slider from '../components/Home/Slider';
import C2A from '../components/Home/C2A';
import FeaturedPosts from '../components/Home/FeaturedPosts';

export default function HomePage() {
  const images = [
    'images/bestseller-1.jpg',
    'images/bestseller-2.jpg',
    'images/bestseller-3.jpg',
    'images/bestseller-4.jpg',
    'images/bestseller-5.jpg',
    'images/bestseller-6.jpg',
    'images/bestseller-7.jpg',
    'images/bestseller-8.jpg',
  ];
  return (
    <div className="flex flex-col overflow-hidden">
      <PageContent>
        <HeroSlider />
        <CategoryPick />
        <BestSeller images={images} />
        <Slider />
        <C2A />
        <FeaturedPosts />
      </PageContent>
    </div>
  );
}
