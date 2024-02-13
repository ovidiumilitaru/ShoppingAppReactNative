import styled from "styled-components/native";
import { COLORS } from "../../utils/constants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContext } from "react";
import { CartContext } from "../../utils/store/CartContext";
import type { CartItemType, CartContextType } from "../../utils/types";
import { ActionType } from '../../utils/types';



export default function ShoppingCartItem({item}: {item: CartItemType}) {
  const { state, dispatch } = useContext<CartContextType>(CartContext);

  let payload = {};

  const increaseQuantityHandler = () => { 
    payload = {
      id: item.id
    };

    dispatch({
      type: ActionType.INCREASE_ITEM_QUANTITY,
      payload
    })
  };

  const decreaseQuantityHandler = () => { 
    payload = {
      id: item.id
    };

    dispatch({
      type: ActionType.DECREASE_ITEM_QUANTITY,
      payload
    })
  };

  const removeItemHandler = () => { 
    payload = {
      id: item.id
    };

    dispatch({
      type: ActionType.REMOVE_ITEM_FROM_CART,
      payload
    })
  }

  return (
    <ItemContainer>
      <ItemImageContainer>
        <ProductSummaryImage source={{uri: item.thumbnail}} />
      </ItemImageContainer>

      <ItemInfoContainer>
        <ItemTitleText numberOfLines={1}>{ item.title }</ItemTitleText>
        <ItemPriceText>$ { item.price * item.qty }</ItemPriceText>

        <ItemInfoQuantityContainer>
          <ItemInfoQuantityWrapper>
            <ItemQuantityBtn 
              onPress={decreaseQuantityHandler} 
              disabled={item.qty === 1 ? true : false}
              isDisabled={item.qty === 1}
            >
              <MaterialCommunityIcons name="minus" size={18} color={`${item.qty === 1 ? COLORS.grayDark : COLORS.bluePrimary}`} />
            </ItemQuantityBtn>

            <ItemQuantityText>{ item.qty}</ItemQuantityText>

            <ItemQuantityBtn 
              onPress={increaseQuantityHandler} 
              disabled={item.qty === 10 ? true : false} 
              isDisabled={item.qty === 10}
            >
              <MaterialCommunityIcons name="plus" size={18} color={`${item.qty === 10 ? COLORS.grayDark : COLORS.bluePrimary}`} />
            </ItemQuantityBtn>
          </ItemInfoQuantityWrapper>

          <ItemQuantityBtn onPress={removeItemHandler}>
            <MaterialCommunityIcons name="trash-can-outline" size={20} color={`${COLORS.bluePrimary}`} />
          </ItemQuantityBtn>
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
  height: 104px;
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
  padding-right: 4px;
  justify-content: space-between;
  width: 60%;
`;

const ItemTitleText = styled.Text`
  color: ${ COLORS.black };
  font-size: 18px;
  padding-bottom: 4px;
`;

const ItemPriceText = styled.Text`
  color: ${ COLORS.redPrimary };
  font-size: 16px;
  padding-bottom: 4px;

`;

const ItemInfoQuantityContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ItemInfoQuantityWrapper = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

const ItemQuantityBtn = styled.Pressable<{ isDisabled?: boolean }>`
  border: 1px solid ${ (props) => props.isDisabled ? COLORS.grayDark : COLORS.bluePrimary };
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

const ItemQuantityText = styled.Text`
  color: ${ COLORS.black };
  font-size: 14px;
`;