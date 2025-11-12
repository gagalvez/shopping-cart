import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {};
function cartReducer(state, action) {
  return state;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
