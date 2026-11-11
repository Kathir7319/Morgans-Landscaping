export const BUSINESS_INFO = {
  name: "Morgans Landscaping",
  tagline: "Knightdale Rock & Yard Landscaping",
  fullName: "Morgans Landscaping — Knightdale Rock & Yard",
  phone: "(919) 437-1132",
  phoneRaw: "9194371132",
  hours: "Monday – Saturday, 7:00 AM – 6:00 PM",
  serviceArea: "Knightdale, Wendell, Wendell Falls, and Eastern Wake County, NC",
  neighborhoods: [
    "Wendell Falls",
    "Knightdale Station",
    "Planters Walk",
    "Harper's Landing",
    "Mingo Creek",
    "Poplar Pointe"
  ],
  servicesSummary: "New Construction Sod Installation • Decorative River Rock Beds • Low-Maintenance Mulch Design • Yard Grading & Cleanup"
};

export const SOD_VARIETIES = [
  {
    id: "bermuda",
    name: "Bermuda Grass",
    scientific: "Cynodon dactylon",
    badge: "Most Popular for Kids & Pets",
    sunFit: "Full sun yards (6–8+ hours direct sunlight)",
    yardFit: "High-traffic backyards, open sunny subdivisions",
    keyBenefits: "Drought-tolerant, fast-spreading, handles kids and dogs with ease. Recovers rapidly from wear and tear.",
    pricePerSqFtMin: 1.65,
    pricePerSqFtMax: 2.15,
    typical2kRange: "$3,300 – $4,300",
    maintenanceLevel: "Moderate (Fast summer growth, low water after root establishment)",
    winterDormancy: "Goes golden dormant in late fall/winter, bounces back early spring",
    color: "Warm medium-to-deep green",
    image: "/images/bermuda.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "zoysia",
    name: "Zoysia Grass",
    scientific: "Zoysia japonica / matrella",
    badge: "Luxury Carpet Turf",
    sunFit: "Full sun to light shade (4–6+ hours sunlight)",
    yardFit: "Homeowners wanting a plush golf-course carpet aesthetic",
    keyBenefits: "Dense weed-blocking turf, incredibly soft barefoot feel, slower upward growth meaning lower mowing frequency.",
    pricePerSqFtMin: 1.95,
    pricePerSqFtMax: 2.50,
    typical2kRange: "$3,900 – $5,000",
    maintenanceLevel: "Low to Moderate (Fewer mowings, natural weed choke)",
    winterDormancy: "Dormant in winter, maintains dense protective thatch",
    color: "Lush emerald green",
    image: "/images/zoysia.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tall-fescue",
    name: "Tall Fescue",
    scientific: "Festuca arundinacea",
    badge: "Year-Round Green",
    sunFit: "Partial shade to full sun",
    yardFit: "Yards with mature trees, north-facing lots, shaded side yards",
    keyBenefits: "Stays green year-round through North Carolina winters with deep emerald rich color. Deep root system.",
    pricePerSqFtMin: 1.55,
    pricePerSqFtMax: 2.05,
    typical2kRange: "$3,100 – $4,100",
    maintenanceLevel: "Moderate (Loves spring and autumn, needs summer watering)",
    winterDormancy: "No dormancy — vibrant green all 12 months",
    color: "Rich deep forest green",
    image: "/images/tall-fescue.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  }
];

export const PACKAGE_FEATURES = [
  {
    title: "Complete Backyard Sod Transformation",
    tagline: "Farm-Cut Fresh Turf Installed in 1-2 Days",
    description: "Full soil preparation, red clay rototilling, finish grading adjustments, and fresh farm-cut Bermuda, Zoysia, or Tall Fescue sod installed to eliminate mud, puddles, and clay erosion.",
    icon: "Sprout",
    highlight: "Eliminates Red Mud Completely"
  },
  {
    title: "Custom Foundation & Bed Edging",
    tagline: "Crisp Clean Architectural Lines",
    description: "Deep spade-cut trench edging around your front porch, patio, AC pads, and fence line filled with smooth decorative river rock or double-shredded hardwood mulch over commercial weed barriers.",
    icon: "Layers",
    highlight: "Zero Washout Design"
  },
  {
    title: "Drainage & Downspout Rock Solutions",
    tagline: "Protect Your Foundation From Carolina Rains",
    description: "Decorative river rock splash pads and dry creek beds expertly sloped to direct roof stormwater away from your foundation slab, preventing water pooling in crawlspaces and patios.",
    icon: "ShieldCheck",
    highlight: "Foundation Storm Protection"
  },
  {
    title: "HOA-Ready Curb Appeal",
    tagline: "100% Guaranteed HOA Architectural Approval",
    description: "Neat, clean layouts designed specifically to satisfy strict neighborhood architectural review boards across Wendell Falls, Knightdale Station, Harper's Landing, and Wake County developments.",
    icon: "Home",
    highlight: "Fast Closing Turnaround"
  }
];

export const GALLERY_ITEMS = [
  // Category 1: Natural River Rock & Stone Borders
  {
    id: 1,
    title: "Decorative River Rock Bed & Foundation Border",
    category: "rock-borders",
    categoryLabel: "Natural River Rock & Stone",
    neighborhood: "Wendell Falls, NC",
    description: "Installed 1\"-3\" washed North Carolina river rock with commercial-grade puncture-resistant fabric and spade-cut trenching along foundation and HVAC units.",
    image: "/images/rock-bed-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=80",
    highlights: ["1\"–3\" River Rock", "Commercial Weed Barrier", "Permanent Maintenance-Free"]
  },
  {
    id: 2,
    title: "Curved River Stone Garden Border & Metal Edging",
    category: "rock-borders",
    categoryLabel: "Natural River Rock & Stone",
    neighborhood: "Knightdale Station, NC",
    description: "Sculpted perimeter border wrapping around front porch columns and sidewalk. Will never blow away in Carolina summer thunderstorms.",
    image: "/images/rock-bed-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Zero Annual Replacement", "Clean Crisp Lines", "High Curb Appeal"]
  },
  {
    id: 3,
    title: "Patio Edge River Rock Ribbon",
    category: "rock-borders",
    categoryLabel: "Natural River Rock & Stone",
    neighborhood: "Planters Walk, NC",
    description: "Replaced muddy grass edging alongside stamped concrete patio with decorative stone ribbon for clean transitions and mud-free dog paws.",
    image: "/images/rock-bed-3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Pet-Friendly Border", "Mud Elimination", "Patio Accenting"]
  },

  // Category 2: Drainage & Dry Creek Bed Solutions
  {
    id: 4,
    title: "Dry Creek Bed Runoff Channel & Downspout Catchment",
    category: "drainage",
    categoryLabel: "Drainage & Dry Creek Beds",
    neighborhood: "Wendell Falls, NC",
    description: "Functional naturalized rock channel designed to intercept gutter downspout surges and guide stormwater gently to the property swale.",
    image: "/images/drainage-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Slab Moisture Protection", "Heavy Rain Defense", "Naturalistic Creek Look"]
  },
  {
    id: 5,
    title: "River Rock Downspout Splash Pad & Side Swale",
    category: "drainage",
    categoryLabel: "Drainage & Dry Creek Beds",
    neighborhood: "Harper's Landing, NC",
    description: "High-velocity stone basin preventing water tunneling into newly graded backyard subsoil. Solved pooling issue in 1 afternoon.",
    image: "/images/drainage-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Erosion Elimination", "Subdivision Swale Flow", "Engineered Slope"]
  },

  // Category 3: Low-Maintenance Shredded Hardwood & Pine Bark Mulch
  {
    id: 6,
    title: "Deep-Trench Hardwood Mulch Bed & Shrub Island",
    category: "mulch",
    categoryLabel: "Hardwood & Bark Mulch",
    neighborhood: "Knightdale, NC",
    description: "Triple-shredded dark brown hardwood mulch installed with 3-inch spade-cut edges for striking contrast against emerald lawn turf.",
    image: "/images/mulch-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Triple-Shredded Organic", "Weed Deprivation", "Soil Moisture Retention"]
  },
  {
    id: 7,
    title: "Front Facade Foundation Beds & Pine Bark Finish",
    category: "mulch",
    categoryLabel: "Hardwood & Bark Mulch",
    neighborhood: "Wendell, NC",
    description: "Freshly dressed foundation planting bed giving immediate move-in warmth to a new construction craftsman home.",
    image: "/images/mulch-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Rich Natural Color", "Crisp Walkway Border", "HOA Guideline Compliant"]
  },

  // Category 4: Full Yard Makeovers (Sod + Rock/Mulch Combo)
  {
    id: 8,
    title: "Complete New Homeowner Transformation (Bermuda + River Rock)",
    category: "full-makeover",
    categoryLabel: "Full Yard Makeovers",
    neighborhood: "Wendell Falls, NC",
    description: "Transformed builder-grade clay pit into 2,400 sq. ft. of tight Bermuda sod with perimeter river stone edging and fence line mulch beds.",
    image: "/images/sod-after.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Before: Bare Clay", "After: Pristine Turf", "Completed in 36 Hours"]
  },
  {
    id: 9,
    title: "Backyard Oasis Makeover (Tall Fescue & Decorative Stone)",
    category: "full-makeover",
    categoryLabel: "Full Yard Makeovers",
    neighborhood: "Knightdale Station, NC",
    description: "Complete grading leveling, soil amendment with nutrient rich topsoil, and roll-out farm fresh Tall Fescue sod for an instant play lawn.",
    image: "/images/hero-yard.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Level Yard Grading", "Instant Play-Ready", "Zero Mud for Dogs"]
  },
  {
    id: 10,
    title: "Zoysia Carpet & Stone Retaining Bed",
    category: "full-makeover",
    categoryLabel: "Full Yard Makeovers",
    neighborhood: "Wake County Subdivisions, NC",
    description: "Palletized premium Zoysia turf with decorative river rock foundation accents that increased neighborhood appraisal interest instantly.",
    image: "/images/makeover-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Luxury Lawn Quality", "Clean Bed Transition", "Turnkey Post-Closing"]
  }
];

