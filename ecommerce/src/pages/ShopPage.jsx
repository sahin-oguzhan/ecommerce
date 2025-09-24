import { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Clients from '../components/Clients';
import FilterRow from '../components/Shop/FilterRow';
import ProductList from '../components/Shop/ProductList';
import ShopCards from '../components/Shop/ShopCards';
import PageContent from '../layout/PageContent';
import { useParams } from 'react-router-dom';

export default function ShopPage() {
  const { categoryId } = useParams();
  const [sort, setSort] = useState('');
  return (
    <div>
      <PageContent>
        <BreadCrumb to={'/'} text={'Home'} tab={'Shop'} />
        <ShopCards />
        <FilterRow sort={sort} setSort={setSort} />
        <ProductList categoryId={categoryId} sort={sort} />
        <Clients />
      </PageContent>
    </div>
  );
}
