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
import { AnimatedFlowPath } from '@/components/d3/AnimatedFlowPath';
import { AnimatedCounter } from '@/components/d3/AnimatedCounter';
import { AnimatedTruck } from '@/components/d3/AnimatedTruck';

interface ComponentBoxProps {
  id: ComponentName;
  name: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  subtitle?: string;
}

function ComponentBox({ id, name, position, subtitle }: ComponentBoxProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      data-component-id={id}
      onClick={() => router.push(`/${id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10 animate-slide-fade-in"
      style={position}
    >
      <div 
        className={`
          border-2 border-dashed bg-white rounded-lg p-4 w-40 text-center
          transition-all duration-300
          ${isHovered 
            ? 'border-blue-500 shadow-2xl shadow-blue-500/50 animate-pulse-glow' 
            : 'border-gray-400 shadow-md'
          }
        `}
      >
        <div className="flex flex-col items-center gap-2">
          <Icon name={id} size="lg" className={`transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-gray-700'}`} />
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
        {/* Current Practice View - Complete System */}
        {systemView === 'current' ? (
          <>
            {/* Chicken House */}
            <ComponentBox
              id="chicken-house"
              name="Chicken House"
              position={{ top: '35%', left: '5%' }}
            />

            {/* Processing Plant */}
            <ComponentBox
              id="processing-plant"
              name="Processing Plant"
              position={{ top: '5%', left: '38%' }}
            />

            {/* Farm Land Application */}
            <div className="absolute cursor-pointer" style={{ bottom: '15%', left: '30%' }}>
              <div className="border-2 border-dashed border-gray-400 bg-white rounded-lg p-4 w-48 text-center shadow-md animate-slide-fade-in">
                <h3 className="font-bold text-sm text-gray-900">Farm Land Application</h3>
                <p className="text-xs text-gray-600 mt-1">Crops & Livestock</p>
              </div>
            </div>

            {/* Rivers/Waterways (pollution indicator) */}
            <div className="absolute" style={{ bottom: '10%', right: '8%' }}>
              <div className="border-2 border-red-400 bg-red-50 rounded-lg p-3 w-44 text-center shadow-md animate-slide-fade-in">
                <h3 className="font-bold text-sm text-red-800">Rivers & Waterways</h3>
                <p className="text-xs text-red-600 mt-1">💧 Fertilizer & Timber Losses</p>
              </div>
            </div>

            {/* GHG Emissions indicator (from Processing Plant) */}
            <div className="absolute animate-slide-fade-in" style={{ top: '1%', left: '41%' }}>
              <div className="bg-red-100 border-2 border-red-400 rounded-lg px-3 py-2 shadow">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏭</span>
                  <div>
                    <p className="text-xs font-semibold text-red-800">GHG Emissions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOG to Landfill indicator */}
            <div className="absolute animate-slide-fade-in" style={{ top: '15%', right: '15%' }}>
              <div className="bg-amber-100 border-2 border-amber-400 rounded-lg px-3 py-2 shadow">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🗑️</span>
                  <div>
                    <p className="text-xs font-semibold text-amber-800">FOG → Landfill</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Flow Paths for Current Practice */}
            
            {/* Fresh Pine Shavings to Chicken House */}
            <AnimatedFlowPath
              id="pine-to-chicken"
              startX="2"
              startY="30"
              endX="10"
              endY="38"
              color="#A67C52"
              particleColor="#D4A373"
              particleCount={2}
              duration={3000}
            />

            {/* Chicken Feed to Chicken House */}
            <AnimatedFlowPath
              id="feed-to-chicken"
              startX="2"
              startY="50"
              endX="10"
              endY="45"
              color="#8B7355"
              particleColor="#A0826D"
              particleCount={2}
              duration={3200}
            />

            {/* Chickens to Processing Plant - Using Truck */}
            <AnimatedTruck
              id="chickens-to-processing"
              startX="20"
              startY="40"
              endX="38"
              endY="15"
              duration={4000}
            />

            {/* Processing Plant to Meat (output right) */}
            <AnimatedFlowPath
              id="processing-to-meat"
              startX="58"
              startY="12"
              endX="70"
              endY="12"
              color="#059669"
              particleColor="#10B981"
              particleCount={2}
              duration={2800}
            />

            {/* Fossil Fuels & Electricity to Processing Plant */}
            <AnimatedFlowPath
              id="energy-to-processing"
              startX="48"
              startY="25"
              endX="48"
              endY="18"
              color="#F59E0B"
              particleColor="#FBBF24"
              particleCount={3}
              duration={2500}
            />

            {/* Dead Chickens from Chicken House */}
            <AnimatedFlowPath
              id="dead-chickens"
              startX="20"
              startY="48"
              endX="28"
              endY="52"
              color="#7C2D12"
              particleColor="#991B1B"
              particleCount={1}
              duration={4000}
            />

            {/* Used Poultry Litter to Farm */}
            <AnimatedFlowPath
              id="litter-to-farm"
              startX="18"
              startY="48"
              endX="35"
              endY="72"
              color="#DC2626"
              particleColor="#EF4444"
              particleCount={4}
              duration={3800}
            />

            {/* Chemical Fertilizers to Farm */}
            <AnimatedFlowPath
              id="fertilizers-to-farm"
              startX="25"
              startY="80"
              endX="35"
              endY="78"
              color="#9333EA"
              particleColor="#A855F7"
              particleCount={2}
              duration={3000}
            />

            {/* Farm to Crops (output) */}
            <AnimatedFlowPath
              id="farm-to-crops"
              startX="48"
              startY="75"
              endX="10"
              endY="72"
              color="#059669"
              particleColor="#10B981"
              particleCount={2}
              duration={3500}
            />

            {/* Water & GHG Emissions & Nitrogen Losses from Farm */}
            <AnimatedFlowPath
              id="farm-emissions"
              startX="45"
              startY="82"
              endX="45"
              endY="90"
              color="#DC2626"
              particleColor="#EF4444"
              particleCount={3}
              duration={3000}
            />

            {/* Fertilizer Runoff to Rivers */}
            <AnimatedFlowPath
              id="runoff-to-rivers"
              startX="52"
              startY="80"
              endX="68"
              endY="85"
              color="#DC2626"
              particleColor="#EF4444"
              particleCount={4}
              duration={4000}
            />

            {/* Flow Labels */}
            <div className="absolute text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow" style={{ top: '27%', left: '1%' }}>
              Fresh Pine<br/>Shavings
            </div>
            
            <div className="absolute text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow" style={{ top: '47%', left: '0%' }}>
              Chicken<br/>Feed
            </div>
            
            <div className="absolute text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow" style={{ top: '25%', left: '24%' }}>
              Chickens
            </div>
            
            <div className="absolute text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded shadow" style={{ top: '8%', right: '24%' }}>
              Meat
            </div>
            
            <div className="absolute text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded shadow" style={{ top: '23%', left: '44%' }}>
              Fossil Fuels<br/>& Electricity
            </div>
            
            <div className="absolute text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded shadow" style={{ top: '50%', left: '22%' }}>
              Dead<br/>Chickens
            </div>
            
            <div className="absolute text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded shadow font-semibold" style={{ top: '58%', left: '22%' }}>
              Used Poultry<br/>Litter
            </div>
            
            <div className="absolute text-xs font-medium text-purple-700 bg-purple-50 px-2 py-1 rounded shadow" style={{ bottom: '25%', left: '22%' }}>
              Chemical<br/>Fertilizers
            </div>
            
            <div className="absolute text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded shadow" style={{ bottom: '24%', left: '8%' }}>
              Crops
            </div>
            
            <div className="absolute text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded shadow" style={{ bottom: '8%', left: '40%' }}>
              Water & GHG<br/>Emissions &<br/>Nitrogen Losses
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

            {/* Animated Flow Paths - Proposed System */}
            
            {/* Chicken to AD - Brown particles for manure/litter */}
            <AnimatedFlowPath
              id="chicken-to-ad"
              startX="25"
              startY="18"
              endX="40"
              endY="35"
              color="#A67C52"
              particleColor="#8B4513"
              particleCount={4}
              duration={4000}
            />
            
            {/* Chicken to Pyrolysis - Brown particles for fresh litter */}
            <AnimatedFlowPath
              id="chicken-to-pyrolysis"
              startX="30"
              startY="12"
              endX="62"
              endY="12"
              color="#A67C52"
              particleColor="#8B4513"
              particleCount={3}
              duration={3500}
            />
            
            {/* Processing to AD - Red particles for waste */}
            <AnimatedFlowPath
              id="processing-to-ad"
              startX="25"
              startY="82"
              endX="40"
              endY="52"
              color="#DC2626"
              particleColor="#EF4444"
              particleCount={3}
              duration={3800}
            />
            
            {/* AD to Pyrolysis - Orange particles for syngas */}
            <AnimatedFlowPath
              id="ad-to-pyrolysis"
              startX="52"
              startY="35"
              endX="62"
              endY="20"
              color="#F97316"
              particleColor="#FB923C"
              particleCount={5}
              duration={2500}
            />
            
            {/* Pyrolysis to Farm - Purple particles for biochar */}
            <AnimatedFlowPath
              id="pyrolysis-to-farm"
              startX="75"
              startY="20"
              endX="75"
              endY="75"
              color="#8E44AD"
              particleColor="#A855F7"
              particleCount={4}
              duration={4500}
              strokeWidth={3}
            />
            
            {/* AD to Farm - Blue particles for digestate */}
            <AnimatedFlowPath
              id="ad-to-farm"
              startX="52"
              startY="48"
              endX="62"
              endY="80"
              color="#3498DB"
              particleColor="#60A5FA"
              particleCount={3}
              duration={4000}
            />

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
                    <AnimatedCounter value={badge.metric} />
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
