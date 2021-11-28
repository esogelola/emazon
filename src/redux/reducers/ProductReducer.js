const initialState = {
  products: [],
  featured: [],
  loaded: false,
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
