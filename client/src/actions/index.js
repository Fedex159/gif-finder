import axios from "axios";
import env from "react-dotenv";
import { mapGifs } from "../utils";

export const GET_GIFS = "GetGifs";
export const GET_TRENDING = "GetTrending";
export const SEARCH_STATE = "SearchState";
export const ADD_FAVOURITE = "AddFavourite";
export const REMOVE_FAVOURITE = "RemoveFavourite";

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

export const getTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${env.API_KEY}&limit=25&rating=g`
    );
    const results = mapGifs(response.data.data);
    return {
      type: GET_TRENDING,
      payload: results,
    };
  } catch (e) {
    console.log("Error getTrending", e);
  }
};

export const setSearchState = () => {
  return {
    type: SEARCH_STATE,
  };
};

export const addFavourite = (payload) => {
  return {
    type: ADD_FAVOURITE,
    payload: payload,
  };
};

export const removeFavourite = (payload) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: payload,
  };
};
