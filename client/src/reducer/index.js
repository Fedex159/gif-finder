import {
  GET_GIFS,
  GET_TRENDING,
  SEARCH_STATE,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../actions";
import { changeFavouriteState } from "../utils";

const initialState = {
  results: [],
  trending: [],
  favourites: [],
  searchState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS:
      let results = action.payload;
      state.favourites.forEach((f) => {
        results = changeFavouriteState(results, f);
      });
      return {
        ...state,
        results: results,
      };
    case GET_TRENDING:
      let trending = action.payload;
      state.favourites.forEach((f) => {
        trending = changeFavouriteState(trending, f);
      });
      return {
        ...state,
        trending: trending,
      };
    case SEARCH_STATE:
      return {
        ...state,
        searchState: true,
      };
    case ADD_FAVOURITE:
      const GIF_ADD = action.payload;
      return {
        ...state,
        favourites: [...state.favourites, GIF_ADD],
        results: changeFavouriteState(state.results, GIF_ADD),
        trending: changeFavouriteState(state.trending, GIF_ADD),
      };
    case REMOVE_FAVOURITE:
      const GIF_REMOVE = action.payload;
      return {
        ...state,
        favourites: state.favourites.filter((g) => g.id !== GIF_REMOVE.id),
        results: changeFavouriteState(state.results, GIF_REMOVE),
        trending: changeFavouriteState(state.trending, GIF_REMOVE),
      };
    default:
      return state;
  }
};

export default reducer;
