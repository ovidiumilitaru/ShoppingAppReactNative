import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../../utils/constants';
import { ShoppingCart } from '../../../components';


export default function ShoppingCartScreen() {

  return (
    <ShoppingCartScreenView>
      <ShoppingCart />
    </ShoppingCartScreenView>
  )
}

const ShoppingCartScreenView = styled.View`
  flex: 1; 
  background-color: ${ COLORS.white };
  border-top: 1px solid ${ COLORS.grayLight };
`;
