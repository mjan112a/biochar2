/**
 * System Diagram - Flow-based layout showing component relationships
 * Displays different components based on Current vs Proposed view
 */

'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { useSystemView } from '@/hooks/useSystemView';
import { ComponentName } from '@/types';

interface ComponentBoxProps {
  id: ComponentName;
  name: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  subtitle?: string;
}

function ComponentBox({ id, name, position, subtitle }: ComponentBoxProps) {
  const router = useRouter();

  return (
    <div
      data-component-id={id}
      onClick={() => router.push(`/${id}`)}
      className="absolute cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl"
      style={position}
    >
      <div className="border-2 border-dashed border-gray-400 bg-white rounded-lg p-4 w-40 text-center shadow-md">
        <div className="flex flex-col items-center gap-2">
          <Icon name={id} size="lg" className="text-gray-700" />
          <div>
            <h3 className="font-bold text-sm text-gray-900">{name}</h3>
            {subtitle && (
              <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface BenefitBadge {
  metric: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}

const BENEFIT_BADGES: Record<string, BenefitBadge[]> = {
  economic: [
    { metric: '$250-500/ton CO₂ credits', position: { top: '3%', right: '22%' } },
    { metric: '$6-12/MMBTU RNG', position: { top: '35%', left: '53%' } },
    { metric: '$800/ton USDA grants', position: { bottom: '12%', right: '22%' } },
  ],
  environmental: [
    { metric: '90% ammonia reduction', position: { top: '10%', left: '23%' } },
    { metric: '2.5 tonnes CO₂-eq', position: { top: '1%', right: '22%' } },
    { metric: '95% P, 70% N recovery', position: { bottom: '14%', right: '22%' } },
  ],
  reuse: [
    { metric: '100% energy self-sufficient', position: { top: '33%', left: '53%' } },
    { metric: 'Biochar soil amendment', position: { top: '5%', right: '22%' } },
    { metric: 'Zero fertilizer runoff', position: { bottom: '16%', right: '22%' } },
  ],
};

interface SystemDiagramProps {
  activeFilter?: string | null;
}

export function SystemDiagram({ activeFilter }: SystemDiagramProps) {
  const { systemView } = useSystemView();
  const diagramRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8" style={{ minHeight: '600px' }}>
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
        System Flow Diagram
      </h2>

      <div ref={diagramRef} className="relative" style={{ height: '500px' }}>
        {/* Current Practice View - Simple Linear Flow */}
        {systemView === 'current' ? (
          <>
            {/* Chicken Houses */}
            <ComponentBox
              id="chicken-house"
              name="Chicken Houses"
              position={{ top: '20%', left: '5%' }}
              subtitle="Manure, Pine Shavings, Dead Chickens"
            />

            {/* Processing Plant */}
            <ComponentBox
              id="processing-plant"
              name="Chicken Processing Plant"
              position={{ top: '55%', left: '5%' }}
              subtitle="Processing Waste, Offal"
            />

            {/* Farm/Waterways */}
            <ComponentBox
              id="farm-waterways"
              name="Farmland, Rivers & Lakes"
              position={{ bottom: '10%', right: '10%' }}
            />

            {/* Simple arrows for current practice */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <defs>
                <marker
                  id="arrow-current"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                </marker>
              </defs>
              
              {/* Chicken Houses to Farm */}
              <line x1="20%" y1="30%" x2="62%" y2="80%" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-current)" />
              
              {/* Processing Plant to Farm */}
              <line x1="20%" y1="60%" x2="62%" y2="82%" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-current)" />
            </svg>

            {/* Flow Labels */}
            <div className="absolute text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded shadow" style={{ top: '52%', left: '35%' }}>
              Litter to Land
            </div>
            
            <div className="absolute text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded shadow" style={{ top: '68%', left: '35%' }}>
              Waste to Land
            </div>
          </>
        ) : (
          /* Proposed System View - Full Circular Flow */
          <>
            {/* Chicken Houses */}
            <ComponentBox
              id="chicken-house"
              name="Chicken Houses"
              position={{ top: '5%', left: '5%' }}
              subtitle="Manure, Pine Shavings, Dead Chickens"
            />

            {/* Processing Plant */}
            <ComponentBox
              id="processing-plant"
              name="Chicken Processing Plant"
              position={{ bottom: '5%', left: '5%' }}
              subtitle="Processing Waste, Offal"
            />

            {/* Anaerobic Digester */}
            <ComponentBox
              id="anaerobic-digester"
              name="Anaerobic Digester (AD)"
              position={{ top: '30%', left: '35%' }}
            />

            {/* Pyrolysis Unit */}
            <ComponentBox
              id="pyrolysis-unit"
              name="Pyrolysis"
              position={{ top: '5%', right: '10%' }}
            />

            {/* Farm/Waterways */}
            <ComponentBox
              id="farm-waterways"
              name="Farmland, Rivers & Lakes"
              position={{ bottom: '10%', right: '10%' }}
              subtitle="Digestate Liquid"
            />

            {/* Emission Reduction Indicator */}
            <div className="absolute top-0 right-0 bg-green-100 border-2 border-green-400 rounded-lg p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏭</span>
                <div>
                  <p className="text-xs font-semibold text-green-800">Reduces +</p>
                  <p className="text-xs text-green-700">GHG Emissions</p>
                </div>
              </div>
            </div>

            {/* Flow Arrows - Proposed System */}
            {/* Chicken House to AD */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <defs>
                <marker
                  id="arrow"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                </marker>
              </defs>
              
              {/* Chicken to AD */}
              <line x1="25%" y1="18%" x2="40%" y2="35%" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* Chicken to Pyrolysis */}
              <line x1="30%" y1="12%" x2="62%" y2="12%" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* Processing to AD */}
              <line x1="25%" y1="82%" x2="40%" y2="52%" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* AD to Pyrolysis */}
              <line x1="52%" y1="35%" x2="62%" y2="20%" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* Pyrolysis to Farm (Biochar) */}
              <line x1="75%" y1="20%" x2="75%" y2="75%" stroke="#8E44AD" strokeWidth="3" markerEnd="url(#arrow)" />
              
              {/* AD to Farm (Digestate) */}
              <line x1="52%" y1="48%" x2="62%" y2="80%" stroke="#3498DB" strokeWidth="2" markerEnd="url(#arrow)" />
            </svg>

            {/* Flow Labels */}
            <div className="absolute text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow" style={{ top: '26%', left: '30%' }}>
              Litter
            </div>
            
            <div className="absolute text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow" style={{ top: '6%', left: '42%' }}>
              Fresh Litter
            </div>
            
            <div className="absolute text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow" style={{ top: '60%', left: '30%' }}>
              Waste
            </div>
            
            <div className="absolute text-xs font-medium text-purple-700 bg-purple-50 px-2 py-1 rounded shadow font-semibold" style={{ top: '26%', left: '56%' }}>
              Syngas
            </div>
            
            <div className="absolute text-xs font-medium text-purple-800 bg-purple-100 px-2 py-1 rounded shadow font-semibold" style={{ top: '45%', right: '12%' }}>
              Decaked Litter<br/>+ Biochar
            </div>
            
            <div className="absolute text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded shadow" style={{ top: '60%', left: '54%' }}>
              Digestate<br/>Liquid
            </div>

            {/* "Reduces Fertilizer Runoff" Badge */}
            <div className="absolute bottom-8 right-48 bg-green-100 border border-green-400 rounded px-2 py-1">
              <p className="text-xs font-semibold text-green-800">Reduces</p>
              <p className="text-xs text-green-700">Fertilizer</p>
              <p className="text-xs text-green-700">Runoff</p>
            </div>
          </>
        )}

        {/* Benefit Overlays - Only show in Proposed view */}
        {systemView === 'proposed' && activeFilter && BENEFIT_BADGES[activeFilter] && (
          <>
            {BENEFIT_BADGES[activeFilter].map((badge, idx) => (
              <div
                key={idx}
                className="absolute animate-fade-in"
                style={badge.position}
              >
                <div className={`
                  px-3 py-2 rounded-lg shadow-lg border-2 text-sm font-semibold whitespace-nowrap
                  ${activeFilter === 'economic' ? 'bg-green-50 border-green-400 text-green-800' : ''}
                  ${activeFilter === 'environmental' ? 'bg-blue-50 border-blue-400 text-blue-800' : ''}
                  ${activeFilter === 'reuse' ? 'bg-purple-50 border-purple-400 text-purple-800' : ''}
                `}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {activeFilter === 'economic' ? '💰' : ''}
                      {activeFilter === 'environmental' ? '🌱' : ''}
                      {activeFilter === 'reuse' ? '♻️' : ''}
                    </span>
                    <span>{badge.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Click any component to view detailed information</p>
        {activeFilter && systemView === 'proposed' && (
          <p className="mt-2 text-amber-600 font-medium">
            Showing {activeFilter} benefits - Click the filter again to clear
          </p>
        )}
      </div>
    </div>
  );
}
