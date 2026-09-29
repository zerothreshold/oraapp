import type { Metadata } from "next";
import LegalDocument, {
  type LegalSection,
} from "@/components/layouts/legal-document";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Offroad Academies collects, uses and shares information when you visit offroadacademies.com.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          Offroad Academies (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy and is committed to
          protecting it through our compliance with this Privacy Policy.
        </p>
        <p>
          This Privacy Policy describes the types of information we may collect
          from you or that you may provide when you visit offroadacademies.com
          (our &quot;Website&quot;) and our practices for collecting, using,
          maintaining, protecting, and disclosing that information.
        </p>
        <p>
          By accessing or using our Website, you agree to this Privacy Policy.
          If you do not agree with our policies and practices, please do not use
          our Website.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <ul>
        <li>
          Personal information that you voluntarily provide to us when you
          register on the Website, express an interest in obtaining information
          about us or our products and Services, participate in activities on
          the Website, or otherwise when you contact us. This may include
          passwords, usernames, mailing addresses, email addresses, phone
          numbers, names, billing addresses, contact preferences, and blood
          group.
        </li>
        <li>
          Sensitive information, such as health data, which we may process when
          necessary with your consent or as otherwise permitted by applicable
          law.
        </li>
        <li>
          Payment Data, if you make purchases through our Website. All payment
          data is securely stored by our payment processor, RazorPay.
        </li>
        <li>
          Social Media Login Data, if you choose to register with us using your
          existing social media account details.
        </li>
      </ul>
    ),
  },
  {
    id: "how-we-use-your-information",
    title: "How we use your information",
    content: (
      <ul>
        <li>To facilitate account creation and authentication.</li>
        <li>To deliver and facilitate delivery of services to you.</li>
        <li>To respond to inquiries and offer support.</li>
        <li>To send administrative information.</li>
        <li>To fulfill and manage your orders.</li>
        <li>To request feedback.</li>
        <li>To send you marketing and promotional communications.</li>
        <li>To protect our Website and comply with legal obligations.</li>
      </ul>
    ),
  },
  {
    id: "sharing-your-information",
    title: "Sharing your information",
    content: (
      <p>
        We may share your information in specific situations, such as during
        business transfers.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking technologies",
    content: (
      <p>
        We may use cookies and similar tracking technologies to collect and
        store your information. You can find more information about this in our
        Cookie Notice.
      </p>
    ),
  },
  {
    id: "your-privacy-rights",
    title: "Your privacy rights",
    content: (
      <p>
        You have the right to review, change, or terminate your account at any
        time. You can also withdraw your consent to the processing of your
        personal information.
      </p>
    ),
  },
  {
    id: "reviewing-updating-deleting",
    title: "Reviewing, updating, or deleting your data",
    content: (
      <p>
        Based on applicable laws, you may have the right to request access to,
        change, or delete the personal information we collect from you. To do
        so, please submit a data subject access request.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The updated version
        will be effective as soon as it is accessible.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <p>
        If you have any questions or comments about this Privacy Policy, you may
        contact us at{" "}
        <a href="mailto:sales@offroadacademies.com">
          sales@offroadacademies.com
        </a>
        .
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalDocument
      path="/privacy"
      title="Privacy policy"
      lede="What we collect when you visit the site or book with us, why we collect it, and how to ask us to change or delete it."
      image={{
        src: "/images/general/flattrack1.jpg",
        alt: "A rider on a dusty trail below wind turbines",
      }}
      meta="Last updated 4 May 2024"
      sections={sections}
    />
  );
}
