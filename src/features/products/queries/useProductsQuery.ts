import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

export const useProductsQuery = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
  });
