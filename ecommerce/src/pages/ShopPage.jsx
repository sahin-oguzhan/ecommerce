import BreadCrumb from '../components/BreadCrumb';
import Clients from '../components/Clients';
import FilterRow from '../components/Shop/FilterRow';
import ProductList from '../components/Shop/ProductList';
import ShopCards from '../components/Shop/ShopCards';
import PageContent from '../layout/PageContent';

export default function ShopPage() {
  const images = [
    'images/bestseller-1.jpg',
    'images/bestseller-2.jpg',
    'images/bestseller-3.jpg',
    'images/bestseller-4.jpg',
    'images/bestseller-5.jpg',
    'images/bestseller-6.jpg',
    'images/bestseller-7.jpg',
    'images/bestseller-8.jpg',
  ];
  return (
    <div>
      <PageContent>
        <BreadCrumb />
        <ShopCards />
        <FilterRow />
        <ProductList images={images} />
        <Clients />
      </PageContent>
    </div>
  );
}
