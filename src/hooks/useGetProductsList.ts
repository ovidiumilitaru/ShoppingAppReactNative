import { useQuery } from '@tanstack/react-query'

export const useGetProductsList = () => {
  const fetchProductsList = async () => {
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json();
    return data.products
  }

  return useQuery({
    queryKey: ['getProductsList'],
    queryFn: fetchProductsList
  });
}