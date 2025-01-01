import axiosInstance from "@/services/AxiosInstance"

export const getBannerApi = async () => {
    try{
        const response = await axiosInstance.get('banner')
        return response.data
    }
    catch(error){
        console.log(error)
    }
}