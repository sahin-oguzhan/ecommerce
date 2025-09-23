import api from '../../api';
import { setCategories } from '../actions/productActions';

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
