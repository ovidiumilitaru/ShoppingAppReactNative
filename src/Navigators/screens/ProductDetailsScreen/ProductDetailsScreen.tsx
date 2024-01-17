import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import type { ProductDataType, RootRouteProps } from '../../../utils/types';
import { getSingleProduct } from '../../../queries/getSingleProduct';
import { ProductDetails, Loading, Error } from '../../../components/index';

export default function ProductDetailsScreen() {
  const route = useRoute<RootRouteProps<'ProductDetailsScreen'>>();
  const prodId = route.params.prodId.toString();
  const [productDetails, setProductDetails] = useState<ProductDataType | undefined>();

  const { isPending, isError, error, data } = getSingleProduct(prodId);

  useEffect(() => {
    setProductDetails(data);
  }, [data]);

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