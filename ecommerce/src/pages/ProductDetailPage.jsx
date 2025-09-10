import BreadCrumb from '../components/BreadCrumb';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductDetailCard from '../components/ProductDetail/ProductDetailCard';
import PageContent from '../layout/PageContent';

export default function ProductDetailPage() {
  return (
    <div>
      <PageContent>
        <BreadCrumb />
        <ProductDetailCard />
        <ProductDescription />
      </PageContent>
    </div>
  );
}
