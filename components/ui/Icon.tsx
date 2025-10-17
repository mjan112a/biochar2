/**
 * Icon Component - Single reusable icon component
 * Automatically switches between placeholder and custom icons based on config
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';
import { getIconIdentifier, isUsingPlaceholder } from '@/lib/iconRegistry';

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export function Icon({ name, size = 'md', className = '' }: IconProps) {
  const iconIdentifier = getIconIdentifier(name);
  const pixelSize = sizeMap[size];

  if (isUsingPlaceholder()) {
    // Use Lucide React icon
    const LucideIcon = (LucideIcons as unknown as Record<string, LucideIcon>)[iconIdentifier];
    
    if (!LucideIcon) {
      console.warn(`Icon "${iconIdentifier}" not found in Lucide icons`);
      return <LucideIcons.Circle size={pixelSize} className={className} />;
    }

    return <LucideIcon size={pixelSize} className={className} />;
  }

  // Use custom SVG icon
  return (
    <Image
      src={`/icons/custom/${iconIdentifier}`}
      alt={name}
      width={pixelSize}
      height={pixelSize}
      className={className}
    />
  );
}
