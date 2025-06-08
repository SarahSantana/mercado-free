import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    menuHover: Palette["primary"];
    pageContentBg: Palette["primary"];
    card: Palette["primary"];
    paginationHoverItem: Palette["primary"];
    button: Palette["primary"];
    footer: Palette["primary"];
  }
  interface PaletteOptions {
    menuHover?: PaletteOptions["primary"];
    pageContentBg?: PaletteOptions["primary"];
    card?: PaletteOptions["primary"];
    paginationHoverItem?: PaletteOptions["primary"];
    button?: PaletteOptions["primary"];
    footer?: PaletteOptions["primary"];
  }
}

export const customColor = {
  neutral: {
    300: "#E6E6E6",
    500: "#F2F2F2",
    1000: "#FFFFFF",
  },
  dark: {
    600: "#262626",
    700: "#4A4A4A",
  },
  orange: {
    200: "#61330F",
    500: "#FF9E3D",
    600: "#FFA726",
    1000: "#FFE5C7",
  },
};

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: customColor.neutral[500],
    },
    text: {
      primary: customColor.dark[600],
      secondary: customColor.dark[700],
    },
    menuHover: {
      main: customColor.orange[600],
    },
    button: {
      main: customColor.orange[600],
    },
    card: {
      main: customColor.neutral[300],
    },
    pageContentBg: {
      main: customColor.neutral[1000],
    },
    paginationHoverItem: {
      main: customColor.orange[1000],
    },
    footer: {
      main: customColor.orange[500],
      dark: customColor.orange[200],
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
});
