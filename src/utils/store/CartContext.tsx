import React, { createContext, useReducer, type Dispatch } from "react";
import { cartReducers } from './cartReducers';
import type { CartType, CartContextType } from "../types";

const initialState: CartType = { items: [] };

export const CartContext = createContext<CartContextType>({ 
  state: initialState, 
  dispatch: () => null
});

export default function CartProvider({ children}: any) {
  const [state, dispatch] = useReducer(cartReducers, initialState);

  return (
    <CartContext.Provider value={{state, dispatch}}>
        { children }
    </CartContext.Provider>
  )
}