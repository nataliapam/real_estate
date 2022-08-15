import axios from "axios";
/*export const dbOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};
export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};*/
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY + "",
      },
    });
    return data;
  } catch (error: any) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
  }
};
