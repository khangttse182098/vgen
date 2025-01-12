import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { TanstackProvider } from "@/providers/tanstack-provider";
import "@/scss/index.scss";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import enMessages from "../../messages/en.json";
import viMessages from "../../messages/vi.json";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = locale === "vi" ? viMessages : enMessages;

  return (
    <html lang={locale}>
      <body>
        <TanstackProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
