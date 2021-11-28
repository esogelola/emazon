import { Auth } from "aws-amplify";

//Get the current user info from aws
export const getCurrentUser = () => {
  return (dispatch) => {
    //   fetch products from graphql api
    Auth.currentUserInfo().then((result) =>
      dispatch({ type: "GET_CURRENT_USER", payload: result })
    );
  };
};

export const setAuthState = (state) => {
  return {
    type: "SET_AUTH_STATE",
    state,
  };
};
export const logoutUser = () => {
  return (dispatch) => {
    //   fetch products from graphql api
    Auth.signOut().then((result) =>
      dispatch({ type: "LOGOUT_USER", payload: result })
    );
  };
};
export const getCurrentUserOrders = () => {};
