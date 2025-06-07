"use client";

import { useProductByIdQuery } from "@/features/products/queries/useProductByIdQuery";
import { ProductDetail } from "../ProductDetail/ProductDetail";

interface Props {
  id: string;
}

export default function ProductDetailClient({ id }: Props) {
  const { data: product, isLoading } = useProductByIdQuery(id);

  if (isLoading) return <div>Carregando...</div>;
  if (!product) return <div>Produto não encontrado.</div>;

  return <ProductDetail product={product} />;
}
