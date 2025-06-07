import { ReactQueryProvider } from "@/providers/react-query";
import { MuiThemeProvider } from "@/providers/theme";

export const metadata = {
  title: "Meu App",
  description: "Usando Next.js com MUI e React Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ReactQueryProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
