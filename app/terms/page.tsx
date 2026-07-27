import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when using Spinwheel and its random picker tools.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <LegalPage eyebrow="Fair rules for a fair wheel" title="Terms of use" summary="These terms explain the permitted use of Spinwheel. By using the website, you agree to use it lawfully and accept that random tools are suitable only where a random outcome is appropriate." sections={[
    { title: "The service", paragraphs: ["Spinwheel provides free browser-based random picker and team-generation tools. Features may be improved, changed, suspended, or removed without a guarantee of continuous availability. No account, purchase, or subscription is required for the current version."] },
    { title: "Acceptable use", bullets: ["Use the service only for lawful purposes.", "Do not interfere with, overload, probe, or attempt to bypass the site’s security.", "Do not enter unlawful content or personal data you are not entitled to use.", "Do not present a Spinwheel result as independently audited, certified, or suitable for regulated selection unless you have separately established that." ] },
    { title: "Your entries and responsibilities", paragraphs: ["You retain responsibility for the information you enter. Entries are kept on your device, but you must still consider privacy, confidentiality, eligibility rules, and the rights of other people. Teachers, organizers, and raffle operators must determine whether names or ticket data may be used and how long it should remain stored."] },
    { title: "Random outcomes", paragraphs: ["Each non-empty line is treated as one entry. Duplicate lines create additional chances. The team generator shuffles entries and distributes them as evenly as possible, but it does not account for ability, accessibility, conflicts, or other human factors.", "Do not use Spinwheel as the sole basis for decisions concerning health, safety, employment, credit, insurance, legal rights, regulated gambling, high-value prizes, or any situation where a person is entitled to a reasoned or reviewable decision."] },
    { title: "Intellectual property", paragraphs: ["The Spinwheel name, interface, text, and original design elements are protected to the extent permitted by law. The source repository may contain separate licensing information governing use of the code. Third-party names and trademarks remain the property of their respective owners."] },
    { title: "Availability and liability", paragraphs: ["The service is supplied on an “as available” basis. To the maximum extent permitted by law, no warranty is given that it will always be uninterrupted, error-free, or suitable for a particular purpose. Nothing in these terms excludes liability that cannot lawfully be excluded, including mandatory consumer rights."] },
    { title: "Changes and governing law", paragraphs: ["Material changes will be reflected by updating the date on this page. These terms are governed by the laws applicable to the operator, without depriving consumers of mandatory protections in their country of residence. Disputes should first be raised through the Spinwheel GitHub repository so a practical resolution can be attempted."] },
  ]} />;
}

