"use client";
import React, { Dispatch, SetStateAction } from "react";

import FullWidthLoading from "@/layout/FullWidthLoading/FullWidthLoading";
import { theme } from "@/theme/theme";
import { Pagination, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { texts } from "../../texts";
import { IProductList } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({
  productList,
  isLoading,
  productPage,
  setProductPage,
  calculatePagination,
}: {
  productList: IProductList | undefined;
  isLoading: boolean;
  productPage: number;
  setProductPage: Dispatch<SetStateAction<number>>;
  calculatePagination: () => number;
}) => {
  return (
    <React.Fragment>
      {isLoading && <FullWidthLoading />}
      {!isLoading && productList && (
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
              marginTop: "40px",
              padding: "16px 22px 24px",
            }}
          >
            <Grid container spacing={2}>
              {productList?.products.map((product) => (
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
                <Pagination
                  count={calculatePagination()}
                  page={productPage}
                  onChange={(_, value) => setProductPage(value)}
                  shape="rounded"
                />
              </Stack>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
