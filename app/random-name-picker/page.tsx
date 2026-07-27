import { LandingPage } from "@/components/LandingPage";
import { names } from "@/lib/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Random Name Picker for Classrooms",
  description: "A fair random name picker for teachers. Paste a class list, spin the wheel, and optionally remove each selected student.",
  path: "/random-name-picker",
});
export default function Page() { return <LandingPage content={names} />; }

