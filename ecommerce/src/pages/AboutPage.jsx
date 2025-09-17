import AboutContent from '../components/About/AboutContent';
import AboutHero from '../components/About/AboutHero';
import Stats from '../components/About/Stats';
import Video from '../components/About/Video';
import PageContent from '../layout/PageContent';

export default function AboutPage() {
  return (
    <div>
      <PageContent>
        <AboutHero />
        <AboutContent />
        <Stats />
        <Video />
      </PageContent>
    </div>
  );
}
