import BestSeller from '../components/BestSeller';
import CategoryPick from '../components/CategoryPick';
import HeroSlider from '../components/HeroSlider';
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';

export default function HomePage() {
  return (
    <div>
      <div className="h-screen overflow-hidden">
        <Header />
        <HeroSlider />
      </div>
      <CategoryPick />
      <BestSeller />
    </div>
  );
}
