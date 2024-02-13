import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { getProducts } from '../../../queries/getProducts';
import { COLORS } from '../../../utils/constants';
import type { ProductsDataType } from '../../../utils/types';
import { HomeScreenFilter, ProductsList, Loading, Error } from '../../../components/index';

export default function ProductsScreen() {
  const [products, setProducts] = useState<ProductsDataType>([]);
  const [filteredText, setFilteredText] = useState<string>('');

  const { 
    isPending,
    isError, 
    error, 
    data, 
    refetch
  } = getProducts(filteredText);


  useEffect(() => {
    refetch();
    setProducts(data);
  }, [data, filteredText]);
  
  if (isPending) {
    return <Loading />
  };

  if (isError) {
    return <Error errorName={error.name} errorMsg={error.message} /> 
  }

  const filterTextHandler = (text: string) => {
    setFilteredText(text);
  };

  return (
    <HomeScreenContainer>
      <HomeScreenFilter onFilterText={filterTextHandler} />
      <ProductsList products={products} />
    </HomeScreenContainer>
  )
}

const HomeScreenContainer = styled.View`
  background-color: ${COLORS.white};
  flex: 1; 
`