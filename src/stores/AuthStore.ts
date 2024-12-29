import axiosInstance from '@/services/AxiosInstance';
import {create} from'zustand';;

type AuthStore = {
    isLogin: boolean,
    accessToken: string,
    refreshToken: string,
    login: (user_email: string, user_password: string) => void,
    logout: () => void
    loadFromStorage: () => void
}

const useAuthStore = create<AuthStore>((set)=>({

    isLogin: false,
    accessToken: '',
    refreshToken:'',
    login:async (user_email: string, user_password: string) => {
        try{
            const response = await axiosInstance.post('auth/signin', {user_email, user_password});
            const {accessToken, refreshToken} = response.data;
            if(accessToken){
                set({accessToken, refreshToken, isLogin: true});
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }
        }catch(err){
            console.error(err);
        }
    },

    logout:()=>{
        set({accessToken:'', refreshToken:'', isLogin: false});
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
    },
    loadFromStorage: () => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken && refreshToken) {
          set({ accessToken, refreshToken });
        }
      },
}))
export default useAuthStore;