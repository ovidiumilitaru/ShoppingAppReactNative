import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useGetProductsList } from '../../../hooks/useGetProductsList';
import { HomeScreenFilter, ProductsList } from '../../../components/index';
import { COLORS } from '../../../utils/constants';
import type { ProductsDataType } from '../../../utils/types';

export default function HomeScreen() {
  const [products, setProducts] = useState<ProductsDataType>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsDataType>([]);
  // const [filterText, setFilterText] = useState<string>('');

  const { isPending, isError, error, data } = useGetProductsList();

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data)
  }, [data]);
  
  if (isPending) {
    return <Text>Products list is loading ... </Text>
  };

  if (isError) {
    return <Text>Error: {error.message}</Text> 
  }

  const filterTextHandler = (text: string) => {
    // setFilterText(text);

    if (products) {
      const filteredProducts = products.filter((prod: any) => {
        return prod.category.includes(text.toLowerCase());
      })
      setFilteredProducts(filteredProducts)
    }
  };

  return (
    <HomeScreenContainer>
      <HomeScreenFilter onFilterText={filterTextHandler} />
      <ProductsList products={filteredProducts} />
    </HomeScreenContainer>

  )
}

const HomeScreenContainer = styled.View`
  background-color: ${COLORS.white};
  flex: 1; 
`
