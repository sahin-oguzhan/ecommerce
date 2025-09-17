import AboutContent from '../components/About/AboutContent';
import AboutHero from '../components/About/AboutHero';
import Stats from '../components/About/Stats';
import Video from '../components/About/Video';
import PageContent from '../layout/PageContent';
import Team from '../components/Team';
import Clients from '../components/Clients';

export default function AboutPage() {
  const images = [
    'images/team-1.jpg',
    'images/team-2.jpg',
    'images/team-3.jpg',
  ];
  return (
    <div>
      <PageContent>
        <AboutHero />
        <AboutContent />
        <Stats />
        <Video />
        <Team images={images} />
        <Clients />
      </PageContent>
    </div>
  );
}
