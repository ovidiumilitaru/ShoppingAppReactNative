import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';


export default function ShoppingCartScreen() {
  return (
    <ShoppingCartScreenView>
      <Text style={{ fontSize: 20, color: '#ffffff'}}>ShoppingCart Screen styled</Text>
      <MaterialCommunityIcons name="cart" color="#ffffff" size={30} />
    </ShoppingCartScreenView>
  )
}

const ShoppingCartScreenView = styled.View`
  flex: 1; 
  justify-content: center; 
  align-items: center; 
  background-color: #c203fc;
`;

