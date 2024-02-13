import type { CartType, ShoppingCartActions } from "../types";
import { getItemAlreadyInCart } from "../../utils/getters";

import { ActionType } from '../types';

export const cartReducers = (state: CartType, action: ShoppingCartActions) => {

  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART: {
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

    case ActionType.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)};
    };

    case ActionType.INCREASE_ITEM_QUANTITY: {
      return {
        ...state, 
        items: state.items.map(item => {
          return (item.id === action.payload.id) ? 
            {
              ...item, 
              qty: item.qty + 1
            } : item
        }) 
        };
    };

    case ActionType.DECREASE_ITEM_QUANTITY: {
      return {
        ...state, 
        items: state.items.map(item => {
          return (item.id === action.payload.id) ? 
            {
              ...item, 
              qty: item.qty - 1
            } : item
        }) 
        };
    };

    case ActionType.EMPTY_CART: {
      return {
        items: []
      }
    };

    default: 
      return state;
  }
}