import api from '../../api';
import {
  setCategories,
  setFetchState,
  setFilter,
  setLimit,
  setProductList,
  setTotal,
} from '../actions/productActions';

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    const { categories } = getState().product;
    if (categories.length > 0) return;
    try {
      const response = await api.get('/categories');
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchProducts = (category, sort) => {
  return async (dispatch, getState) => {
    const { filter, offset, limit } = getState().product;
    dispatch(setFetchState('FETCHING'));
    try {
      const response = await api.get('/products', {
        params: { category, filter, sort, offset, limit },
      });
      const { products, total } = response.data;

      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState('FETCHED'));
      console.log('API params:', { category, filter, sort, offset, limit });
      console.log('API response:', response.data);
    } catch (error) {
      console.error(error);
      dispatch(setFetchState('FAILED'));
    }
  };
};
