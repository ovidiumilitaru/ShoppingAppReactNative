import styled from "styled-components/native";
import { useContext } from "react";
import { CartContext } from "../../utils/store/CartContext";
import { COLORS } from "../../utils/constants";
import { ShoppingCartItem, ShoppingCartEmpty } from "../index";
import type { CartItemType, CartContextType } from "../../utils/types";

export default function ShoppingCart() {
  const { state, dispatch } = useContext<CartContextType>(CartContext);
  const shoppingCartItems: CartItemType[] = state.items;

  const renderItem = ({ item }: {item: CartItemType}) => {
    
    return (
      <ShoppingCartItem 
        item={item}
      />
    )
  }

  return (
    <ShoppingCartContainer>        
        <ShoppingCartFlatList 
          data={shoppingCartItems} 
          renderItem={renderItem}
          keyExtractor={item  => item.id.toString()}
          ListEmptyComponent={ShoppingCartEmpty}
        />
    </ShoppingCartContainer>
  )
};

const ShoppingCartContainer = styled.View`
  flex: 1;
  width: 90%;
  margin: 0px auto;
  padding-top: 8px;
`;

const ShoppingCartFlatList = styled.FlatList`
  border: 1px solid ${COLORS.purplePrimary};
`