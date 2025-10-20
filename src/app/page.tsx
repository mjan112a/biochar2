'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ToggleSwitch } from '@/components/system/ToggleSwitch';
import { SystemDiagram } from '@/components/system/SystemDiagram';
import { WelcomeModal } from '@/components/ui/WelcomeModal';
import { useSystemView } from '@/hooks/useSystemView';
import { BENEFIT_CATEGORIES } from '@/lib/constants';
import overviewData from '@/data/system/overview.json';
import { MousePointer2, Filter, Box } from 'lucide-react';

export default function HomePage() {
  const { systemView } = useSystemView();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const currentData = systemView === 'current' ? overviewData.current : overviewData.proposed;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/wastehub-logo.png"
                alt="WasteHub"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
              <div className="h-8 w-px bg-gray-300" />
              <h1 className="text-xl font-bold text-gray-900">
                Poultry Biochar Circular Economy
              </h1>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </header>

      {/* Welcome Modal */}
      <WelcomeModal />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Quick Start */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-3">
              Transform Poultry Waste into Valuable Biochar
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Explore an integrated circular economy system converting 52,000 tons/year of waste into renewable energy, carbon credits, and premium soil amendments
            </p>
            
            {/* Quick Start Guide */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">📍 How to Use This Tool</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Step 1 */}
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0">
                    <MousePointer2 size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">1. Toggle Systems</h4>
                    <p className="text-sm text-gray-700">
                      Switch between Current Practice and Proposed System to compare approaches
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0">
                    <Filter size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">2. Filter Benefits</h4>
                    <p className="text-sm text-gray-700">
                      Click Economic, Environmental, or Reuse to see specific metrics
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0">
                    <Box size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">3. Explore Details</h4>
                    <p className="text-sm text-gray-700">
                      Click any component box for detailed inputs, outputs, and benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {currentData.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {currentData.description}
            </p>
            
            {systemView === 'current' ? (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-red-700 mb-3">Current Challenges:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {'problems' in currentData && currentData.problems.map((problem: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500 mt-1">⚠</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-green-700 mb-3">Key Benefits:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {'benefits' in currentData && currentData.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="mb-8">
          <div className="flex justify-center gap-4">
            {BENEFIT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(activeFilter === category.id ? null : category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === category.id
                    ? 'shadow-lg scale-105'
                    : 'hover:scale-105 hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeFilter === category.id ? category.color : '#f3f4f6',
                  color: activeFilter === category.id ? 'white' : '#374151',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* System Diagram */}
        <section>
          <SystemDiagram activeFilter={activeFilter} />
        </section>

        {/* Market Data (Proposed View Only) */}
        {systemView === 'proposed' && (
          <section className="mt-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                Market Opportunity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Carbon Credits</h3>
                  <p className="text-2xl font-bold text-green-600 mb-1">
                    {overviewData.marketData.carbonCredits.price}
                  </p>
                  <p className="text-xs text-gray-500">
                    {overviewData.marketData.carbonCredits.growth} growth
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {overviewData.marketData.carbonCredits.marketShare}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Biochar Market</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-1">
                    {overviewData.marketData.biocharMarket.bulk}
                  </p>
                  <p className="text-xs text-gray-500">Bulk pricing</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {overviewData.marketData.biocharMarket.growth}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">USDA Grants</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">
                    {overviewData.marketData.usdaGrants}
                  </p>
                  <p className="text-xs text-gray-500">Through NRCS 336</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {overviewData.marketData.wasteVolume} available
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 WasteHub. Converting waste into value through circular economy solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
