import { useProductsQuery } from "../queries/useProductsQuery";

export const useProductListPage = () => {
  const { data, isLoading } = useProductsQuery();
  return { products: data ?? [], isLoading };
};
