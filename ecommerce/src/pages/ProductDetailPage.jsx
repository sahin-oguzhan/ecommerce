import { useParams } from 'react-router-dom';
import BestSeller from '../components/BestSeller';
import BreadCrumb from '../components/BreadCrumb';
import Clients from '../components/Clients';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductDetailCard from '../components/ProductDetail/ProductDetailCard';
import PageContent from '../layout/PageContent';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../redux/thunks/productThunks';

export default function ProductDetailPage() {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    async function getProduct() {
      const data = await dispatch(fetchProductById(productId));
      setProduct(data);
    }
    getProduct();
  }, [dispatch, productId]);
  return (
    <div>
      <PageContent>
        <BreadCrumb text={'Home'} to={'/'} tab={'Shop'} />
        <ProductDetailCard product={product} />
        <ProductDescription product={product} />
        <BestSeller />
        <Clients />
      </PageContent>
    </div>
  );
}
