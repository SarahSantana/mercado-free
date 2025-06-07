import { useProductByIdQuery } from "../queries/useProductByIdQuery";

export const useProductsPage = (id: string | undefined) => {
  const { data, isLoading } = useProductByIdQuery(id);
  return { product: data, isLoading };
};
