import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { names } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Random Name Picker for Classrooms",
  description: "A fair random name picker for teachers. Paste a class list, spin the wheel, and optionally remove each selected student.",
  alternates: { canonical: "/random-name-picker" },
  openGraph: { title: "Random Name Picker for Classrooms", description: "Pick students fairly with a simple, private classroom wheel.", url: "/random-name-picker" },
};
export default function Page() { return <LandingPage content={names} />; }
