"use client";

import { ReactNode } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { createEmotionCache } from "./emotion-cache";

const clientSideEmotionCache = createEmotionCache();

interface Props {
  children: ReactNode;
  emotionCache?: EmotionCache;
}

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export function MuiThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
