import { setAddress, setCart } from '../actions/shoppingCartActions';
import api from '../../api';

export const addCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;

    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id,
    );

    let newCart;
    if (existingIndex !== -1) {
      const existingItem = cart[existingIndex];
      newCart = [...cart];
      newCart[existingIndex] = {
        ...existingItem,
        count: existingItem.count + 1,
      };
    } else {
      newCart = [...cart, { count: 1, checked: true, product }];
    }
    dispatch(setCart(newCart));
  };
};

export const removeCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;

    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id,
    );

    if (existingIndex === -1) return;

    const existingItem = cart[existingIndex];
    let newCart;

    if (existingItem.count > 1) {
      newCart = [...cart];
      newCart[existingIndex] = {
        ...existingItem,
        count: existingItem.count - 1,
      };
    } else {
      newCart = cart.filter((item) => item.product.id !== product.id);
    }
    dispatch(setCart(newCart));
  };
};

export const deleteCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const newCart = cart.filter((item) => item.product.id !== product.id);
    dispatch(setCart(newCart));
  };
};

export const toggleChecked = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const newCart = cart.map((item) =>
      item.product.id === product.id
        ? { ...item, checked: !item.checked }
        : item,
    );
    dispatch(setCart(newCart));
  };
};

export const addAddress = (addressData) => {
  return async (getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.post('/user/address', addressData, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAddress = () => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.get('user/address', {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      dispatch(setAddress(response.data));
    } catch (error) {}
  };
};
