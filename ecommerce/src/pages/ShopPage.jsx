import BreadCrumb from '../components/Shop/BreadCrumb';
import FilterRow from '../components/Shop/FilterRow';
import ShopCards from '../components/Shop/ShopCards';
import PageContent from '../layout/PageContent';

export default function ShopPage() {
  return (
    <div>
      <PageContent>
        <BreadCrumb />
        <ShopCards />
        <FilterRow />
      </PageContent>
    </div>
  );
}
