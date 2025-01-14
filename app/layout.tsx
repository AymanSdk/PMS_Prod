import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } "/@lib/utils"
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Health Care Application",
  description: "a Healthcare Managment systm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn}>{children}</body>
    </html>
  );
}
