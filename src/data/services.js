// a simple JS module exporting all your service data
const services = [
  {
    slug: 'exterior-wash',
    name: 'Exterior Wash',
    description: 'Quick hand wash and dry to remove dirt, grime, and road film.',
    features: [
      'Hand wash with pH-neutral shampoo',
      'Air-dry or soft microfiber towel',
      'Protective wax finish'
    ],
    pricing: { basic: 25, deluxe: 50 }
  },
  {
    slug: 'interior-detailing',
    name: 'Interior Detailing',
    description: 'Complete vacuum, shampoo, and wipe-down of all surfaces. Leather conditioning upon request.',
    features: [
      'Deep-vacuum & upholstery shampoo',
      'Vinyl, leather & plastic wipe-down',
      'Odor-eliminating treatment'
    ],
    pricing: { basic: 40, deluxe: 75 }
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Long-lasting protective ceramic coating to guard against UV, water spots, and contaminants.',
    features: [
      'Surface decontamination',
      'Ceramic coating application',
      'Cure and inspection'
    ],
    pricing: { basic: 199, deluxe: 299 }
  },
  {
    slug: 'engine-bay-cleaning',
    name: 'Engine Bay Cleaning',
    description: 'Safe degreasing and rinse to keep your engine looking and running its best.',
    features: [
      'Eco-friendly degreaser',
      'Gentle hand-rinsing',
      'Protective dressing applied'
    ],
    pricing: { basic: 35, deluxe: 55 }
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    description: 'Remove oxidation and yellowing, restoring clarity and night visibility.',
    features: [
      'Lens sanding & polishing',
      'UV-resistant sealant',
      'Headlight alignment check'
    ],
    pricing: { basic: 50, deluxe: 80 }
  },
  {
    slug: 'pet-hair-removal',
    name: 'Pet Hair Removal',
    description: 'Specialized tools to lift and remove embedded pet hair from carpets and upholstery.',
    features: [
      'Power vacuum & fur rake',
      'Fabric brushing & lint removal',
      'Optional deodorizer spray'
    ],
    pricing: { basic: 30, deluxe: 45 }
  }
]

export default services
