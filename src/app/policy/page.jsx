import InfoLayout from "@/components/layouts/info";

export const metadata = {
  title: "Shipping and returns",
  description:
    "Shipping times and the return policy for orders placed with Offroad Academies.",
};

const imageStr = "/images/assets/banner2.jpg";

export default function Policy() {
  return (
    <InfoLayout imageStr={imageStr} title="Shipping">
      <div className="bg-whtie dark:bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-3xl font-bold mb-4">Shipping & Return Policy</p>
          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Policy</h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Processing Time: Orders are processed and shipped within 1-2
                business days. You will receive tracking information via your
                registered email once your order is on its way.
              </li>
              <li>
                Public Holidays: Orders placed on public holidays will be
                processed on the next business day.
              </li>
              <li>
                Delivery Time: For metro areas, delivery is estimated at 5-7
                business days. Please note that local restrictions may
                occasionally cause delays.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Eligibility: Returns are only accepted for products with a
                verified manufacturing defect.
              </li>
              <li>
                Return Pickup: For return assistance, please contact us at
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  {" "}
                  sales@offroadacademies.com
                </a>{" "}
                or call us at +91-9945011116, and our team will guide you
                through the process.{" "}
              </li>
              <li>
                Return Timeline: Products must be returned within 2-3 days from
                the date of delivery.
              </li>
              <li>
                Defective Items: If you&#39;ve received a defective product,
                email images to{" "}
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  {" "}
                  sales@offroadacademies.com
                </a>
                , and we’ll assist you promptly.
              </li>
              <li>
                Return Limit: Each product is eligible for a maximum of two
                returns. Beyond this, additional returns for that specific
                product will not be processed..
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                <strong>Eligibility:</strong> Refunds are only issued for
                products with verified manufacturing defects or if the product
                is unavailable for replacement.
              </li>
              <li>
                <strong>Refund Process:</strong> To request a refund, please
                contact us at
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  {" "}
                  sales@offroadacademies.com
                </a>{" "}
                or call us at +91-9945011116. Our team will review your request
                and guide you through the process.
              </li>
              <li>
                <strong>Refund Timeline:</strong> Refunds are processed within
                7-10 business days after the returned product has been received
                and inspected.
              </li>
              <li>
                <strong>Defective Products:</strong> If you&#39;ve received a
                defective item and prefer a refund, please email clear images to
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  {" "}
                  sales@offroadacademies.com
                </a>
                . Our team will assist you promptly.
              </li>
              <li>
                <strong>Refund Limit:</strong> Each product is eligible for a
                maximum of one refund. Subsequent refund requests for the same
                product will not be processed.
              </li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">
              Course and Refund Policy
            </h2>
            <ul className="list-disc pl-8 mb-4">
              <li>
                <strong>Cancellation Eligibility:</strong> Course cancellations
                are accepted only if requested before 48 hours of course start
                date.
              </li>
              <li>
                <strong>Cancellation Process:</strong> To cancel your course
                enrollment, please email us at
                <a
                  href="mailto:sales@offroadacademies.com"
                  className="text-blue-500"
                >
                  {" "}
                  sales@offroadacademies.com
                </a>{" "}
                or call us at +91-9945011116 . Our team will assist you with the
                cancellation procedure.
              </li>
              <li>
                <strong>Refund Timeline:</strong> If eligible, refunds for
                canceled courses will be processed within 7-10 business days
                from the date of cancellation.
              </li>
              <li>
                <strong>Partial Attendance:</strong> No refunds are provided
                once a course has begun, even if only partially attended. Please
                ensure the course schedule aligns with your availability before
                enrolling.
              </li>
              <li>
                <strong>Non-Refundable Fees:</strong> Any administrative or
                registration fees associated with the course are non-refundable.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}
