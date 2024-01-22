import type { CartItemType, CartType, ActionMap, ShoppingCartActions, ShoppingCartPayload } from "../types";
import { getItemAlreadyInCart } from "../../utils/getters";

import { ActionsType } from '../types';

export const cartReducers = (state: CartType, action: ShoppingCartActions) => {

  switch (action.type) {
    case ActionsType.ADD_ITEM_TO_CART: {
      if (state.items.length === 0) {
        return {...state, items: [...state.items, action.payload]}
      } 

      if (getItemAlreadyInCart(state, action.payload.id)) {
        return {
          ...state,
          items: state.items.map(item => {
            return (item.id === action.payload.id) ? 
              {
                ...item, 
                qty: item.qty + 1
              } : item
          })
        }
      } else {
        return {
          ...state, 
          items: [ ...state.items, action.payload ]
        } 
      }
    };

    case ActionsType.REMOVE_ITEM_FROM_CART: {
      console.log('cartReducers, remove product from cart');
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)};
    };

    // case ActionsType.EMPTY_CART: {
    //   console.log('cartReducers, empty cart');
    //   return {
    //     ...state
    //   }
    // };

    default: 
      return state;
  }
}