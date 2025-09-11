import Contact from '../components/Contact/Contact';
import ContactHero from '../components/Contact/ContactHero';
import PageContent from '../layout/PageContent';

export default function ContactPage() {
  return (
    <div>
      <PageContent>
        <ContactHero />
        <Contact />
      </PageContent>
    </div>
  );
}
