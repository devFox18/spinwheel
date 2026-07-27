import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegisterServiceWorker } from "@/components/RegisterServiceWorker";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Spin the Wheel – Random Picker", template: "%s | Spinwheel" },
  description: "Make fair decisions fast with a free, private random spinner wheel.",
  openGraph: {
    type: "website",
    siteName: "Spinwheel",
    title: "Spin the Wheel – Random Picker",
    description: "Make fair decisions fast with a free random spinner wheel.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spinwheel random picker with a colorful wheel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spin the Wheel – Random Picker",
    description: "Make fair decisions fast with a free random spinner wheel.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "utilities",
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

