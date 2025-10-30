/**
 * Icon Mapping Utility
 * Maps material/component names to icon file paths
 */

import { IconInfo, IconMapping, IconCategory } from '@/types/system-comparison';

// Base path for system icons
const ICON_BASE_PATH = '/images/system-icons';

/**
 * Comprehensive icon mapping based on renamed icon files
 */
export const iconMapping: IconMapping = {
  // Components
  'chicken-house': {
    name: 'Chicken House',
    filename: 'chicken-house.png',
    path: `${ICON_BASE_PATH}/components/chicken-house.png`,
    category: 'component',
    description: 'Red barn representing chicken housing facility'
  },
  'processing-plant': {
    name: 'Processing Plant',
    filename: 'processing-plant.png',
    path: `${ICON_BASE_PATH}/components/processing-plant.png`,
    category: 'component',
    description: 'Factory buildings representing poultry processing facility'
  },
  'anaerobic-digester': {
    name: 'Anaerobic Digester',
    filename: 'anaerobic-digester.png',
    path: `${ICON_BASE_PATH}/components/anaerobic-digester.png`,
    category: 'component',
    description: 'Digester equipment for waste processing'
  },
  'pyrolysis-unit': {
    name: 'Pyrolysis Unit',
    filename: 'pyrolysis-unit.png',
    path: `${ICON_BASE_PATH}/components/pyrolysis-unit.png`,
    category: 'component',
    description: 'Cylindrical pyrolysis equipment'
  },
  'farm-waterways': {
    name: 'Farm & Waterways',
    filename: 'farm-waterways.png',
    path: `${ICON_BASE_PATH}/components/farm-waterways.png`,
    category: 'component',
    description: 'Landscape showing farm and water bodies'
  },

  // Inputs
  'fresh-pine-shavings': {
    name: 'Fresh Pine Shavings',
    filename: 'fresh-pine-shavings.png',
    path: `${ICON_BASE_PATH}/inputs/fresh-pine-shavings.png`,
    category: 'input',
    description: 'Pile of fresh pine bedding material'
  },
  'chickens': {
    name: 'Chickens',
    filename: 'live-chickens.png',
    path: `${ICON_BASE_PATH}/inputs/live-chickens.png`,
    category: 'input',
    description: 'Live chickens'
  },
  'chicken-feed': {
    name: 'Chicken Feed',
    filename: 'chicken-feed.png',
    path: `${ICON_BASE_PATH}/inputs/chicken-feed.png`,
    category: 'input',
    description: 'Burlap sack of chicken feed'
  },
  'water': {
    name: 'Water',
    filename: 'water.png',
    path: `${ICON_BASE_PATH}/inputs/water.png`,
    category: 'input',
    description: 'Water droplet with circulation arrows'
  },
  'fossil-fuels': {
    name: 'Fossil Fuels',
    filename: 'dry-ice.png',
    path: `${ICON_BASE_PATH}/inputs/dry-ice.png`,
    category: 'input',
    description: 'Fossil fuel representation'
  },
  'co2': {
    name: 'CO2 (dry ice)',
    filename: 'co2-dry-ice.png',
    path: `${ICON_BASE_PATH}/inputs/co2-dry-ice.png`,
    category: 'input',
    description: 'CO2 for dry ice'
  },

  // Intermediate Outputs
  'live-chickens': {
    name: 'Live Chickens',
    filename: 'live-chickens.png',
    path: `${ICON_BASE_PATH}/intermediate/live-chickens.png`,
    category: 'intermediate',
    description: 'Live chickens ready for processing'
  },
  'dead-chickens': {
    name: 'Dead Chickens',
    filename: 'dead-chickens.png',
    path: `${ICON_BASE_PATH}/intermediate/dead-chickens.png`,
    category: 'intermediate',
    description: 'Mortality representation'
  },
  'used-poultry-litter': {
    name: 'Used Poultry Litter',
    filename: 'used-poultry-litter.png',
    path: `${ICON_BASE_PATH}/intermediate/used-poultry-litter.png`,
    category: 'intermediate',
    description: 'Used litter from chicken house'
  },
  'litter-char': {
    name: 'Litter & Char',
    filename: 'litter-char-from-chicken-house.png',
    path: `${ICON_BASE_PATH}/intermediate/litter-char-from-chicken-house.png`,
    category: 'intermediate',
    description: 'Litter and biochar mixture'
  },
  'fog': {
    name: 'FOG (Fats, Oils, Greases)',
    filename: 'fog-fats-oils-greases.png',
    path: `${ICON_BASE_PATH}/intermediate/fog-fats-oils-greases.png`,
    category: 'intermediate',
    description: 'Fats, oils, and greases from processing'
  },

  // Final Outputs
  'meat': {
    name: 'Chicken Meat',
    filename: 'chicken-meat.png',
    path: `${ICON_BASE_PATH}/outputs/chicken-meat.png`,
    category: 'output',
    description: 'Processed chicken meat'
  },
  'biochar': {
    name: 'Biochar',
    filename: 'biochar.png',
    path: `${ICON_BASE_PATH}/outputs/biochar.png`,
    category: 'output',
    description: 'Black biochar carbon sink material'
  },
  'digestate-liquids': {
    name: 'Digestate Liquids',
    filename: 'digestate-liquids.png',
    path: `${ICON_BASE_PATH}/outputs/digestate-liquids.png`,
    category: 'output',
    description: 'Liquid digestate fertilizer'
  },
  'digestate-solids': {
    name: 'Digestate Solids',
    filename: 'digestate-solids-reduced-volume.png',
    path: `${ICON_BASE_PATH}/outputs/digestate-solids-reduced-volume.png`,
    category: 'output',
    description: 'Reduced volume digestate solids'
  },
  'crops': {
    name: 'Crops',
    filename: 'crops-corn.png',
    path: `${ICON_BASE_PATH}/outputs/crops-corn.png`,
    category: 'output',
    description: 'Corn crops from farm'
  },
  'bio-oils': {
    name: 'Bio Oils',
    filename: 'bio-oils.png',
    path: `${ICON_BASE_PATH}/outputs/bio-oils.png`,
    category: 'output',
    description: 'Bio-oils from pyrolysis'
  },
  'wood-vinegars': {
    name: 'Wood Vinegars',
    filename: 'wood-vinegars.png',
    path: `${ICON_BASE_PATH}/outputs/wood-vinegars.png`,
    category: 'output',
    description: 'Wood vinegar byproduct'
  },

  // Energy
  'bio-methane': {
    name: 'Renewable Bio Methane',
    filename: 'bio-methane.png',
    path: `${ICON_BASE_PATH}/energy/bio-methane.png`,
    category: 'energy',
    description: 'Renewable bio-methane'
  },
  'syngas-energy': {
    name: 'Syngas Energy',
    filename: 'syngas-energy.png',
    path: `${ICON_BASE_PATH}/energy/syngas-energy.png`,
    category: 'energy',
    description: 'Syngas renewable energy'
  },
  'renewable-energy': {
    name: 'Renewable Energy',
    filename: 'renewable-biofuels.png',
    path: `${ICON_BASE_PATH}/energy/renewable-biofuels.png`,
    category: 'energy',
    description: 'Renewable energy sources'
  },
};

