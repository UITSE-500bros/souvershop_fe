import http from "@/lib/Http";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}product`, {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    });
    return response.json();
  } catch (err) {
    console.error("Error in getAllProducts service:", err);
    throw err;
  }
};
