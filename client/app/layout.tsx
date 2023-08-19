import "./globals.css";

import {
  Caladea,
  EB_Garamond,
  Inter,
  Lora,
  Playfair_Display,
} from "next/font/google";

import StyledComponentsRegistry from "./lib/registry";

const main = EB_Garamond({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Felix Morau",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={main.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
