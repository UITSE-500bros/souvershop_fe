import http from "@/lib/Http";

export const getProductById = async (product_id: string) => {
  try {
    const res = await http.get(`product/${product_id}`);
    if (!res) {
      throw new Error("No data returned from server");
    }

    return res;
  } catch (err) {
    console.error("Error in getProductDetail service:", err);
    throw err;
  }
};
