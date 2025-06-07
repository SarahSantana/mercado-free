import "./globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

import { ReactNode } from "react";

import MainContainer from "@/layout/MainContainer/MainContainer";
import MainHeader from "@/layout/MainHeader/MainHeader";
import { ClientProviders } from "@/providers/ClientProviders";
import { EmotionProvider } from "@/providers/EmotionProvider";
import PageContainer from "@/layout/PageContainer/PageContainer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <EmotionProvider>
          <ClientProviders>
            <MainContainer>
              <MainHeader />
              <PageContainer>
                <main>{children}</main>
              </PageContainer>
            </MainContainer>
          </ClientProviders>
        </EmotionProvider>
      </body>
    </html>
  );
}
