import { Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../utils/constants';

// import styled from 'styled-components/native';

type ItemData = {
  id: string;
  title: string;
  brand: string;
  category: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>Title: {item.title}</Text>
    <Text style={[styles.brand, {color: textColor}]}>Brand: {item.brand}</Text>
    <Text style={[styles.category, {color: textColor}]}>Category: {item.category}</Text>
  </TouchableOpacity>
);


export default function ProductsList(props: any) {
  const [selectedId, setSelectedId] = useState<string>(); 

  const { products } = props;

  const renderItem = ({item}: {item: ItemData} ) => {
    const backgroundColor = item.id === selectedId ? COLORS.purpleDark : COLORS.purpleLight;
    const color = item.id === selectedId ? COLORS.white : COLORS.black;

    return (
      <Item
        item={item}
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
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.purpleLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    paddingVertical: 4,
  },
  brand: {
    fontSize: 16,
    paddingVertical: 4,
  },
  category: {
    fontSize: 14,
    paddingVertical: 4,
  }
});
