import { RouteProp } from "@react-navigation/native";

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

export type CartProductType = {
  id: number;
  title: string;
  price: number;
  qty: number;
}
export type CartType = CartProductType[];

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

export enum ActionsType {
  ADD_PROD_TO_CART = 'ADD_TO_CART',
  REMOVE_PROD_FROM_CART = 'REMOVE_PROD_FROM_CART',
  INCREASE_PROD_QUANTITY = 'INCREASE_PROD_QUANTITY',
  DECREASE_PROD_QUANTITY = 'DECREASE_PROD_QUANTITY',
}

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]

export type ShoppingCartPayload = {
  [ActionsType.ADD_PROD_TO_CART]: CartProductType;
  [ActionsType.REMOVE_PROD_FROM_CART]: {
    id: number;
  }
}