import PageContent from '../layout/PageContent';
import TeamHero from '../components/Team/TeamHero';

export default function TeamPage() {
  return (
    <div>
      <PageContent>
        <TeamHero to={'/'} text={'Home'} tab={'Team'} />
      </PageContent>
    </div>
  );
}
