export interface Work {
  title: string;
  year: string;
  description: string;
  image: string;
  alt: string;
}

export interface Discipline {
  id: string;
  index: string;
  discipline: string;
  tagline: string;
  description: string;
  works: Work[];
  reverse?: boolean;
}

export const siteConfig = {
  name: "Oleksandr Nazarchuk",
  shortName: "Fine Arts by Nazarchuk",
  eyebrow: "Portfolio",
  email: "Fineartsbynazarchuk@gmail.com",
  phone: "+971 544 429 950",
  instagramHandle: "@finesartsbynazarchuk",
  instagramUrl: "https://instagram.com/finesartsbynazarchuk",
  disciplines: ["Murals", "Painting", "Events", "Plein Air"],
  quote:
    "My work centers on capturing fleeting moments through light, color, and atmosphere.",
};

export const aboutText =
  "I am a fine artist from Ukraine, where I received a degree in fine arts with a specialization as a muralist educator. My work centers on capturing fleeting moments through light, color, and atmosphere. As an impressionist painter, I focus on immediate visual impressions rather than detailed representation, building my paintings with free, bold, and spontaneous brushstrokes that allow colors to merge optically and convey a sense of movement and luminosity. Often working en plein air, I respond directly to changing natural conditions, delicately recording the interaction of sunlight, shadow, water, and landscape. My work evokes quiet emotion and serenity, celebrating the beauty of everyday scenes and inviting the viewer to experience the poetry of a moment suspended in time.";

