import { useQuery } from "@tanstack/react-query";

import { productService } from "../services/productService";
import { IProduct } from "../types";

export function useProductByIdQuery(
  id: string | null | undefined,
  options?: { enabled?: boolean }
) {
  return useQuery<IProduct | null>({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(id!),
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: false,
  });
}
