import { Dimensions } from "react-native"
import styled from "styled-components/native";
import { COLORS } from "../../utils/constants";

interface Props {
  item?: string;
}

const { width, height } = Dimensions.get('screen');

export default function SlideItem({item}: Props) {
  return (
    <SlideContainer>
      <SlideImage 
        source={{uri: item}}
        resizeMode="contain" 
      />
    </SlideContainer>
  )
}

const SlideContainer = styled.View`
  width: ${width}px;
  height: ${height/3}px;
  align-items: center;
  background-color: ${COLORS.white};
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;
