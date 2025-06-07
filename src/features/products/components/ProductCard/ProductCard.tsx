"use client";

import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { Product } from "../../types";

export const ProductCard = ({ product }: { product: Product }) => (
  <Link href={`/products/${product.id}`}>
    <Card sx={{ cursor: "pointer", mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);
