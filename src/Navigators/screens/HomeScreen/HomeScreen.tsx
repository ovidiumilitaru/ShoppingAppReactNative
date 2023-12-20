import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useGetProductsList } from '../../../hooks/useGetProductsList';

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

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState<string>(); 

  const { isPending, isError, error, data } = useGetProductsList();
  
  if (isPending) {
    return <Text>Products list is loading ... </Text>
  };

  if (isError) {
    return <Text>Error: {error.message}</Text> 
  }

  const renderItem = ({item}: {item: ItemData} ) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

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
      data={data ?? []}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
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