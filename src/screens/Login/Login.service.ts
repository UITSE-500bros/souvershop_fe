import axiosInstance from "@/services/AxiosInstance"

export const loginWithGoogleApi = async ()=>{
    try{
        const response = await axiosInstance.get('auth/login/federated/google')
        console.log(response)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}