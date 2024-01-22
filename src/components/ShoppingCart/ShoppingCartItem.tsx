import styled from "styled-components/native";
import { COLORS } from "../../utils/constants";
import type { CartItemType } from "../../utils/types";

export default function ShoppingCartItem({item}: {item: CartItemType}) {
  console.log('In CartItemSummart')
  console.log('item.thumbnail = ', item.thumbnail)

  return (
    <ItemContainer>
      <ItemImageContainer>
        <ProductSummaryImage source={{uri: item.thumbnail}} />
      </ItemImageContainer>

      <ItemInfoContainer>
        <ItemTitleText numberOfLines={1}>{ item.title}</ItemTitleText>
        <ItemPriceText>$ { item.price}</ItemPriceText>
        <ItemInfoQuantityContainer>
          <ItemQuantityText>-</ItemQuantityText>
          <ItemQuantityText>{ item.qty}</ItemQuantityText>
          <ItemQuantityText>+</ItemQuantityText>
        </ItemInfoQuantityContainer>
      </ItemInfoContainer>

    </ItemContainer>
  )
}

const ItemContainer = styled.View`
  background-color: ${ COLORS.grayLight };
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  flex-direction: row;
  height: 96px;
`;

const ItemImageContainer = styled.View`
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
`;

const ItemInfoContainer = styled.View`
  padding-left: 16px;
  justify-content: space-between;
  width: 60%;
`;

const ItemTitleText = styled.Text`
  color: ${ COLORS.black };
  font-size: 16px;
  padding-bottom: 4px;
`;

const ItemPriceText = styled.Text`
  color: ${ COLORS.redPrimary };
  font-size: 15px;
  padding-bottom: 4px;

`;

const ItemInfoQuantityContainer = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  border: 1px solid ${ COLORS.grayDark };
  padding: 4px; 
`;

const ItemQuantityText = styled.Text`
  color: ${ COLORS.black };
  font-size: 14px;
`;