import { db } from "../config/firebase";

type CategorySeed = {
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: string[];
};

export const categories: CategorySeed[] = [
  {
    name: "Construction & Building Machinery",
    slug: "construction-building-machinery",
    description: "Equipment for construction and building projects",
    icon: "🏗️",
    subcategories: [
      "Excavators",
      "Loaders",
      "Concrete Mixers",
      "Vibrators & Compactors",
      "Cranes (Tower / Mobile)",
      "Road Rollers",
      "Asphalt Plants",
      "Cutting Machines (Stone / Marble)",
      "Rebar Bending / Cutting Machines",
      "Scaffolding & Lifting Tools",
    ],
  },
  {
    name: "Agriculture & Farming Equipment",
    slug: "agriculture-farming-equipment",
    description: "Tools and machinery for agricultural operations",
    icon: "🚜",
    subcategories: [
      "Tractors",
      "Rotavators & Tillers",
      "Harvesters & Combine Machines",
      "Irrigation Pumps & Sprayers",
      "Seeders & Planters",
      "Chaff Cutters & Feed Machines",
      "Dairy Machines (Milking, Chilling, etc.)",
      "Solar Agri Pumps",
    ],
  },
  {
    name: "Industrial Manufacturing Machinery",
    slug: "industrial-manufacturing-machinery",
    description: "Machinery for industrial manufacturing and production",
    icon: "🏭",
    subcategories: [
      "Lathe Machines",
      "Milling Machines",
      "CNC Machines",
      "Drilling Machines",
      "Welding Machines",
      "Compressors & Hydraulic Press",
      "Tool Room Equipment",
      "Sheet Metal & Fabrication Machines",
      "Bending / Rolling Machines",
    ],
  },
  {
    name: "Textile & Garment Machines",
    slug: "textile-garment-machines",
    description: "Machinery for textile and garment manufacturing",
    icon: "👔",
    subcategories: [
      "Stitching & Sewing Machines (Industrial)",
      "Embroidery Machines",
      "Cutting & Finishing Machines",
      "Dyeing / Washing Machines",
      "Spinning & Weaving Equipment",
    ],
  },
  {
    name: "Food & Beverage Processing",
    slug: "food-beverage-processing",
    description: "Equipment for food and beverage processing",
    icon: "🥫",
    subcategories: [
      "Flour / Atta Mills",
      "Oil Extraction Machines",
      "Milk Processing Units",
      "Juice / Pulp Machines",
      "Bakery Ovens & Mixers",
      "Packaging & Filling Machines",
      "Refrigeration / Cold Storage Units",
    ],
  },
  {
    name: "Wood & Furniture Machines",
    slug: "wood-furniture-machines",
    description: "Machinery for woodworking and furniture manufacturing",
    icon: "🏠",
    subcategories: [
      "Panel Saw / Edge Banding",
      "Planer / Jointer Machines",
      "CNC Router",
      "Drilling & Sanding Machines",
      "Furniture Polishing Machines",
    ],
  },
  {
    name: "Electrical & Electronics Production",
    slug: "electrical-electronics-production",
    description: "Machinery for electrical and electronics manufacturing",
    icon: "🔌",
    subcategories: [
      "PCB Making Machines",
      "Soldering & Welding Stations",
      "Transformer Manufacturing",
      "Wire Winding Machines",
      "Battery Making & Recycling Equipment",
    ],
  },
  {
    name: "Chemical, Pharma & Laboratory",
    slug: "chemical-pharma-laboratory",
    description: "Equipment for chemical, pharmaceutical and laboratory use",
    icon: "⚗️",
    subcategories: [
      "Mixers, Reactors, Blenders",
      "Tablet Press & Coating Machines",
      "Lab Testing Equipment",
      "Packaging & Filling Machines",
      "Chemical Processing Tanks",
      "Distillation & Filtration Units",
    ],
  },
  {
    name: "Recycling & Waste Management",
    slug: "recycling-waste-management",
    description: "Equipment for recycling and waste management",
    icon: "♻️",
    subcategories: [
      "Plastic Crushers",
      "Shredders",
      "E-Waste Processing Machines",
      "Paper Recycling Units",
      "Tyre Recycling Plants",
      "Scrap Compressors & Balers",
    ],
  },
  {
    name: "Hand Tools & Power Tools",
    slug: "hand-tools-power-tools",
    description: "Hand tools and power tools for various applications",
    icon: "🧰",
    subcategories: [
      "Drills, Grinders, Cutters",
      "Impact Wrenches",
      "Welding Tools",
      "Measurement & Testing Tools",
      "Safety Gear",
    ],
  },
  {
    name: "Automobile Workshop Machines",
    slug: "automobile-workshop-machines",
    description: "Machinery for automotive workshops and garages",
    icon: "🛠️",
    subcategories: [
      "Car / Bike Washing Systems",
      "Hydraulic Lifts & Jacks",
      "Wheel Alignment & Balancing",
      "Air Compressors",
      "Denting / Painting Booths",
      "Battery Chargers & Diagnostic Tools",
    ],
  },
  {
    name: "HVAC & Cooling Systems",
    slug: "hvac-cooling-systems",
    description: "Heating, ventilation, air conditioning and cooling systems",
    icon: "🧊",
    subcategories: [
      "Industrial Air Conditioners",
      "Chillers & Cooling Towers",
      "Air Handling Units (AHU)",
      "Duct Fabrication Tools",
    ],
  },
  {
    name: "Energy & Power Equipment",
    slug: "energy-power-equipment",
    description: "Equipment for power generation and energy systems",
    icon: "🔋",
    subcategories: [
      "Solar Panels & Inverters",
      "Diesel Generators",
      "Electric Motors & Pumps",
      "Transformers",
      "Batteries & Power Backup Units",
    ],
  },
  {
    name: "Construction Material Plants",
    slug: "construction-material-plants",
    description: "Plants for manufacturing construction materials",
    icon: "🧱",
    subcategories: [
      "Brick Making Machines",
      "Cement Mix Plants",
      "Stone Crushers",
      "Asphalt & Bitumen Plants",
    ],
  },
  {
    name: "Packaging & Printing Machines",
    slug: "packaging-printing-machines",
    description: "Machinery for packaging and printing operations",
    icon: "📦",
    subcategories: [
      "Box / Carton Making Machines",
      "Label Printing & Cutting",
      "Shrink Wrapping",
      "Vacuum Packing",
      "Inkjet / Laser Printers",
    ],
  },
  {
    name: "Plastic & Rubber Processing",
    slug: "plastic-rubber-processing",
    description: "Machinery for plastic and rubber processing",
    icon: "🧩",
    subcategories: [
      "Injection Moulding",
      "Blow Moulding",
      "Extrusion Machines",
      "Rubber Mixing & Cutting",
    ],
  },
  {
    name: "Marine & Heavy Transport",
    slug: "marine-heavy-transport",
    description: "Equipment for marine and heavy transport operations",
    icon: "⚓",
    subcategories: [
      "Boat Engines",
      "Industrial Pumps",
      "Container Handling Cranes",
      "Forklifts & Loaders",
    ],
  },
  {
    name: "Office / Commercial Machines",
    slug: "office-commercial-machines",
    description: "Machinery for office and commercial use",
    icon: "🏢",
    subcategories: [
      "Industrial Printers",
      "Binding & Cutting",
      "Shredders",
      "Cleaning Equipment (Vacuum, Floor Machines)",
    ],
  },
  {
    name: "Spare Parts & Components",
    slug: "spare-parts-components",
    description: "Spare parts and components for various machinery",
    icon: "🧾",
    subcategories: [
      "Motors",
      "Bearings",
      "Valves & Fittings",
      "Conveyor Belts",
      "Hydraulic & Pneumatic Parts",
    ],
  },
];

