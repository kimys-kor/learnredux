import { ADD_VIEW } from "./types";

const initialState = {
  count: 0,
};
const viewsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + actions.payload,
      };
    default:
      return state;
  }
};
export default viewsReducer;
