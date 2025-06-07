"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
