/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components/native';
import BottomTabNavigation from './src/navigators/BottomTabNavigators';
import CartProvider from './src/utils/store/CartContext';

export default function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ContainerSafeAreaView >
          <StatusBar backgroundColor="#fff" barStyle="default" />
          <BottomTabNavigation />
        </ContainerSafeAreaView>
      </CartProvider>
    </QueryClientProvider>
  );
};

const ContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;