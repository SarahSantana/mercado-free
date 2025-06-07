"use client";

import { CircularProgress, Container } from "@mui/material";
import { Product } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({
  products,
  loading,
}: {
  products: Product[];
  loading: boolean;
}) => (
  <Container>
    {loading ? (
      <CircularProgress />
    ) : (
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    )}
  </Container>
);
