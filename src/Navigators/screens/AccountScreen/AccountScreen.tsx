import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export default function AccountScreen() {
  return (
    <AccountScreenView>
      <Text style={{ fontSize: 20, color: '#ffffff'}}>Account Screen styled</Text>
      <MaterialCommunityIcons name="account" color="#ffffff" size={30} />
    </AccountScreenView>
  )
}

const AccountScreenView = styled.View`
  flex: 1; 
  justify-content: center; 
  align-items: center; 
  background-color: #48d969;
`;

