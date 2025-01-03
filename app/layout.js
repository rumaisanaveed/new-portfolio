import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./providers/ThemeProviderWrapper";

const someTypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${someTypeMono.variable}`}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
