import { Platform } from 'react-native';
import styled from 'styled-components/native';
import type { ProductSummaryPropsType } from '../../utils/types';
import { COLORS } from '../../utils/constants';
import { useState } from 'react';

export default function ProductSummary({productData, onPress}: ProductSummaryPropsType) {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const onPressIn = () => setIsPressed(true);
  const onPressOut = () => setIsPressed(false);

  return (
    <ProductSummaryOuterWrapper platformOS={Platform.OS}>
      <ProductSummaryButton 
        android_ripple={{ color: COLORS.grayPrimary }}
        onPressIn={onPressIn} 
        onPressOut={onPressOut}
        onPress={onPress}
        isPressed={isPressed}
      >
        <ProductSummaryInnerWrapper>
          <ProductSummaryContainer>
            <ProductSummaryImageWrapper>
              <ProductSummaryImage source={{uri: productData.thumbnail}} />
            </ProductSummaryImageWrapper>
            <ProductSummaryDetails>
              <ProductSummaryTextTitle numberOfLines={1}>{productData.title}</ProductSummaryTextTitle>
              <ProductSummaryTextInfo>Brand: {productData.brand}</ProductSummaryTextInfo>
              <ProductSummaryTextInfo>Category: {productData.category}</ProductSummaryTextInfo>
              <ProductSummaryTextInfo>Price: $ {productData.price}</ProductSummaryTextInfo>
            </ProductSummaryDetails>
          </ProductSummaryContainer>
        </ProductSummaryInnerWrapper>
      </ProductSummaryButton>
    </ProductSummaryOuterWrapper>
  )
};


const ProductSummaryOuterWrapper = styled.View<{ platformOS: string }>`
  width: 90%;
  margin-vertical: 8px;
  align-self: center;
  border-radius: 8px;
  background-color: ${ COLORS.grayLight };
  elevation: 4;
  shadow-color: ${ COLORS.black };
  shadow-opacity: 0.35;
  shadow-offset-x: 0;
  shadow-offset-y: 2px;
  shadow-radius: 8px;
  overflow: ${(props) => (props.platformOS === 'android'  ? 'hidden' : 'visible' )};
`;

const ProductSummaryButton = styled.Pressable<{ isPressed: boolean }>`
  opacity: ${(props) => (props.isPressed ? '0.5' : '1')};
  
`;

const ProductSummaryInnerWrapper = styled.View`
  border-radius: 8px;
  overflow: hidden;
`;

const ProductSummaryContainer = styled.View`
  flex-direction: row;
  height: 96px;
`;

const ProductSummaryImageWrapper = styled.View`
  border: 1px solid ${COLORS.blueDark}; 
  flex: 1; 
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%; 
  border-radius: 8px;
`;

const ProductSummaryImage = styled.Image`
  width: 100%; 
  height: 100%;
  resize-mode: contain;
  border-radius: 8px; 
`

const ProductSummaryDetails = styled.View`
  width: 60%; 
  padding-left: 8px;
  justify-content: center;
`;

const ProductSummaryTextTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-vertical: 2px;
  color: ${COLORS.black};
`;

const ProductSummaryTextInfo = styled.Text`
  font-size: 12px;
  padding-vertical: 2px;
  color: ${COLORS.black};
`;