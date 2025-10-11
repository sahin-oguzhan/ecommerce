const initalState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
};

export default function clientReducer(state = initalState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'CLEAR_USER':
      return { ...state, user: action.payload };
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_ADDRESS_LIST':
      return { ...state, addressList: action.payload };
    case 'SET_CARDS':
      return { ...state, creditCards: action.payload };
    default:
      return state;
  }
}
