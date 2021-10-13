import { GET_GIFS, GET_TRENDING, SEARCH_STATE } from "../actions";

const initialState = {
  results: [],
  trending: [],
  searchState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_TRENDING:
      return {
        ...state,
        trending: action.payload,
      };
    case SEARCH_STATE:
      return {
        ...state,
        searchState: true,
      };
    default:
      return state;
  }
};

export default reducer;
