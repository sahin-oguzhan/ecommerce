import { useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks/productThunks';

export default function ProductList({ images }) {
  const dispatch = useDispatch();
  const { productList, fetchState } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (fetchState === 'FETCHING') {
    return <div>Yükleniyor</div>;
  }

  return (
    <div className="my-10 flex flex-col items-center gap-20">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-4">
        {productList.map((product) => {
          return (
            <div key={product.id} className="flex flex-col justify-center">
              <ProductCard product={product} fetchState={fetchState} />
            </div>
          );
        })}
      </div>
      <div className="join">
        <button className="join-item btn">First</button>

        <button className="join-item btn">Next</button>
      </div>
    </div>
  );
}
