"use client";

import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import { emotionCache } from "./emotion-cache";

export function EmotionProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
