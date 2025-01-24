import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./providers/ThemeProviderWrapper";

const someTypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rumaisa Naveed | Full Stack Developer",
  description: "My professional portfolio website created with Next.js",
  icons: {
    icon: "/favicon.svg",
  },
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
