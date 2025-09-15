import PageContent from '../layout/PageContent';
import TeamHero from '../components/Team/TeamHero';
import Team from '../components/Team/Team';
import CTA from '../components/Team/CTA';

export default function TeamPage() {
  return (
    <div>
      <PageContent>
        <TeamHero to={'/'} text={'Home'} tab={'Team'} />
        <Team />
        <CTA />
      </PageContent>
    </div>
  );
}
