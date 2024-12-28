
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL;

export const GoogleLogin = async () => {
  try {
    window.location.href = `${API_URL}auth/login/federated/google`;
  } catch (err) {
    console.error(err);
  }
};

export const LoginService = async (
  user_email: string,
  user_password: string,
) => {
  try {
    const response = await axios.post(`${API_URL}auth/signin`,{user_email,user_password} )
    const {accessToken} = response.data;
    if(accessToken){
      Cookies.set('accessToken', accessToken);
      console.log(accessToken);
      
    }
    return response;
      
  } catch (err) {
    console.error(err);
  }
};