export async function seedCategories(): Promise<void> {
  try {
    console.log("🌱 Starting to seed categories...");
    const batch = db.batch();
    const categoriesRef = db.collection("categories");
    const parentIds: Record<string, string> = {};

    categories.forEach((category, index) => {
      const parentRef = categoriesRef.doc();
      parentIds[category.slug] = parentRef.id;

      batch.set(parentRef, {
        name: category.name,
        slug: category.slug,
        description: category.description,
        icon: category.icon,
        order: index + 1,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      category.subcategories.forEach((subcategory, subIndex) => {
        const subRef = categoriesRef.doc();
        batch.set(subRef, {
          name: subcategory,
          slug: `${category.slug}-${subcategory
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`,
          description: `${subcategory} in ${category.name}`,
          parentId: parentRef.id,
          parentSlug: category.slug,
          order: subIndex + 1,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    await batch.commit();

    console.log("✅ Successfully seeded all categories!");
    console.log(`📊 Total categories: ${categories.length}`);
    console.log(
      `📊 Total subcategories: ${categories.reduce(
        (sum, cat) => sum + cat.subcategories.length,
        0
      )}`
    );

    if (require.main === module) {
      process.exit(0);
    }
  } catch (error) {
    console.error("❌ Error seeding categories:", error);

    if (require.main === module) {
      process.exit(1);
    }

    throw error;
  }
}

if (require.main === module) {
  seedCategories();
}


