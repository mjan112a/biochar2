'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { ToggleSwitch } from '@/components/system/ToggleSwitch';
import { Icon } from '@/components/ui/Icon';
import { SubsystemDiagram } from '@/components/detail/SubsystemDiagram';
import { useSystemView } from '@/hooks/useSystemView';
import { ComponentName } from '@/types';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';

// Import all component data
import chickenHouseData from '@/data/components/chicken-house.json';
import processingPlantData from '@/data/components/processing-plant.json';
import anaerobicDigesterData from '@/data/components/anaerobic-digester.json';
import pyrolysisUnitData from '@/data/components/pyrolysis-unit.json';
import farmWaterwaysData from '@/data/components/farm-waterways.json';

// Import benefits data
import economicData from '@/data/benefits/economic.json';
import environmentalData from '@/data/benefits/environmental.json';
import reuseData from '@/data/benefits/reuse.json';

/* eslint-disable @typescript-eslint/no-explicit-any */
const componentDataMap: Record<string, any> = {
  'chicken-house': chickenHouseData,
  'processing-plant': processingPlantData,
  'anaerobic-digester': anaerobicDigesterData,
  'pyrolysis-unit': pyrolysisUnitData,
  'farm-waterways': farmWaterwaysData,
};

const benefitsDataMap: Record<string, any> = {
  economic: economicData,
  environmental: environmentalData,
  reuse: reuseData,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export default function ComponentDetailPage() {
  const params = useParams();
  const componentId = params.component as string;
  const { systemView } = useSystemView();
  
  const componentData = componentDataMap[componentId];
  
  if (!componentData) {
    return <div>Component not found</div>;
  }

  const currentViewData = systemView === 'current' ? componentData.current : componentData.proposed;

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
              <div>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 mb-1"
                >
                  <ArrowLeft size={16} />
                  Back to Overview
                </Link>
                <h1 className="text-xl font-bold text-gray-900">
                  {componentData.name}
                </h1>
              </div>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Component Header */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Icon name={componentId} size="xl" className="text-gray-700" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  {componentData.name}
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  {componentData.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg">
                  <span className="text-sm font-semibold text-green-800">
                    {componentData.keyMetric.label}:
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    {componentData.keyMetric.value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current/Proposed Comparison */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              {systemView === 'current' ? 'Current System' : 'Proposed System'}
            </h3>
            
            {/* Check if component is used in current practice */}
            {systemView === 'current' && (componentId === 'anaerobic-digester' || componentId === 'pyrolysis-unit') ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                  <span className="text-4xl">🚫</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Not Used in Current Practice
                </h4>
                <p className="text-gray-600 mb-4 max-w-md mx-auto">
                  This component is part of the proposed circular economy system. 
                  Toggle to &quot;Proposed System&quot; to see how it integrates into the biochar production process.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-lg">
                  <span className="text-sm text-amber-800">
                    💡 Switch to <strong>Proposed System</strong> to learn more
                  </span>
                </div>
              </div>
            ) : (
              <>
                <p className="text-gray-700 mb-6">
                  {currentViewData?.description}
                </p>

                {/* Subsystem Diagram */}
                <div className="mb-6">
                  <SubsystemDiagram
                    componentId={componentId as ComponentName}
                    componentName={componentData.name}
                    inputs={currentViewData?.inputs || []}
                    outputs={currentViewData?.outputs || []}
                  />
                </div>
              </>
            )}

            {/* Issues or Benefits */}
            {systemView === 'current' && currentViewData && 'issues' in currentViewData ? (
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Key Issues:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {currentViewData.issues?.map((issue: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500">⚠</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : currentViewData && 'benefits' in currentViewData ? (
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Key Benefits:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {currentViewData.benefits?.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        {/* Benefits Tabs */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Detailed Benefits
            </h3>

            <Tabs.Root defaultValue="economic" className="w-full">
              <Tabs.List className="flex gap-2 mb-6 border-b border-gray-200">
                {Object.entries(benefitsDataMap).map(([key, data]) => (
                  <Tabs.Trigger
                    key={key}
                    value={key}
                    className="px-6 py-3 font-semibold text-gray-600 hover:text-gray-900 data-[state=active]:text-amber-600 data-[state=active]:border-b-2 data-[state=active]:border-amber-600 transition-colors"
                  >
                    {data.title}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              {Object.entries(benefitsDataMap).map(([key, data]) => (
                <Tabs.Content key={key} value={key} className="space-y-4">
                  <p className="text-gray-700 mb-4">{data.description}</p>
                  
                  <div className="grid gap-4">
                    {data.items.map((item: { title: string; metric?: string; description: string }, idx: number) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          {item.metric && (
                            <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded">
                              {item.metric}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        </section>

        {/* Technical Details */}
        {componentData.technicalDetails && (
          <section>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Accordion.Root type="single" collapsible>
                <Accordion.Item value="technical">
                  <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left">
                    <h3 className="text-xl font-bold text-gray-900">
                      Technical Details
                    </h3>
                    <ChevronDown className="transition-transform duration-200" />
                  </Accordion.Trigger>
                  <Accordion.Content className="pt-4 pb-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(componentData.technicalDetails).map(([key, value]) => (
                        <div key={key} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-gray-700 text-sm mb-1 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          <p className="text-gray-600 text-sm">{value as string}</p>
                        </div>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
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
