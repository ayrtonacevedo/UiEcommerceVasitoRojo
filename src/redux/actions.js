import axios from "axios";
//------- PRODUCTS --------------------
export const GET_PRODUCTS = "GET PRODUCTS";
export const PRODUCTS_ROUTE = "http://localhost:3001/products";
//----------------------------------------

//----------- CATEGORIES ------------
export const GET_CATEGORIES = "GET CATEGORIES";
export const CATEGORIES_ROUTE = "http://localhost:3001/categories";
//--------------------------------------

//-----------GET PRODUCTS-----------
export function getProducts() {
  return async function (dispatch) {
    // REQUEST API
    let products = await axios.get(PRODUCTS_ROUTE);
    return dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
}
//------------------------------
//------- GET CATEGORIES ------------
export function getCategories() {
  return async function (dispatch) {
    // REQUEST API
    let categories = await axios.get(CATEGORIES_ROUTE);
    return dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  };
}
