/**
 * Tooltip Data for Material Flows
 * Provides hover information for animated icons
 */

export interface TooltipMetric {
  label: string;
  value: string;
  icon: string;
}

export interface TooltipData {
  title: string;
  metrics: TooltipMetric[];
  highlights: string[];
}

const TOOLTIP_DATA: Record<string, TooltipData> = {
  'fresh-pine-shavings': {
    title: "PINE SHAVINGS (INPUT)",
    metrics: [
      { label: "Cost per Ton", value: "$150-250", icon: "💵" },
      { label: "Supply Distance", value: "100-300 miles", icon: "🚚" },
      { label: "Replacement Frequency", value: "Every 60 days", icon: "📅" },
      { label: "Annual Cost", value: "$75,000-125,000", icon: "💰" }
    ],
    highlights: [
      "🌲 External resource dependency",
      "🚚 High transportation costs",
      "📈 Price volatility & supply risk"
    ]
  },
  'chicken-feed': {
    title: "CHICKEN FEED (INPUT)",
    metrics: [
      { label: "Cost per Ton", value: "$400-600", icon: "💵" },
      { label: "Feed Conversion", value: "1.8:1 ratio", icon: "📊" },
      { label: "NPK Content", value: "18-20-10", icon: "🌾" },
      { label: "Annual Cost", value: "$2M-3M", icon: "💰" }
    ],
    highlights: [
      "💰 Major operational expense",
      "📈 Commodity price fluctuation",
      "🌾 High nutritional requirements"
    ]
  },
  'meat': {
    title: "MEAT OUTPUT (REVENUE)",
    metrics: [
      { label: "Market Value", value: "$1.50-2.50/lb", icon: "💵" },
      { label: "Annual Production", value: "5-10M lbs", icon: "📦" },
      { label: "Processing Yield", value: "72-75%", icon: "📊" },
      { label: "Revenue Stream", value: "$10-25M/year", icon: "💰" }
    ],
    highlights: [
      "🥇 Primary revenue source",
      "📈 Consistent market demand",
      "⭐ Quality standards critical"
    ]
  },
  'fossil-fuels': {
    title: "FOSSIL FUELS (PROBLEM)",
    metrics: [
      { label: "Cost per MMBTU", value: "$8-15", icon: "💵" },
      { label: "CO₂ Emissions", value: "117 lbs/MMBTU", icon: "🏭" },
      { label: "Grid Dependency", value: "100%", icon: "⚡" },
      { label: "Annual Energy Cost", value: "$500K-1M", icon: "💰" }
    ],
    highlights: [
      "🌍 High carbon footprint",
      "📈 Rising energy costs",
      "⚠️ Supply chain vulnerability"
    ]
  },
  'used-poultry-litter': {
    title: "USED LITTER (POLLUTION)",
    metrics: [
      { label: "Ammonia Content", value: "90% higher vs Proposed", icon: "💨" },
      { label: "N₂O Emissions", value: "54-97% more", icon: "🏭" },
      { label: "Disposal Cost", value: "$20-40/ton", icon: "💵" },
      { label: "Environmental Impact", value: "High", icon: "⚠️" }
    ],
    highlights: [
      "🌍 Major pollutant source",
      "💰 Expensive disposal required",
      "🌊 Water contamination risk"
    ]
  },
  'fertilizers': {
    title: "CHEMICAL FERTILIZERS",
    metrics: [
      { label: "Cost per Ton", value: "$600-1,200", icon: "💵" },
      { label: "NPK Content", value: "10-10-10 typical", icon: "🧪" },
      { label: "Runoff Pollution", value: "30-50%", icon: "🌊" },
      { label: "Soil Degradation", value: "Long-term", icon: "⚠️" }
    ],
    highlights: [
      "💰 Expensive recurring cost",
      "🌊 Causes water pollution",
      "🌍 Depletes soil health over time"
    ]
  },
  'biochar': {
    title: "BIOCHAR (CIRCULAR SOLUTION)",
    metrics: [
      { label: "Carbon Sequestration", value: "2.5 tonnes CO₂-eq/tonne", icon: "🌍" },
      { label: "Carbon Credit Value", value: "$177/tonne CO₂", icon: "💵" },
      { label: "Ammonia Reduction", value: "90% in bedding", icon: "✅" },
      { label: "Nutrient Retention", value: "95% P, 70% N", icon: "🌾" }
    ],
    highlights: [
      "♻️ Creates circular economy",
      "💰 Multiple revenue streams",
      "🌍 Net-negative emissions"
    ]
  },
  'bio-methane': {
    title: "BIO-METHANE (RENEWABLE ENERGY)",
    metrics: [
      { label: "Energy Value", value: "$6-12/MMBTU", icon: "⚡" },
      { label: "Production Increase", value: "25-37% more vs AD alone", icon: "📈" },
      { label: "Grid Independence", value: "100% self-sufficient", icon: "✅" },
      { label: "Carbon Offset", value: "Replaces fossil fuels", icon: "🌍" }
    ],
    highlights: [
      "♻️ Renewable energy source",
      "💰 Reduces energy costs",
      "⚡ On-site power generation"
    ]
  },
  'syngas': {
    title: "SYNGAS (PROCESS HEAT)",
    metrics: [
      { label: "Heating Value", value: "4-6 MJ/Nm³", icon: "🔥" },
      { label: "AD Enhancement", value: "Boosts methane 25-37%", icon: "📈" },
      { label: "Energy Recovery", value: "Powers pyrolysis", icon: "⚡" },
      { label: "Emissions", value: "Net-negative system", icon: "🌍" }
    ],
    highlights: [
      "♻️ Energy self-sufficiency",
      "⚡ Powers AD heating",
      "🔥 Process integration"
    ]
  },
  'digestate': {
    title: "DIGESTATE (ORGANIC FERTILIZER)",
    metrics: [
      { label: "Nutrient Content", value: "High NPK", icon: "🌾" },
      { label: "Pathogen Reduction", value: "99%+ destroyed", icon: "✅" },
      { label: "Market Value", value: "$20-40/ton", icon: "💵" },
      { label: "Application", value: "Direct land application", icon: "🚜" }
    ],
    highlights: [
      "♻️ Replaces chemical fertilizers",
      "🌾 Enriches soil organic matter",
      "💧 Reduces nutrient runoff"
    ]
  },
  'live-chickens': {
    title: "LIVE CHICKENS (TRANSPORT)",
    metrics: [
      { label: "Transport Weight", value: "5-7 lbs/bird", icon: "🐔" },
      { label: "Flock Size", value: "20,000-30,000 birds", icon: "📊" },
      { label: "Mortality Rate", value: "3-5% (reduced with biochar)", icon: "✅" },
      { label: "Transport Time", value: "2-4 hours", icon: "🚚" }
    ],
    highlights: [
      "🐔 Critical quality control",
      "⏱️ Timing affects meat quality",
      "✅ Biochar improves bird health"
    ]
  }
};

export function getTooltipData(materialName: string): TooltipData | undefined {
  const key = materialName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/,/g, '');
  
  return TOOLTIP_DATA[key];
}