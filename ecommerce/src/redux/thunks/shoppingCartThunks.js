import { setCart } from '../actions/shoppingCartActions';

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
