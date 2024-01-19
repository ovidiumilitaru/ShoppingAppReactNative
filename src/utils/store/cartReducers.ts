import type { CartProductType, CartType, ActionMap, ShoppingCartActions, ShoppingCartPayload } from "../types";
import { itemAlreadyInCart } from "../../utils/getters";

import { ActionsType } from '../types';

export const cartReducers = (state: CartType, action: ShoppingCartActions) => {
  switch (action.type) {
    case ActionsType.ADD_PROD_TO_CART: {
      console.log('cartReducers, action.payload = ', action.payload);
      return [...state, {
        id: action.payload.id,
        title: action.payload?.title,
        price: action.payload?.price,
        qty: action.payload?.qty
      }];
    }

    case ActionsType.REMOVE_PROD_FROM_CART: {
      console.log('remove product from cart');
      return [...state.filter(prod => prod.id !== action.payload.id)];
    }
  }
}