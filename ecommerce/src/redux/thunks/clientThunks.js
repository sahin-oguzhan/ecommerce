import { setRoles, setUser } from '../actions/clientActions';
import axios from 'axios';

export const loginUser = (email, password, remember) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'https://workintech-fe-ecommerce.onrender.com/login',
        { email, password },
      );
      if (response.status === 200) {
        const { token, name, email, role_id } = response.data;
        const userData = { token, name, email, role_id };

        if (remember) {
          localStorage.setItem('authToken', token);
        }

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
      const response = await axios.get(
        'https://workintech-fe-ecommerce.onrender.com/roles',
      );
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
