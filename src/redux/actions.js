import axios from "axios";
//------- PRODUCTS --------------------
export const GET_PRODUCTS = "GET PRODUCTS";
export const PRODUCTS_ROUTE = "http://localhost:3001/products";

export const PRODUCT_DETAIL = "PRODUCT DETAIL";
export const PRODUCT_DETAIL_ROUTE = "http://localhost:3001/products/";
//----------------------------------------

//----------- CATEGORIES ------------
export const GET_CATEGORIES = "GET CATEGORIES";
export const CATEGORIES_ROUTE = "http://localhost:3001/categories";
//--------------------------------------
// --------- BRANDS --------
export const GET_BRANDSBYCATEGORIES = "GET BRANDS BY CATEGORIES";
export const BRANDS_BY_CATEGORIES_ROUTE =
  "http://localhost:3001/categories/brands";

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
//----- PRODUCT BY ID -------
export function productDetail(id) {
  return async function (dispatch) {
    try {
      let productDetail = await axios.get(PRODUCT_DETAIL_ROUTE + id);
      return dispatch({
        type: PRODUCT_DETAIL,
        payload: productDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
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
//---------- BRANDS -----------
export function getBrandsByCategories() {
  return async function (dispatch) {
    let brandsByCategories = await axios.get(BRANDS_BY_CATEGORIES_ROUTE);
    return dispatch({
      type: GET_BRANDSBYCATEGORIES,
      payload: brandsByCategories.data,
    });
  };
}
//--------CANT PRODUCT ------
