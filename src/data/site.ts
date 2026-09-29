export const site = {
  name: "Offroad Academies",
  origin: "https://offroadacademies.com",
  description:
    "Off-road motorcycle training on Andra Dam Road, outside Pune. Adventure clinics at ProDirt Adventure and flat track coaching at the TVS Drift-R School.",
  email: "sales@offroadacademies.com",
  phone: {
    display: "+91 85500 11116",
    tel: "+918550011116",
  },
  office: {
    streetAddress:
      "#64, 9th Main, 14th Cross, Indiranagar 2nd Stage, Eshwara Layout",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
    line: "#64, 9th Main, 14th Cross, Indiranagar 2nd Stage, Eshwara Layout, Bangalore 560038",
  },
  socials: [
    {
      name: "@offroadacademies",
      href: "https://www.instagram.com/offroadacademies/",
    },
    {
      name: "@prodirt_adventure",
      href: "https://www.instagram.com/prodirt_adventure",
    },
  ],
  pages: [
    { path: "/", title: "Off-road motorcycle training near Pune" },
    { path: "/aboutus", title: "Our story" },
    { path: "/events", title: "Events" },
    { path: "/contact-us", title: "Contact" },
    { path: "/privacy", title: "Privacy policy" },
    { path: "/terms", title: "Terms and conditions" },
    { path: "/policy", title: "Shipping and returns" },
  ],
} as const;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.office.line)}`;
