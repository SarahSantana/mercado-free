"use client";

import { useProductListPage } from "@/features/products/hooks/useProductListPage";
import { ProductGrid } from "@/features/products/components/ProductGrid/ProductGrid";

export default function ProductsPage() {
  const productListPage = useProductListPage();
  return <ProductGrid {...productListPage} />;
}
