import { getProducts, checkout } from "../../api";

export const getAllProducts = () => {
    return (dispatch) => {
      //   fetch products from graphql api
        getProducts()
        .then((result) =>
          
          dispatch({ type: "GET_PRODUCTS", payload: result })
        );
    };
  };

export const checkoutProducts = (dispatch, getState) => {
    // 
}