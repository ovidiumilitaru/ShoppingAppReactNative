import { FlatList } from 'react-native';
import { useCallback } from 'react';
import { ProductSummary } from '../index'
import type { ProductDataType } from '../../utils/types';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';

export default function ProductsList(props: any) {
  const { products } = props;

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const renderItem = useCallback(({item}: {item: ProductDataType}) => {
    return (
      <ProductSummary
        key={item.id.toString()}
        productData={item}
        onPress={() => { 
          navigation.navigate('ProductDetailsScreen', {
            prodId: item.id
          });
        }}
      />
    );
  }, []);

  return (
    <FlatList
      data={products ?? []}
      renderItem={renderItem}
      keyExtractor={item => item?.id.toString()}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      removeClippedSubviews={true}
      windowSize={10}
    />
  )
}
