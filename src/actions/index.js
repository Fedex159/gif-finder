import axios from "axios";
import env from "react-dotenv";
import { mapGifs } from "../utils";

export const GET_GIFS = "GetGifs";

export const getGifs = async (name) => {
  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${env.API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`
    );
    const results = mapGifs(response.data.data);
    return {
      type: GET_GIFS,
      payload: results,
    };
  } catch (e) {
    console.log("Error getGifs", e);
  }
};
