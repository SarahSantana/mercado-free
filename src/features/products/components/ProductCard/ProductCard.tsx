"use client";

import ActionButton from "@/components/ActionButton/ActionButton";
import { theme } from "@/theme/theme";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { texts } from "../../texts";
import { IProductSummary } from "../../types";

export const ProductCard = ({ product }: { product: IProductSummary }) => (
  <Card
    sx={{
      border: "1px solid",
      borderColor: theme.palette.card.main,
      boxShadow: "none",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "16px",
    }}
  >
    <CardMedia
      component="img"
      height="256"
      image={product.image}
      alt={product.name}
    />
    <CardContent sx={{ padding: 0 }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: theme.palette.text.secondary,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {product.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {product.name}
      </Typography>
    </CardContent>
    <CardActions sx={{ padding: 0 }}>
      <ActionButton
        href={`/products/${product.id}`}
        description={texts.ptBR.productGrid.productCard.buttonDescription}
      />
    </CardActions>
  </Card>
);
