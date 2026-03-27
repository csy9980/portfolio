import "./globals.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./provider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={cn("dark font-sans", geist.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <div className="flex min-h-screen flex-col py-4">
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
