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
  whatsappUrl: "https://wa.me/971544429950",
  instagramHandle: "@nazarchuk_art",
  instagramUrl: "https://www.instagram.com/nazarchuk_art/",
  disciplines: ["Murals", "Painting", "Events", "Plein Air"],
  quote:
    "My work centers on capturing fleeting moments through light, color, and atmosphere.",
};

export const aboutText = `With a solid background as a certified muralist educator in Ukraine, the artist has seven years of specialized experience in the creation of theatrical props, stage design, and the development of visual elements for the stage. His work stems from a deep connection with the fine arts and from the belief that each scenic piece should not be seen merely as a functional object, but as a work capable of conveying emotion, character, and history.

Through traditional techniques of sculpture, molding, and mosaic, combined with advanced processes in surface decoration, decorative finishes, historical aging, and patinas, the artist transforms materials into pieces with their own identity. His approach seeks to create visual elements that not only accompany a stage production, but also strengthen its atmosphere, narrative, and the audience's experience.

For him, each element of props and scenography represents an extension of his artistic vision: a union of technique, sensitivity, and visual expression. His creations are designed to withstand the technical demands of the stage while maintaining optical depth, luminosity, and an aesthetic presence capable of turning every detail into an essential part of a masterpiece.`;

export const aboutSubtitle =
  "Scenic Artist, Prop Craftsman & Fine Arts Educator.";

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
        image: "/images/who-i-am-portrait-web.jpg",
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

function imagePath(...parts: string[]) {
  return `/images/${parts.map(encodeURIComponent).join("/")}`;
}

function galleryWorks(
  files: string[],
  {
    folder,
    title,
    year,
    description,
  }: {
    folder: string[];
    title: string;
    year: string;
    description: string;
  },
): Work[] {
  return files.map((file, index) => ({
    title: `${title} ${String(index + 1).padStart(2, "0")}`,
    year,
    description,
    image: imagePath(...folder, file),
    alt: `${title} ${index + 1} by Oleksandr Nazarchuk`,
  }));
}

const paintingFiles = [
  "FullSizeRender 2.jpg",
  "FullSizeRender.JPG",
  "IMG_0426.jpg",
  "IMG_0622.jpg",
  "IMG_1101.JPG",
  "IMG_1345.JPG",
  "IMG_1397.jpg",
  "IMG_1406.jpg",
  "IMG_2018.JPG",
  "IMG_4195.jpg",
  "IMG_4196.jpg",
  "IMG_4197.jpg",
  "IMG_4198.jpg",
  "IMG_4199.jpg",
  "IMG_4206.jpg",
  "IMG_4210.jpg",
  "IMG_4211.jpg",
  "Untitled_Artwork 6.jpg",
];

const pleinAirFiles = [
  "img-4197-web.jpg",
  "img-4198-web.jpg",
  "img-4200-web.jpg",
  "img-4206-web.jpg",
  "img-4400-web.jpg",
  "img-4401-web.jpg",
  "img-4402-web.jpg",
  "img-4403-web.jpg",
  "img-4404-web.jpg",
  "img-4405-web.jpg",
  "img-4406-web.jpg",
  "img-4407-web.jpg",
  "img-4408-web.jpg",
  "img-4409-web.jpg",
  "img-4410-web.jpg",
  "img-4411-web.jpg",
  "img-4412-web.jpg",
  "img-4413-web.jpg",
  "img-4414-web.jpg",
  "img-4415-web.jpg",
  "img-4416-web.jpg",
  "img-4417-web.jpg",
  "img-4418-web.jpg",
  "img-4419-web.jpg",
  "img-4420-web.jpg",
  "img-4421-web.jpg",
  "img-4423-web.jpg",
  "img-4424-web.jpg",
  "img-4425-web.jpg",
  "img-4426-web.jpg",
];

const scenicFiles = [
  "IMG_3672.JPG",
  "IMG_3675.JPG",
  "IMG_3676.JPG",
  "IMG_3684.JPG",
  "IMG_3685.JPG",
  "IMG_3687.JPG",
  "IMG_3689.JPG",
  "IMG_3690.JPG",
  "IMG_3691.JPG",
  "IMG_3692.JPG",
  "IMG_3693.JPG",
  "IMG_3695.JPG",
  "IMG_3696.JPG",
  "IMG_3697.JPG",
  "IMG_3698.JPG",
  "IMG_3699.JPG",
  "IMG_3700.JPG",
  "IMG_3701.JPG",
  "IMG_3702.JPG",
  "IMG_3703.JPG",
  "IMG_3704.JPG",
  "IMG_3705.JPG",
  "IMG_3706.JPG",
  "IMG_3707.JPG",
];

export const paintingsGallery: Discipline = {
  id: "paintings-gallery",
  index: "01",
  discipline: "Selected Paintings",
  tagline: "Color, observation, memory, and atmosphere on canvas.",
  description:
    "A broader selection of studio paintings and canvas works from the Paintings archive.",
  works: galleryWorks(paintingFiles, {
    folder: ["fineart", "Paintings"],
    title: "Painting",
    year: "Fine Art",
    description:
      "Selected painting from Oleksandr Nazarchuk's studio practice.",
  }),
};

export const muralsGallery: Discipline = {
  id: "murals-gallery",
  index: "01",
  discipline: "Murals",
  tagline: "Painted environments built at architectural scale.",
  description:
    "Murals, decorative walls, and immersive painted surfaces from the mural archive.",
  works: [
    ...galleryWorks(
      [
        "mural1.png",
        "mural2.png",
        "mural3.png",
        "mural4.png",
        "MURALS-ART NUVOU1.png",
        "MURALS-ART NUVOU2.png",
      ],
      {
        folder: [],
        title: "Mural",
        year: "Fine Art",
        description:
          "Large-scale mural work shaped through color, detail, and narrative atmosphere.",
      },
    ),
    ...galleryWorks(["IMG_3278.jpg"], {
      folder: ["fineart", "Murals"],
      title: "Mural Archive",
      year: "Fine Art",
      description:
        "Documentation from Oleksandr Nazarchuk's mural practice.",
    }),
  ],
};

