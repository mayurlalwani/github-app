import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_ALL_USERS,
  SEARCH_REPOS,
} from "../types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        repos: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
