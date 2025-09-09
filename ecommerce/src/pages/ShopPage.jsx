import BreadCrumb from '../components/Shop/BreadCrumb';
import ShopCards from '../components/Shop/ShopCards';
import PageContent from '../layout/PageContent';

export default function ShopPage() {
  return (
    <div>
      <PageContent>
        <BreadCrumb />
        <ShopCards />
      </PageContent>
    </div>
  );
}
