import axiosInstance from "@/services/AxiosInstance"

export const getProductOverview = async ()=>{
    try {
        const response = await axiosInstance.get('report/products')
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}
