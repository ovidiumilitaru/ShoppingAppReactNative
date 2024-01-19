import { FlatList } from 'react-native';
import { ProductSummary } from '../index'
import type { ProductDataType } from '../../utils/types';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';

export default function ProductsList(props: any) {
  const { products } = props;

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const renderItem = ({item}: {item: ProductDataType} ) => {

    return (
      <ProductSummary
        productData={item}
        onPress={() => { 
          navigation.navigate('ProductDetailsScreen', {
            prodId: item.id
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={products ?? []}
      renderItem={renderItem}
      keyExtractor={productData => productData.id.toString()}
    />
  )
}
