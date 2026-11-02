import type { ServiceItem, LeadershipMember, RoadmapGoal, ProcessStep, IndustryItem } from '../types';

export const COMPANY_INFO = {
  name: "SHRESTH WAREHOUSE PVT. LTD.",
  shortName: "Shresth Warehouse",
  tagline: "Enabling Seamless E-Commerce Growth Through Smart Warehousing & Fulfillment Solutions.",
  coreMessage: "Your Business Deserves Smarter Warehousing, Faster Fulfillment, and Reliable Logistics Support.",
  positioning: "A reliable, cost-effective, regional warehousing and fulfillment partner helping e-commerce sellers, D2C brands, MSMEs, and growing businesses streamline their logistics operations.",
  location: "Ghatshila, East Singhbhum, Jharkhand, India",
  pincode: "832303",
  phone: "+91 9470511428",
  phoneRaw: "919470511428",
  email: "kumarganesh.kg4@gmail.com",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  foundedRoadmap: "2026",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ecommerce-warehousing",
    title: "E-Commerce Warehousing",
    shortDesc: "Secure and organized storage infrastructure designed to support online sellers and growing businesses.",
    fullDesc: "Our dedicated regional warehousing facility provides designated shelving, pallet spaces, and bin storage tailored specifically for e-commerce inventory. We ensure secure, moisture-protected, and neatly categorized storage that allows quick product retrieval and minimized order processing time.",
    icon: "Warehouse",
    features: [
      "Designated rack and bin storage configurations",
      "Organized SKU-level identification and segregation",
      "Regular physical stock auditing and cleanliness standards",
      "Secure storage environment with managed entry"
    ],
    benefits: [
      "Eliminates capital expenditure on self-managed storage",
      "Closer storage access to Eastern India and regional customers",
      "Flexible space allocation that scales with your seasonal demand"
    ],
    idealFor: "E-commerce sellers, D2C brands, and retail suppliers needing dependable storage."
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    shortDesc: "Organized stock handling, inventory tracking, and inventory control to improve accuracy and reduce stock mismatches.",
    fullDesc: "Proper inventory management is the bedrock of reliable logistics. We manage inwards verification, physical counts, barcode/SKU labeling, and systematic batch tracking to safeguard stock accuracy and prevent costly order mismatches or stock-outs.",
    icon: "Boxes",
    features: [
      "Inward receiving check and discrepancy logging",
      "SKU-level categorization and shelf tagging",
      "Stock movement logging and threshold alerts",
      "Regular cycle counts and stock reconciliation"
    ],
    benefits: [
      "Significant reduction in inventory discrepancies and misplaced items",
      "Accurate visibility of ready-to-ship vs. reserved items",
      "Enhanced order fulfillment speed through organized storage aisles"
    ],
    idealFor: "Sellers with multi-SKU product lines, consumer goods, and fashion merchandise."
  },
  {
    id: "order-fulfillment",
    title: "Order Fulfillment",
    shortDesc: "Efficient pick, pack, order processing, and dispatch operations to support seamless e-commerce order management.",
    fullDesc: "When orders drop, speed and precision matter. Our operations team handles picklist generation, item retrieval, protective packaging, shipping label application, and dispatch coordination so your customers receive their packages accurately and promptly.",
    icon: "PackageCheck",
    features: [
      "Quick-response order intake and picklist generation",
      "Double-check verification prior to sealing packages",
      "Protective cushioning and standardized packaging protocols",
      "Same-day order processing for morning cut-offs"
    ],
    benefits: [
      "Lower Order Return Rates (RTO) due to precision packing",
      "Higher customer satisfaction through timely dispatch",
      "Allows brand founders to focus 100% on marketing and sales"
    ],
    idealFor: "High-volume D2C brands, Amazon/Flipkart merchants, and growing online stores."
  },
  {
    id: "packaging-dispatch",
    title: "Packaging & Dispatch Support",
    shortDesc: "Product packaging, shipment preparation, and dispatch coordination to streamline fulfillment operations.",
    fullDesc: "We provide comprehensive packing solutions using corrugated boxes, tamper-evident security bags, bubble wrap, and customized packing tape. We work directly with major domestic regional logistics carriers for daily scheduled pickups and manifest sign-offs.",
    icon: "Truck",
    features: [
      "Quality packaging materials suited for courier transit",
      "Tamper-evident sealing and correct shipping label placement",
      "Weight and volumetric dimension verification",
      "Handover manifests with logistics courier partners"
    ],
    benefits: [
      "Transit protection reducing damage claims",
      "Reduced shipping penalties from courier volumetric errors",
      "Smooth daily dispatch schedules"
    ],
    idealFor: "MSMEs, manufacturers, and sellers wanting standardized packaging standards."
  },
  {
    id: "flexible-3pl",
    title: "Flexible 3PL Solutions",
    shortDesc: "Customized third-party logistics and warehousing support based on business requirements, operational needs, and business scale.",
    fullDesc: "Every business has unique fulfillment constraints. Our 3PL solutions are built on modular flexibility—whether you need temporary seasonal staging, dedicated pallet storage, or end-to-end B2B/B2C fulfillment coordination, we craft custom operational workflows.",
    icon: "Layers",
    features: [
      "Custom operational workflows tailored to business requirements",
      "Flexible contract terms without long-term rigid lock-ins",
      "Support for both B2B bulk distribution and B2C direct courier dispatch",
      "Dedicated single-point-of-contact account management"
    ],
    benefits: [
      "No heavy fixed overhead costs—pay for what you use",
      "Fast onboarding and adaptable logistics processes",
      "Direct communication and personalized attention for your business"
    ],
    idealFor: "Growing enterprises, regional distributors, and expanding retail brands."
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "regional-advantage",
    title: "Regional Fulfillment Advantage",
    subtitle: "Closer to Emerging Markets",
    description: "Warehousing support situated closer to emerging Tier-2 and Tier-3 markets in Jharkhand and Eastern India, significantly cutting delivery transit times and freight costs.",
    icon: "MapPin"
  },
  {
    id: "cost-efficient",
    title: "Cost-Efficient Operations",
    subtitle: "Built for MSMEs & Sellers",
    description: "Affordable warehousing and fulfillment models tailored for growing businesses and online merchants without heavy upfront capital or punitive minimums.",
    icon: "CircleDollarSign"
  },
  {
    id: "flexible-storage",
    title: "Flexible Storage Solutions",
    subtitle: "Adaptable Space Requirements",
    description: "Dynamic storage configurations based on your business demand cycles—expand your shelf or pallet allocation easily during festive peaks.",
    icon: "Maximize"
  },
  {
    id: "personalized-support",
    title: "Personalized Client Support",
    subtitle: "Direct Stakeholder Access",
    description: "Unlike impersonal mega-logistics providers, our leadership and floor operations provide responsive, dedicated attention and business-focused communication.",
    icon: "Headphones"
  },
  {
    id: "scalable-infrastructure",
    title: "Scalable Infrastructure",
    subtitle: "Designed to Grow With You",
    description: "Our operational processes and facility planning are designed to seamlessly absorb increasing order volumes as your business sales expand.",
    icon: "TrendingUp"
  },
  {
    id: "faster-service",
    title: "Faster Service in Emerging Markets",
    subtitle: "Speed & Accessibility",
    description: "Strong focus on regional fulfillment accessibility, rapid receiving, and prompt daily dispatch routines that keep supply chains moving forward.",
    icon: "Zap"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Inventory Receiving",
    description: "Receive and organize products entering the warehouse.",
    details: [
      "Inward shipment verification against packing slips",
      "Physical box count and damage inspection",
      "Logging inward records and SKU sorting"
    ],
    icon: "PackagePlus"
  },
  {
    step: "02",
    title: "Secure Storage",
    description: "Maintain organized storage and inventory records.",
    details: [
      "Allocation to designated bin or pallet rack positions",
      "Clean, secure, and moisture-free environment",
      "Accurate inventory tracking and shelf tagging"
    ],
    icon: "ShieldCheck"
  },
  {
    step: "03",
    title: "Order Processing",
    description: "Process customer orders and prepare products for fulfillment.",
    details: [
      "Order queue review and SKU verification",
      "Batch picklist creation for floor operators",
      "Stock reservation and preparation"
    ],
    icon: "FileCheck2"
  },
  {
    step: "04",
    title: "Pick & Pack",
    description: "Pick the required products and prepare them for shipment.",
    details: [
      "Accurate item retrieval from designated shelf locations",
      "Item verification to eliminate order dispatch errors",
      "Protective cushioning, boxing, and secure taping"
    ],
    icon: "ShoppingBag"
  },
  {
    step: "05",
    title: "Dispatch Management",
    description: "Coordinate dispatch operations for efficient order movement.",
    details: [
      "Courier label printing and accurate affixation",
      "Daily scheduled handover to courier partners",
      "Handover manifest signing and tracking coordination"
    ],
    icon: "Send"
  },
  {
    step: "06",
    title: "Business Support",
    description: "Provide personalized operational support to business clients.",
    details: [
      "Regular status updates and dispatch manifests",
      "Assistance with inventory counts and queries",
      "Dedicated operational support for smooth communication"
    ],
    icon: "UserCheck"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    name: "E-Commerce Businesses",
    tagline: "Multi-channel online retail fulfillment",
    description: "End-to-end fulfillment support for brands selling on Amazon, Flipkart, Meesho, and own web portals, ensuring fast turnaround and standardized packaging.",
    highlights: ["SLA compliance", "Multi-platform preparation", "Safe storage"],
    icon: "ShoppingCart"
  },
  {
    name: "D2C Brands",
    tagline: "Direct-to-consumer order fulfillment",
    description: "Tailored unboxing experiences, customized packaging assistance, and same-day dispatch support to help direct brands build long-term consumer trust.",
    highlights: ["Custom packaging care", "Return inspection", "Brand presentation"],
    icon: "Sparkles"
  },
  {
    name: "MSMEs",
    tagline: "Regional manufacturing & wholesale logistics",
    description: "Cost-effective, reliable storage and dispatch solutions empowering micro, small, and medium enterprises to access professional logistics without heavy capital expenditure.",
    highlights: ["Flexible terms", "Affordable rates", "Hands-on coordination"],
    icon: "Building2"
  },
  {
    name: "Online Sellers",
    tagline: "Streamlined inventory & dispatch for independent merchants",
    description: "Dedicated assistance for emerging independent e-commerce sellers requiring reliable storage space, stock tracking, and daily courier handovers.",
    highlights: ["Accurate stock counts", "Daily dispatch", "Zero fixed lease stress"],
    icon: "Store"
  },
  {
    name: "Retail Businesses",
    tagline: "Regional stock staging & replenishment",
    description: "Convenient regional buffer storage for local retail businesses needing rapid replenishment stock closer to their retail storefronts.",
    highlights: ["Buffer storage", "Bulk carton handling", "Scheduled releases"],
    icon: "Building"
  },
  {
    name: "Emerging Digital Commerce",
    tagline: "Modern regional commerce & social selling",
    description: "Scalable fulfillment backbone designed to support fast-moving social commerce, hyperlocal sellers, and innovative regional digital brands.",
    highlights: ["Agile operations", "Scalable space", "Fast onboarding"],
    icon: "Smartphone"
  }
];

