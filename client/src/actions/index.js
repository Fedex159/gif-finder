import axios from "axios";

export const GET_GIFS = "GetGifs";
export const GET_TRENDING = "GetTrending";
export const SEARCH_STATE = "SearchState";
export const ADD_FAVOURITE = "AddFavourite";
export const REMOVE_FAVOURITE = "RemoveFavourite";

export const getGifs = async (name) => {
  try {
    const response = await axios.get(`/gifs?name=${name}`);
    return {
      type: GET_GIFS,
      payload: response.data,
    };
  } catch (e) {
    console.log("Error getGifs", e);
  }
};

export const getTrending = async () => {
  try {
    const response = await axios.get(`/gifs`);
    return {
      type: GET_TRENDING,
      payload: response.data,
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
