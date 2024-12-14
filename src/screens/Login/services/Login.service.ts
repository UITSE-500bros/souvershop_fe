const API_URL = import.meta.env.VITE_API_URL;

export const GoogleLogin = async () => {
  try {
   
     window.location.href = `${API_URL}auth/login/federated/google`;
  } catch (err) {
    console.error(err);
  }
};
