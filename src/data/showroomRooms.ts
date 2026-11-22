export type RoomType =
  | "living-room"
  | "dining-room"
  | "home-office"
  | "bedroom"
  | "kitchen"
  | "bathroom";

export type FallbackFurnitureType =
  | "desk"
  | "office-chair"
  | "shelves"
  | "monitor"
  | "sofa"
  | "coffee-table"
  | "tv-unit"
  | "floor-lamp"
  | "rug"
  | "dining-table"
  | "dining-chair"
  | "pendant-light"
  | "bed"
  | "nightstand"
  | "wardrobe"
  | "desk-lamp"
  | "kitchen-counter"
  | "kitchen-island"
  | "bar-stool"
  | "fridge"
  | "vanity-sink"
  | "mirror"
  | "bathtub"
  | "plant";

export interface ShowroomModelConfig {
  id: string;
  name: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  fallbackType: FallbackFurnitureType;
}

export interface ShowroomRoomConfig {
  id: string;
  catalogNo: string;
  roomType: RoomType;
  roomLabel: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  displayUrl: string;
  githubUrl: string;
  visualTheme: "mapatunai" | "swampwatch" | "raite" | "evaluate" | "dormchef";
  accentColor: string;
  wallColor: string;
  floorColor: string;
  lampTint: string;
  worldPosition: [number, number, number];
  worldRotationY: number;
  hotspotOffset: [number, number, number];
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  models: ShowroomModelConfig[];
}

export const ROOM_SPACING = 6.4;

/**
 * Elevated establishing view framing the horizontal showroom gallery row.
 */
export const OVERVIEW_CAMERA = {
  position: [6.4, 5.4, 13.8] as [number, number, number],
  target: [9.6, 1.15, 0] as [number, number, number],
};

/**
 * Places rooms side-by-side along a continuous horizontal gallery corridor (+X axis),
 * all facing forward (+Z) with matching eased camera stops slightly offset so the
 * right-side project panel never obscures the room's furniture.
 */
function placeHorizontalRoom(index: number) {
  const x = Number((index * ROOM_SPACING).toFixed(2));
  return {
    worldPosition: [x, 0, 0] as [number, number, number],
    worldRotationY: 0,
    cameraPosition: [Number((x + 0.55).toFixed(2)), 2.15, 5.2] as [number, number, number],
    cameraTarget: [Number((x + 0.55).toFixed(2)), 1.15, -0.35] as [number, number, number],
  };
}

/**
 * Single source of truth for all 6 horizontal IKEA-style showroom rooms.
 */
