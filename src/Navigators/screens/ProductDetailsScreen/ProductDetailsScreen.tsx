import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect, useLayoutEffect } from 'react';
import type { ProductDataType, RootRouteProps } from '../../../utils/types';
import { getSingleProduct } from '../../../queries/getSingleProduct';
import { ProductDetails, Loading, Error } from '../../../components/index';
import { getTruncateString } from '../../../utils/getters';

export default function ProductDetailsScreen() {
  const route = useRoute<RootRouteProps<'ProductDetailsScreen'>>();
  const navigation = useNavigation();
  const prodId = route.params.prodId.toString();
  const [productDetails, setProductDetails] = useState<ProductDataType | undefined>();

  const { isPending, isError, error, data } = getSingleProduct(prodId);

  useEffect(() => {
    setProductDetails(data);
  }, [data]);

  useLayoutEffect(() => {
    if (productDetails) {
      navigation.setOptions({
        title: getTruncateString(productDetails.title)
      })
    }
  }, [productDetails, navigation]);

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <Error errorName={error.name} errorMsg={error.message} />
  }

  return (
    <ProductDetails productDetails={productDetails} />
  )
}