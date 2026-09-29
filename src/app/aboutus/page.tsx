import Image from "next/image";
import { peopleData } from "@/data/peopledata";
import Instagram from "@/components/common/instagram";
import InfoLayout from "@/components/layouts/info";
import Logo from "@/components/common/logo";

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  location: string;
  description: string;
  instalink: string;
}

const imageStr = "/images/assets/banner2.jpg";

export default function AboutUs() {
  return (
    <InfoLayout imageStr={imageStr} title="Our Story">
      <div className="my-28">
        <div className="row container">
          <div className="col-md-12 col-12 font-medium">
            <h1 className="lg:text-6xl text-5xl font-extrabold mb-5 uppercase">
              offroad academies
            </h1>
            <p className="mb-4">
              At <strong>OFFROAD ACADEMIES</strong> and our Training Centers,
              our primary emphasis is on delivering top-tier off-road riding
              training and experiences. With a dedication to riders of all
              proficiency levels, our centers not only champion secure and
              self-assured off-road riding but also play a pivotal role in
              fostering the expansion of the adventure riding community.
              Additionally, we enhance the overall connection between the
              Automotive Brand and its valued customers.
            </p>
            <p className="mb-4">
              OFFROAD ACADEMIES is dedicated to cultivating the skills and
              passion of motorcycle enthusiasts seeking thrilling off-road
              experiences. Our training centers operate on a distinctive model,
              tailored to deliver specialized training and unforgettable
              adventures in the realm of off-road riding.
            </p>
            <span className="text-xl">
              <strong className="block mb-4">Our Mission:</strong>
            </span>
            <p>
              Our core mission is to empower riders with the expertise,
              techniques, and self-assurance needed to conquer demanding
              off-road terrains. We aim to foster a community of capable riders
              who can confidently navigate diverse landscapes on their
              motorcycles.
            </p>
          </div>
        </div>
        <div className="team-section bg-gray-100 text-center md:py-16 -skew-y-3 -rotate-4 mt-20">
          <div className="skew-y-3 rotate-4 container flex flex-col">
            <div className="pt-20">
              <div className="text-6xl font-extrabold mb-5 capitalize md:text-5xl md:mb-4">
                KEY PEOPLE
              </div>
              <p>
                A Passionate Team when it comes to having fun riding offroad
                motorcycles. Whether you are looking for adventure travel or
                training clinics to improve your riding skills, Our trainers and
                team members are well prepared for you
              </p>
            </div>

            <div className="mx-auto py-6 grid lg:grid-cols-2 grid-cols-1 gap-20">
              {peopleData.map((member, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg shadow-lg"
                >
                  <TeamMember
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    location={member.location}
                    description={member.description}
                    instalink={member.instalink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-24 bg-white">
          <div className="container row">
            <div className="col-md-12 col-12 bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">OUR ACADEMIES</h2>
              <ul className="flex flex-wrap gap-8">
                <li className="flex flex-col items-center">
                  <Logo variant="prodirtblack" width={100} height={100} />
                  <div className="text-center">Pune</div>
                </li>
                <li className="flex flex-col items-center">
                  <Logo variant="driftrblack" width={75} height={50} />
                  <div className="text-center">Pune</div>
                </li>
                <li className="flex flex-col items-center">
                  <Logo variant="mototripblack" width={100} height={100} />
                  <div className="text-center">Goa</div>
                </li>
              </ul>
              <ul className="pl-4 mt-8 list-disc">
                <li className="mb-2">
                  Our Locations are the go-to places for recreational &
                  professional Off-road activities.
                </li>
                <li className="mb-2">
                  We are experienced in track curating & building for Adventure,
                  Motocross, 4X4 & Flat Tracks.
                </li>
                <li className="mb-2">
                  Ready to roll Flat Track Training Systems.
                </li>
                <li className="mb-2">
                  Our Facilities are Equipped with curated tracks & sufficient
                  infrastructure to afford bike Maintenance & safe storage.
                </li>
                <li className="mb-2">
                  In-house F&B facilities for a comfortable experience
                </li>
                <li className="mb-2">
                  Well-maintained academies with camping, dorm & bio facilities.
                </li>
                <li className="mb-2">
                  Popular & Ever Growing Social Media presence in the segment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  location,
  description,
  instalink,
  image,
}) => {
  return (
    <>
      <div className="mb-2 text-center">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-40 h-40 rounded-full mx-auto border-4 border-black/33 img-fluid relative z-10"
        />
      </div>
      <div className="p-4 bg-white rounded-lg text-black relative">
        <h3 className="uppercase text-lg font-bold">{name}</h3>
        <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
          {position}
        </p>
        <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
          {location}
        </p>
        <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
          {description}
        </p>
        <a
          href={instalink}
          target="_blank"
          rel="noreferrer noopener"
          className="text-pink-600 text-xl text-center w-full flex justify-center items-center mt-4"
        >
          <Instagram />
        </a>
      </div>
    </>
  );
};
