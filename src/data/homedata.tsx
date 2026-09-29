import { locationsData } from "./locationsdata";

export const whatWeDo = [
  {
    title: "Learn the Fundamentals",
    img: "/images/general/learnfund.jpg",
    description:
      "In every class, we begin by introducing you to the basics of off-road riding. From how you engage with the foot peg to positioning your head, we'll break down key techniques into easy steps. These steps will naturally apply as you get on the bike, setting you up for success.",
  },
  {
    title: "Riding techniques explained",
    img: "/images/general/ridingtech.jpg",
    description:
      "Our trainers will guide you through essential riding skills to enhance your abilities. These techniques will be presented clearly for easy comprehension, enabling you to swiftly apply them and witness progress in your riding. The techniques covered may include cornering, jumping, braking, line selection, body posture, and shifting. Feel free to inquire about riding techniques or bike setup during the training.",
  },
  {
    title: "Build Confidence",
    img: "/images/general/buildconfidence.jpg",
    description:
      "New adventure (ADV) riders often have experience with street riding, so tackling off-road terrain might seem daunting initially. Our training area features distinct trails designed to gradually boost your confidence. We start by reinforcing the core basics covered at the start of your training. As you progress, we guide you in applying these skills across various terrains.",
  },
  {
    title: "Effective Training for Riders",
    img: "/images/general/exp.jpg",
    description:
      "Our comprehensive training program is tailored to elevate riders of every proficiency, enhancing their skills, and prioritizing safety. Regardless of whether you're a seasoned racer aiming for better results, an enthusiast enhancing your weekend rides, or a beginner taking your first biking steps, our program caters to all. Boasting over a decade of instructing riders, our skilled trainers will guide you toward accomplishing your objectives.",
  },
  {
    title: "Individual Feedback",
    img: "/images/general/individualfeed.jpg",
    description:
      "Whether you're in a group class or opt for private ADV training, our instructors will provide personalized feedback. Once you grasp the basic off-road riding posture, we'll concentrate on mastering traction, throttle, and clutch control, along with braking on unstable surfaces like dirt and gravel.",
  },
];

export const homeLocations = [
  {
    name: "ProDirt Adventure",
    discipline: "Adventure off-road",
    logo: "prodirtblack" as const,
    img: "/images/general/trials.jpeg",
    imgAlt: "Adventure bike jumping a log at ProDirt Adventure",
    href: locationsData.prodirtadventure.href,
    address: locationsData.prodirtadventure.address,
    description: locationsData.prodirtadventure.description,
  },
  {
    name: "TVS Drift-R School",
    discipline: "Flat track",
    logo: "driftrblack" as const,
    img: "/images/general/driftrbanner.jpg",
    imgAlt: "Rider leaning through a flat track corner at golden hour",
    href: locationsData.driftr_pune.href,
    address: locationsData.driftr_pune.address,
    description: locationsData.driftr_pune.description,
  },
];

export const academyPhotos = [
  {
    src: "/images/general/flattrack1.jpg",
    alt: "Rider sliding the rear wheel on the dirt oval",
  },
  {
    src: "/images/general/offroad.jpeg",
    alt: "Two riders kicking up dust on a trail beside the reservoir",
  },
  {
    src: "/images/general/learning.jpeg",
    alt: "Rider standing on the pegs over a wooden obstacle",
  },
  {
    src: "/images/general/driftskid.jpg",
    alt: "Flat tracker sliding past the paddock",
  },
  {
    src: "/images/general/exp.jpg",
    alt: "Riders threading a cone course",
  },
  {
    src: "/images/general/flattrack2.jpg",
    alt: "Two riders side by side on the flat track",
  },
  {
    src: "/images/general/para1.jpg",
    alt: "A row of BMW GS bikes lined up before a clinic",
  },
];
