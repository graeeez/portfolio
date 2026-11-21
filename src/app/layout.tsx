import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Graciella E. Pastoral — Creative Front-End Web Developer",
  description:
    "Interactive Next.js & Three.js portfolio of Graciella E. Pastoral featuring DormChef, RAITE 2026, CoffeeShop UI, Next.js Editorial Blog, and Personalities Showcase.",
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('graciella-portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=JetBrains+Mono:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/garet"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#CE0058] selection:text-[#FFF5EB]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
