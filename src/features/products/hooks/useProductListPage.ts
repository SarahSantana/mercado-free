import { useEffect, useState } from "react";
import { useProductsQuery } from "../queries/useProductsQuery";

export const useProductListPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [productPage, setProductPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const paginationLimit = 12;
  const paginationOffset = (productPage - 1) * paginationLimit;

  const { data, isLoading } = useProductsQuery(
    productPage,
    paginationLimit,
    paginationOffset
  );

  const calculatePagination = () => {
    if (!data) return 0;
    const total = Math.ceil(data.total / paginationLimit);
    setTotalPage(total);
  };

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setShowContent(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (totalPage === 0 && data) calculatePagination();
  }, [data]);

  return {
    productList: data,
    showContent,
    paginationLimit,
    productPage,
    totalPage,
    setProductPage,
  };
};
