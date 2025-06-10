"use client";
import React, { Dispatch, SetStateAction } from "react";

import { theme } from "@/theme/theme";
import {
  Card,
  CardContent,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { texts } from "../../texts";
import { IProductList } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({
  productList,
  showContent,
  productPage,
  totalPage,
  setProductPage,
}: {
  productList: IProductList | undefined;
  showContent: boolean;
  productPage: number;
  totalPage: number;
  setProductPage: Dispatch<SetStateAction<number>>;
}) => {
  return (
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
          minHeight: "1404px",
        }}
      >
        <Grid container spacing={2}>
          {!showContent
            ? Array.from(new Array(12)).map((_, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Card sx={{ minHeight: "420px" }}>
                    <Skeleton variant="rectangular" height={256} />
                    <CardContent>
                      <Skeleton width="60%" />
                      <Skeleton width="80%" />
                      <Skeleton width="40%" />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : productList?.products.map((product) => (
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
              count={totalPage}
              page={productPage}
              onChange={(_, value) => setProductPage(value)}
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
};
