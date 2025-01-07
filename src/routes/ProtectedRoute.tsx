import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/stores/AuthStore";

type ProtectedRouteProps = {
  requiredRole: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const { isLogin, role } = useAuthStore((state) => ({
    isLogin: state.isLogin,
    role: state.role,
  }));

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/Unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
