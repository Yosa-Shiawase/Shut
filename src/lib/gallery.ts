export type Tag = "SELF" | "FLORA" | "FAUNA" | "STRUCTURE" | "SKY" | "STILL LIFE";

export interface Shot {
  slug: string;
  file: string; // original repo filename (kept as provenance)
  title: string;
  description: string;
  tag: Tag;
}

export const TAGS: Tag[] = ["SELF", "FLORA", "FAUNA", "STRUCTURE", "SKY", "STILL LIFE"];

export const SHOTS: Shot[] = [
  {
    slug: "looking-back",
    file: "1784849253964.jpg",
    title: "Looking Back",
    description:
      "One grey iris, full frame. Whatever it was facing — a screen, most likely — is still reflected in it. The night shift never blinks.",
    tag: "SELF",
  },
  {
    slug: "the-rope-swing-tree",
    file: "IMG-20260214-WA0001.jpeg",
    title: "The Rope Swing Tree",
    description:
      "An old banyan with a rope thrown over a low branch. Someone still comes back for this swing; the tree has outlasted everyone who ever used it.",
    tag: "FLORA",
  },
  {
    slug: "the-same-tree-twice",
    file: "IMG_20261127_141339_121.jpg",
    title: "The Same Tree, Twice",
    description:
      "Shot through glass, so the sky got a vote: white bark, red-tipped branches, and a reflection insisting on being in the portrait too.",
    tag: "FLORA",
  },
  {
    slug: "after-curfew-blooms",
    file: "IMG_20261127_141337_079.jpg",
    title: "After-Curfew Blooms",
    description:
      "Coral blossoms on a branch that refuses to sleep, one stray light bleeding in from the edge. The tree signed it in red; I just held the camera.",
    tag: "FLORA",
  },
  {
    slug: "venice-second-hand",
    file: "IMG-20260217-WA0006.jpg",
    title: "Venice, Second Hand",
    description:
      "A canal built inside a shopping mall — gondolas drifting between shopfronts, water going nowhere in particular.",
    tag: "STRUCTURE",
  },
  {
    slug: "balustrade-and-lanterns",
    file: "IMG-20260217-WA0007.jpg",
    title: "Balustrade & Lanterns",
    description:
      "Marble balusters carved like they miss somewhere else, red lanterns strung overhead for a festival that hasn't started yet.",
    tag: "STRUCTURE",
  },
  {
    slug: "staircase-for-nobody",
    file: "IMG-20260217-WA0008.jpg",
    title: "Staircase for Nobody",
    description:
      "A curved flight of stone winding up toward arched windows. All that grandeur, and not one person standing on it.",
    tag: "STRUCTURE",
  },
  {
    slug: "gilded-tree",
    file: "IMG-20260226-WA0002.jpg",
    title: "Gilded Tree",
    description:
      "A tree made of gold wire standing in the atrium — the only plant in here guaranteed never to die.",
    tag: "STRUCTURE",
  },
  {
    slug: "four-leaves-one-hand",
    file: "IMG-20260323-WA0000.jpeg",
    title: "Four Leaves, One Hand",
    description:
      "Found a four-leaf clover on an otherwise ordinary walk. Statistically improbable, personally significant.",
    tag: "FLORA",
  },
  {
    slug: "after-the-rain",
    file: "IMG-20260709-WA0000.jpeg",
    title: "After the Rain",
    description:
      "Snake plants in pots, wet concrete going dark, the whole courtyard rinsed and sitting quietly.",
    tag: "FLORA",
  },
  {
    slug: "the-streetlights-garden",
    file: "IMG_20261127_141632_899.jpg",
    title: "The Streetlight's Garden",
    description:
      "A lamp pouring itself into the neem leaves after everyone went inside. Best-lit garden in the colony, open only after dark.",
    tag: "FLORA",
  },
  {
    slug: "tenant-of-the-peeling-wall",
    file: "IMG_20251222_122808_119.jpg",
    title: "Tenant of the Peeling Wall",
    description:
      "A jungle babbler holds its ground on paint that gave up years ago.",
    tag: "FAUNA",
  },
  {
    slug: "robin-off-duty",
    file: "IMG_20251222_122830_987.jpg",
    title: "Robin, Off Duty",
    description:
      "An Indian robin paused just long enough for one frame, then went back to ignoring me.",
    tag: "FAUNA",
  },
  {
    slug: "the-two-of-us",
    file: "IMG_20251222_122843_674.jpg",
    title: "The Two of Us",
    description:
      "A pair on the same ledge, close enough to touch, staring in two different directions. Standard procedure.",
    tag: "FAUNA",
  },
  {
    slug: "ledge-patrol",
    file: "IMG_20251222_122925_715.jpg",
    title: "Ledge Patrol",
    description:
      "Profile of a robin on a broken wall edge, all sky behind it. Small bird, long watch.",
    tag: "FAUNA",
  },
  {
    slug: "januarys-first-draft",
    file: "IMG_20260101_150452_748.jpg",
    title: "January's First Draft",
    description:
      "Shot on the first afternoon of the year: pale buds, soft focus, nothing fully decided yet.",
    tag: "FLORA",
  },
  {
    slug: "the-chocolate-heist",
    file: "IMG_20260220_162518_838.jpg",
    title: "The Chocolate Heist",
    description:
      "A palm squirrel, caught mid-crime with someone's chocolate bar. No regrets were detected at the scene.",
    tag: "FAUNA",
  },
  {
    slug: "the-tribute-collector",
    file: "IMG_20261127_141533_543.jpg",
    title: "The Tribute Collector",
    description:
      "Golden hour found the neighbourhood cat stationed on its ledge, accepting admiration as rent — eyes open just long enough to confirm payment.",
    tag: "FAUNA",
  },
  {
    slug: "professional-peekaboo",
    file: "IMG_20261127_141605_723.jpg",
    title: "Peek-a-Boo, Professional Tier",
    description:
      "A ginger face surfacing from the oleander just to check who's taking notes. The water tank was in on it the whole time.",
    tag: "FAUNA",
  },
  {
    slug: "warden-of-the-boundary-wall",
    file: "IMG_20261127_141610_312.jpg",
    title: "Warden of the Boundary Wall",
    description:
      "Curled along the top of the wall with the neighbourhood on low volume behind — flag, wires, rooftops. Borders don't patrol themselves, but they do nap.",
    tag: "FAUNA",
  },
  {
    slug: "same-wall-different-grammar",
    file: "IMG_20261127_141616_430.jpg",
    title: "Same Wall, Different Grammar",
    description:
      "The diagonal cut turns the wall into a sentence that ends in sky. Same cat, same shift — the camera just leaned.",
    tag: "FAUNA",
  },
  {
    slug: "dahlia-handed-over",
    file: "IMG_20260319_170904_295.jpg",
    title: "Dahlia, Handed Over",
    description:
      "The loudest flower in the garden, held up to the camera before it could change its mind.",
    tag: "FLORA",
  },
  {
    slug: "pink-from-above",
    file: "IMG_20260319_170911_268.jpg",
    title: "Pink, From Above",
    description:
      "Same dahlia, different angle — the flower still looks better than the photographer's shoe.",
    tag: "FLORA",
  },
  {
    slug: "still-life-i-denim",
    file: "IMG_20260408_152030_521.jpg",
    title: "Still Life I — Denim",
    description:
      "A fly on dark denim with one loose thread for company. It landed, and then it simply stayed.",
    tag: "STILL LIFE",
  },
  {
    slug: "still-life-ii-antennae",
    file: "IMG_20260408_152039_073.jpg",
    title: "Still Life II — Antennae",
    description:
      "Closer in: compound eyes and folded wings, sharp enough to study properly.",
    tag: "STILL LIFE",
  },
  {
    slug: "still-life-iii-grayscale",
    file: "IMG_20260408_152039_848.jpg",
    title: "Still Life III — Grayscale",
    description:
      "Third angle of the same stillness. At this point the denim reads as a night sky.",
    tag: "STILL LIFE",
  },
  {
    slug: "still-life-iv-wings-open",
    file: "IMG_20260408_152040_962.jpg",
    title: "Still Life IV — Wings Open",
    description:
      "Wings spread like it planned to leave any second now. It didn't.",
    tag: "STILL LIFE",
  },
  {
    slug: "before-the-city-wakes",
    file: "IMG_20260621_052519_821.jpg",
    title: "Before the City Wakes",
    description:
      "Gold clouds over a street with nobody on it, an unfinished flyover on the right. Taken early enough that the light still belonged to no one.",
    tag: "SKY",
  },
  {
    slug: "a-brief-arc",
    file: "IMG_20260621_053743_355.jpg",
    title: "A Brief Arc",
    description:
      "A rainbow showed up over the rooftops and wires one morning. It stayed for less time than it took to find the camera.",
    tag: "SKY",
  },
  {
    slug: "the-long-exhale",
    file: "IMG_20261127_141528_335.jpg",
    title: "The Long Exhale",
    description:
      "Streaked clouds over a town holding still at the bottom of the frame. The sky took a deep breath and let it out slowly.",
    tag: "SKY",
  },
  {
    slug: "nebula-on-layaway",
    file: "IMG_20261127_141451_923.jpg",
    title: "A Nebula on Layaway",
    description:
      "One cloud doing its best deep-space impression over the rooftops. Give it a few million years and better equipment — it'll get there.",
    tag: "SKY",
  },
  {
    slug: "both-eyes-open",
    file: "IMG_20260723_115257_598~2.jpg",
    title: "Both Eyes Open",
    description:
      "The full stare, unretouched. The keeper of this sketchbook, mid-shift.",
    tag: "SELF",
  },
  {
    slug: "amber-wing",
    file: "IMG_20260831_181928_198.jpg",
    title: "Amber Wing",
    description:
      "A dragonfly resting on a twig, wings thin as tracing paper — the original blueprint for flight.",
    tag: "FAUNA",
  },
  {
    slug: "rope-and-rebar",
    file: "IMG_20260917_075312_267.jpg",
    title: "Rope & Rebar",
    description:
      "From an unfinished floor: a rope hoist, teeth of rebar, and the city rising green in the distance.",
    tag: "STRUCTURE",
  },
  {
    slug: "ground-floor-sky-view",
    file: "IMG_20260917_075314_295.jpg",
    title: "Ground Floor, Sky View",
    description:
      "Bricks, dust paths, cranes on the skyline — the neighbourhood drafting its next version in concrete.",
    tag: "STRUCTURE",
  },
  {
    slug: "inside-the-skeleton",
    file: "IMG_20260917_075318_032.jpg",
    title: "Inside the Skeleton",
    description:
      "Pillars, rubble, and light leaking through the window holes of a building that isn't done thinking yet.",
    tag: "STRUCTURE",
  },
  {
    slug: "downtown-briefly-blue",
    file: "IMG_20261127_141732_136.jpg",
    title: "Downtown, Briefly Blue",
    description:
      "The mall block at blue hour: billboards waiting for their audience, a water tower standing in for a castle. For a minute the whole skyline agreed on a colour.",
    tag: "STRUCTURE",
  },
  {
    slug: "night-shift-at-the-plaza",
    file: "IMG_20261127_141737_637.jpg",
    title: "Night Shift at the Plaza",
    description:
      "The only storefront still talking after dark, its glow spilling across the pavers. Everyone walking past is headed somewhere warmer — or exactly here.",
    tag: "STRUCTURE",
  },
];

export interface Circle {
  label: string;
  handle: string;
  href: string;
}

export const CIRCLES: Circle[] = [
  { label: "github", handle: "@Yosa-Shiawase", href: "https://github.com/Yosa-Shiawase" },
  { label: "instagram", handle: "@yosashiawase", href: "https://instagram.com/yosashiawase" },
  { label: "linkedin", handle: "in/yosa-shiawase", href: "https://linkedin.com/in/yosa-shiawase" },
  { label: "telegram", handle: "t.me/Yosashiawase", href: "https://t.me/Yosashiawase" },
];

export const QUOTE = {
  line1: "Just another line committed in the dead of night,",
  line2: "erasing my own shadow so the screen stays bright.",
  author: "— Yosa Shiawase",
};
