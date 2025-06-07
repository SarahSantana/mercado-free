import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    menuHover: Palette["primary"];
    custom: {
      lightGrey: string;
    };
    footer: Palette["primary"];
  }
  interface PaletteOptions {
    menuHover?: PaletteOptions["primary"];
    custom?: {
      lightGrey?: string;
    };
    footer?: PaletteOptions["primary"];
  }
}

export const customColor = {
  neutral: {
    200: "#F2F2F2",
  },
  dark: {
    600: "#262626",
    700: "#4A4A4A",
  },
  orange: {
    200: "#61330F",
    500: "#FF9E3D",
    600: "#FFA726",
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
      primary: customColor.dark[600],
      secondary: customColor.dark[700],
    },
    menuHover: {
      main: customColor.orange[600],
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
