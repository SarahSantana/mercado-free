"use client";

import { ReactNode } from "react";

import { MuiThemeProvider } from "./MuiThemeProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";

interface Props {
  children: ReactNode;
}

export function ClientProviders({ children }: Props) {
  return (
    <ReactQueryProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </ReactQueryProvider>
  );
}
