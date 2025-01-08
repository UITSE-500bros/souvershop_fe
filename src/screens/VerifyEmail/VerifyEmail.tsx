import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "@/stores/AuthStore";
import { Loading } from "@/components/Loading";

export default function VerifyEmail() {
  const nav = useNavigate();
  const location = useLocation();
  const { set } = useAuthStore();

  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get("accessToken");
  const refreshToken = queryParams.get("refreshToken");
  console.log(accessToken, refreshToken);
  

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
      set({ accessToken, isLogin: true });
  
      setTimeout(() => {
        nav('/');
        

      }, 3000);
    }
  }, [accessToken, refreshToken, set, nav]);

  return (
    <div>
      <Loading />
    </div>
  );
}
