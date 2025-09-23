import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/thunks/productThunks';

export default function BestSeller() {
  const dispatch = useDispatch();
  const { productList, fetchState } = useSelector((state) => state.product);

  const bestProducts = [...productList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="my-20 flex flex-col gap-10 max-md:h-auto">
      <div className="font-montserrat text-center font-bold">
        <p className="text-second-text-color text-xl">Featured Products</p>
        <h1 className="text-text-color text-2xl font-bold">
          BESTSELLER <br className="md:hidden" /> PRODUCTS
        </h1>

        <p className="text-second-text-color text-sm">
          Problems trying to resolve the <br className="md:hidden" />
          conflict between
        </p>
      </div>
      <div className="m-auto grid grid-cols-4 gap-10 max-md:flex max-md:flex-col">
        {bestProducts.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} fetchState={fetchState} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
