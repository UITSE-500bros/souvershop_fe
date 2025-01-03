import { Loading } from "@/components/Loading";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function VerifyEmail() {
  const nav=useNavigate();
  const accessToken = useParams().accessToken;
  useEffect(()=>{
    if(accessToken){
      localStorage.setItem("accessToken", accessToken);
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
