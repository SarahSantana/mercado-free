import { useQuery } from "@tanstack/react-query";

import { productService } from "../services/productService";
import { IProductList } from "../types";

export function useProductsQuery(
  productPage: number,
  paginationLimit: number,
  paginationOffset: number
) {
  return useQuery<IProductList>({
    queryKey: ["products", productPage],
    queryFn: () =>
      productService.getAllProducts(paginationLimit, paginationOffset),
    refetchOnWindowFocus: false,
  });
}
