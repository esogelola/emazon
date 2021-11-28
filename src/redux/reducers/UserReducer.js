const initialState = {
  userInfo: null,
  authState: null,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "SET_AUTH_STATE":
      return {
        ...state,
        authState: action.state,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
}
