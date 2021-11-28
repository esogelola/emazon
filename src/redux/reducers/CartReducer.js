const initialState = {
  cart: [],
  total: 10,
  address: null,
  token: null,
  errors: null,
};
export default function CartReducer(state = initialState, action) {
  let cartItem = null;
  let newCart = null;
  let newTotal = 0;

  switch (action.type) {
    case "ADD_TO_CART":
      let { id, price } = action.item;
      cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity += 1;
        return {
          ...state,
          total: state.total + price,
        };
      } else {
        cartItem = action.item;
        cartItem.quantity = 1;

        return {
          ...state,
          cart: [...state.cart, cartItem],
          total: state.total + price,
        };
      }

    case "REMOVE_ITEM":
      let itemToRemove = state.cart.find((item) => action.item.id === item.id);
      newCart = state.cart.filter((item) => action.item.id !== item.id);
      //calculating the total
      newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        cart: newCart,
        total: newTotal,
      };

    case "SUB_QUANTITY":
      cartItem = state.cart.find((item) => item.id === action.item.id);
      if (cartItem.quantity === 1) {
        newCart = state.cart.filter((item) => action.item.id !== item.id);
        newTotal = state.total - cartItem.price * cartItem.quantity;

        return {
          ...state,
          cart: newCart,
          total: newTotal,
        };
      } else {
        cartItem.quantity -= 1;
        newTotal = state.total - cartItem.price;
        return {
          ...state,

          total: newTotal,
        };
      }

    case "ADD_QUANTITY":
      cartItem = state.cart.find((item) => item.id === action.item.id);
      cartItem.quantity += 1;
      newTotal = state.total + cartItem.price;
      return {
        ...state,

        total: newTotal,
      };
    case "SET_QUANTITY":
      cartItem = state.cart.find((item) => item.id === action.item.id);
      cartItem.quantity = action.item.qty;
      newTotal = state.total + cartItem.price * cartItem.quantity;
      return {
        ...state,

        total: newTotal,
      };

    case "SET_ORDER_DETAILS":
      return {
        ...state,
        address:
          action.orderDetails.address == null
            ? state.address
            : action.orderDetails.address,
        token:
          action.orderDetails.token == null
            ? state.token
            : action.orderDetails.token,
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "CHECKOUT_CART":
      return {
        ...state,
      };

    default:
      return state;
  }
}
