import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BRANDSBYCATEGORIES,
  PRODUCT_DETAIL,
} from "./actions";

//INITIAL STATE
const initialState = {
  allProducts: [],
  allCategories: [],
  allBrandsByCategories: [],
  productDetailId: [],
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
    case GET_BRANDSBYCATEGORIES:
      return {
        ...state,
        allBrandsByCategories: action.payload,
      };
    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetailId: action.payload,
      };

    default:
      return state;
  }
}
