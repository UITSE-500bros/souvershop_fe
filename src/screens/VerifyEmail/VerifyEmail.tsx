import { Loading } from "@/components/Loading";
import useAuthStore from "@/stores/AuthStore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function VerifyEmail() {
  const nav=useNavigate();
  const accessToken = useParams().accessToken;
 
  useEffect(()=>{
    if(accessToken){
      localStorage.setItem("accessToken", accessToken);
      toast.success("Xác thực email thành công");
      setTimeout(() => {
        nav('/')
      }, 3000);
    
    }
  },[accessToken])
  return (
    <div>
      <Loading />
    </div>
  );
}
