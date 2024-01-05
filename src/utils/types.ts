export type ProductDataType = {
  id: string;
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
  backgroundColor: string;
  textColor: string;
};