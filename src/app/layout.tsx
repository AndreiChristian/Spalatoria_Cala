import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "./theme/themeWrapper";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navigation/Navigation";

const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cala",
  description: "Spalatorie industriala de textile",
  openGraph: {
    title: "Cala",
    description: "Spalatorie industriala de textile",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} flex flex-col min-h-screen max-w-full `}>
        <ThemeWrapper>
          <Navbar />
          <main className="flex-grow bg-white dark:bg-black " >
            {children}
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
