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