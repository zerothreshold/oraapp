export const locationsData = {
  prodirtadventure: {
    title: "ProDirt Adventure",
    active: true,
    address: "Pro Dirt Adventure, Andra Dam Rd, Rajpuri, Maharashtra 412106",
    href: "https://prodirtadventure.offroadacademies.com/",
    logo: "/images/logos/prodirt-black.png",
    varient: "prodirtblack",
    bannerImage: "/images/general/collage1.jpg",
    courses: {
      1: {
        title: "Off-Road Introduction Clinic: (Beginner)",
        img: "/images/general/trials.jpeg",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Body position - seated and standing riding postures for Off-road",
              "Cornering techniques - loose grounds",
              "Exercises to increase control and balance",
              "Techniques to ride Inclines & Declines",
              "Hill Recovery",
              "How to lift a fallen bike",
              "Efficient Braking Drills",
              "Trail Ride",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question:
              "Which bike I can Bring? OR Suitable Bikes for this Program?",
            listItem: false,
            info: "KTM ADV250/390, BMW 310GS, Himalayan, Xpulse, Yezdi Jawa, Triumph ADV Bike, Honda Africa Twin BMW GS Series, Harley Davidson Pan America",
          },
        ],
        batches: [
          {
            title: "Half Day",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
          {
            title: "Full Day",
            times: [
              {
                time: "09:00 AM - 05:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Private",
            prices: [
              {
                price: 12500,
                duration: "Full Day",
                minRiders: -1,
                maxRiders: 4,
              },
              {
                price: 10000,
                duration: "Half Day",
                minRiders: -1,
                maxRiders: 4,
              },
            ],
          },
          {
            title: "Group",
            prices: [
              {
                price: 7500,
                duration: "Half Day",
                maxRiders: -1,
                minRiders: 5,
              },
            ],
          },
        ],
        level: "Beginner",
        description:
          "Geared towards beginners, this self-paced course teaches essential off-road skills, including body positioning, throttle control, braking, and obstacle negotiation for safe use on gravel roads and trails.",
      },
      2: {
        title: "Intermediate Off-Road Clinic: Level 1",
        img: "/images/general/learning.jpeg",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Recap of/ Introduction Clinic",
              "Exercises to increase control and balance",
              "Techniques to ride Inclines & Declines",
              "Use of electronic aids on your bike",
              "Brake/Throttle/ Clutch Control",
              "Intermediate-level trail riding drill",
              "How to lift a fallen bike",
              "Efficient Braking Drills",
              "Obstacles - Level 2",
              "Hill Recovery",
              "Trail Ride",
              "Power-sliding (Optional if the coach feels you are ready)",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question:
              "Which bike I can Bring? OR Suitable Bikes for this Program?",
            listItem: false,
            info: "KTM ADV250/390, BMW 310GS, Himalayan, Xpulse, Yezdi Jawa, Triumph ADV Bike, Honda Africa Twin BMW GS Series, Harley Davidson Pan America",
          },
        ],
        batches: [
          {
            title: "Full Day",
            times: [
              {
                time: "09:00 AM - 05:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Private",
            prices: [
              {
                price: 15000,
                duration: "Full Day",
                minRiders: -1,
                maxRiders: 4,
              },
            ],
          },
          {
            title: "Group",
            prices: [
              {
                price: 12500,
                duration: "Full Day",
                maxRiders: -1,
                minRiders: 5,
              },
            ],
          },
        ],
        level: "Intermediate",
        description:
          "These courses build on foundational skills, introducing challenging terrain, inclines, declines, and technical maneuvers. A full Day of self-paced training & riding to boost your confidence and teaches safe biking on gravel roads and trails.",
      },
      3: {
        title: "Open Practice Session",
        img: "/images/general/exp.jpg",
        infoItems: [
          {
            question: "Who is eligible?",
            listItem: false,
            info: "Open to members, athletes, and riders who have completed at least an introductory course with us. Enjoy track time at your own pace, allowing you to focus on the areas you want to improve.",
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own motor cycle and safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
        ],
        batches: [
          {
            title: "Half Day",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
              {
                time: "02:00 PM - 05:00 PM (Reporting Time 01:00 PM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Single Session Pass",
            prices: [
              {
                price: 3500,
                duration: "Half",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
        ],
        level: "Intermediate",
        description:
          "Our Open Practice Sessions are designed for riders who are members, athletes, or those who have completed an introductory course with us anywhere in India. These sessions provide track time in a supportive and controlled environment allowing riders to refine skills, prepare for events, or simply enjoy the track at their own pace.",
      },
      4: {
        title: "Kids Clinic",
        img: "/images/general/individualfeed.jpg",
        infoItems: [
          {
            question: "What will my kid learn and general eligibility?",
            listItem: true,
            info: [
              "Age Group: Suitable for children aged 6-14 years.",
              "Skill Development: Focus on basic riding skills, balance, coordination, and control.",
              "Safety Education: Emphasizes the importance of safety gear, road rules, and responsible riding.",
              "Fun and Engaging: Interactive and fun activities to keep kids engaged and excited about learning.",
              "Professional Instructors: Trained instructors with experience in teaching children, ensuring a supportive and safe learning environment.",
            ],
          },
        ],
        batches: [
          {
            title: "Half Day",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
              {
                time: "02:00 PM - 05:00 PM (Reporting Time 01:00 PM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Half Day Per Session",
            prices: [
              {
                price: 10000,
                duration: "Half Day",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
          {
            title: "Full Day Per Session",
            prices: [
              {
                price: 15000,
                duration: "Full Day",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
          {
            title: "Bike Rental 85 cc Yamaha",
            prices: [
              {
                price: 5000,
                duration: "Full Day",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
        ],
        level: "Beginner/Introduction",
        description:
          "Our Kids Training Program is designed to introduce children to the exciting world of motorcycling at an early stage. This program aims to build confidence, develop riding skills, and instill a sense of responsibility in young riders, preparing them to become future athletes or safe and responsible citizens on public roads.",
      },
      5: {
        title: "Flat Track PRO Clinic",
        img: "/images/general/driftskid.jpg",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Introduction to Sliding Techniques",
              "Safety Precautions",
              "Understanding Motorcycle Dynamics",
              "Fundamentals of Sliding",
              "Body Positioning",
              "Throttle and Brake Control",
              "Initiating a Slide",
              "Maintaining a Slide",
              "Recovering from a Slide",
              "Common Mistakes and How to Avoid Them",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question:
              "Which bike I can Bring? OR Suitable Bikes for this Program?",
            listItem: false,
            info: "KTM ADV250/390, BMW 310GS, Himalayan, Xpulse, Yezdi Jawa, Triumph ADV Bike, Honda Africa Twin BMW GS Series, Harley Davidson Pan America",
          },
          {
            question: "Inclusions",
            listItem: true,
            info: [
              "Training Session.",
              "A professional & knowledgeable instructor.",
            ],
          },
          {
            question: "Exclusions",
            listItem: true,
            info: ["Anything other than inclusions."],
          },
        ],
        batches: [
          {
            title: "Half Day",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
              {
                time: "02:00 PM - 05:00 PM (Reporting Time 01:00 PM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Private",
            prices: [
              {
                price: 10500,
                duration: "Half Day",
                minRiders: -1,
                maxRiders: 4,
              },
            ],
          },
        ],
        level: "PRO",
        description:
          "Learn The Art of Sliding a Motorcycle. This program is focused on the fundamentals of sliding a motorcycle in a controlled environment. The trainers break down the sliding technique and provide you with the knowledge that even experienced riders have yet to figure out",
      },
      6: {
        title: "Adventure Membership",
        img: "/images/general/advmem.jpg",
        infoItems: [
          {
            question: "Things Covered:",
            listItem: true,
            info: [
              "6 ride sessions",
              "Free bike parking",
              "Coach Accompany",
              "Access to All tracks and trails",
              "F&B 1 Meal per session",
              "Duration 4 months",
            ],
          },
        ],
        batches: [],
        pricelist: [
          {
            title: "Offer Price",
            prices: [
              {
                price: 50400,
                duration: "50,400 INR + 18% GST",
                minRiders: -1,
                maxRiders: -1,
                special: true,
                spdesc: <>Membership Value: 63,000 INR</>,
              },
            ],
          },
        ],
        level: "PRO",
        description:
          "Learn The Art of Sliding a Motorcycle. This program is focused on the fundamentals of sliding a motorcycle in a controlled environment. The trainers break down the sliding technique and provide you with the knowledge that even experienced riders have yet to figure out",
      },
    },
    description:
      "ProDirt Adventure isn't just a riding destination; it's your launchpad for off-road mastery. We are passionate about empowering riders across Maharashtra with the skills and confidence to conquer any terrain. Our commitment to off-road education shines through our diverse training programs for both two-wheelers and four-wheelers.",
  },
  driftr_pune: {
    title: "TVS DRIFT-R",
    active: true,
    href: "https://tvs-driftr.offroadacademies.com/",
    address: "TVS driftR Adventure, Andra Dam Rd, Rajpuri, Maharashtra 412106",
    logo: "/images/logos/driftr-black.png",
    varient: "driftrblack",
    bannerImage: "/images/general/driftrbanner.jpg",
    courses: {
      1: {
        title: "Level 1: Flat track training - Gears Not Included",
        img: "/images/general/flattrack1.jpg",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Flat Track Riding Techniques",
              "Customized Ronin Flat Tracker",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question: "Inclusions",
            listItem: true,
            info: [
              "Trainer",
              "120 min flat track training session",
              "Customized Ronin Flat Tracker (with fuel)",
              "Access to all common areas",
            ],
          },
          {
            question: "Exclusions",
            listItem: true,
            info: ["Anything other than inclusions."],
          },
        ],
        batches: [
          {
            title: "Batch 1",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
          {
            title: "Batch 2",
            times: [
              {
                time: "01:00 PM - 04:00 PM (Reporting Time 12:00 PM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Standard",
            prices: [
              {
                price: 2500,
                duration: "Half Day",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
        ],
        level: "Beginner",
        description:
          "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. Total training session 3 hours, saddle time 120 mins, rest 60 mins will include - classroom session, breakfast & gear-up time.",
      },
      2: {
        title: "Level 1: Flat track training - Gears Included",
        img: "/images/general/flattrack2.jpg",
        level: "Intermediate",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Flat Track Riding Techniques",
              "Customized Ronin Flat Tracker",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question: "Inclusions",
            listItem: true,
            info: [
              "120 min flat track training session",
              "Customized Ronin Flat Tracker (with fuel)",
              "Access to all common areas",
              "Safety Gear",
            ],
          },
          {
            question: "Exclusions",
            listItem: true,
            info: ["Anything other than inclusions."],
          },
        ],
        batches: [
          {
            title: "Batch 1",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
          {
            title: "Batch 2",
            times: [
              {
                time: "01:00 PM - 04:00 PM (Reporting Time 12:00 PM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Standard",
            prices: [
              {
                price: 3000,
                duration: "Half Day",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
        ],
        description:
          "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. Total training session 3 hours, saddle time 120 mins, rest 60 mins will include - classroom session, breakfast & gear-up time",
      },
    },
    description:
      "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. TVS Motor Company is launching the first Drift R School at ProDirt Adventure, Pune This school aims to introduce/help/assist in understanding the nuances of this sport by creating a platform where all our TVS Ronin and other customers get to interact and learn drifting under the guidance of highly skilled trainers in a safe and controlled environment.",
  },
  mototrip_goa: {
    title: "MotoTrip.in",
    active: false,
    href: "#",
    address: "Pro Dirt Adventure, Andra Dam Rd, Rajpuri, Maharashtra 412106",
    logo: "/images/logos/mototrip-black.png",
    varient: "mototripblack",
    bannerImage: "/images/general/para1.jpg",
    courses: {
      1: {
        title: "Off-Road Introduction Clinic: (Beginner)",
        img: "/images/general/trials.jpeg",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Recap of/ Introduction Clinic",
              "Exercises to increase control and balance",
              "Brake/Throttle/ Clutch Control",
              "Intermediate-level trail riding drill",
              "Use of electronic aids on your bike",
              "Obstacles - Level 2",
              "Techniques to ride Inclines & Declines",
              "Hill Recovery",
              "How to lift a fallen bike",
              "Efficient Braking Drills",
              "Trail Ride",
              "Power-sliding (Optional if the coach feels you are ready)",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question:
              "Which bike I can Bring? OR Suitable Bikes for this Program?",
            listItem: false,
            info: "KTM ADV250/390, BMW 310GS, Himalayan, Xpulse, Yezdi Jawa, Triumph ADV Bike, Honda Africa Twin BMW GS Series, Harley Davidson Pan America",
          },
          {
            question: "Inclusions",
            listItem: true,
            info: [
              "Free range of the track.",
              "Any professional questions or help.",
            ],
          },
          {
            question: "Exclusions",
            listItem: true,
            info: ["Anything other than inclusions."],
          },
        ],

        batches: [
          {
            title: "Half Day",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
              {
                time: "02:00 PM - 05:00 PM (Reporting Time 01:00 PM)",
                active: true,
              },
            ],
          },
          {
            title: "Full Day",
            times: [
              {
                time: "09:00 AM - 05:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Private",
            prices: [
              {
                price: 12500,
                duration: "Full Day",
                minRiders: -1,
                maxRiders: 4,
              },
              {
                price: 10000,
                duration: "Half Day",
                minRiders: -1,
                maxRiders: 4,
              },
            ],
          },
          {
            title: "Group",
            prices: [
              {
                price: 7500,
                duration: "Half Day",
                maxRiders: -1,
                minRiders: 5,
              },
            ],
          },
        ],
        level: "Beginner",
        trainingModules: [
          "Body position - seated and standing riding postures for Off-road",
          "Cornering techniques - loose grounds",
          "Exercises to increase control and balance",
          "Techniques to ride Inclines & Declines",
          "Hill Recovery",
          "How to lift a fallen bike",
          "Efficient Braking Drills",
          "Trail Ride",
        ],
        description:
          "Geared towards beginners, this course covers essential skills such as body positioning, throttle control, braking, and obstacle negotiation. Get to know your bike by learning the riding techniques to take your machine Off-road. An easy self-paced training program allowing you to use the bikes safely on gravel roads & trails.",
      },
      2: {
        title: "Intermediate Off-Road Clinic: Level 1",
        img: "/images/general/trials.jpeg",
        infoItems: [
          {
            question: "What i will learn?",
            listItem: true,
            info: [
              "Recap of/ Introduction Clinic",
              "Exercises to increase control and balance",
              "Brake/Throttle/ Clutch Control",
              "Intermediate-level trail riding drill",
              "Use of electronic aids on your bike",
              "Obstacles - Level 2",
              "Techniques to ride Inclines & Declines",
              "Hill Recovery",
              "How to lift a fallen bike",
              "Efficient Braking Drills",
              "Trail Ride",
              "Power-sliding (Optional if the coach feels you are ready)",
            ],
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
          {
            question:
              "Which bike I can Bring? OR Suitable Bikes for this Program?",
            listItem: false,
            info: "KTM ADV250/390, BMW 310GS, Himalayan, Xpulse, Yezdi Jawa, Triumph ADV Bike, Honda Africa Twin BMW GS Series, Harley Davidson Pan America",
          },
          {
            question: "Inclusions",
            listItem: true,
            info: [
              "Free range of the track.",
              "Any professional questions or help.",
            ],
          },
          {
            question: "Exclusions",
            listItem: true,
            info: ["Anything other than inclusions."],
          },
        ],

        batches: [
          {
            title: "Full Day",
            times: [
              {
                time: "09:00 AM - 05:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Private",
            prices: [
              {
                price: 15000,
                duration: "Full Day",
                minRiders: -1,
                maxRiders: 4,
              },
            ],
          },
          {
            title: "Group",
            prices: [
              {
                price: 12500,
                duration: "Full Day",
                maxRiders: -1,
                minRiders: 5,
              },
            ],
          },
        ],
        level: "Intermediate",
        trainingModules: [
          "Recap of/ Introduction Clinic",
          "Exercises to increase control and balance",
          "Brake/Throttle/ Clutch Control",
          "Intermediate-level trail riding drill",
          "Use of electronic aids on your bike",
          "Obstacles - Level 2",
          "Techniques to ride Inclines & Declines",
          "Hill Recovery",
          "How to lift a fallen bike",
          "Efficient Braking Drills",
          "Trail Ride",
          "Power-sliding (Optional if the coach feels you are ready)",
        ],
        description:
          "These courses build upon foundational skills and introduce riders to more challenging terrain, inclines, declines, and technical maneuvers. A Day full of learning & riding to boost your confidence. An easy self-paced training program allowing you to use the bikes safely on gravel roads & trails.",
      },
      3: {
        title: "Open Practice Session",
        img: "/images/general/trials.jpeg",
        infoItems: [
          {
            question: "Who is eligible?",
            listItem: false,
            info: "Open to members, athletes, and riders who have completed at least an introductory course with us. Enjoy track time at your own pace, allowing you to focus on the areas you want to improve.",
          },
          {
            question: "Things to carry",
            listItem: false,
            info: "Riders carry their own safety gear which suits them best, Riding jackets & Pants, Helmets, Gloves, and Boots are compulsory, Knee, Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
          },
        ],
        batches: [
          {
            title: "Half Day",
            times: [
              {
                time: "09:00 AM - 12:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
              {
                time: "02:00 PM - 05:00 PM (Reporting Time 01:00 PM)",
                active: true,
              },
            ],
          },
          {
            title: "Full Day",
            times: [
              {
                time: "09:00 AM - 05:00 PM (Reporting Time 08:00 AM)",
                active: true,
              },
            ],
          },
        ],
        pricelist: [
          {
            title: "Single Session Pass",
            prices: [
              {
                price: 3500,
                duration: "Half/Full",
                minRiders: -1,
                maxRiders: -1,
              },
            ],
          },
        ],
        level: "Intermediate",
        description:
          "Our Open Practice Sessions are designed for riders who are members, athletes, or those who have completed at least an introductory course with us anywhere in India. These sessions provide track time for riders to practice at their own pace in a supportive and controlled environment. Whether you're looking to refine your skills, prepare for an upcoming event, or simply enjoy some time on the track, our Open Practice Sessions offer the perfect opportunity.",
      },
    },
    description:
      "MotoTrip specializes in Adventure Tours across India. these tours offer experiences of riding a bike through picturesque back roads & trails across India. The team focuses on featuring ride experiences to the lesser-known places wherein a rider would rarely think of visiting on their own. We have some exciting packages for on-road and off-road experiences, especially in the GOA region and selected locations in India.",
  },
};
