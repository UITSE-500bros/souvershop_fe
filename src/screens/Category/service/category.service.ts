

const API_URL = "https://souvershop-ff3c13f9139a.herokuapp.com/api/"; 

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; 
  }
};