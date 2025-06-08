"use client";

import React from "react";

import NotFoundProduct from "@/features/products/components/NotFoundProduct/NotFoundProduct";
import { ProductDetail } from "@/features/products/components/ProductDetail/ProductDetail";
import { useProductsPage } from "@/features/products/hooks/useProductsPage";
import FullWidthLoading from "@/layout/FullWidthLoading/FullWidthLoading";

export default function ProductDetailPage() {
  const { productId, product, isLoading } = useProductsPage();

  return (
    <React.Fragment>
      {isLoading && <FullWidthLoading />}
      {(!product || !productId) && !isLoading && <NotFoundProduct />}
      {!isLoading && product && <ProductDetail product={product} />}
    </React.Fragment>
  );
}
