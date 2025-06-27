import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Butra Balaprasad - Software Engineer",
  description:
    "Butra Balaprasad is a software engineer with a passion for building scalable and efficient systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-C1PQJV60P9" />
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Analytics />
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
