import api from '../../api';
import {
  setCategories,
  setFetchState,
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

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    try {
      const response = await api.get('/products');
      console.log(response.data);
      const { products, total } = response.data;
      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState('FETCHED'));
    } catch (error) {
      console.error(error);
      dispatch(setFetchState('FAILED'));
    }
  };
};
