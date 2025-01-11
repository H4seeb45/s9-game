import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S9 Game - Real Gold Latest Version",
  description:
    "Download S9 Game APK and play various games like Teen Patti, Dragon Tiger, and more. Earn real money through gaming and referrals.",
  keywords:
    "S9 Game, APK download, online gaming, Teen Patti, Dragon Tiger, real money games",
  openGraph: {
    title: "S9 Game APK",
    description:
      "Play and earn with S9 Game APK - The best gaming platform in Pakistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
