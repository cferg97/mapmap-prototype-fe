import { Sniglet } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation";

const sniglet = Sniglet({
  variable: "--font-sniglet",
  weight: "400",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Map Map",
  description: "Map Map: Build the Future You Want.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sniglet.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
