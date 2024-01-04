export type ProductSummaryDataType = {
  id: string;
  title: string;
  brand: string;
  category: string;
};

export type ProductSummaryPropsType = {
  productData: ProductSummaryDataType;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};