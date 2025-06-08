import { useProductByIdQuery } from "../queries/useProductByIdQuery";
import { useParams } from "next/navigation";

export const useProductsPage = () => {
  const params = useParams();
  const productId =
    typeof params.id === "string" ? params.id : params.id?.[0] ?? "";
  const { data: product, isLoading } = useProductByIdQuery(productId, {
    enabled: !!productId,
  });

  return { productId, product, isLoading };
};
