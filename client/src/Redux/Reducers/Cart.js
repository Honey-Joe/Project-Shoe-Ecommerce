import {
  ADD_ITEM_TO_CART,
  CART__ITEM_CLEAR,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_ITEM_TO_CART,
  SAVE_PAYMENT_METHOD,
} from "../Constants/Cart";

export const cartReducer = (
  state = { cartItems: {}, shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => {
            return x.product === existingItem.product ? item : x;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: { ...state.cartItems, item },
        };
      }
    case REMOVE_ITEM_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART__ITEM_CLEAR:
      return { ...state, cartItems: {} };
    default:
      return state;
  }
};
