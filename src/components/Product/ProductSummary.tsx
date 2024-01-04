import styled from 'styled-components/native';
import type { ProductSummaryPropsType } from '../../utils/types';

export default function ProductSummary({productData, onPress, backgroundColor, textColor}: ProductSummaryPropsType) {

  return (
    <ProductSummaryButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <ProductSummaryTextTitle textColor={textColor}>Title: {productData.title}</ProductSummaryTextTitle>
      <ProductSummaryTextBrand textColor={textColor}>Brand: {productData.brand}</ProductSummaryTextBrand>
      <ProductSummaryTextCategory textColor={textColor}>Category: {productData.category}</ProductSummaryTextCategory>
    </ProductSummaryButtonContainer>
  )
};

const ProductSummaryButtonContainer = styled.TouchableOpacity<{onPress: () => void, backgroundColor: string}>`
  padding-vertical: 10px;
  padding-horizontal: 20px;
  margin-vertical: 8px;
  margin-horizontal: 16px;
  background-color: ${(props) => (props.backgroundColor)};
`

const ProductSummaryTextTitle = styled.Text<{textColor: string}>`
  font-size: 18px;
  padding-vertical: 4px;
  color: ${(props) => (props.textColor)};
`;

const ProductSummaryTextBrand = styled.Text<{textColor: string}>`
  font-size: 16px;
  padding-vertical: 4px;
  color: ${(props) => (props.textColor)};
`;

const ProductSummaryTextCategory = styled.Text<{textColor: string}>`
  font-size: 14px;
  padding-vertical: 4px;
  color: ${(props) => (props.textColor)};
`;
