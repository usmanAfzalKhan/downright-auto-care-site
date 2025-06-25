// src/data/services.js

const services = [
  {
    slug: "exterior-wash",
    name: "Exterior Wash",
    description: "Quick hand wash and dry to remove dirt, grime, and road film.",
    features: [
      "Hand wash with pH-neutral shampoo",
      "Air-dry or soft microfiber towel",
      "Protective wax finish",
    ],
    pricing: { basic: 25, deluxe: 50 },
    imageDesktop: "/images/exterior-wash-desktop.png",
    imageMobile: "/images/exterior-wash-mobile.png"
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    description: "Complete vacuum, shampoo, and wipe-down of all surfaces. Leather conditioning upon request.",
    features: [
      "Deep-vacuum & upholstery shampoo",
      "Vinyl, leather & plastic wipe-down",
      "Odor-eliminating treatment",
    ],
    pricing: { basic: 40, deluxe: 75 },
    imageDesktop: "/images/interior-detailing-desktop.png",
    imageMobile: "/images/interior-detailing-mobile.png"
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    description: "Long-lasting protective ceramic coating to guard against UV, water spots, and contaminants.",
    features: [
      "Surface decontamination",
      "Ceramic coating application",
      "Cure and inspection",
    ],
    pricing: { basic: 199, deluxe: 299 },
    imageDesktop: "/images/ceramic-coating-desktop.png",
    imageMobile: "/images/ceramic-coating-mobile.png"
  },
  {
    slug: "clay-bar-treatment",
    name: "Clay Bar Treatment",
    description: "Gently removes bonded surface contaminants to leave your paint silky smooth and ready for wax or sealant.",
    features: [
      "Eliminates industrial fallout & rail dust",
      "Preps surface for protection layers",
      "Restores glossy, glass-like finish",
    ],
    pricing: { basic: 50, deluxe: 80 },
    imageDesktop: "/images/clay-bar-treatment-desktop.png",
    imageMobile: "/images/clay-bar-treatment-mobile.png"
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    description: "Remove oxidation and yellowing, restoring clarity and night visibility.",
    features: [
      "Lens sanding & polishing",
      "UV-resistant sealant",
      "Headlight alignment check",
    ],
    pricing: { basic: 50, deluxe: 80 },
    imageDesktop: "/images/headlight-restoration-desktop.png",
    imageMobile: "/images/headlight-restoration-mobile.png"
  },
  {
    slug: "pet-hair-removal",
    name: "Pet Hair Removal",
    description: "Specialized tools to lift and remove embedded pet hair from carpets and upholstery.",
    features: [
      "Power vacuum & fur rake",
      "Fabric brushing & lint removal",
      "Optional deodorizer spray",
    ],
    pricing: { basic: 30, deluxe: 45 },
    imageDesktop: "/images/pet-hair-removal-desktop.png",
    imageMobile: "/images/pet-hair-removal-mobile.png"    
  },
];

export default services;
