import { LandingPage } from "@/components/LandingPage";
import { teams } from "@/lib/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Random Team Generator",
  description: "Split any list into balanced random teams. Choose 2–20 teams, reshuffle instantly, and keep names private on your device.",
  path: "/random-team-generator",
});
export default function Page() { return <LandingPage content={teams} />; }

