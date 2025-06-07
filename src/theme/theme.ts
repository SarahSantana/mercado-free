import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    menuHover: Palette["primary"];
    custom: {
      lightGrey: string;
    };
  }
  interface PaletteOptions {
    menuHover?: PaletteOptions["primary"];
    custom?: {
      lightGrey?: string;
    };
  }
}

export const customColor = {
  neutral: {
    200: "#F2F2F2",
  },
  dark: {
    600: "#4A4A4A",
    700: "#262626",
  },
  orange: {
    500: "#FFA726",
  },
};

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: customColor.neutral[200],
    },
    custom: {
      lightGrey: customColor.neutral[200],
    },
    text: {
      primary: customColor.dark[700],
      secondary: customColor.dark[600],
    },
    menuHover: {
      main: customColor.orange[500],
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
});
