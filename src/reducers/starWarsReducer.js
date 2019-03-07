import {SUCCESS, FAILURE, FETCHING} from "../actions";
const initialState = {
  characters: [],
  fetching:false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // action types should be FETCHING, SUCCESS and FAILURE
    case SUCCESS:
      return {
        characters: action.payload,
        fetching: false,
        error: null,
      }
    case FAILURE:
      return {
        characters: state.characters,
        fetching: false,
        error: action.payload,
      }
    case FETCHING:
      return {
        characters: state.characters,
        fetching: true,
        error: null,
      }
    default:
      return state;
  }
};
