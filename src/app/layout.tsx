import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { TanstackProvider } from "@/providers/tanstack-provider";
import "@/scss/index.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <Header />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
