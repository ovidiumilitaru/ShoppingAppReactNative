import { FlatList } from 'react-native';
import { useState } from 'react';
import { ProductSummary } from '../index'
import type { ProductSummaryDataType } from '../../utils/types';
import { COLORS } from '../../utils/constants';

export default function ProductsList(props: any) {
  const [selectedId, setSelectedId] = useState<string>(); 
  const { products } = props;

  const renderItem = ({item}: {item: ProductSummaryDataType} ) => {
    const backgroundColor = item.id === selectedId ? COLORS.purpleDark : COLORS.purpleLight;
    const color = item.id === selectedId ? COLORS.white : COLORS.black;

    return (
      <ProductSummary
        productData={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
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
