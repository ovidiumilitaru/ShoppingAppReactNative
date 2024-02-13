import { useQuery } from '@tanstack/react-query'
import { URL } from '../utils/constants';

export const getSingleProduct = (prodId: any) => {

  const fetchSingleProduct = async () => {
    const url = `${URL.BASE_URL}/${URL.PRODUCTS}/${prodId}`;
    const result = await fetch(url);
    const data = await result.json();
    return data
  }

  return useQuery({
    queryKey: ['getSingleProduct'],
    queryFn: fetchSingleProduct
  });
} 