export const SHOWROOM_ROOMS: ShowroomRoomConfig[] = [
  {
    id: "dormchef",
    catalogNo: "ROOM 01",
    roomType: "living-room",
    roomLabel: "Living Room",
    title: "DormChef",
    tagline: "Budget-Friendly Student Meal & Recipe Companion",
    description:
      "A playful, practical recipe discovery web app crafted for college dormers — matching affordable pantry ingredients and limited dorm appliances to quick everyday meals.",
    techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Figma"],
    liveUrl: "https://dormchef-three.vercel.app",
    displayUrl: "dormchef-three.vercel.app",
    githubUrl: "https://github.com/graeeez/dormchef",
    visualTheme: "dormchef",
    accentColor: "#DF5000",
    wallColor: "#FAF0E6",
    floorColor: "#B98B63",
    lampTint: "#FFD6A5",
    hotspotOffset: [0, 2.35, 0],
    ...placeHorizontalRoom(0),
    models: [
      { id: "living-rug", name: "Woven Nordic Rug", position: [0, 0.02, 0.15], fallbackType: "rug" },
      { id: "living-sofa", name: "3-Seater Linen Sofa", position: [0, 0, -1.15], fallbackType: "sofa" },
      { id: "living-coffee-table", name: "Birch Coffee Table", position: [0, 0, 0.18], fallbackType: "coffee-table" },
      { id: "living-tv-unit", name: "Low Media TV Console", position: [-1.85, 0, 0.35], rotation: [0, Math.PI / 2, 0], fallbackType: "tv-unit" },
      { id: "living-floor-lamp", name: "Arched Floor Lamp", position: [1.75, 0, -1.2], fallbackType: "floor-lamp" },
      { id: "living-plant", name: "Corner Indoor Plant", position: [-1.85, 0, -1.3], fallbackType: "plant" },
    ],
  },
  {
    id: "evaluate",
    catalogNo: "ROOM 02",
    roomType: "dining-room",
    roomLabel: "Dining Room",
    title: "evalUAte",
    tagline: "University of the Assumption Evaluation Portal",
    description:
      "Empowering University of the Assumption students and faculty with secure, dynamic, and anonymous academic evaluations — featuring official Google sign-in and dedicated admin/dev dashboards.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google OAuth"],
    liveUrl: "https://eval-ua-te.vercel.app/",
    displayUrl: "eval-ua-te.vercel.app",
    githubUrl: "https://github.com/EsBazza/evalUAtion",
    visualTheme: "evaluate",
    accentColor: "#CE0058",
    wallColor: "#FBF0F4",
    floorColor: "#B3845C",
    lampTint: "#FFB5D0",
    hotspotOffset: [0, 2.35, 0],
    ...placeHorizontalRoom(1),
    models: [
      { id: "dining-table", name: "Solid Oak Dining Table", position: [0, 0, -0.25], fallbackType: "dining-table" },
      { id: "dining-chair-1", name: "Wooden Chair (N)", position: [-0.6, 0, -1.05], rotation: [0, 0, 0], fallbackType: "dining-chair" },
      { id: "dining-chair-2", name: "Wooden Chair (NE)", position: [0.6, 0, -1.05], rotation: [0, 0, 0], fallbackType: "dining-chair" },
      { id: "dining-chair-3", name: "Wooden Chair (S)", position: [-0.6, 0, 0.55], rotation: [0, Math.PI, 0], fallbackType: "dining-chair" },
      { id: "dining-chair-4", name: "Wooden Chair (SE)", position: [0.6, 0, 0.55], rotation: [0, Math.PI, 0], fallbackType: "dining-chair" },
      { id: "dining-pendant", name: "Warm Dome Pendant Light", position: [0, 2.65, -0.25], fallbackType: "pendant-light" },
      { id: "dining-plant", name: "Corner Olive Tree", position: [1.85, 0, -1.35], fallbackType: "plant" },
    ],
  },
  {
    id: "raite-2026",
    catalogNo: "ROOM 03",
    roomType: "home-office",
    roomLabel: "Home Office",
    title: "RAITE 2026 • Registration",
    tagline: "Event Registration Portal & Brand Media",
    description:
      "A streamlined digital registration portal engineered to simplify delegate sign-ups, participant tracking, and event onboarding — paired with RAITE 2025 & 2026 creative media.",
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Figma"],
    liveUrl: "https://registration-olive-six.vercel.app",
    displayUrl: "registration-olive-six.vercel.app",
    githubUrl: "https://github.com/AaronPublic/Raite_Website",
    visualTheme: "raite",
    accentColor: "#F79B02",
    wallColor: "#FCF6EA",
    floorColor: "#C19A72",
    lampTint: "#FFE29A",
    hotspotOffset: [0, 2.35, 0],
    ...placeHorizontalRoom(2),
    models: [
      { id: "office-desk", name: "Scandinavian Oak Desk", position: [0, 0, -1.15], fallbackType: "desk" },
      { id: "office-chair", name: "Ergonomic Task Chair", position: [0, 0, -0.2], rotation: [0, Math.PI, 0], fallbackType: "office-chair" },
      { id: "office-monitor", name: "Ultrawide Studio Monitor", position: [0, 0.78, -1.25], fallbackType: "monitor" },
      { id: "office-shelves", name: "Modular Shelving Unit", position: [-1.85, 0, -1.2], fallbackType: "shelves" },
      { id: "office-lamp", name: "Warm Desk Lamp", position: [0.85, 0.78, -1.15], fallbackType: "desk-lamp" },
      { id: "office-plant", name: "Potted Fiddle Leaf Plant", position: [1.85, 0, -1.35], fallbackType: "plant" },
    ],
  },
  {
    id: "nextjs-blog",
    catalogNo: "ROOM 04",
    roomType: "bedroom",
    roomLabel: "Bedroom",
    title: "Next.js Editorial Blog",
    tagline: "Modern Publishing & Reading Web Application",
    description:
      "A sleek Next.js editorial blog and reading platform engineered for fast page transitions, clean typographic rhythm, and effortless content discovery.",
    techStack: ["Next.js", "React", "JavaScript", "CSS3"],
    liveUrl: "https://next-js-blog-eta-wheat.vercel.app",
    displayUrl: "next-js-blog-eta-wheat.vercel.app",
    githubUrl: "https://github.com/graeeez/next-js.blog",
    visualTheme: "mapatunai",
    accentColor: "#BA0917",
    wallColor: "#FAF1F4",
    floorColor: "#BA936D",
    lampTint: "#FFBFD6",
    hotspotOffset: [0, 2.35, 0],
    ...placeHorizontalRoom(3),
    models: [
      { id: "bedroom-rug", name: "Soft Bedroom Rug", position: [0, 0.02, 0.1], fallbackType: "rug" },
      { id: "bedroom-bed", name: "Minimalist Platform Bed", position: [-0.15, 0, -0.65], fallbackType: "bed" },
      { id: "bedroom-nightstand-l", name: "Oak Nightstand Left", position: [-1.45, 0, -1.35], fallbackType: "nightstand" },
      { id: "bedroom-nightstand-r", name: "Oak Nightstand Right", position: [1.15, 0, -1.35], fallbackType: "nightstand" },
      { id: "bedroom-lamp", name: "Warm Bedside Lamp", position: [-1.45, 0.55, -1.35], fallbackType: "desk-lamp" },
      { id: "bedroom-wardrobe", name: "PAX-Style Wardrobe", position: [1.9, 0, -0.2], rotation: [0, -Math.PI / 2, 0], fallbackType: "wardrobe" },
    ],
  },
  {
    id: "personalities",
    catalogNo: "ROOM 05",
    roomType: "kitchen",
    roomLabel: "Kitchen",
    title: "Personalities Showcase",
    tagline: "Interactive Profile & Card Discovery Web App",
    description:
      "An interactive web showcase presenting curated personality profiles with smooth card transitions, responsive grids, and engaging visual storytelling.",
    techStack: ["React", "JavaScript", "CSS3", "Interactive UI"],
    liveUrl: "https://personalities-indol.vercel.app",
    displayUrl: "personalities-indol.vercel.app",
    githubUrl: "https://github.com/stephanyanndelapena/swampwatch-web",
    visualTheme: "swampwatch",
    accentColor: "#455A23",
    wallColor: "#F5F8F3",
    floorColor: "#CBB89D",
    lampTint: "#FFE4B0",
    hotspotOffset: [0, 2.35, 0],
    ...placeHorizontalRoom(4),
    models: [
      { id: "kitchen-counter", name: "Modular Kitchen Counter", position: [-0.45, 0, -1.4], fallbackType: "kitchen-counter" },
      { id: "kitchen-fridge", name: "Matte Stainless Fridge", position: [1.65, 0, -1.35], fallbackType: "fridge" },
      { id: "kitchen-island", name: "Butcher-Block Island", position: [-0.2, 0, 0.25], fallbackType: "kitchen-island" },
      { id: "kitchen-stool-1", name: "Kitchen Bar Stool Left", position: [-0.65, 0, 0.98], fallbackType: "bar-stool" },
      { id: "kitchen-stool-2", name: "Kitchen Bar Stool Right", position: [0.25, 0, 0.98], fallbackType: "bar-stool" },
      { id: "kitchen-plant", name: "Herb & Indoor Plant", position: [-1.9, 0, 0.75], fallbackType: "plant" },
    ],
  },
  {
    id: "interactive-resume",
    catalogNo: "ROOM 06",
    roomType: "bathroom",
    roomLabel: "Spa Studio",
    title: "Interactive Web Resume",
    tagline: "Digital Resume & Career Snapshot",
    description:
      "Graciella's clean, responsive interactive web resume highlighting BSIT education, technical toolkit, awards, and direct contact links — deployed live on Vercel.",
    techStack: ["React", "JavaScript", "CSS3", "Responsive Design"],
    liveUrl: "https://resume-smoky-phi.vercel.app",
    displayUrl: "resume-smoky-phi.vercel.app",
    githubUrl: "https://github.com/graeeez/resume",
    visualTheme: "raite",
    accentColor: "#DF5000",
    wallColor: "#F7F3F5",
    floorColor: "#D4CBCF",
    lampTint: "#FFD6C4",
    hotspotOffset: [0, 2.35, 0],
    ...placeHorizontalRoom(5),
    models: [
      { id: "bath-vanity", name: "Scandinavian Vanity & Sink", position: [-1.1, 0, -1.35], fallbackType: "vanity-sink" },
      { id: "bath-mirror", name: "Backlit Round Mirror", position: [-1.1, 1.55, -1.68], fallbackType: "mirror" },
      { id: "bath-tub", name: "Freestanding Soaking Tub", position: [1.05, 0, -0.75], fallbackType: "bathtub" },
      { id: "bath-plant", name: "Spa Botanical Plant", position: [1.85, 0, 0.75], fallbackType: "plant" },
    ],
  },
];
