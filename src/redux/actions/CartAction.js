import { checkout } from "../../api";

//add cart action
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    item,
  };
};
//remove item action
export const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    item,
  };
};
//subtract qt action
export const subtractQuantity = (item) => {
  return {
    type: "SUB_QUANTITY",
    item,
  };
};
//add qt action
export const addQuantity = (item) => {
  return {
    type: "ADD_QUANTITY",
    item,
  };
};
export const setQuantity = (item, qty) => {
  return {
    type: "SET_QUANTITY",
    item,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const setOrderDetails = (orderDetails) => {
  return {
    type: "SET_ORDER_DETAILS",
    orderDetails,
  };
};
export const setErrors = (err) => {
  return {
    type: "SET_ERROR",
    errors: err,
  };
};
export const checkoutCart = (cart) => {
  return (dispatch) => {
    //   fetch products from graphql api
    checkout(cart).then((result) =>
      dispatch({ type: "CHECKOUT_CART", payload: result })
    );
  };
};
