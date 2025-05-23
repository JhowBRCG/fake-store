import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import QueryProvider from "@/lib/providers/QueryProvider";
import ReduxProvider from "@/lib/providers/ReduxProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAKE STORE",
  description: "Buy anything, from anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <QueryProvider>
          <ReduxProvider>
            <div className="flex min-h-screen flex-col">
              <Suspense>
                <Header />
                <div className="mx-auto w-full md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container-2xl">
                  {children}
                </div>
                <Footer />
              </Suspense>
            </div>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
