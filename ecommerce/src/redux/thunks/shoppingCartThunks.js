import { clearCart, setAddress, setCart } from '../actions/shoppingCartActions';
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

export const createOrder = () => {
  return async (dispatch, getState) => {
    const { address, payment, cart } = getState().shoppingCart;

    if (!address || !payment || cart === 0) {
      alert('Adres, kart veya ürünler eksik!');
      return false;
    }

    const payload = {
      address_id: address.id,
      order_date: new Date().toISOString(),
      card_no: payment.card_no,
      card_name: payment.name_on_card,
      card_expire_month: payment.expire_month,
      card_expire_year: payment.expire_year,
      price: cart.reduce(
        (sum, item) => sum + item.product.price * item.count,
        0,
      ),
      products: cart.map((item) => ({
        product_id: item.id,
        count: item.count,
        detail: item.detail || '',
      })),
    };

    try {
      const response = await api.post('/order', payload);
      if (response.status === 201) {
        dispatch(clearCart());
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};
