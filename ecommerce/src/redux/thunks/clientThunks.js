import api from '../../api';
import {
  clearUser,
  setAddressList,
  setCards,
  setRoles,
  setUser,
} from '../actions/clientActions';
import axios from 'axios';

export const loginUser = (email, password, remember) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/login', { email, password });

      if (response.status === 200) {
        const { token, name, email, role_id } = response.data;

        if (token) api.defaults.headers.common['Authorization'] = token;

        if (remember && token) localStorage.setItem('authToken', token);

        const userData = { name, email, role_id, token };

        dispatch(setUser(userData));
        return { success: true, data: userData };
      } else {
        return { success: false, message: 'Login failed' };
      }
    } catch (error) {
      const message = error.response.data.message;
      console.error(error);
      return { success: false, message };
    }
  };
};

export const getRoles = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length > 0) {
      return;
    }

    try {
      const response = await api.get('/roles');
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const verifyUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('authToken');
    if (!token) return;
    try {
      api.defaults.headers.common['Authorization'] = token;
      const response = await api.get('/verify');
      const user = response.data;
      dispatch(setUser({ ...user, token }));
      if (user.token) {
        localStorage.setItem('authToken', user.token);
        api.defaults.headers.common['Authorization'] = user.token;
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem('authToken');
      delete api.defaults.headers.common['Authorization'];
      dispatch(clearUser());
    }
  };
};

export const getAddress = () => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.get('/user/address', {
        headers: { Authorization: token },
      });
      dispatch(setAddressList(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addAddress = (addressData) => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.post('/user/address', addressData, {
        headers: { Authorization: token },
      });
      dispatch(getAddress());
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};

export const updateAddress = (addressData) => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.put('/user/address', addressData, {
        headers: { Authorization: token },
      });

      if (response.status === 201) {
        dispatch(getAddress());
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};

export const deleteAddress = (addressId) => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.delete(`/user/address/${addressId}`, {
        headers: { Authorization: token },
      });

      if (response.status === 201) {
        dispatch(getAddress());
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};

export const getCard = () => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.get('/user/card', {
        headers: {
          Authorization: token,
        },
      });
      dispatch(setCards(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addCard = (cardData) => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.post('/user/card', cardData, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status === 201) {
        dispatch(getCard());
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};

export const updateCard = (cardData) => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.put('/user/card', cardData, {
        headers: { Authorization: token },
      });

      if (response.status === 201) {
        dispatch(getCard());
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};

export const deleteCard = (cardId) => {
  return async (dispatch, getState) => {
    const { user } = getState().client;
    try {
      const token = user?.token || localStorage.getItem('authToken');
      const response = await api.delete(`/user/card/${cardId}`, {
        headers: { Authorization: token },
      });

      if (response.status === 201) {
        dispatch(getCard());
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};
