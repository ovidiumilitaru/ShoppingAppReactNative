import { useRoute } from '@react-navigation/native';
import { View, Text} from 'react-native';

export default function ProductDetails() {
  const route = useRoute();
  console.log(" route = ", route);

  return (
    <View>
      <Text>Product Details STACK - prodId = {route.params?.prodId}</Text>
    </View>
  )
}