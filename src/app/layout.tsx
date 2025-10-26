import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} `}>
      <head />
      <body className="bg-background-light dark:bg-background-dark px-14 py-12 text-black dark:text-white">
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          attribute="class"
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
