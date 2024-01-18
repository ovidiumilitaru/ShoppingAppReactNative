import styled from "styled-components/native";
import { COLORS } from "../../utils/constants";

interface Props {
  onAddToCart: () => void;
};

export default function AddToCartBtn({onAddToCart}: Props) {
  const pressHandler = () => {
    onAddToCart();
  };

  return (
    <BtnContainer>
      <Btn onPress={pressHandler} activeOpacity={0.75}>
        <BtnText>Add to cart</BtnText>
      </Btn>
    </BtnContainer>
  )
};

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