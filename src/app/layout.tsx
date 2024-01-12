import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Next.JS template with Tailwind CSS",
  description:
    "A basic and largely un-opinionated starter template using Next.JS and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-4 py-6 mx-auto max-w-screen-lg flow text-pretty bg-stone-100 text-stone-950 dark:bg-stone-900 dark:text-stone-50">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
