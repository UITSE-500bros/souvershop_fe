
import axiosInstance from "@/services/AxiosInstance";

export const signUp = async (user_email: string, user_password: string) => {
  try {
    const response = await axiosInstance.post("auth/register", {
      user_email,
      user_password,
    });

    if (response.status !== 200) {
      throw new Error("No data returned from server");
    }
    return response;
  } catch (err) {
    console.error("Error in signUp service:", err);
    throw err; // Re-throw the error to handle it in the calling function
  }
};
