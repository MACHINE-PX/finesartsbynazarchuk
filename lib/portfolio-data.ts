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
  name: "Fine Arts by Nazarchuk",
  shortName: "Nazarchuk",
  eyebrow: "Artistic Portfolio",
  email: "hello@finesartsbynazarchuk.com",
  instagramHandle: "@finesartsbynazarchuk",
  instagramUrl: "https://instagram.com/finesartsbynazarchuk",
  disciplines: ["Theater", "Costume", "Sculpture", "Painting"],
  quote:
    "Each work is a dialogue between the visible and what has not yet found its form.",
};

export const disciplines: Discipline[] = [
  {
    id: "theater",
    index: "01",
    discipline: "Theater",
    tagline: "The stage as territory of being.",
    description:
      "Theatrical productions that push the limits between body, space, and language. Each staging builds its own universe where text, movement, and light converge into an irreproducible experience.",
    works: [
      {
        title: "Threshold",
        year: "2024",
        description:
          "Physical theater work on states of transit between identities. Three actors, one empty space.",
        image:
          "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=1067&fit=crop&auto=format",
        alt: "Silhouettes of three performers on a dramatic stage",
      },
      {
        title: "The Broken Mask",
        year: "2023",
        description:
          "Expanded monologue. Exploration of the fragmented self through overlapping masks and texts.",
        image:
          "https://images.unsplash.com/photo-1579539760267-b2e78d9d735e?w=800&h=1000&fit=crop&auto=format",
        alt: "Performer on stage under dramatic lighting",
      },
      {
        title: "Ash",
        year: "2022",
        description:
          "Stage direction for a collective work on memory and forgetting as political acts.",
        image:
          "https://images.unsplash.com/photo-1576724196706-3f23f51ea351?w=800&h=1000&fit=crop&auto=format",
        alt: "Theater audience watching a dramatic stage performance",
      },
    ],
  },
  {
    id: "costume",
    index: "02",
    discipline: "Costume",
    tagline: "The body as the first stage.",
    description:
      "Costume design for theater, opera, and artistic fashion projects. Each piece is conceived as a wearable sculpture - materials, volumes, and textures that amplify the performer's presence.",
    works: [
      {
        title: "Shadow of Silk",
        year: "2024",
        description:
          "Costume collection for contemporary opera. Black silk, artisanal lace, and hand embroidery.",
        image:
          "https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=800&h=1067&fit=crop&auto=format",
        alt: "Dramatic editorial fashion costume in black",
      },
      {
        title: "Metamorphosis",
        year: "2023",
        description:
          "Costumes for contemporary dance performance. Transformation as ritual process.",
        image:
          "https://images.unsplash.com/photo-1773592619356-6de35433bd09?w=800&h=1067&fit=crop&auto=format",
        alt: "Woman with dramatic artistic styling",
      },
    ],
    reverse: true,
  },
  {
    id: "sculpture",
    index: "03",
    discipline: "Sculpture",
    tagline: "Matter that thinks.",
    description:
      "Sculptural works that dialogue with architectural space and the perception of time. Stone, bronze, and mixed media generate forms that condense open meanings for the observer's interpretation.",
    works: [
      {
        title: "Figure in Silence",
        year: "2024",
        description:
          "Bust in black marble. Exploration of contained expression and stillness as a form of power.",
        image:
          "https://images.unsplash.com/photo-1729008712499-5e6b58420789?w=800&h=1067&fit=crop&auto=format",
        alt: "Black and white photo of a sculptural bust",
      },
      {
        title: "Interior",
        year: "2023",
        description:
          "Sculptural installation in museum hall. Figures in dialogue about the empty space between them.",
        image:
          "https://images.unsplash.com/photo-1576254232140-70c274d668c4?w=800&h=1000&fit=crop&auto=format",
        alt: "Museum interior with sculptural installation",
      },
      {
        title: "Black Relief",
        year: "2022",
        description:
          "Direct carving in basaltic stone. The emerging face as a metaphor for origin and belonging.",
        image:
          "https://images.unsplash.com/photo-1620745899139-041867b2a477?w=800&h=1000&fit=crop&auto=format",
        alt: "Carved face on black stone surface",
      },
    ],
  },
  {
    id: "painting",
    index: "04",
    discipline: "Painting",
    tagline: "Color that inhabits time.",
    description:
      "Pictorial series oscillating between abstraction and figure. Oil, acrylic, and mixed techniques on canvas and panel explore the tension between control and chance, between what is shown and what is concealed.",
    works: [
      {
        title: "Nature on Pause",
        year: "2024",
        description:
          "Oil on canvas. Series reinterpreting classical still life from a contemporary gaze.",
        image:
          "https://images.unsplash.com/photo-1775308493866-652f10ad6806?w=800&h=965&fit=crop&auto=format",
        alt: "Abstract still life painting",
      },
      {
        title: "Deep Blue",
        year: "2023",
        description:
          "Mixed media on panel. Abstract series investigating color as emotional state.",
        image:
          "https://images.unsplash.com/photo-1758192178254-f4e4dbc1d754?w=800&h=1000&fit=crop&auto=format",
        alt: "Abstract paintings with blue and black hues",
      },
    ],
    reverse: true,
  },
];
