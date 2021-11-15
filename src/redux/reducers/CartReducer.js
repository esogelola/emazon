const initialState = {
  cart: [],

  total: 10,
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

    case "CHECKOUT_CART":
      console.log(state);
      return {
        state,
      };

    default:
      return state;
  }
}
