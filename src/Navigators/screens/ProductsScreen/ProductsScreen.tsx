import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { getProducts } from '../../../queries/getProducts';
import { COLORS } from '../../../utils/constants';
import type { ProductsDataType } from '../../../utils/types';
import { HomeScreenFilter, ProductsList, Loading, Error } from '../../../components/index';

export default function ProductsScreen() {
  const [products, setProducts] = useState<ProductsDataType>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsDataType>([]);

  const { isPending, isError, error, data } = getProducts();

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data)
  }, [data]);
  
  if (isPending) {
    return <Loading />
  };

  if (isError) {
    return <Error errorName={error.name} errorMsg={error.message} /> 
  }

  const filterTextHandler = (text: string) => {

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