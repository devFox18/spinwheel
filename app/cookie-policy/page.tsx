import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Cookie and Local Storage Policy",
  description: "A clear explanation of Spinwheel browser storage, offline cache, and absence of tracking cookies.",
  path: "/cookie-policy",
});

export default function Page() {
  return <LegalPage eyebrow="No tracking-cookie maze" title="Cookies & storage" summary="Spinwheel does not use advertising or analytics cookies. It uses browser storage only to remember the lists you ask it to save and to make the static site available offline after your first visit." sections={[
    { title: "Cookies", paragraphs: ["The Spinwheel application does not set first-party cookies and does not include cookie-based analytics, advertising pixels, social-media trackers, login sessions, or personalization cookies. Because no optional cookies are currently used by the application, Spinwheel does not display a consent banner."] },
    { title: "Local storage", paragraphs: ["When you edit a wheel, the list is saved under a Spinwheel-specific localStorage key in your browser. This supports the requested saved-list feature. Data remains on that browser profile until you edit it, clear site data, use private-browsing cleanup, or the browser removes it.", "Local storage is not automatically sent with web requests like a cookie. The application reads it locally to restore your entries. Do not save sensitive information on a shared or public device."] },
    { title: "Offline cache", paragraphs: ["A service worker may place static application files—such as pages, styles, scripts, and the site icon—in browser Cache Storage. This allows the site to continue working after the first successful visit. The cache contains application assets, not your wheel entries."] },
    { title: "Hosting technology", paragraphs: ["Vercel delivers the website and may use network-level security, routing, and logging technologies as described in its own policies. Spinwheel does not activate Vercel Web Analytics in the application. Browser or platform security features outside Spinwheel’s control may operate independently."] },
    { title: "How to remove stored data", bullets: ["Use your browser’s site-information or privacy settings.", "Find the deployed Spinwheel domain.", "Delete local storage and cached site data.", "Reload the page; default examples will return and offline files will be cached again after use."], paragraphs: ["Removing stored site data may also unregister the offline service worker. Menu names differ between browsers and devices."] },
    { title: "Future changes", paragraphs: ["If optional analytics, advertising, or other non-essential storage is added later, this policy and the interface must be updated before activation. Where consent is legally required, those technologies will not be loaded before a valid choice."] },
  ]} />;
}

