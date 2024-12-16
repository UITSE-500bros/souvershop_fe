import { M } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

const API_URL = import.meta.env.VITE_API_URL;

export const GoogleLogin = async () => {
  try {
   
     window.location.href = `${API_URL}auth/login/federated/google`;
  } catch (err) {
    console.error(err);
  }
};
export const login=async(email:string,password:string)=>{
  return {
    message:"Login success"
  }
}
