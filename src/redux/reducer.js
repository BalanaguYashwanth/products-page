import { ProductState } from "../utils/constants";

export const catgeoryReducer = (state = ProductState, action) => {
  switch (action.type) {
    case "LOADER":
      return {
        ...state,
        LOADING: action.LOADING,
      };
    case "LOAD_DATA":
      return {
        ...state,
        PRODUCTS: action.PRODUCTS,
        LOADING: action.LOADING,
      };
    case "ERROR":
      return {
        ...state,
        ERROR: action.ERROR,
        LOADING: action.LOADING,
      };
    default:
      return state;
  }
};

