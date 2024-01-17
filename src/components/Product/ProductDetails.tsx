import styled from "styled-components/native";
import type { ProductDataType } from '../../utils/types';
import { COLORS, LOREMIPSUM } from "../../utils/constants";

interface Props {
  productDetails?: ProductDataType
}

export default function ProductDetails({productDetails}: Props) {

  console.log("productDetails = ", productDetails)

  return (
    <ProductDetailsContainer>
      <ProductDetailsWrapper>
        <ProductDetailsCaruselContainer>
          <ProductDetailsCaruselDummyText>placeholder carusel</ProductDetailsCaruselDummyText>
        </ProductDetailsCaruselContainer>

        <ProductDetailsPrimaryInfoContainer>
          <TextProductTitle>{productDetails?.title }</TextProductTitle>
        </ProductDetailsPrimaryInfoContainer>

        <ProductDetailsSecondaryInfoContainer>
          <ProductDetailsSecondaryLeftInfoContainer>
            <ProductDetailsRating>Rating: {productDetails?.rating}</ProductDetailsRating>
            <ProductDetailsPrice>$ {productDetails?.price}</ProductDetailsPrice>
          </ProductDetailsSecondaryLeftInfoContainer>

          <TextProductFavorite numberOfLines={1} ellipsizeMode="tail">FAV placeholder</TextProductFavorite>
        </ProductDetailsSecondaryInfoContainer>

        <ProductDetailsDescriptionContainer>
          <TextProductTitle>Description</TextProductTitle>
          <ProductDetailsDescription>{productDetails?.description} {LOREMIPSUM} END_DESCRIPTION</ProductDetailsDescription>
        </ProductDetailsDescriptionContainer>
      </ProductDetailsWrapper>
      <AddToCartButton>Add to cart placeholder BTN</AddToCartButton>
    </ProductDetailsContainer>
  )
}

const ProductDetailsContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  background-color: ${COLORS.white}
`;

const ProductDetailsWrapper = styled.ScrollView`
  width: 100%;
  /* height: 95%; */
`

const ProductDetailsCaruselContainer = styled.View`
  width: 100%;
  /* height: 40%; */
  height: 200px;
  background-color: ${COLORS.purpleLight};
`;

const ProductDetailsCaruselDummyText = styled.Text`
  text-align: center;
`;

const ProductDetailsPrimaryInfoContainer = styled.View`
  margin: 8px;
  padding: 8px 4px;
  flex-direction: row;
  border: 1px solid green;
`;

const TextProductTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: ${COLORS.black};
`;

const ProductDetailsSecondaryInfoContainer = styled.View`
  margin: 16px 8px;
  padding: 8px 4px;
  background-color: ${COLORS.grayLight};
  border-left-width: 3px;
  border-left-color: ${COLORS.redPrimary};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductDetailsSecondaryLeftInfoContainer = styled.View`
  width: 75%;
`;

const ProductDetailsRating = styled.Text`
  font-size: 12px;
  color: ${COLORS.black};
  padding-vertical: 4px;
`;

const ProductDetailsPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.redPrimary};
  padding-vertical: 4px;
`;

const TextProductFavorite = styled.Text`
  color: ${COLORS.redPrimary};
  border: 1px solid ${COLORS.redPrimary};
  width: 25%;
`;

const ProductDetailsDescriptionContainer = styled.View`
  margin: 8px;
  padding: 8px 4px;
  background-color: ${COLORS.grayLight};
  border-left-width: 3px;
  border-left-color: ${COLORS.redPrimary};
  border-radius: 4px;
`;

const ProductDetailsDescription = styled.Text`
  font-size: 14px;
  line-height: 18px;
  padding-top: 8px;
  color: ${COLORS.black}
`;



const AddToCartButton = styled.Text`
  color: ${COLORS.blueDark};
  text-align: center;
  font-weight: bold;
  border: 1px solid ${COLORS.purpleDark};
  width: 50%;
  height: 5%;
  align-self: center;
`;

