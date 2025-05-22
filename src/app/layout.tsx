import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const stagewiseConfig = {
  plugins: [],
  debug: true,
  position: 'bottom-right',
  theme: 'light'
};

export const metadata: Metadata = {
  title: "My Blog",
  description: "A personal blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        {isDev && (
          <StagewiseToolbar
            config={stagewiseConfig}
            key="stagewise-toolbar"
          />
        )}
      </body>
    </html>
  );
}
