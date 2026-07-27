import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { raffle } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Raffle Picker",
  description: "Pick a random giveaway winner with a clear spinning wheel, confetti, and an option to remove winners between rounds.",
  alternates: { canonical: "/raffle-picker" },
  openGraph: { title: "Raffle Picker", description: "Run a fair, celebratory giveaway draw in your browser.", url: "/raffle-picker" },
};
export default function Page() { return <LandingPage content={raffle} />; }
