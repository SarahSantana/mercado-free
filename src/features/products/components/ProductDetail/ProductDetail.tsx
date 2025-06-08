"use client";

import { theme } from "@/theme/theme";
import { Box, Grid, Typography } from "@mui/material";

import { IProduct } from "../../types";
import { texts } from "../../texts";
import TextCard from "@/components/TextCard/TextCard";

export const ProductDetail = ({ product }: { product: IProduct }) => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.pageContentBg.main,
        borderRadius: 3,
        marginTop: 2,
        padding: "48px 48px 106px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color={theme.palette.text.secondary}
      >
        {product.name}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        color={theme.palette.text.secondary}
        sx={{ mt: 2 }}
      >
        {texts.ptBR.productDetail.information}
      </Typography>
      <Box
        sx={{
          marginTop: 3,
        }}
      >
        <Grid container spacing={2}>
          {product.infos.map((info, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}
              key={`${product.id}-${index}`}
            >
              <TextCard title={info.title} description={info.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: "64px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color={theme.palette.text.primary}
        >
          {texts.ptBR.productDetail.description}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.text.primary}
          sx={{ marginTop: 3 }}
        >
          {product.technicalSpecification}
        </Typography>
      </Box>
    </div>
  );
};
