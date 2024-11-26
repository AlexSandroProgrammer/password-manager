import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

//* creamos una constante para el tipo de letra Poppins
const poppins = Poppins({
  subsets: ["latin"],
  //* Tipo de negrillas
  weight: ["200", "300", "500", "800"],
});

export const metadata: Metadata = {
  title: "Password Management",
  description: "Password generator and manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
