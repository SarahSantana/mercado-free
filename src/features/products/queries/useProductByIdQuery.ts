import { useQuery } from "@tanstack/react-query";

import { productService } from "../services/productService";
import { IProduct } from "../types";

export function useProductByIdQuery(
  id: string | null | undefined,
  options?: { enabled?: boolean }
) {
  return useQuery<IProduct | null, Error>({
    queryKey: ["product", id],
    queryFn: () => productService.getById(id!),
    enabled: options?.enabled ?? true,
  });
}
