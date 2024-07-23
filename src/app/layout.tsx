import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import GlobalContextProvider from "@/context/ContextApi";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Codesnippet App",
  description: "Manage your code snippets with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GlobalContextProvider>
          <body className={`min-h-screen antialiased ${poppins.className}`}>
            {children}
          </body>
        </GlobalContextProvider>
      </html>
    </ClerkProvider>
  );
}
