import http from "@/lib/Http";



export const getAllProducts = async () => {
  try {
    const response = await http.get("product");
    return response;
  } catch (err) {
    console.error("Error in getAllProducts service:", err);
    throw err;
  }
};
