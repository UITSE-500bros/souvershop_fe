const API_URL = import.meta.env.VITE_API_URL;

export const GoogleLogin = async () => {
  try {
    // const response = await fetch(`${API_URL}auth/login/federated/google`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (!response.ok) {
    //   throw new Error(`HTTP Error! Status: ${response.status}`);
    // }

    // const data = await response.json();
    // console.log(data);
    
    // return data;
     window.location.href = `${API_URL}auth/login/federated/google`;
  } catch (err) {
    console.error(err);
  }
};
