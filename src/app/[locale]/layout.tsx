import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Header from "../_components/rootLayout/Header";
import Footer from "../_components/rootLayout/Footer";
import "./globals.css";
import { Cairo, Inter } from "next/font/google";
 
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  // display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${cairo.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
