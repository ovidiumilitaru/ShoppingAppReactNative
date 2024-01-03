import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { COLORS } from '../../../utils/constants';

export default function AccountScreen() {
  return (
    <AccountScreenView>
      <Text style={{ fontSize: 20, color: COLORS.white }}>Account Screen styled</Text>
      <MaterialCommunityIcons name="account" color={COLORS.white} size={30} />
    </AccountScreenView>
  )
}

const AccountScreenView = styled.View`
  flex: 1; 
  justify-content: center; 
  align-items: center; 
  background-color: ${COLORS.greenPrimary};
`;

