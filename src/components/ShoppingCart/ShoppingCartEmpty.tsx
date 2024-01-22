import styled from "styled-components/native";
import { COLORS } from "../../utils/constants";
import { Dimensions } from "react-native";

const { height } = Dimensions.get('screen');

export default function ShoppingCartEmpty() {
  return (
    <ShoppingCartEmptyContainer>
      <ShoppingCartEmptyText>No products in your shopping cart!</ShoppingCartEmptyText>
    </ShoppingCartEmptyContainer>
  )
}

const ShoppingCartEmptyContainer = styled.View`
  width: 100%;
  height: ${height/1.5}px;
  justify-content: center;
  align-items: center;
`;

const ShoppingCartEmptyText = styled.Text`
  color: ${COLORS.black};
  font-size: 16px;
`