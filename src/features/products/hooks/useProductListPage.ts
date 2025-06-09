import { useState } from "react";
import { useProductsQuery } from "../queries/useProductsQuery";

export const useProductListPage = () => {
  const [productPage, setProductPage] = useState<number>(1);
  const paginationLimit = 12;
  const paginationOffset = (productPage - 1) * paginationLimit;

  const { data, isLoading } = useProductsQuery(
    productPage,
    paginationLimit,
    paginationOffset
  );

  const calculatePagination = () => {
    if (!data) return 0;
    return Math.ceil(data.total / paginationLimit);
  };

  return {
    productList: data,
    isLoading,
    paginationLimit,
    productPage,
    setProductPage,
    calculatePagination,
  };
};
