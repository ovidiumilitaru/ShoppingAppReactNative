/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BottomTabNavigation from './src/navigators/BottomTabNavigators';
import styled from 'styled-components/native';

export default function App(): React.JSX.Element {

  return (
    <ContainerSafeAreaView >
      <BottomTabNavigation />
    </ContainerSafeAreaView>
  );
};

const ContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;