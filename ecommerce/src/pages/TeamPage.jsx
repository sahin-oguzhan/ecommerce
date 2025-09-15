import PageContent from '../layout/PageContent';
import TeamHero from '../components/Team/TeamHero';
import Team from '../components/Team/Team';
import CTA from '../components/Team/TeamCTA';

export default function TeamPage() {
  return (
    <div>
      <PageContent>
        <TeamHero />
        <Team />
        <CTA />
      </PageContent>
    </div>
  );
}
