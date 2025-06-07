"use client";

import { ReactNode } from "react";

import { theme } from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface Props {
  children: ReactNode;
}

export function MuiThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
