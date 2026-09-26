export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  riskAvoided: string;
  idealFor: string;
  image: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  neighborhood: string;
  city: string;
  date: string;
  rating: number;
  highlight: string;
  quote: string;
  service: string;
  hoaResolved?: boolean;
}

export const BUSINESS_INFO = {
  name: "SECOND LOOK Powerwash LLC",
  shortName: "SECOND LOOK Powerwash LLC",
  owner: "William (Willy)",
  phoneDisplay: "346.235.5984",
  phoneRaw: "3462355984",
  phoneE164: "+13462355984",
  whatsappNumber: "13462355984",
  whatsappUrl: "https://wa.me/13462355984",
  email: "secondlookpwr@gmail.com",
  emailDisplay: "secondlookpwr@gmail.com",
  slogan: "We show up so you can show off!",
  location: "Houston, TX & Surrounding Areas",
  address: "10131 East Palm Lake Drive, Houston, TX 77034, United States",
  streetAddress: "10131 East Palm Lake Drive",
  city: "Houston",
  state: "TX",
  zip: "77034",
  country: "United States",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10131+East+Palm+Lake+Drive,+Houston,+TX+77034",
  instagram: "@secondlookpwr",
  instagramUrl: "https://www.instagram.com/secondlookpwr",
  serviceAreas: [
    "The Heights",
    "Memorial / Spring Branch",
    "Katy",
    "Cypress",
    "The Woodlands",
    "Sugar Land",
    "Pearland",
    "Clear Lake",
    "Tomball",
    "Richmond",
    "Kingwood",
    "Missouri City"
  ],
  stats: {
    rating: "5.0",
    reviewCount: "63+",
    insurance: "$1,000,000 Liability Insured",
    experience: "Owner-Operated Excellence"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "house-softwash",
    title: "House Softwashing",
    tagline: "Gentle Low-Pressure Organic Eradication",
    description: "High pressure will strip paint, crack vinyl, and blast water behind siding. Our dedicated softwash system applies specialized eco-safe detergents that eliminate mold, mildew, and black algae spores at the root with garden-hose level pressure.",
    riskAvoided: "Prevents high-pressure water intrusion behind HardiePlank & cracked siding",
    idealFor: "Vinyl, HardiePlank, Stucco, Painted Siding, Eaves & Soffits",
    image: "/images/house_softwash_exterior.jpg",
    features: [
      "Kills black algae & green moss at the molecular root",
      "Zero high-pressure damage to delicate exterior substrates",
      "Pre-soak & post-rinse landscape hydration to safeguard plants",
      "Before & after photo set delivered for HOA clearance"
    ]
  },
  {
    id: "brick-stone",
    title: "Brick & Stone Cleaning",
    tagline: "Restoring Houston Masonry Without Mortar Blowout",
    description: "Houston humidity feeds gloeocapsa magma on porous brick and limestone. We use specialized masonry cleansers and balanced rinsing that dissolves deep mineral oxidation and organic discoloration while preserving delicate mortar joints.",
    riskAvoided: "Eliminates mortar erosion and permanent brick face pitting",
    idealFor: "Red Brick Facades, Limestone Trim, Retaining Walls, Chimneys",
    image: "/images/hero_pressure_washing_action.jpg",
    features: [
      "Neutralizes stubborn black and green organic streaks",
      "Preserves mortar integrity with calibrated pressure",
      "Restores original brick warmth and bright curb appeal",
      "Specialty treatment for red clay and Houston mineral staining"
    ]
  },
  {
    id: "driveways-walkways",
    title: "Driveways & Walkways",
    tagline: "Commercial Rotary Surface Cleaning",
    description: "Wand spraying leaves zebra striping and uneven patches. We utilize dual-nozzle commercial rotary surface cleaners that deliver uniform 360-degree flatwork restoration, erasing deep-set vehicle fluids, grime, and slick mildew.",
    riskAvoided: "No ugly 'zebra stripes' or etched swirl marks on your concrete",
    idealFor: "Concrete Driveways, Sidewalks, Front Walkways, Paver Entries",
    image: "/images/driveway_surface_cleaner.jpg",
    features: [
      "Commercial 20-inch rotary surface cleaner for uniform finish",
      "Pre-treatment & post-treatment brightening application",
      "Removes slippery algae hazards for family & delivery safety",
      "Deep cleaning of expansion joints and curb edges"
    ]
  },
  {
    id: "patios-pool-decks",
    title: "Patios & Pool Decks",
    tagline: "Safe Outdoor Living & Entertaining Restoration",
    description: "Protect your backyard retreat. Whether you have stamped concrete, travertine pavers, or delicate cool decking around your swimming pool, we apply pH-balanced cleaning solutions that leave surfaces sanitized, slip-resistant, and barefoot ready.",
    riskAvoided: "Prevents chemical contamination of pool water & cracked cool deck",
    idealFor: "Travertine, Stamped Concrete, Cool Deck, Covered Patios, Pergolas",
    image: "/images/patio_stone_pool_deck.jpg",
    features: [
      "Pool water boundary protection and chemical barrier control",
      "Eliminates slick bacterial algae for safe barefoot walking",
      "Travertine, flagstone, and brick paver safe protocols",
      "Prepares surfaces for summer cookouts and family gatherings"
    ]
  },
  {
    id: "fences-exterior",
    title: "Fences & Specialty Exteriors",
    tagline: "Wood Brightening, Gutters & Composite Surfaces",
    description: "Gray, weathered cedar and mold-covered vinyl fences can be restored to natural vibrancy without shredding wood fibers. We also handle gutter brightening to remove oxidation and exterior perimeter walls.",
    riskAvoided: "Prevents wood fiber 'furring' and gouging from raw pressure",
    idealFor: "Cedar Fences, Vinyl Fences, Gutter Faces, Retaining Walls",
    image: "/images/house_softwash_exterior.jpg",
    features: [
      "Two-step wood wash and brightening treatment",
      "Lifts years of grey ultraviolet oxidation and mold",
      "Gutter tiger-stripe removal on request",
      "Significantly prolongs fence lifespan before staining"
    ]
  },
  {
    id: "hoa-notice-rush",
    title: "HOA Notice Rush Resolution",
    tagline: "24-48 Hr Priority Dispatch with Board-Ready Proof",
    description: "Received a 14-day or 30-day HOA compliance warning for dirty siding, black rooflines, or stained concrete? We prioritize urgent HOA cases across Houston with rapid scheduling, time-stamped before & after photo packages, and an official invoice ready for instant upload to your HOA portal.",
    riskAvoided: "Avoids costly daily HOA violation fines & forced contractor liens",
    idealFor: "Homeowners Facing HOA Fines, Property Managers, Closing Deadlines",
    image: "/images/hoa_rush_cleaning.jpg",
    features: [
      "Priority 24-48 hour rush dispatch in Greater Houston",
      "Time-stamped before & after photo portfolio for board clearance",
      "Itemized compliance invoice ready for property management portals",
      "Complete perimeter inspection to eliminate repeat violation notices"
    ]
  },
  {
    id: "commercial-services",
    title: "Commercial & Multi-Family Services",
    tagline: "Storefronts, Dumpster Pads, Sidewalks & Parking Lots",
    description: "Keep your Houston commercial property safe, clean, and welcoming. We provide heavy-duty hot-water degreasing and high-capacity rotary surface cleaning for restaurant drive-thrus, retail sidewalks, dumpster corrals, and multi-family breezeways outside of peak business hours.",
    riskAvoided: "Prevents customer slip-and-fall liabilities & municipal health citations",
    idealFor: "Retail Storefronts, Restaurants, Office Parks, HOA Common Areas",
    image: "/images/commercial_power_wash.jpg",
    features: [
      "Commercial hot-water degreasing for grease, oil, and gum removal",
      "Flexible night & weekend scheduling to prevent customer disruption",
      "High-capacity rotary flatwork for large square footage parking areas",
      "Full $1M commercial liability insurance and OSHA-compliant protocols"
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "David M.",
    neighborhood: "The Heights",
    city: "Houston, TX",
    date: "2 weeks ago",
    rating: 5,
    highlight: "HOA notice cleared the very next morning!",
    quote: "Got hit with a 14-day HOA violation letter for black mildew on our north-facing siding and driveway. Called William at Second LOOK—he answered immediately, gave a transparent quote, and had the job done two days later. The siding looks brand new and the HOA signed off immediately. Willy takes immense pride in his work.",
    service: "House Softwash & Driveway",
    hoaResolved: true
  },
  {
    id: "rev-2",
    author: "Amanda & Marcus S.",
    neighborhood: "Cinco Ranch",
    city: "Katy, TX",
    date: "1 month ago",
    rating: 5,
    highlight: "Night and day difference on our 2-story brick.",
    quote: "We made the mistake of hiring a guy with a rented pressure washer two years ago who etched our front walkway. Willy is on another planet. Commercial gear, softwash system that didn't harm our rose bushes, and he walked the entire perimeter with us afterward. You get what you pay for, and Willy is worth every penny.",
    service: "Brick & Siding Softwashing",
    hoaResolved: true
  },
  {
    id: "rev-3",
    author: "Robert T.",
    neighborhood: "Sterling Ridge",
    city: "The Woodlands, TX",
    date: "3 weeks ago",
    rating: 5,
    highlight: "Punctual, professional, and owner on-site.",
    quote: "Hard to find reliable contractors in Houston who actually show up when promised. Willy text messaged when he was en route, arrived in a professional rig, and transformed our travertine pool deck and driveway. Second LOOK is our go-to from now on. Slogan is 100% accurate!",
    service: "Pool Deck & Flatwork Restoration"
  },
  {
    id: "rev-4",
    author: "Elena R.",
    neighborhood: "Memorial",
    city: "Houston, TX",
    date: "Last month",
    rating: 5,
    highlight: "No damage to landscaping, spotless results.",
    quote: "I was extremely nervous about the harsh chemicals killing my newly planted boxwoods. Willy explained his landscape hydration technique and rinsed continuously. Plants are thriving, and our white stucco looks like it was just freshly painted. Outstanding customer service.",
    service: "Stucco & Walkways Softwash",
    hoaResolved: true
  }
];
