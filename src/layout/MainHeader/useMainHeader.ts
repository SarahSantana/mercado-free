import { useMediaQuery, useTheme } from "@mui/material";
import { texts } from "./texts";
import { IMenuItem } from "../types";

const useMainHeader = () => {
  const menuItems = [
    { text: texts.ptBR.navigationMenu.fristPage, link: "/" },
    { text: texts.ptBR.navigationMenu.products, link: "/products" },
    { text: texts.ptBR.navigationMenu.info, link: "/info" },
    { text: texts.ptBR.navigationMenu.contact, link: "contact" },
  ] as IMenuItem[];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return { menuItems, isMobile };
};

export default useMainHeader;
