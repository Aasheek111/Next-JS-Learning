import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
const pop=Poppins({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
})
export const metadata = {
  title: "Travel Guide",
  description: "Travel Guide app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pop.className}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
