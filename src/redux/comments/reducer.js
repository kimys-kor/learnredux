import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_REQUEST,
} from "./types";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const commentsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        items: actions.payload,
        loading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        err: actions.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default commentsReducer;