export const REVIEWS = [
  {
    id: 1,
    quote: "Saved our backyard right after closing in Wendell Falls! We closed on our house with a muddy clay backyard and two dogs. Morgans Landscaping measured the yard the next day, prepped the soil, and installed Bermuda sod plus a river rock border along our patio. Super fair pricing and zero mess left behind.",
    author: "Sarah & Mark T.",
    location: "Wendell Falls, NC",
    rating: 5,
    tag: "New Construction Homeowner Package",
    verified: true
  },
  {
    id: 2,
    quote: "Best decorative rock work in Knightdale. We were tired of replacing washed-out pine straw every spring. They installed heavy-duty weed barrier fabric and gorgeous river rock beds around the whole front of our house. Neighbors have already stopped to ask who did the work!",
    author: "Marcus D.",
    location: "Knightdale, NC",
    rating: 5,
    tag: "Decorative River Rock Beds",
    verified: true
  },
  {
    id: 3,
    quote: "Fast, honest, and showed up right on schedule. Called (919) 437-1132 for a quote on Fescue sod and fresh mulch beds. They gave us a clear written quote with no hidden add-ons and finished the entire job in one day.",
    author: "Jennifer L.",
    location: "Wendell, NC",
    rating: 5,
    tag: "Tall Fescue & Mulch Bed Edging",
    verified: true
  }
];

