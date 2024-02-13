import styled from "styled-components/native";
import { ListRenderItem, FlatList } from 'react-native';

import { useCallback, useContext } from "react";
import { CartContext } from "../../utils/store/CartContext";
import { COLORS } from "../../utils/constants";
import { ShoppingCartItem, ShoppingCartEmpty } from "../index";
import { type CartItemType, type CartContextType, ActionType } from "../../utils/types";

const renderEmptyCartBtn = (dispatch: any) => {
  const emptyCartHandler = () => {
    dispatch({
      type: ActionType.EMPTY_CART
    })
  }

  return (
    <BtnContainer>
      <Btn onPress={emptyCartHandler} activeOpacity={0.75}>
        <BtnText>Empty cart</BtnText>
      </Btn>
    </BtnContainer>
  )
};

export default function ShoppingCart() {
  const { state, dispatch } = useContext<CartContextType>(CartContext);
  const shoppingCartItems: CartItemType[] = state.items;

  const renderItem: ListRenderItem<CartItemType> = useCallback(({ item }: {item: CartItemType}) => {
    return (
      <ShoppingCartItem 
        item={item}
      />
    )
  }, [])

  return (
    <ShoppingCartContainer>        
      <FlatList 
        data={shoppingCartItems} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={ShoppingCartEmpty}
      />
      { shoppingCartItems.length === 0 ? null : renderEmptyCartBtn(dispatch) }
    </ShoppingCartContainer>
  )
};

const ShoppingCartContainer = styled.View`
  flex: 1;
  width: 90%;
  margin: 0px auto;
  padding-top: 8px;
`;

const BtnContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 10px;
  margin: 0px auto;
`

const Btn = styled.TouchableOpacity`
  width: 50%;
  border-radius: 8px;
  padding-vertical: 10px;
  background-color: ${ COLORS.bluePrimary }
`;

const BtnText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${ COLORS.white };
`;