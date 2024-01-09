import { useRoute } from '@react-navigation/native';
import { View, Text} from 'react-native';
import type { RootRouteProps } from '../../../utils/types';

export default function ProductDetailsScreen() {
  const route = useRoute<RootRouteProps<'ProductDetailsScreen'>>();

  return (
    <View>
      <Text>Product Details STACK - prodId = {route?.params?.prodId}</Text>
    </View>
  )
}