export const disciplines: Discipline[] = [
  {
    id: "about",
    index: "01",
    discipline: "Who Am I?",
    tagline: "Light, color, atmosphere, and the poetry of a suspended moment.",
    description: aboutText,
    works: [
      {
        title: "Oleksandr Nazarchuk",
        year: "Ukraine / UAE",
        description:
          "Fine artist, impressionist painter, muralist, and educator working across canvas, murals, live painting, and plein air practice.",
        image: "/images/who%20i%20am.png",
        alt: "Oleksandr Nazarchuk fine artist portrait",
      },
    ],
  },
  {
    id: "murals",
    index: "02",
    discipline: "Murals",
    tagline: "Large-scale worlds built through color, rhythm, and imagination.",
    description:
      "Mural works spanning fantasy environments, decorative Art Nouveau language, and immersive painted surfaces shaped by narrative and atmosphere.",
    works: [
      {
        title: "Fantasy World",
        year: "Murals",
        description:
          "A fantasy mural series that opens architectural space into a painterly world of movement, color, and storytelling.",
        image: "/images/mural1.png",
        alt: "Fantasy world mural by Oleksandr Nazarchuk",
      },
      {
        title: "Fantasy World Details",
        year: "Murals",
        description:
          "Expanded fantasy mural details with layered color, illustrative forms, and immersive scenic composition.",
        image: "/images/mural2.png",
        alt: "Detailed fantasy mural artwork",
      },
      {
        title: "Art Nouveau",
        year: "Murals",
        description:
          "Decorative mural work inspired by Art Nouveau line, ornament, and theatrical elegance.",
        image: "/images/MURALS-ART%20NUVOU1.png",
        alt: "Art Nouveau mural by Oleksandr Nazarchuk",
      },
    ],
  },
  {
    id: "contest",
    index: "03",
    discipline: "Painting Contest",
    tagline: "Historical memory translated through gesture and stillness.",
    description:
      "Aswar Art Center Sharjah painting contest. The work Merchants Weighing Pearl received 3rd place and reflects on pearl diving as a foundation of the cultural memory of the Arabian Gulf.",
    works: [
      {
        title: "Merchants Weighing Pearl",
        year: "2026",
        description:
          "90 x 90 cm. Inspired by an early twentieth-century historical photograph, the work explores knowledge, trust, manual labor, and Sharjah's profound connection to the sea and time. Awarded 3rd place.",
        image: "/images/paintingcontest1.png",
        alt: "Merchants Weighing Pearl painting contest artwork",
      },
      {
        title: "Aswar Art Center Sharjah",
        year: "3rd Place",
        description:
          "Contest documentation for Merchants Weighing Pearl, a painting centered on coastal memory and intergenerational transmission of knowledge.",
        image: "/images/paintingcontest2.png",
        alt: "Painting contest documentation at Aswar Art Center Sharjah",
      },
      {
        title: "Historical Reflection",
        year: "90 x 90 cm",
        description:
          "The quiet interaction between the two figures symbolizes respect for the natural rhythm that shaped Sharjah's coastal communities before modern times.",
        image: "/images/paintingcontest3.png",
        alt: "Detail of Merchants Weighing Pearl artwork",
      },
    ],
    reverse: true,
  },
  {
    id: "helmet",
    index: "04",
    discipline: "Helmet Competition",
    tagline: "Painting beyond the canvas.",
    description:
      "Second place helmet competition work, transforming a functional object into a painted surface with character, motion, and visual presence.",
    works: [
      {
        title: "Second Place",
        year: "Helmet Competition",
        description:
          "Awarded second place for a custom-painted helmet project that carries the artist's painterly language into object design.",
        image: "/images/SECONDPLACEHELMETCOMPETITION1.png",
        alt: "Second place helmet competition artwork",
      },
      {
        title: "Painted Object",
        year: "Competition",
        description:
          "A detailed view of the painted helmet surface and its bold, expressive visual treatment.",
        image: "/images/SECONDPLACEHELMETCOMPETITION2.png",
        alt: "Painted helmet detail",
      },
    ],
  },
  {
    id: "events",
    index: "05",
    discipline: "Events",
    tagline: "Live painting, workshops, exhibitions, and stage design.",
    description:
      "Public-facing art practice including the AOM Show 2025 exhibition and live painting masterclass, Bikers Cafe live painting workshop, and World Stage Design 2025 with canvases for the main characters of La Perle.",
    works: [
      {
        title: "AOM Show",
        year: "2025",
        description:
          "Exhibition and live painting masterclass, sharing process, brushwork, and atmosphere with an audience in real time.",
        image: "/images/eventsAOMShow1.png",
        alt: "AOM Show 2025 exhibition and live painting masterclass",
      },
      {
        title: "Bikers Cafe",
        year: "Workshop",
        description:
          "Live painting workshop connecting fine art process with a public, energetic event setting.",
        image: "/images/eventsBikersCafe1.png",
        alt: "Bikers Cafe live painting workshop",
      },
      {
        title: "World Stage Design",
        year: "2025",
        description:
          "Canvases created for the main characters of La Perle as part of World Stage Design 2025.",
        image: "/images/eventsWorldStageDesign.png",
        alt: "World Stage Design 2025 canvas work for La Perle",
      },
    ],
    reverse: true,
  },
  {
    id: "plein-air",
    index: "06",
    discipline: "Plein Air",
    tagline: "Painting directly with changing light.",
    description:
      "Plein air works created in direct response to natural conditions, recording sunlight, shadow, water, and landscape through spontaneous brushwork and luminous color.",
    works: [
      {
        title: "Landscape Study",
        year: "Plein Air",
        description:
          "A direct outdoor study focused on natural light, atmosphere, and the immediacy of the painted moment.",
        image: "/images/PLEINAIR1.png",
        alt: "Plein air landscape painting by Oleksandr Nazarchuk",
      },
      {
        title: "Water and Light",
        year: "Plein Air",
        description:
          "An impressionist plein air scene capturing the interaction of water, reflection, and shifting daylight.",
        image: "/images/PLEINAIR2.png",
        alt: "Plein air painting of water and light",
      },
      {
        title: "Open Air Color",
        year: "Plein Air",
        description:
          "Outdoor painting built with free, bold brushstrokes and optical color relationships.",
        image: "/images/PLEINAIR3.png",
        alt: "Colorful plein air painting",
      },
    ],
  },
];
