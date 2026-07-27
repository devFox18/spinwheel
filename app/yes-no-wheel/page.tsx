import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { yesNo } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Yes or No Wheel",
  description: "Spin a simple 50/50 Yes or No wheel for quick, low-stakes decisions. Free, instant, and editable.",
  alternates: { canonical: "/yes-no-wheel" },
  openGraph: { title: "Yes or No Wheel", description: "Two choices, one satisfying spin.", url: "/yes-no-wheel" },
};
export default function Page() { return <LandingPage content={yesNo} />; }
