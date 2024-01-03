import { useQuery } from '@tanstack/react-query'
import { URL } from '../utils/constants';

export const useGetProductsList = () => {
  const fetchProductsList = async () => {
    const url = URL.baseUrl + URL.products
    const result = await fetch(url);
    const data = await result.json();
    return data.products
  }

  return useQuery({
    queryKey: ['getProductsList'],
    queryFn: fetchProductsList
  });
} 