export const ROADMAP_GOALS: RoadmapGoal[] = [
  {
    year: "2026",
    phase: "Phase 1: Operational Excellence",
    title: "Strengthening Operations",
    status: "In Progress",
    items: [
      "Strengthen warehouse operations and standardized storage infrastructure",
      "Improve fulfillment processes, pick-and-pack precision, and turn-around times",
      "Adopt digital inventory tracking protocols and regular cycle audits"
    ]
  },
  {
    year: "2027",
    phase: "Phase 2: Digital Integration",
    title: "Technology Advancement",
    status: "Planned",
    items: [
      "Implement advanced Warehouse Management Systems (WMS) workflows",
      "Develop automated operational reporting and digital client dashboards",
      "Strengthen technology-enabled operations with barcode verification across all stages"
    ]
  },
  {
    year: "2028",
    phase: "Phase 3: Network Scaling",
    title: "Scalable Expansion",
    status: "Upcoming Vision",
    items: [
      "Develop a multi-location regional fulfillment network across Eastern India",
      "Integrate end-to-end logistics technology for seamless carrier synchronization",
      "Build stronger regional logistics partnerships for accelerated delivery times"
    ]
  }
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Mr. Ganesh Mahato",
    designation: "Director",
    experience: "5 Years Professional Experience in FinTech Sector",
    location: "East Singhbhum, Jharkhand",
    initials: "GM",
    profile: "Mr. Ganesh Mahato brings professional experience, business understanding, and leadership capabilities to Shresth Warehouse. His vision focuses on building efficient logistics infrastructure and developing scalable fulfillment solutions."
  },
  {
    name: "Mr. Rohit Kumar Sahu",
    designation: "Director",
    education: "B.Com (Honours)",
    experience: "Sales Representative at Dainik Bhaskar News Agency with expertise in sales, customer relationship management, client interaction, market outreach, and business targets",
    initials: "RS",
    profile: "Mr. Rohit Kumar Sahu brings experience in sales, customer engagement, business communication, and market development. His expertise supports the company's business growth, customer relations, and market expansion initiatives."
  },
  {
    name: "Mr. Suraj Kumar Das",
    designation: "Director",
    education: "B.Com (Honours)",
    experience: "Hands-on experience in storekeeping, inventory management, stock maintenance, material handling, record keeping, and warehouse operations",
    initials: "SD",
    profile: "Mr. Suraj Kumar Das brings hands-on experience in inventory control, warehouse organization, and day-to-day store operations, supporting efficient warehousing and fulfillment activities."
  },
  {
    name: "Mr. Amar Nath Singh Dev",
    designation: "Director",
    experience: "Strategic business and regional operational development",
    initials: "AD",
    profile: "Mr. Amar Nath Singh Dev contributes to the company's business and operational development."
  }
];

