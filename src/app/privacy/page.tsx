import type { Metadata } from "next";
import InfoLayout from "@/components/layouts/info";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Offroad Academies collects, uses and shares information when you visit offroadacademies.com.",
};

const imageStr = "/images/assets/banner2.jpg";

export default function Privacy() {
  return (
    <InfoLayout imageStr={imageStr} title="Privacy Policy">
      <div className="bg-whtie dark:bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-3xl font-bold mb-4">Privacy Policy</p>
          <div>
            <p className="mb-4">
              <strong>Last updated:</strong> May 04, 2024
            </p>
            <p className="mb-4">
              OffRoadAcadamics (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to
              protecting it through our compliance with this Privacy Policy.
            </p>
            <p className="mb-4">
              This Privacy Policy describes the types of information we may
              collect from you or that you may provide when you visit
              offroadacademies.com (our &quot;Website&quot;) and our practices
              for collecting, using, maintaining, protecting, and disclosing
              that information.
            </p>
            <p className="mb-4">
              By accessing or using our Website, you agree to this Privacy
              Policy. If you do not agree with our policies and practices,
              please do not use our Website.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Personal information that you voluntarily provide to us when you
                register on the Website, express an interest in obtaining
                information about us or our products and Services, participate
                in activities on the Website, or otherwise when you contact us.
                This may include passwords, usernames, mailing addresses, email
                addresses, phone numbers, names, billing addresses, contact
                preferences, and blood group.
              </li>
              <li>
                Sensitive information, such as health data, which we may process
                when necessary with your consent or as otherwise permitted by
                applicable law.
              </li>
              <li>
                Payment Data, if you make purchases through our Website. All
                payment data is securely stored by our payment processor,
                RazorPay.
              </li>
              <li>
                Social Media Login Data, if you choose to register with us using
                your existing social media account details.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-8 mb-4">
              <li>To facilitate account creation and authentication.</li>
              <li>To deliver and facilitate delivery of services to you.</li>
              <li>To respond to inquiries and offer support.</li>
              <li>To send administrative information.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To request feedback.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To protect our Website and comply with legal obligations.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">
              Sharing Your Information
            </h2>
            <p className="mb-4">
              We may share your information in specific situations, such as
              during business transfers.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We may use cookies and similar tracking technologies to collect
              and store your information. You can find more information about
              this in our Cookie Notice.
            </p>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="mb-4">
              You have the right to review, change, or terminate your account at
              any time. You can also withdraw your consent to the processing of
              your personal information.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Updates to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated
              version will be effective as soon as it is accessible.
            </p>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or comments about this Privacy Policy,
              you may contact us at{" "}
              <a
                href="mailto:sales@offroadacademies.com"
                className="text-blue-500"
              >
                sales@offroadacademies.com
              </a>
              .
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Reviewing, Updating, or Deleting Your Data
            </h2>
            <p className="mb-4">
              Based on applicable laws, you may have the right to request access
              to, change, or delete the personal information we collect from
              you. To do so, please submit a data subject access request.
            </p>
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}
