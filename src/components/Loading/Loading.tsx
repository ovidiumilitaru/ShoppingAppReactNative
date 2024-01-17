import {ActivityIndicator, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../utils/constants';

export default function Loading() {

  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={COLORS.blueDark} />
  </LoadingContainer>
  )
}

const LoadingContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justifyContent: space-around;
  padding: 10px;
`;