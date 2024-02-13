import { useQuery } from '@tanstack/react-query'
import { URL } from '../utils/constants';

export const getProducts = (text: string) => {
  const url = (text.length === 0) ? 
    `${URL.BASE_URL}/${URL.PRODUCTS}` :
    `${URL.BASE_URL}/${URL.PRODUCTS}/${URL.SEARCH}${text}`;

  const fetchProducts = async () => {
    const result = await fetch(url);
    const data = await result.json();
    return data.products
  }

  return useQuery({
    queryKey: ['getProducts'],
    queryFn: fetchProducts
  });
} 
