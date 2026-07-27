import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { home } from "@/lib/pages";

export const metadata: Metadata = {
  title: { absolute: "Spin the Wheel – Random Picker" },
  description: "Create a custom spinner wheel and pick a random winner. Free, private, mobile-friendly, and saved on your device.",
  alternates: { canonical: "/" },
  openGraph: { title: "Spin the Wheel – Random Picker", description: "Make fair decisions fast with a free random spinner wheel.", url: "/" },
};

export default function Page() { return <LandingPage content={home} />; }
