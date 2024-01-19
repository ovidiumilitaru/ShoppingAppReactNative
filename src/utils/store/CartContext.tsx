import React, { createContext, useReducer, type Dispatch } from "react";
import { cartReducers } from './cartReducers';
import type { CartType } from "../types";

type InitialStateType = [] | CartType;
type CreateContextType = {
  state: InitialStateType; 
  dispatch: Dispatch<any>;
};

const initialState: InitialStateType = [] ;

export const CartContext = createContext<CreateContextType>({ 
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