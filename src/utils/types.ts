import { RouteProp } from "@react-navigation/native";
import { type Dispatch } from "react";


export type ProductDataType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsDataType = ProductDataType[];

export type ProductsInfoType = {
  products: ProductsDataType;
  total: number;
  skip: number;
  timit: number;
}

export type ProductSummaryPropsType = {
  productData: ProductDataType;
  onPress: () => void;
};

export type RootStackParamList = {
  ProductsSceen: undefined;
  ProductDetailsScreen: { prodId: number };
}

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  qty: number;
  thumbnail: string;
};

export type CartType = { items: [] | CartItemType[] };

export type CartContextType = {
  state: CartType; 
  dispatch: Dispatch<any>;
};

export type ActionMap<M extends {[ index: string ]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key;
    }
    : {
      type: Key;
      payload: M[Key];
    }
}

export enum ActionType {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  EMPTY_CART = 'EMPTY_CART_CART',
}

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]

export type ShoppingCartPayload = {
  [ActionType.ADD_ITEM_TO_CART]: CartItemType;
  
  [ActionType.REMOVE_ITEM_FROM_CART]: {
    id: number;
  };
  
  [ActionType.INCREASE_ITEM_QUANTITY]: {
    id: number;
  };

  [ActionType.DECREASE_ITEM_QUANTITY]: {
    id: number;
  };

  [ActionType.EMPTY_CART]: CartType;
};
