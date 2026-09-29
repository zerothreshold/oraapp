import type { Metadata } from "next";
import LegalDocument, {
  type LegalSection,
} from "@/components/layouts/legal-document";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "The terms that govern use of offroadacademies.com and bookings made with Offroad Academies.",
};

const sections: LegalSection[] = [
  {
    id: "terms-of-use",
    title: "Terms of use",
    content: (
      <>
        <ul>
          <li>
            These Terms of Use represent a legally binding agreement between You
            and Us, governing your access to and use of Our Platform or any
            other platform associated, linked, or connected to us. This document
            is executed in accordance with the Information Technology Act, 2000,
            including any relevant rules and amendments relating to electronic
            records, as mandated by the Information Technology Act. This
            requires the publication of rules, regulations, Privacy Policy, and
            Terms of Use for accessing or using an online portal.
          </li>
          <li>
            This Platform, offroadacademies.com, is operated by Mr. Nilesh
            Dhumal, the Owner of the brand OFFROADACADEMIES.
          </li>
          <li>
            We provide our services to you under the following conditions. By
            visiting or shopping on our Platform, you agree to accept these
            terms. Please read them carefully. Additionally, when you use any of
            our current or future services, or purchase from any business
            affiliated with us, whether or not included on the Platform, you
            will be subject to the applicable guidelines and terms for such
            services or businesses. These Terms of Use apply to all users of our
            Platform. If you do not agree with any or all of these Terms of Use,
            you are expressly prohibited from using our Platform and should
            discontinue use immediately.
          </li>

          <li>
            Any new features, products, services, or tools added to the Platform
            will also be governed by these Terms of Use. You may review the
            latest version of the Terms of Use at any time on this page.
          </li>
          <li>
            The information provided on this Platform is not intended for
            distribution to or use by any individual or entity in any
            jurisdiction or country where such distribution or use would violate
            applicable laws or regulations, or where it would impose any
            registration requirements on us. Therefore, if you choose to access
            our Platform from locations outside of those permitted, you are
            solely responsible for ensuring compliance with local laws, to the
            extent that they apply.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    number: 1,
    content: (
      <>
        <p>
          For the purposes of this agreement, the following definitions apply
          wherever the context requires:
        </p>
        <ul>
          <li>
            “Content” refers to the collective content available on our
            Platform.
          </li>
          <li>
            &quot;Content Provider&quot; refers to the party providing Content
            on this Platform, which may include us or a third party.
          </li>
          <li>
            &quot;Platform&quot; means our online portal that allows users to
            visit or purchase our Products and Services.
          </li>
          <li>
            “Product” or “Products” encompasses all merchandise, goods,
            products, and materials displayed on this Platform or any other
            website or business affiliated with us.
          </li>
          <li>
            &quot;Service&quot; or “Services” denotes the facilities provided to
            you on the Platform by us.
          </li>
          <li>
            &quot;Supported Device&quot; refers to a mobile device, computer, or
            other electronic device that is authorized for operating our
            Platform.
          </li>
          <li>
            “Us”, “Our,” and “We” refers to Mr. Nilesh NANASAHEB Dhumal, the
            Owner of the brand “OFFROADACADEMIES” operating this Platform, along
            with their affiliates.
          </li>
          <li>
            “You,” “Yours,” “Users,” or “User” signifies any natural or legal
            person who has agreed to become a buyer on the Platform and/or visit
            the Platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "electronic-communications",
    title: "Electronic communications",
    number: 2,
    content: (
      <>
        <p>
          When you visit the Platform, call us, or send us emails, you are
          communicating with us electronically. You consent to receive
          communications from us in this manner. We will communicate with you
          via email, phone calls, messages, or by posting notices on the
          Platform. You agree that all agreements, notices, disclosures, and
          other communications we provide to you electronically fulfill all
          existing legal requirements.
        </p>
      </>
    ),
  },
  {
    id: "network-and-location-access",
    title: "Network and location access",
    number: 3,
    content: (
      <>
        <ul>
          <li>
            We may request your location, and while you have the option to
            decline, if you choose to provide it, you grant us the right to
            access that information
          </li>
          <li>
            You hereby waive any right of action against us for accessing your
            location. Please note that you are responsible for obtaining the
            necessary data network access to use our services, and we are not
            liable for any data network charges that may apply.
          </li>
          <li>
            Additionally, you agree that we will not be liable for any loss or
            corruption of such data, and you waive any right of action against
            us arising from such loss or corruption.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "proprietary-content",
    title: "Proprietary content",
    number: 4,
    content: (
      <>
        <p>
          We reserve the copyright and all proprietary rights in the Platform
          and all its Content, including, without limitation, any source code,
          text, graphics, logos, button icons, images, audio clips, digital
          downloads, data compilations, and software therein or related thereto.
          The material contained within the Platform is our property unless
          identified as belonging to third parties. The name “OFFROADACADEMIES”
          and any other marks, logos, and graphics displayed on the Platform are
          proprietary trademarks owned by us. Other company, product, or service
          names displayed on the Platform may be trademarks of their respective
          owners. You are not granted any right or license to use any
          trademarks. The Platform or any content therein may not be modified,
          copied, transmitted, distributed, sold, displayed, licensed, or
          reproduced in any way by you, except as permitted by us for your
          personal, non-commercial use. We may change any aspect of this
          Platform, including the availability of supplies, features,
          information, databases, or Content. We do not own, nor do we claim
          ownership of intellectual property expressly identified as belonging
          to a Content Provider.
        </p>
      </>
    ),
  },
  {
    id: "services-products-and-product-description",
    title: "Services, products and product description",
    number: 5,
    content: (
      <>
        <p>
          Through this Platform, we strive to offer a range of Products and
          Services, including artworks and illustrations, clothing, and
          accessories related to the automobile industry.
        </p>
      </>
    ),
  },
  {
    id: "user-access",
    title: "User access",
    number: 6,
    content: (
      <>
        <p>
          You may be required to register with the Platform. If you are eligible
          to use the Platform, you are granted a limited permission to access
          and make personal use of it, but you must not download (except for
          page caching) or modify it, or any part of it. The permission granted
          by us does not include any resale or commercial use of this Platform
          or its contents; the collection and use of any listings, descriptions,
          or prices; any derivative use of the Platform or its contents;
          downloading or copying of account information for the benefit of
          another merchant; or the use of data mining, robots, or similar data
          gathering and extraction tools. This Platform, or any portion thereof,
          may not be reproduced, duplicated, copied, sold, resold, or otherwise
          exploited for any commercial purpose without our express written
          consent. You may not use any of our proprietary information
          (including, but not limited to, source code, database, functionality,
          software, Platform design, text, graphics, logos, images, designs,
          videos, button icons, audio clips, digital downloads, data
          compilations, page layout, or form) without our express written
          consent. You may not use any of our meta tags or any other hidden text
          utilizing the name “OFFROADACADEMIES” without our express written
          consent. Any unauthorized use will terminate the permission granted by
          us. You may not use any “OFFROADACADEMIES” logo or other proprietary
          graphic, trademark, service mark, or copyright without express written
          permission. Any actions taken by you that are not expressly permitted
          herein are prohibited and may result in civil and criminal
          repercussions.
        </p>
      </>
    ),
  },
  {
    id: "user-account-and-obligations",
    title: "User account and obligations",
    number: 7,
    content: (
      <>
        <p>
          You acknowledge and agree that you are accessing the Services on the
          Platform and transacting at your own risk, exercising your best
          judgment before entering into any transactions with us. We strive to
          make our services as open and inclusive as possible, but we also
          prioritize safety, security, and legal compliance. Therefore, we
          require you to adhere to the following restrictions to be part of this
          community:
        </p>
        <ul className="lettered">
          <li>
            a) All registration information you provide must be true, accurate,
            current, and complete. If you provide any information that is
            untrue, inaccurate, not current, or incomplete, we reserve the right
            to suspend or terminate your account and refuse any current or
            future use of the Platform (or any portion thereof). If you use this
            Platform, you are responsible for maintaining the confidentiality of
            your account, password, and other user credentials, and for
            restricting access to your Supported Device. You agree to accept
            responsibility for all activities that occur under your account. We
            reserve the right to refuse Service, terminate accounts, remove or
            edit content, or cancel orders at our sole discretion.
          </li>
          <li>
            b) You will maintain the accuracy of your information and promptly
            update it as necessary.
          </li>
          <li>
            c) You confirm that you are at least the age of majority in your
            state or province of residence, and that you have given us your
            consent to allow any of your minor dependents to use this Platform.
          </li>
          <li>
            d) You agree that you are not on an applicable denied party listing.
          </li>
          <li>
            e) We have not previously disabled your account for violation of law
            or any of our policies.
          </li>
          <li>f) You are not a convicted sex offender.</li>
          <li>
            g) You agree, undertake, and confirm that your use of the Platform
            shall be strictly governed by the following binding principles:
            <ul className="lettered">
              <li>
                i. You shall not systematically retrieve data or other content
                from the Platform to create or compile a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                ii. You shall not use a buying agent or purchasing agent to make
                purchases on the Platform.
              </li>
              <li>
                iii. You shall not use the Platform to advertise or offer to
                sell your products and services.
              </li>
              <li>
                iv. You shall not circumvent, disable, or interfere with
                security-related features of the Platform.
              </li>
              <li>
                v. You shall not make improper use of our Support Services or
                submit false reports of abuse or misconduct.
              </li>
              <li>
                vi. You shall not engage in any automated use of the system,
                such as using scripts to send comments or messages.
              </li>
              <li>
                vii. You shall not interfere with, disrupt, or create an undue
                burden on the Platform or the networks connected to it.
              </li>
              <li>
                viii. You shall not attempt to impersonate another User or use
                their username.
              </li>
              <li>ix. You shall not sell or transfer your profile.</li>
              <li>
                x. You shall not use any information obtained from the Platform
                to harass, abuse, or harm another person.
              </li>
              <li>
                xi. You shall not use the Platform as part of any effort to
                compete with us or for any revenue-generating endeavor.
              </li>
              <li>
                xii. You shall not decipher, decompile, disassemble, or reverse
                engineer any software on the Platform.
              </li>
              <li>
                xiii. You shall not attempt to bypass any measures designed to
                prevent access to the Platform.
              </li>
              <li>
                xiv. You shall not harass, annoy, intimidate, or threaten our
                employees or agents.
              </li>
              <li>
                xv. You shall not delete copyright or other proprietary rights
                notices from the Platform.
              </li>
              <li>
                xvi. You shall not copy or adapt the Platform’s software without
                permission.
              </li>
              <li>
                xvii. You shall not upload or transmit viruses, Trojan horses,
                or any disruptive materials.
              </li>
              <li>
                xviii. You shall not use any passive or active information
                collection mechanisms.
              </li>
              <li>
                xix. You shall not use, launch, develop, or distribute any
                automated system to access the Platform.
              </li>
              <li>
                xx. You shall not disparage, tarnish, or harm us or the
                Platform.
              </li>
              <li>
                xxi. You shall not use the Platform in violation of any
                applicable laws or regulations.
              </li>
            </ul>
          </li>
          <li>
            h) You shall not:
            <ul className="lettered">
              <li>
                i. Decompile, reverse engineer, or attempt to derive the source
                code of the Platform.
              </li>
              <li>
                ii. Make any modifications or derivative works from the
                Platform.
              </li>
              <li>
                iii. Violate any applicable laws, rules, or regulations while
                using the Platform.
              </li>
              <li>
                iv. Remove or obscure any proprietary notice posted by us or
                licensors of the Platform.
              </li>
              <li>
                v. Use the Platform for any revenue-generating endeavors not
                intended by us.
              </li>
              <li>
                vi. Make the Platform available over a network permitting access
                by multiple users simultaneously.
              </li>
              <li>
                vii. Use the Platform for creating a competitive product,
                service, or software.
              </li>
              <li>
                viii. Use the Platform to send automated queries or unsolicited
                commercial emails.
              </li>
              <li>
                ix. Use any proprietary information or interfaces in the design
                or distribution of competing products.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "risk-of-loss",
    title: "Risk of loss",
    number: 8,
    content: (
      <>
        <p>
          All items purchased from us are made under a shipment contract. This
          means that the risk of loss and title for such items transfer to you
          upon our delivery to the carrier (Third Party).
        </p>
      </>
    ),
  },
  {
    id: "user-generated-contribution",
    title: "User generated contribution",
    number: 9,
    content: (
      <>
        <p>
          The Platform may invite you to engage in discussions, contribute to,
          or participate in blogs, message boards, online forums, and other
          features, providing you the opportunity to create, submit, post,
          display, transmit, perform, publish, distribute, or broadcast content
          and materials to us or on the Platform. This includes, but is not
          limited to, text, writings, video, audio, photographs, graphics,
          comments, suggestions, personal information, or other materials
          (collectively, &quot;Contributions&quot;). Contributions may be
          visible to other Users of the Platform and through third-party
          websites. As such, any Contributions you transmit may be considered
          non-confidential and non-proprietary. By creating or making available
          any Contributions, you represent and warrant that:
        </p>
        <ul className="lettered">
          <li>
            a) The creation, distribution, transmission, public display, or
            performance, as well as the accessing, downloading, or copying of
            your Contributions do not and will not infringe the proprietary
            rights of any third party, including but not limited to copyright,
            patent, trademark, trade secret, or moral rights.
          </li>
          <li>
            b) You are the creator and owner of, or have the necessary licenses,
            rights, consents, releases, and permissions to use and authorize us,
            the Platform, and other users to use your Contributions in any
            manner contemplated by the Platform and these Terms of Use.
          </li>
          <li>
            c) You have the written consent, release, and/or permission of each
            identifiable individual in your Contributions to use their name or
            likeness, enabling the inclusion and use of your Contributions as
            contemplated by the Platform and these Terms of Use.
          </li>
          <li>
            d) Your Contributions are not false, inaccurate, or misleading.
          </li>
          <li>
            e) Your Contributions are not unsolicited or unauthorized
            advertising, promotional materials, pyramid schemes, chain letters,
            spam, mass mailings, or other forms of solicitation.
          </li>
          <li>
            f) Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </li>
          <li>
            g) Your Contributions do not ridicule, mock, disparage, intimidate,
            or abuse anyone.
          </li>
          <li>
            h) Your Contributions do not advocate the violent overthrow of any
            government or incite, encourage, or threaten physical harm against
            another.
          </li>
          <li>
            i) Your Contributions do not violate any applicable law, regulation,
            or rule.
          </li>
          <li>
            j) Your Contributions do not violate the privacy or publicity rights
            of any third party.
          </li>
          <li>
            k) Your Contributions do not solicit personal information from
            anyone under the age of legality or exploit minors in a sexual or
            violent manner.
          </li>
          <li>
            l) Your Contributions do not violate any federal or state law
            concerning child pornography or otherwise intended to protect the
            health or well-being of minors.
          </li>
          <li>
            m) Your Contributions do not include offensive comments related to
            race, national origin, gender, sexual preference, or physical
            handicap.
          </li>
          <li>
            n) Your Contributions do not violate, or link to material that
            violates, any provision of these Terms of Use or any applicable law
            or regulation.
          </li>
          <li>
            o) Any use of the Platform that violates the aforementioned
            conditions breaches these Terms of Use and may result in termination
            or suspension of your rights to use the Platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contribution-license",
    title: "Contribution license",
    number: 10,
    content: (
      <>
        <p>
          By posting your Contributions to any part of the Platform, or by
          making your Contributions accessible to the Platform through linking
          your account from the Platform or linking our brand,
          “OFFROADACADEMIES,” or our Platform to any of your social networking
          accounts, you automatically grant, and represent and warrant that you
          have the right to grant, us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right and license to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions
          (including, without limitation, your image and voice) for any purpose,
          whether commercial, advertising, or otherwise. This includes the
          ability to prepare derivative works or incorporate such Contributions
          into other works and to grant and authorize sublicenses for the
          foregoing. The use and distribution of your Contributions may occur in
          any media formats and through any media channels.
        </p>
        <p>
          This license will apply to any form, media, or technology now known or
          hereafter developed and includes our use of your name, company name,
          franchise name (as applicable), as well as any trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. You waive all moral rights in your Contributions and warrant
          that such moral rights have not been otherwise asserted in your
          Contributions. We do not claim any ownership over your Contributions;
          you retain full ownership of all your Contributions along with any
          intellectual property rights or other proprietary rights associated
          with them. We are not liable for any statements or representations in
          your Contributions made by you in any area on the Platform. You are
          solely responsible for your Contributions to the Platform and
          expressly agree to indemnify us from any and all responsibility and
          refrain from any legal action against us regarding your Contributions.
        </p>
        <p>
          We reserve the right, at our sole and absolute discretion, to (1)
          edit, redact, or otherwise modify any Contributions; (2) re-categorize
          any Contributions to place them in more appropriate locations on the
          Platform; and (3) pre-screen or delete any Contributions at any time
          and for any reason, without notice. We are under no obligation to
          monitor your Contributions.
        </p>
      </>
    ),
  },
  {
    id: "submissions",
    title: "Submissions",
    number: 11,
    content: (
      <>
        <p>
          You acknowledge and agree that any questions, comments, suggestions,
          ideas, feedback, or other information you provide to us regarding the
          Platform (&quot;Submissions&quot;) are non-confidential and shall
          become our exclusive property. We shall own all rights, including
          intellectual property rights, and shall be entitled to unrestricted
          use and dissemination of these Submissions for any lawful purpose,
          whether commercial or otherwise, without any obligation to provide
          acknowledgment or compensation to you. You hereby waive all moral
          rights to any such Submissions and warrant that they are original to
          you or that you have the right to submit them. You agree that there
          shall be no recourse against us for any alleged or actual infringement
          or misappropriation of any proprietary right in your Submissions.
        </p>
      </>
    ),
  },
  {
    id: "third-party-web-platforms-and-content",
    title: "Third-party web platforms and content",
    number: 12,
    content: (
      <>
        <p>
          The Platform may contain links to other web platforms
          (&quot;Third-Party Web Platforms&quot;) or you may receive content via
          the Platform that includes articles, photographs, text, graphics,
          designs, music, sound, video, information, platforms, software, and
          other materials belonging to or originating from third parties
          (&quot;Third-Party Content&quot;). We do not investigate, monitor, or
          check the accuracy, appropriateness, or completeness of any
          Third-Party Web Platforms or Third-Party Content, and we are not
          responsible for any Third-Party Web Platforms accessed through the
          Platform or for any Third-Party Content posted on, available through,
          or installed from the Platform. This includes, but is not limited to,
          the content, accuracy, offensiveness, opinions, reliability, privacy
          practices, or policies of such Third-Party Web Platforms or
          Third-Party Content. Inclusion of, linking to, or allowing the use or
          installation of any Third-Party Web Platforms or Third-Party Content
          does not imply our approval or endorsement. If you choose to leave the
          Platform and access Third-Party Web Platforms or use or install any
          Third-Party Content, you do so at your own risk, and these Terms of
          Use will no longer apply. It is advisable to review the applicable
          terms and policies, including privacy and data collection practices,
          of any web platform you navigate to from the Platform or regarding any
          platforms you use or install from the Platform. Any purchases made
          through Third-Party Web Platforms are conducted through other web
          platforms and companies, and we assume no responsibility for these
          transactions, which are solely between you and the respective third
          party. You agree that we do not endorse the products or services
          offered on Third-Party Web Platforms and you shall hold us harmless
          from any harm arising from your purchase of such products or services.
          Furthermore, you shall indemnify us for any losses or harm incurred by
          you related to or resulting from any Third-Party Content or any
          interactions with Third-Party Web Applications.
        </p>
      </>
    ),
  },
  {
    id: "advertisers",
    title: "Advertisers",
    number: 13,
    content: (
      <>
        <p>
          We may allow advertisers to display their advertisements and related
          information in specific areas of the Platform, such as sidebar or
          banner advertisements. If you are an advertiser, you assume full
          responsibility for any advertisements you place on the Platform and
          for any services provided or products sold through those
          advertisements. Additionally, as an advertiser, you represent and
          warrant that you possess all necessary rights and authority to place
          advertisements on the Platform, including, but not limited to,
          intellectual property rights, publicity rights, and contractual
          rights. You acknowledge that such advertisements are subject to our
          Terms of Use. We simply provide the space for these advertisements and
          have no other relationship with advertisers.
        </p>
      </>
    ),
  },
  {
    id: "platform-management",
    title: "Platform management",
    number: 14,
    content: (
      <>
        <p>We reserve the right, but not the obligation, to:</p>
        <ol>
          <li>Monitor the Platform for violations of these Terms of Use.</li>
          <li>
            Take appropriate legal action against anyone who, in our sole
            discretion, violates the law or these Terms of Use, including, but
            not limited to, reporting such users to law enforcement authorities.
          </li>
          <li>
            At our sole discretion, refuse, restrict access to, limit the
            availability of, or disable (to the extent technologically feasible)
            any of your Contributions or any portion thereof.
          </li>
          <li>
            At our sole discretion, and without notice or liability, remove from
            the Platform or otherwise disable all files and content that are
            excessive in size or are burdensome to our systems.
          </li>
          <li>
            Manage the Platform in a manner designed to protect our rights and
            property and to facilitate the proper functioning of the Platform.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    number: 15,
    content: (
      <>
        <p>
          Except where noted otherwise, the list price displayed for the
          Products and Services on our Platform, whether in foreign currency or
          Indian Rupees, represents the full price for such Products and
          Services. Prices for our Products and Services are subject to change
          without notice. We reserve the right at any time to modify or
          discontinue the Products and Services (or any part thereof) without
          prior notice. We shall not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of any
          Product or Service.
        </p>
        <p>
          With respect to the Products sold on the Platform, we charge your
          payment method before your order has entered the shipping process. If
          we are unable to ship your Products as per your order for any reason,
          we will notify you electronically and refund the value of the Products
          that are not available. Any additional shipping fees, if applicable,
          will not be refunded by us.
        </p>
        <p>
          In the event that the Products or Services sold on the Platform are
          unfortunately mispriced, and we notice this, we shall acknowledge and
          communicate to you the procedural obligations required from both
          parties to resolve any losses, if applicable.
        </p>
      </>
    ),
  },
  {
    id: "errors-inaccuracies-and-omissions",
    title: "Errors, inaccuracies and omissions",
    number: 16,
    content: (
      <>
        <p>
          Occasionally, there may be information on our Platform or in the
          Service that contains typographical errors, inaccuracies, or omissions
          related to Product descriptions, pricing, promotions, offers, Product
          shipping charges, transit times, and availability. We reserve the
          right to correct any errors, inaccuracies, or omissions and to change
          or update information or cancel orders if any information on the
          Platform or any related web Platform is inaccurate at any time without
          prior notice (including after you have submitted your order).
        </p>
        <p>
          We undertake no obligation to update, amend, or clarify information on
          the Platform or on any related web Platform, including, without
          limitation, pricing information, except as required by law. No
          specified update or refresh date applied on the Platform or any
          related web Platform should be taken to indicate that all information
          on the Platform or on any related web Platform has been modified or
          updated.
        </p>
      </>
    ),
  },
  {
    id: "accuracy-of-billing-and-account-information",
    title: "Accuracy of billing and account information",
    number: 17,
    content: (
      <>
        <p>
          We reserve the right to refuse any order you place with us. We may, at
          our sole discretion, limit or cancel quantities purchased per person,
          per household, or per order. These restrictions may include orders
          placed by or under the same customer account, the same billing card,
          and/or orders that use the same billing and/or shipping address.
        </p>
        <p>
          In the event that we make a change to or cancel an order, we may
          attempt to notify you by contacting you using the contact information
          provided at the time the order was made. We reserve the right to limit
          or prohibit orders that, in our sole judgment, appear to be placed by
          dealers, resellers, or distributors.
        </p>
        <p>
          You agree to provide current, complete, and accurate information for
          communication regarding your order. You also agree to promptly update
          your account and other information, including your email address,
          billing card number, and expiry dates, so we can complete your
          transaction and contact you as needed.
        </p>
      </>
    ),
  },
  {
    id: "personal-information",
    title: "Personal information",
    number: 18,
    content: (
      <>
        <p>
          Your submission and our use of personal information through this
          Platform is governed by our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer-of-warranties-and-limitation-of-liability",
    title: "Disclaimer of warranties and limitation of liability",
    number: 19,
    content: (
      <>
        <p>
          This Platform is provided by us on an available basis. We make no
          representations or warranties of any kind, express or implied, as to
          the operation of this Platform or the information, content, materials,
          services, or products included on this Platform. You expressly agree
          that your use of this Platform is at your sole risk. To the full
          extent permissible by applicable law, we disclaim all warranties,
          express or implied, including, but not limited to, implied warranties
          of merchantability and fitness for a particular purpose. We do not
          warrant that this Platform, its servers, or emails sent by us are free
          of viruses or other harmful components. We will not be liable for any
          damages of any kind arising from the use of this Platform, including,
          but not limited to direct, indirect, incidental, punitive, and
          consequential damages. We, as well as this Platform, operated by us as
          an e-commerce merchant, shall be under no liability whatsoever in
          respect of any loss or damage arising directly or indirectly from any
          transaction undertaken during purchase.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    number: 20,
    content: (
      <>
        <p>
          You agree to defend, indemnify and hold us, our respective officers,
          directors, employees, shareholders, associated entities, agents,
          successors or assigns, or any party involved in the creation,
          production, or transmission of this Platform harmless from and against
          any and all claims, damages, costs, and expenses, including attorney
          fees, arising from or related to your use of this Platform.
        </p>
      </>
    ),
  },
  {
    id: "entire-agreement",
    title: "Entire agreement",
    number: 21,
    content: (
      <>
        <p>
          The failure of us to exercise or enforce any right or provision of
          these Terms of Use shall not constitute a waiver of such right or
          provision. These Terms of Use and any policies or operating rules
          posted by us on this Platform or in respect to the Products and
          Services constitute the entire agreement and understanding between you
          and us and govern your use of this Platform, superseding any prior or
          contemporaneous agreements, communications, and proposals, whether
          oral or written, between you and us (including, but not limited to,
          any prior versions of Terms of Use). Any ambiguities in the
          interpretation of these Terms of Use shall not be construed against
          the drafting party.
        </p>
      </>
    ),
  },
  {
    id: "applicable-law-and-jurisdiction",
    title: "Applicable law and jurisdiction",
    number: 22,
    content: (
      <>
        <p>
          By visiting, accessing, or using our Platform, Products, and Services,
          you agree that the laws of India, under the jurisdiction of the Courts
          in Mumbai, without regard to principles of conflict of laws, will
          govern these Terms of Use and any dispute of any sort that might arise
          between you and us.
        </p>
      </>
    ),
  },
  {
    id: "injunctive-relief",
    title: "Injunctive relief",
    number: 23,
    content: (
      <>
        <p>
          Any dispute arising from the illegal use or exploitation of our
          intellectual property rights empowers us to seek injunctive and/or
          other appropriate relief in any court in India or internationally.
        </p>
      </>
    ),
  },
  {
    id: "platform-policies-modification-and-severability",
    title: "Platform policies, modification, and severability",
    number: 24,
    content: (
      <>
        <p>
          When you use any of the Services provided by us through the Platform,
          including but not limited to the content mentioned herein, you will be
          subject to the rules, guidelines, policies, terms, and conditions
          applicable to such service, and they shall be deemed to be
          incorporated into these Terms of Use and shall be considered as part
          and parcel of these Terms of Use. We reserve the right, at our sole
          discretion, to make changes, modify, add, or remove portions of these
          Terms of Use, at any time without any prior written notice to you. You
          shall ensure to review these Terms of Use periodically for updates or
          changes. Your continued use of the Platform following the posting of
          changes will mean that you accept and agree to the revisions. As long
          as you comply with these Terms of Use, we grant you a personal,
          non-exclusive, non-transferable, limited privilege to enter and use
          this Platform. By impliedly or expressly accepting these Terms of Use,
          you also accept and agree to be bound by our policies, including but
          not limited to the Privacy Policy as amended from time to time.
        </p>
      </>
    ),
  },
  {
    id: "unsolicited-material",
    title: "Unsolicited material",
    number: 25,
    content: (
      <>
        <p>
          We always appreciate feedback or other suggestions but may use them
          without any restrictions or obligation to compensate you for them and
          are under no obligation to keep them confidential.
        </p>
      </>
    ),
  },
  {
    id: "contact-information",
    title: "Contact information",
    number: 26,
    content: (
      <>
        <p>
          In case of any queries, concerns, requests or complaints, you can
          contact us at{" "}
          <a href="mailto:sales@offroadacademies.com">
            sales@offroadacademies.com
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <LegalDocument
      path="/terms"
      title="Terms and conditions"
      lede="The rules for using offroadacademies.com and buying from us. Sections are numbered so you can point to the one you mean."
      image={{
        src: "/images/general/para2.jpg",
        alt: "A line of adventure bikes riding through mud on a wet trail",
      }}
      meta="Effective 6 November 2024"
      sections={sections}
    />
  );
}
