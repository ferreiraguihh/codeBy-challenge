import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM, TOTAL_PRICE_TRUFFLE, } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    cartItems: [],
    success: false,
    warning: false,
    total: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const totalPriceTruffle = (price) => {
    dispatch({ type: TOTAL_PRICE_TRUFFLE, payload: price })
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        total: state.total,
        totalPriceTruffle,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
