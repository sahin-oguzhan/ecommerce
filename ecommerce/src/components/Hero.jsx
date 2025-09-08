import HeroSlider from './HeroSlider';
import Header from '../layout/Header';

export default function Hero() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <HeroSlider />
    </div>
  );
}
