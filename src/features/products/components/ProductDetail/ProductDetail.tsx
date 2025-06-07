"use client";

import { Container, Typography } from "@mui/material";

import { Product } from "../../types";

export const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {product.description}
      </Typography>
    </Container>
  );
};
