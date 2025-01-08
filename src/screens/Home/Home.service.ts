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

export const getRandomProductsApi = async () => {
    try{
        const response = await axiosInstance.get('product/search_random')
        return response.data
    }
    catch(error){
        console.log(error)
    }
}
export const  getTopReviewApi = async () => {
    try{
        const response = await axiosInstance.get('review/top')
        return response.data
    }
    catch(error){
        console.log(error)
    }
}