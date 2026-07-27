import { LandingPage } from "@/components/LandingPage";
import { yesNo } from "@/lib/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Yes or No Wheel",
  description: "Spin a simple 50/50 Yes or No wheel for quick, low-stakes decisions. Free, instant, and editable.",
  path: "/yes-no-wheel",
});
export default function Page() { return <LandingPage content={yesNo} />; }

