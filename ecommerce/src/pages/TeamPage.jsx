import PageContent from '../layout/PageContent';
import TeamHero from '../components/Team/TeamHero';
import Team from '../components/Team';
import CTA from '../components/Team/TeamCTA';

export default function TeamPage() {
  const images = [
    'images/team-1.jpg',
    'images/team-2.jpg',
    'images/team-3.jpg',
    'images/team-4.jpg',
    'images/team-5.jpg',
    'images/team-6.jpg',
    'images/team-7.jpg',
    'images/team-8.jpg',
    'images/team-9.jpg',
  ];
  return (
    <div>
      <PageContent>
        <TeamHero />
        <Team images={images} />
        <CTA />
      </PageContent>
    </div>
  );
}
