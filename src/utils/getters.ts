import type { CartProductType, CartType } from "./types";

export const getTruncateString = (str: string): string => {
  return (str.length > 20) ? `${str.substring(0, 17).trim()}...` : str;
}

export const itemAlreadyInCart = (cart: CartType, prodId: number): CartProductType | null => {
  const arrExistingItem = cart.filter(item => {
    return item.id === prodId;
  });
  if (arrExistingItem[0]) {
    return arrExistingItem[0];
  } else {
    return null
  }
}