/**
 * Helper function to find icon by name (case-insensitive, fuzzy match)
 */
export function findIcon(searchTerm: string): IconInfo | null {
  const normalized = searchTerm.toLowerCase().trim();
  
  // Exact match
  if (iconMapping[normalized]) {
    return iconMapping[normalized];
  }

  // Fuzzy match by name
  for (const [key, icon] of Object.entries(iconMapping)) {
    if (
      icon.name.toLowerCase().includes(normalized) ||
      normalized.includes(key) ||
      key.includes(normalized)
    ) {
      return icon;
    }
  }

  return null;
}

/**
 * Get icon path by material/component name
 */
export function getIconPath(name: string): string {
  const icon = findIcon(name);
  if (icon?.path) {
    return icon.path;
  }
  
  // Fallback: try to construct path from flow-icons directory
  // This handles icons that weren't yet migrated to system-icons
  const normalizedName = name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/,/g, '');
  
  // Map common name variations to flow icon filenames
  const flowIconMap: Record<string, string> = {
    'meat': 'meat.svg',
    'chicken-meat': 'meat.svg',
    'biochar': 'biochar.svg',
    'litter': 'litter.svg',
    'used-litter': 'litter.svg',
    'used-poultry-litter': 'litter.svg',
    'waste-litter': 'litter.svg',
    'fresh-litter': 'fresh-litter.svg',
    'fresh-pine-shavings': 'pine-shavings.svg',
    'pine-shavings': 'pine-shavings.svg',
    'chicken-feed': 'chicken-feed.svg',
    'feed': 'chicken-feed.svg',
    'fossil-fuels': 'fossil-fuel.svg',
    'fossil-fuel': 'fossil-fuel.svg',
    'digestate': 'digestate.svg',
    'digestate-liquids': 'digestate.svg',
    'syngas': 'syngas.svg',
    'syngas-energy': 'syngas.svg',
    'waste': 'waste.svg',
    'fog': 'waste.svg',
    'fertilizer': 'fertilizer.svg',
    'fertilizers': 'fertilizer.svg',
    'ghg-emissions': 'waste.svg',
    'emissions': 'waste.svg',
    'nutrient-runoff': 'waste.svg',
    'runoff': 'waste.svg',
    'bio-methane': 'syngas.svg',
    'methane': 'syngas.svg',
  };
  
  const flowIconFilename = flowIconMap[normalizedName];
  if (flowIconFilename) {
    return `/images/flow-icons/${flowIconFilename}`;
  }
  
  // Final fallback
  return '/images/flow-icons/placeholder.svg';
}

/**
 * Get all icons by category
 */
export function getIconsByCategory(category: IconCategory): IconInfo[] {
  return Object.values(iconMapping).filter(icon => icon.category === category);
}

/**
 * Get icon info with fallback
 */
export function getIconInfo(name: string, fallback?: string): IconInfo {
  const icon = findIcon(name);
  
  if (icon) {
    return icon;
  }

  // Return fallback or default
  return {
    name: name,
    filename: 'placeholder.svg',
    path: fallback || '/images/flow-icons/placeholder.svg',
    category: 'output',
    description: name
  };
}

/**
 * Normalize material names from JSON to icon keys
 * Handles variations in naming between JSON and icon files
 */
export function normalizeIconKey(materialName: string): string {
  const normalized = materialName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/,/g, '')
    .replace(/&/g, 'and');

  // Handle special cases
  const specialCases: Record<string, string> = {
    'fresh-pine-shavings': 'fresh-pine-shavings',
    'chicken-feed': 'chicken-feed',
    'used-poultry-litter': 'used-poultry-litter',
    'litter-and-char': 'litter-char',
    'fog-fats-oils-greases': 'fog',
    'renewable-bio-methane': 'bio-methane',
    'digestate-liquids': 'digestate-liquids',
    'syngas-energy': 'syngas-energy',
    'bio-oils': 'bio-oils',
    'wood-vinegars': 'wood-vinegars',
  };

  return specialCases[normalized] || normalized;
}