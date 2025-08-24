import { ThemeProvider } from "@/provider/theme-provider";
import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
