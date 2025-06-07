import { ReactNode } from "react";
import { ClientProviders } from "@/providers/ClientProviders";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
