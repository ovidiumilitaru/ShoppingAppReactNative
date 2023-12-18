import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';


export default function HomeScreen() {
  return (
    <HomeScreenView>
      <Text style={{ fontSize: 20, color: '#ffffff'}}>Home Screen styled</Text>
      <MaterialCommunityIcons name="home" color="#ffffff" size={30} />
    </HomeScreenView>
  )
}

const HomeScreenView = styled.View`
  flex: 1; 
  justify-content: center; 
  align-items: center; 
  background-color: #03cafc;
`;