export const BUSINESS_IMPACT = {
  heading: "Strengthening Regional Commerce Through Better Logistics",
  intro: "Shresth Warehouse Pvt. Ltd. is committed to empowering the regional economy in Jharkhand and Eastern India by fostering logistics infrastructure where it matters most.",
  points: [
    {
      title: "Employment Generation in Operations",
      description: "Creating direct local employment opportunities in warehouse handling, material staging, and logistics coordination in Ghatshila and East Singhbhum."
    },
    {
      title: "Opportunities in Inventory & Packaging",
      description: "Developing specialized skills in inventory sorting, quality inspection, order packing, and dispatch handling for regional youth."
    },
    {
      title: "Empowering MSMEs & Online Sellers",
      description: "Providing micro, small, and medium businesses with enterprise-quality warehousing without prohibitive capital lease commitments."
    },
    {
      title: "Improving Logistics in Tier-2 & Tier-3",
      description: "Bridging the supply-chain divide by enabling faster receiving and distribution in emerging regional consumer markets."
    },
    {
      title: "Expanding Online Market Presence",
      description: "Helping local manufacturers, artisans, and sellers transition smoothly into modern e-commerce through reliable regional fulfillment."
    }
  ],
  projectedTargets: [
    {
      value: "25+",
      label: "Direct Employment Opportunities",
      note: "Projected Expansion Target"
    },
    {
      value: "100+",
      label: "Online Sellers & MSMEs Supported",
      note: "Projected Expansion Target"
    },
    {
      value: "Tier 2/3",
      label: "Regional Market Focus",
      note: "Strategic Fulfillment Advantage"
    }
  ]
};

export const FAQ_LIST = [
  {
    question: "Where is the Shresth Warehouse facility located?",
    answer: "Our primary warehousing facility is located in Ghatshila, East Singhbhum, Jharkhand, India. This location offers strategic road and transit connectivity across Jharkhand, West Bengal, Odisha, and Eastern India."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We support e-commerce marketplace sellers (Amazon, Flipkart, Meesho), D2C consumer brands, MSME manufacturers, local retail businesses, and regional digital commerce enterprises."
  },
  {
    question: "Can I start with a small inventory volume?",
    answer: "Yes, absolutely! Our fulfillment model is designed to be accessible for growing businesses and MSMEs. We offer flexible storage configurations that allow you to start small and expand your space as order volumes grow."
  },
  {
    question: "How does daily dispatch and courier pickup work?",
    answer: "We coordinate with major regional and national logistics couriers for daily scheduled pickups. Once orders are picked and packed, shipping labels are affixed, handover manifests are generated, and shipments are dispatched promptly."
  },
  {
    question: "How can I get an estimated quote for my business?",
    answer: "You can use our interactive fulfillment cost estimator on this website or submit the business enquiry form below. You can also call or WhatsApp us directly at +91 9470511428."
  }
];
