import { Text, View } from "react-native";
import type { ProductDataType } from '../../utils/types';

interface Props {
  productDetails?: ProductDataType
}
export default function ProductDetails({productDetails}: Props) {

  return (
    <View>
      <Text> Product Details component, product title = { productDetails?.title }</Text>
    </View>
  )
}