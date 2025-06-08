"use client";
import React from "react";

import FullWidthLoading from "@/layout/FullWidthLoading/FullWidthLoading";
import { theme } from "@/theme/theme";
import { Pagination, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { texts } from "../../texts";
import { Product } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({
  products,
  loading,
}: {
  products: Product[];
  loading: boolean;
}) => {
  return (
    <React.Fragment>
      {loading ? (
        <FullWidthLoading />
      ) : (
        <React.Fragment>
          <Typography
            variant="h5"
            sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
          >
            {texts.ptBR.productGrid.body.title}
          </Typography>
          <div
            style={{
              backgroundColor: theme.palette.pageContentBg.main,
              borderRadius: "24px",
              marginTop: 2,
              padding: "16px 22px 24px",
            }}
          >
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "40px",
              }}
            >
              <Stack spacing={2}>
                <Pagination count={10} shape="rounded" />
              </Stack>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
