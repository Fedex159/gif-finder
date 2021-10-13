import { GET_GIFS } from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
