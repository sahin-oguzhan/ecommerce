import BreadCrumb from '../components/BreadCrumb';
import Clients from '../components/Clients';
import FilterRow from '../components/Shop/FilterRow';
import ProductList from '../components/Shop/ProductList';
import ShopCards from '../components/Shop/ShopCards';
import PageContent from '../layout/PageContent';

export default function ShopPage() {
  return (
    <div>
      <PageContent>
        <BreadCrumb to={'/'} text={'Home'} tab={'Shop'} />
        <ShopCards />
        <FilterRow />
        <ProductList />
        <Clients />
      </PageContent>
    </div>
  );
}
