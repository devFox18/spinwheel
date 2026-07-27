import { LandingPage } from "@/components/LandingPage";
import { home } from "@/lib/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Spin the Wheel – Random Picker",
  description: "Create a custom spinner wheel and pick a random winner. Free, private, mobile-friendly, and saved on your device.",
  path: "/",
});

export default function Page() { return <LandingPage content={home} />; }

