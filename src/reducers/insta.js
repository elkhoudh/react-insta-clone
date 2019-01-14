import Data from "../dummy-data";

const initalState = { data: Data };

const instaReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const newStat = state.data.map(post => {
        if (post.username === action.username) {
          post.likes = post.likes + 1;
        }
        return state;
      });

      return {
        ...state,
        newStat
      };
    default:
      return state;
  }
};

export default instaReducer;