export const NEIGHBORHOOD_GUIDES = [
  {
    name: "Wendell Falls",
    zip: "27591",
    lotCharacteristics: "Heavy red clay subsoil, quick-draining slopes, strict HOA front yard curb appeal rules.",
    recommendedGrass: "Bermuda or Zoysia for sunny backyard lots; Tall Fescue for wooded perimeter lots.",
    popularPackage: "Backyard Sod + Downspout River Rock Splash Pads",
    hoaDeadlineTip: "Wendell Falls HOA requires approved permanent turf within 60–90 days of closing."
  },
  {
    name: "Knightdale Station",
    zip: "27545",
    lotCharacteristics: "Level lots with builder-grade seed/straw washouts. Strong demand for defined bed borders.",
    recommendedGrass: "Bermuda for active pet yards; Zoysia for show-stopping front lawn curb appeal.",
    popularPackage: "Full Yard Sod Refresh + Decorative Foundation River Rock",
    hoaDeadlineTip: "Avoid builder seed washing into storm drains by installing farm-cut rolled sod immediately."
  },
  {
    name: "Planters Walk & Mingo Creek",
    zip: "27545",
    lotCharacteristics: "Mature trees with dappled canopy shade mixed with open sunny turf spaces.",
    recommendedGrass: "Tall Fescue handles the shaded drip line beneath trees while staying green through winter.",
    popularPackage: "Shaded Fescue Sod + Heavy Shredded Hardwood Mulch Beds",
    hoaDeadlineTip: "Eliminate repetitive pine straw mulching costs with permanent river stone beds."
  }
];

export const FAQS = [
  {
    question: "How quickly after closing on our new home should we install sod?",
    answer: "We recommend scheduling your yard measurement either 1–2 weeks before your closing date or immediately following closing. In North Carolina, builder-grade clay erodes quickly during heavy rainstorms, causing muddy ruts and basement water buildup. We can typically measure and install within days of your closing date."
  },
  {
    question: "Do you handle HOA compliance and architectural guidelines?",
    answer: "Yes! We work extensively in Wendell Falls, Knightdale Station, and surrounding Wake County subdivisions. All our sod varieties, bed edge trenches, and decorative river rock borders meet or exceed standard HOA architectural committee standards."
  },
  {
    question: "Why should we choose river rock beds over pine straw or mulch?",
    answer: "While mulch is cost-effective upfront, North Carolina thunderstorm downpours frequently wash pine straw and light mulch onto driveways and into lawns. Washed river rock (1\"–3\") is permanent, heavy enough never to float away, inhibits weed growth over commercial fabric, and completely eliminates the yearly expense of re-mulching."
  },
  {
    question: "How do you calculate the square footage of my yard?",
    answer: "During our free on-site measurement, we use a commercial digital measuring wheel to calculate the exact net turf area, deducting walkways, patios, and planting beds so you never pay for sod or materials you don't need."
  }
];
