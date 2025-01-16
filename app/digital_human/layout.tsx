import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import Header from "@/components/navbarHeader";
import Footer from "@/components/footer";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function IndexLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${notoSans.variable} antialiased`}>
          <header>
            <Header />
          </header>
          {children}
          <footer className="mt-[40px]">
            <Footer />
          </footer>
        </body>
      </html>
    );
  }