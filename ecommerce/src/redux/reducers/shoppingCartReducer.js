const initalState = {
  cart: [],
  payment: {},
  address: {},
};

export default function shoppingCartReducer(state = initalState, action) {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
}
