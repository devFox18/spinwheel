import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important limitations for random wheel, team, raffle, and yes-or-no results.",
  alternates: { canonical: "/disclaimer" },
};

export default function Page() {
  return <LegalPage eyebrow="Know what the wheel can—and cannot—do" title="Disclaimer" summary="Spinwheel is a lightweight convenience tool. It creates random outcomes but cannot determine whether a decision, competition, or use of personal information is lawful, fair, safe, or appropriate." sections={[
    { title: "Not professional advice", paragraphs: ["The website and its content are general information, not legal, financial, medical, educational, safeguarding, compliance, or other professional advice. Obtain qualified advice when a decision could materially affect a person’s rights, safety, health, finances, or opportunities."] },
    { title: "Randomness and fairness", paragraphs: ["The wheel selects among current non-empty entries with equal probability per line. Duplicate entries receive multiple chances. Browser and device limitations, user edits, software defects, or interrupted sessions may affect operation. “Fair” describes equal treatment of entered lines; it does not certify the fairness of how entries were collected or whether participants have equal eligibility."] },
    { title: "Raffles and promotions", paragraphs: ["The raffle picker is not a compliance, auditing, gambling, or prize-administration service. Promotion organizers remain responsible for official rules, eligibility, consent, required registrations, taxes, evidence of the draw, prize fulfilment, and all local laws. For regulated or high-value draws, use an independently reviewed process."] },
    { title: "Classrooms and teams", paragraphs: ["Random selection may not suit every classroom or group. Educators and organizers should account for accessibility, safeguarding, social dynamics, accommodations, skill balance, and the possibility that a participant should not be selected publicly. The team generator balances headcount only."] },
    { title: "Yes or no decisions", paragraphs: ["The yes-or-no wheel is intended for harmless, low-stakes choices where either answer is acceptable. Never rely on it for emergencies, consent, personal safety, treatment, contracts, money, employment, or decisions that require informed human judgment."] },
    { title: "External services and links", paragraphs: ["Links to third-party services are provided for context or contact. Spinwheel does not control their availability, content, privacy practices, or security. References to Vercel, GitHub, regulators, or other organizations do not imply endorsement."] },
  ]} />;
}

