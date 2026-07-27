import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Spinwheel handles local lists, hosting logs, and privacy rights.",
  path: "/privacy",
});

export default function Page() {
  return <LegalPage eyebrow="Your data, clearly explained" title="Privacy policy" summary="Spinwheel is designed to collect as little information as possible. Wheel entries stay on your device; there are no accounts, analytics scripts, advertising trackers, or database." sections={[
    { title: "Who this policy covers", paragraphs: ["This policy applies to the Spinwheel website and its picker tools. Spinwheel is the project responsible for deciding how the site operates. Privacy questions or requests can be submitted through the public Spinwheel GitHub repository linked from this website. Before commercial advertising or other data-processing features are activated, the operator details and this policy must be updated."] },
    { title: "Information you enter", paragraphs: ["Names, choices, raffle tickets, and other wheel entries are processed entirely in your browser. They are stored in localStorage so your list is available when you return on the same device. Spinwheel does not transmit these entries to its own server, database, or account system.", "Avoid entering sensitive personal data. If you use the name picker or raffle picker, you are responsible for having an appropriate reason to enter other people’s information and for deleting it when it is no longer needed."] },
    { title: "Technical hosting data", paragraphs: ["The site is hosted by Vercel. Like most hosting providers, Vercel may process technical request information such as IP address, approximate location derived from IP, browser or device information, timestamps, requested pages, and security or diagnostic logs. This is used to deliver, secure, and maintain the website. Spinwheel does not enable Vercel Web Analytics, third-party analytics, or marketing tracking in the application."] },
    { title: "Purposes and legal basis", bullets: ["Deliver the website and requested picker functionality.", "Protect availability, security, and prevent abuse.", "Diagnose failures and maintain technical performance."], paragraphs: ["Where the GDPR applies, necessary hosting and security processing is based on the legitimate interest in providing a safe, reliable website. Browser-stored lists are placed at your request to provide the save-list feature and remain under your control."] },
    { title: "Sharing and international processing", paragraphs: ["Spinwheel does not sell personal information. Technical data may be processed by Vercel as hosting provider and by infrastructure suppliers it uses, subject to its terms and privacy safeguards. Depending on routing and provider operations, processing may occur outside the European Economic Area. Consult Vercel’s current Privacy Notice for its transfer mechanisms and retention practices."] },
    { title: "Retention and your choices", paragraphs: ["You control wheel entries in localStorage. Edit the textarea, clear the relevant site data in your browser, or remove the site’s storage to delete them. Spinwheel cannot retrieve or delete these lists remotely because it never receives them. Hosting logs are retained according to Vercel’s settings and policies.", "Subject to applicable law, you may have rights of access, correction, deletion, restriction, portability, and objection. You may also complain to your national data protection authority, including the Dutch Autoriteit Persoonsgegevens."] },
  ]} />;
}

