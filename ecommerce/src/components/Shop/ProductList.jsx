import { useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/thunks/productThunks';
import { setOffset } from '../../redux/actions/productActions';
import ReactPaginate from 'react-paginate';
export default function ProductList({ categoryId, sort }) {
  const dispatch = useDispatch();
  const { productList, fetchState, filter, limit, offset, total, categories } =
    useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setOffset(0));
    if (categoryId) {
      dispatch(fetchProducts(categoryId, sort, 0));
    } else {
      dispatch(fetchProducts('', sort, 0));
    }
  }, [dispatch, categoryId, sort]);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProducts(categoryId, sort, offset));
    } else {
      dispatch(fetchProducts('', sort, offset));
    }
  }, [dispatch, categoryId, filter, sort, offset]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    dispatch(setOffset(selectedPage * limit));
  };

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-4">
        {productList.map((product) => {
          const category = categories.find(
            (cat) => cat.id === product.category_id,
          );
          return (
            <div key={product.id} className="flex flex-col justify-center">
              <ProductCard
                product={product}
                category={category}
                fetchState={fetchState}
              />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(total / limit)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'flex gap-2 mt-5'}
        pageClassName={'btn btn-sm'}
        previousClassName={'btn btn-sm'}
        nextClassName={'btn btn-sm'}
        activeClassName={'btn-active'}
      />
    </div>
  );
}
