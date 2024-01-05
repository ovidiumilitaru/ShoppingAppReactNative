import styled from 'styled-components/native';
import type { ProductSummaryPropsType } from '../../utils/types';

export default function ProductSummary({productData, onPress, backgroundColor, textColor}: ProductSummaryPropsType) {

  return (
    // <ProductSummaryButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
    //   <ProductSummaryTextTitle textColor={textColor}>Title: {productData.title}</ProductSummaryTextTitle>
    //   <ProductSummaryTextBrand textColor={textColor}>Brand: {productData.brand}</ProductSummaryTextBrand>
    //   <ProductSummaryTextCategory textColor={textColor}>Category: {productData.category}</ProductSummaryTextCategory>
    // </ProductSummaryButtonContainer>

    <ProductSummaryButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <ProductSummaryWrapper>
        <ProductSummaryImageContainer>
          <ProductSummaryImage source={{uri: productData.thumbnail}} />
        </ProductSummaryImageContainer>

        <ProductSummaryInfo>
          <ProductSummaryTextTitle textColor={textColor}>Title: {productData.title}</ProductSummaryTextTitle>
          <ProductSummaryTextBrand textColor={textColor}>Brand: {productData.brand}</ProductSummaryTextBrand>
          <ProductSummaryTextCategory textColor={textColor}>Category: {productData.category}</ProductSummaryTextCategory>
        </ProductSummaryInfo>
      </ProductSummaryWrapper>
    </ProductSummaryButtonContainer>
  )
};

const ProductSummaryButtonContainer = styled.TouchableOpacity<{onPress: () => void, backgroundColor: string}>`
  width: 90%;
  height: 96px;
  padding: 8px;
  margin-vertical: 8px;
  align-self: center;
  background-color: ${(props) => (props.backgroundColor)};
`

const ProductSummaryWrapper = styled.View`
  flex-direction: row;
`;

const ProductSummaryImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80px;
`;

const ProductSummaryImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`

const ProductSummaryInfo = styled.View`
  width: 60%; 
  padding-left: 8px;
`;

const ProductSummaryTextTitle = styled.Text<{textColor: string}>`
  font-size: 14px;
  padding-vertical: 4px;
  color: ${(props) => (props.textColor)};
`;

const ProductSummaryTextBrand = styled.Text<{textColor: string}>`
  font-size: 12px;
  padding-vertical: 4px;
  color: ${(props) => (props.textColor)};
`;

const ProductSummaryTextCategory = styled.Text<{textColor: string}>`
  font-size: 12px;
  padding-vertical: 4px;
  color: ${(props) => (props.textColor)};
`;
