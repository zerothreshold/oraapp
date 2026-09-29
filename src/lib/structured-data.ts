import { peopleData } from "@/data/peopledata";
import { site } from "@/data/site";

const orgId = `${site.origin}/#organization`;
const websiteId = `${site.origin}/#website`;

const postalAddress = (
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  },
) => ({
  "@type": "PostalAddress",
  streetAddress: address.streetAddress,
  addressLocality: address.addressLocality,
  addressRegion: address.addressRegion,
  postalCode: address.postalCode,
  addressCountry: "IN",
});

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: site.name,
      url: site.origin,
      logo: `${site.origin}/images/logos/main-black.png`,
      email: site.email,
      telephone: site.phone.tel,
      address: postalAddress(site.office),
      sameAs: site.socials.map((social) => social.href),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone.tel,
        email: site.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.origin,
      name: site.name,
      description: site.description,
      publisher: { "@id": orgId },
      inLanguage: "en-IN",
    },
  ],
};

export const peopleGraph = {
  "@context": "https://schema.org",
  "@graph": peopleData.map((person) => ({
    "@type": "Person",
    name: person.name,
    jobTitle: person.position,
    sameAs: person.instalink,
    worksFor: { "@id": orgId },
  })),
};
