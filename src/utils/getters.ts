import type { CartItemType, CartType } from "./types";

export const getTruncateString = (str: string): string => {
  return (str.length > 20) ? `${str.substring(0, 17).trim()}...` : str;
}

export const getItemAlreadyInCart = (cart: CartType, prodId: number) => {
 return cart.items.filter(item => item.id === prodId).length
}