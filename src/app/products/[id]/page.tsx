"use client";

import { useParams } from "next/navigation";
import { CircularProgress, Typography } from "@mui/material";

import { ProductDetail } from "@/features/products/components/ProductDetail/ProductDetail";
import { useProductByIdQuery } from "@/features/products/queries/useProductByIdQuery";

export default function ProductDetailPage() {
  const params = useParams();
  const productId =
    typeof params.id === "string" ? params.id : params.id?.[0] ?? "";
  const { data: product, isLoading } = useProductByIdQuery(productId, {
    enabled: !!productId,
  });

  if (isLoading) return <CircularProgress />;
  if (!product || !productId)
    return <Typography>Produto não encontrado</Typography>;

  return <ProductDetail product={product} />;
}
