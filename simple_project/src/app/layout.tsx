import type { Metadata } from "next";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/UserContext";

import ClientProvider from "@/ClientProvider";

export const metadata: Metadata = {
  title: "FORM",
  description: "Simple form ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
        <ClientProvider>{children}</ClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
