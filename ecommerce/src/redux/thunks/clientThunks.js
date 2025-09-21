import { setRoles } from '../actions/clientActions';
import axios from 'axios';

export const getRoles = () => {
  return async (dispatchEvent, getState) => {
    const { roles } = getState().client;
    if (roles.length > 0) {
      return;
    }

    try {
      const response = await axios.get(
        'https://workintech-fe-ecommerce.onrender.com/roles',
      );
      dispatchEvent(setRoles(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
