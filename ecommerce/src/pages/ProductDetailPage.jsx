import BestSeller from '../components/BestSeller';
import BreadCrumb from '../components/BreadCrumb';
import Clients from '../components/Clients';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductDetailCard from '../components/ProductDetail/ProductDetailCard';
import PageContent from '../layout/PageContent';

export default function ProductDetailPage() {
  const images = [
    'images/detailbest-1.jpg',
    'images/detailbest-2.jpg',
    'images/detailbest-3.jpg',
    'images/detailbest-4.jpg',
    'images/detailbest-5.jpg',
    'images/detailbest-6.jpg',
    'images/detailbest-7.jpg',
    'images/detailbest-8.jpg',
  ];
  return (
    <div>
      <PageContent>
        <BreadCrumb />
        <ProductDetailCard />
        <ProductDescription />
        <BestSeller images={images} />
        <Clients />
      </PageContent>
    </div>
  );
}
