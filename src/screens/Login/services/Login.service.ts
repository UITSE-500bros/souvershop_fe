import http from "@/lib/Http";

const API_URL = import.meta.env.VITE_API_URL;

export const GoogleLogin = async () => {
  try {
   
     window.location.href = `${API_URL}auth/login/federated/google`;
  } catch (err) {
    console.error(err);
  }
};

export const LoginService = async (user_email: string, user_password: string) => {
  try{
    const response = await http.post("auth/signin", { user_email, user_password });
    return response;
  }catch(err){
    console.error(err);
  }
}

