"use client";

import { useProductListPage } from "@/features/products/hooks/useProductListPage";
import { ProductGrid } from "@/features/products/components/ProductGrid/ProductGrid";

export default function ProductsPage() {
  const { products, isLoading } = useProductListPage();
  return <ProductGrid products={products} loading={isLoading} />;
}
