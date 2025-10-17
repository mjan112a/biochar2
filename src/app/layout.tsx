import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SystemViewProvider } from "@/hooks/useSystemView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poultry Biochar Circularity System | WasteHub",
  description: "Interactive tool explaining the integrated poultry waste to biochar and renewable energy circular economy system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SystemViewProvider>
          {children}
        </SystemViewProvider>
      </body>
    </html>
  );
}
