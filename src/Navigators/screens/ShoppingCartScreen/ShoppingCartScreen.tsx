import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { COLORS } from '../../../utils/constants';


export default function ShoppingCartScreen() {
  
  return (
    <ShoppingCartScreenView>
      <Text style={{ fontSize: 20, color: COLORS.white }}>ShoppingCart Screen styled</Text>
      <MaterialCommunityIcons name="cart" color={COLORS.white} size={30} />
    </ShoppingCartScreenView>
  )
}

const ShoppingCartScreenView = styled.View`
  flex: 1; 
  justify-content: center; 
  align-items: center; 
  background-color: ${COLORS.purplePrimary};
`;

