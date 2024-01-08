import { FlatList } from 'react-native';
import { useState } from 'react';
import { ProductSummary } from '../index'
import type { ProductDataType } from '../../utils/types';
import { COLORS } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';

export default function ProductsList(props: any) {
  const [selectedId, setSelectedId] = useState<string>(); 
  const { products } = props;

  const navigation = useNavigation();

  const renderItem = ({item}: {item: ProductDataType} ) => {
    const backgroundColor = item.id === selectedId ? COLORS.blueDark : COLORS.blueLight;
    const color = item.id === selectedId ? COLORS.white : COLORS.black;

    return (
      <ProductSummary
        productData={item}
        backgroundColor={backgroundColor}
        textColor={color}
        onPress={() => { 
          setSelectedId(item.id)
          navigation.navigate('HomeProductDetails', {
            prodId: item.id,
          })
        }}
      />
    );
  };

  return (
    <FlatList
      data={products ?? []}
      renderItem={renderItem}
      keyExtractor={productData => productData.id}
      extraData={selectedId}
    />
  )
}
