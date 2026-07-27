import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { teams } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Random Team Generator",
  description: "Split any list into balanced random teams. Choose 2–20 teams, reshuffle instantly, and keep names private on your device.",
  alternates: { canonical: "/random-team-generator" },
  openGraph: { title: "Random Team Generator", description: "Turn one list into evenly sized random teams in seconds.", url: "/random-team-generator" },
};
export default function Page() { return <LandingPage content={teams} />; }
