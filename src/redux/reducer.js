import { GET_PRODUCTS, GET_CATEGORIES } from "./actions";

//INITIAL STATE
const initialState = {
  allProducts: [],
  allCategories: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };

    default:
      return state;
  }
}
