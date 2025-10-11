export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const clearUser = () => ({ type: 'CLEAR_USER', payload: {} });
export const setRoles = (role) => ({ type: 'SET_ROLES', payload: role });
export const setTheme = (theme) => ({ type: 'SET_THEME', payload: theme });
export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  payload: language,
});
export const setAddressList = (addresses) => ({
  type: 'SET_ADDRESS_LIST',
  payload: addresses,
});
export const setCards = (cards) => ({
  type: 'SET_CARDS',
  payload: cards,
});
