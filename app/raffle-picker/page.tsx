import { LandingPage } from "@/components/LandingPage";
import { raffle } from "@/lib/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Raffle Picker",
  description: "Pick a random giveaway winner with a clear spinning wheel, confetti, and an option to remove winners between rounds.",
  path: "/raffle-picker",
});
export default function Page() { return <LandingPage content={raffle} />; }