export const pleinAirGallery: Discipline = {
  id: "plein-air-gallery",
  index: "01",
  discipline: "Plein Air",
  tagline: "Direct painting in changing natural light.",
  description:
    "Outdoor studies and finished works painted in response to landscape, water, architecture, and atmosphere.",
  works: galleryWorks(pleinAirFiles, {
    folder: ["PLEINAIR"],
    title: "Plein Air",
    year: "Outdoor Study",
    description:
      "A plein air work capturing immediate light, color, and atmosphere.",
  }),
};

const eventGroups: Discipline[] = [
  {
    id: "spirit-of-sharjah",
    index: "01",
    discipline: "The Spirit of Sharjah",
    tagline: "Competition work rooted in place and cultural memory.",
    description:
      "Documentation from The Spirit of Sharjah art competition.",
    works: galleryWorks(["IMG_2436.jpg", "IMG_2537 2.jpg"], {
      folder: ["fineart", "EVENTS", "Art Competition  - The Spirit of Sharjah"],
      title: "Spirit of Sharjah",
      year: "Competition",
      description: "Art competition documentation from Sharjah.",
    }),
  },
  {
    id: "art-of-motorcycle",
    index: "02",
    discipline: "Art of Motorcycle",
    tagline: "Fine art meeting motorcycle culture and live events.",
    description:
      "Selected photographs from the Art of Motorcycle event and exhibition.",
    works: galleryWorks(
      [
        "253465D3-AA21-4EC0-880B-CD2125732B2C 2.JPG",
        "IMG_9198.jpg",
        "IMG_9280.jpg",
      ],
      {
        folder: ["fineart", "EVENTS", "ART OF MOTOCYCLE (AOM) - EVENT"],
        title: "Art of Motorcycle",
        year: "Event",
        description: "Exhibition and live-event documentation.",
      },
    ),
    reverse: true,
  },
  {
    id: "exhibitions",
    index: "03",
    discipline: "Exhibitions",
    tagline: "Paintings encountered in public space.",
    description:
      "Selected exhibition views, installations, and moments with the audience.",
    works: galleryWorks(
      ["IMG_2912.JPG", "IMG_2913.JPG", "IMG_4358.JPG", "IMG_4378.JPG"],
      {
        folder: ["fineart", "EVENTS", "Exhibitions"],
        title: "Exhibition",
        year: "Fine Art",
        description: "Exhibition documentation and installed artwork.",
      },
    ),
  },
  {
    id: "helmet-competition-gallery",
    index: "04",
    discipline: "Helmet Competition",
    tagline: "Painting carried onto a sculptural, wearable surface.",
    description:
      "Competition documentation for Oleksandr's custom-painted helmet.",
    works: galleryWorks(
      ["ea3cf8d3-7d31-4bb9-9337-dccb17b81b31 3.JPG"],
      {
        folder: ["fineart", "EVENTS", "Helmet Copetition"],
        title: "Helmet Competition",
        year: "Second Place",
        description: "Award-winning painted helmet competition work.",
      },
    ),
    reverse: true,
  },
  {
    id: "world-stage-design-gallery",
    index: "05",
    discipline: "World Stage Design",
    tagline: "Painterly storytelling created for the stage.",
    description:
      "Canvases and event documentation connected to World Stage Design and La Perle.",
    works: galleryWorks(
      [
        "01e37ca4-1c05-4293-83b7-487ec7520e66.JPG",
        "06D9AD8B-2C1E-49F5-979B-DB0C871CE255.JPG",
        "44D81F9A-5C3A-426B-9A09-282A64D488C1.JPG",
        "91058fbf-2ede-4bff-ae6a-ec7620d59897.JPG",
      ],
      {
        folder: ["fineart", "EVENTS", "World Stage Design"],
        title: "World Stage Design",
        year: "Stage Art",
        description: "Stage-design artwork and event documentation.",
      },
    ),
  },
];

export const eventsGallery = eventGroups;

export const scenicGallery: Discipline = {
  id: "scenic-gallery",
  index: "01",
  discipline: "Scenic Art & Faux Finishes",
  tagline: "Surfaces transformed through texture, color, aging, and illusion.",
  description:
    "A process-rich archive of scenic painting and faux-finishing work for theatrical and spatial environments.",
  works: galleryWorks(scenicFiles, {
    folder: [
      "Props & Scenic -20260619T114546Z-3-001",
      "Props & Scenic",
      "Scenic Art & Faux finishes",
    ],
    title: "Scenic Finish",
    year: "Props & Scenic",
    description:
      "Scenic painting and faux-finish detail from the production archive.",
  }),
};

export const sculpturesGallery: Discipline = {
  id: "sculptures-gallery",
  index: "01",
  discipline: "Sculptures & Object Work",
  tagline: "Dimensional forms shaped, surfaced, and painted by hand.",
  description:
    "Selected sculptural and painted-object work. Additional archive material is currently stored as HEIC and video.",
  works: galleryWorks(
    [
      "img-3546-web.jpg",
      "SECONDPLACEHELMETCOMPETITION1.png",
      "SECONDPLACEHELMETCOMPETITION2.png",
      "SECONDPLACEHELMETCOMPETITION3.png",
    ],
    {
      folder: [],
      title: "Sculptural Work",
      year: "Props & Scenic",
      description:
        "Hand-built and painted dimensional work from the props archive.",
    },
  ),
};
