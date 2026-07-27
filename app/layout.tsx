import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegisterServiceWorker } from "@/components/RegisterServiceWorker";

export const metadata: Metadata = {
  metadataBase: new URL("https://spinwheel.app"),
  title: { default: "Spin the Wheel – Random Picker", template: "%s | Spinwheel" },
  description: "Make fair decisions fast with a free, private random spinner wheel.",
  openGraph: {
    type: "website",
    siteName: "Spinwheel",
    title: "Spin the Wheel – Random Picker",
    description: "Make fair decisions fast with a free random spinner wheel.",
  },
  twitter: { card: "summary_large_image" },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fffdf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <RegisterServiceWorker />
      </body>
    </html>
  );
}

