import LegalDocument from "@/components/layouts/legal-document";

export const metadata = {
  title: "Shipping and returns",
  description:
    "Shipping times and the return policy for orders placed with Offroad Academies.",
};

const sections = [
  {
    id: "shipping",
    title: "Shipping policy",
    content: (
      <ul>
        <li>
          <strong>Processing time:</strong> Orders are processed and shipped
          within 1-2 business days. You will receive tracking information via
          your registered email once your order is on its way.
        </li>
        <li>
          <strong>Public holidays:</strong> Orders placed on public holidays
          will be processed on the next business day.
        </li>
        <li>
          <strong>Delivery time:</strong> For metro areas, delivery is estimated
          at 5-7 business days. Please note that local restrictions may
          occasionally cause delays.
        </li>
      </ul>
    ),
  },
  {
    id: "returns",
    title: "Return policy",
    content: (
      <ul>
        <li>
          <strong>Eligibility:</strong> Returns are only accepted for products
          with a verified manufacturing defect.
        </li>
        <li>
          <strong>Return pickup:</strong> For return assistance, please contact
          us at{" "}
          <a href="mailto:sales@offroadacademies.com">
            sales@offroadacademies.com
          </a>{" "}
          or call us at +91-9945011116, and our team will guide you through the
          process.
        </li>
        <li>
          <strong>Return timeline:</strong> Products must be returned within 2-3
          days from the date of delivery.
        </li>
        <li>
          <strong>Defective items:</strong> If you&#39;ve received a defective
          product, email images to{" "}
          <a href="mailto:sales@offroadacademies.com">
            sales@offroadacademies.com
          </a>
          , and we&#39;ll assist you promptly.
        </li>
        <li>
          <strong>Return limit:</strong> Each product is eligible for a maximum
          of two returns. Beyond this, additional returns for that specific
          product will not be processed.
        </li>
      </ul>
    ),
  },
  {
    id: "refunds",
    title: "Refund policy",
    content: (
      <ul>
        <li>
          <strong>Eligibility:</strong> Refunds are only issued for products
          with verified manufacturing defects or if the product is unavailable
          for replacement.
        </li>
        <li>
          <strong>Refund process:</strong> To request a refund, please contact
          us at{" "}
          <a href="mailto:sales@offroadacademies.com">
            sales@offroadacademies.com
          </a>{" "}
          or call us at +91-9945011116. Our team will review your request and
          guide you through the process.
        </li>
        <li>
          <strong>Refund timeline:</strong> Refunds are processed within 7-10
          business days after the returned product has been received and
          inspected.
        </li>
        <li>
          <strong>Defective products:</strong> If you&#39;ve received a
          defective item and prefer a refund, please email clear images to{" "}
          <a href="mailto:sales@offroadacademies.com">
            sales@offroadacademies.com
          </a>
          . Our team will assist you promptly.
        </li>
        <li>
          <strong>Refund limit:</strong> Each product is eligible for a maximum
          of one refund. Subsequent refund requests for the same product will
          not be processed.
        </li>
      </ul>
    ),
  },
  {
    id: "courses",
    title: "Course cancellations and refunds",
    content: (
      <ul>
        <li>
          <strong>Cancellation eligibility:</strong> Course cancellations are
          accepted only if requested before 48 hours of course start date.
        </li>
        <li>
          <strong>Cancellation process:</strong> To cancel your course
          enrollment, please email us at{" "}
          <a href="mailto:sales@offroadacademies.com">
            sales@offroadacademies.com
          </a>{" "}
          or call us at +91-9945011116. Our team will assist you with the
          cancellation procedure.
        </li>
        <li>
          <strong>Refund timeline:</strong> If eligible, refunds for canceled
          courses will be processed within 7-10 business days from the date of
          cancellation.
        </li>
        <li>
          <strong>Partial attendance:</strong> No refunds are provided once a
          course has begun, even if only partially attended. Please ensure the
          course schedule aligns with your availability before enrolling.
        </li>
        <li>
          <strong>Non-refundable fees:</strong> Any administrative or
          registration fees associated with the course are non-refundable.
        </li>
      </ul>
    ),
  },
];

export default function Policy() {
  return (
    <LegalDocument
      path="/policy"
      title="Shipping and returns"
      lede="How long orders take to ship, when we accept returns, and how refunds and course cancellations work."
      image={{
        src: "/images/general/driftskid.jpg",
        alt: "A rider pulling away in a cloud of dust beside parked bikes",
      }}
      sections={sections}
    />
  );
}
