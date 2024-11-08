import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RootWrapper from "./shared/root-wrapper";
import Transition from "./shared/top-nav-transition";

// Font configuration with font-display swap to reduce CLS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Enables font-display swap
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mulugeta Adamu",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 text-black bg-gray-100 dark:text-white`}
      >
        <RootWrapper>
          <Transition>
            <Header />
            <main className="px-4 md:px-8 lg:px-16 flex-grow min-h-screen my-24">
              {children}
            </main>
            <Footer />
          </Transition>
        </RootWrapper>
      </body>
    </html>
  );
}
