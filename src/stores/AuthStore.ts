import axiosInstance from "@/services/AxiosInstance";
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { Role } from "@/models/Role";

type AuthStore = {
  isLogin: boolean;
  accessToken: string;
  refreshToken: string;
  login: (user_email: string, user_password: string) => Promise<string | undefined>;
  logout: () => void;
  loadFromStorage: () => void;
  role: string | null;
  set: (partial: Partial<AuthStore>) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  accessToken: "",
  refreshToken: "",
  role: null,
  login: async (user_email: string, user_password: string) => {
    try {
      const response = await axiosInstance.post("auth/signin", {
        user_email,
        user_password,
      });
      const { accessToken, refreshToken } = response.data;
      if (accessToken && refreshToken) {
        const decodedToken: { user_role: string } = jwtDecode(accessToken);
        const role: Role = decodedToken.user_role as Role;
        console.log(role);
        
        set({ isLogin: true, accessToken, refreshToken, role });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        return role;
      }
    } catch (err) {
      console.error(err);
    }
  },

  logout: () => {
    set({ accessToken: "", refreshToken: "", isLogin: false });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  },
  loadFromStorage: () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      set({ accessToken, refreshToken });
    }
  },
  set: (partial) => set(partial),
}));
export default useAuthStore;
