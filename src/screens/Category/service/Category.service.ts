import http from "@/lib/Http";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async () => {
  try {
    const response = await http.get("product");
    return response;
  } catch (err) {
    console.error("Error in getAllProducts service:", err);
    throw err;
  }
};
