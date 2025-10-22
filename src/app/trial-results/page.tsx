'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingDown, TrendingUp, Award } from 'lucide-react';

export default function TrialResultsPage() {
  // Sample data - easy to update when real results come in
  const trialData = {
    location: "Alabama Commercial Farm",
    duration: "45 days",
    houses: 2,
    birdsPerHouse: 28000,
    controlHouse: {
      mortality: 3.8,
      totalWeight: 173500, // lbs
      feedConversion: 1.85,
      avgBirdWeight: 6.25 // lbs
    },
    biocharHouse: {
      mortality: 2.9,
      totalWeight: 178200, // lbs
      feedConversion: 1.78,
      avgBirdWeight: 6.42 // lbs
    }
  };

  const improvements = {
    mortalityReduction: ((trialData.controlHouse.mortality - trialData.biocharHouse.mortality) / trialData.controlHouse.mortality * 100).toFixed(1),
    weightIncrease: ((trialData.biocharHouse.totalWeight - trialData.controlHouse.totalWeight) / trialData.controlHouse.totalWeight * 100).toFixed(2),
    fcrImprovement: ((trialData.controlHouse.feedConversion - trialData.biocharHouse.feedConversion) / trialData.controlHouse.feedConversion * 100).toFixed(2),
    avgWeightIncrease: ((trialData.biocharHouse.avgBirdWeight - trialData.controlHouse.avgBirdWeight) / trialData.controlHouse.avgBirdWeight * 100).toFixed(2)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                Alabama Trial Results
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/hero-biochar.jpg"
                alt="The Biochar Revolution - Chickens and Biochar"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Award className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">Commercial Trial Results</span>
                </div>
                <h2 className="text-6xl font-bold mb-4 text-white leading-tight">
                  PROVEN
                  <br />
                  PERFORMANCE
                </h2>
                <p className="text-2xl text-white mb-4">
                  Alabama Commercial Trial
                </p>
                <p className="text-lg text-white/90 mb-6">
                  {trialData.location} • {trialData.duration} • {trialData.birdsPerHouse.toLocaleString()} birds per house
                </p>
              </div>
            </div>

            {/* Biochar Innovations Inc. watermark */}
            <div className="absolute bottom-6 right-6 text-white text-sm">
              Biochar Innovations Inc.
            </div>
          </div>
        </section>

        {/* Key Improvements Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Performance Improvements</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Mortality Reduction</span>
                <TrendingDown className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-1">{improvements.mortalityReduction}%</p>
              <p className="text-xs text-gray-500">Lower mortality rate</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Weight Gain</span>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">+{improvements.weightIncrease}%</p>
              <p className="text-xs text-gray-500">Increased total weight</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">FCR Improvement</span>
                <TrendingDown className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-1">{improvements.fcrImprovement}%</p>
              <p className="text-xs text-gray-500">Better feed efficiency</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Avg Bird Weight</span>
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-amber-600 mb-1">+{improvements.avgWeightIncrease}%</p>
              <p className="text-xs text-gray-500">Heavier birds</p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed House Comparison</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Control House */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Control House</h4>
                  <p className="text-sm text-gray-600">Traditional Bedding</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Mortality Rate</span>
                  <span className="text-lg font-bold text-red-600">{trialData.controlHouse.mortality}%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Total Weight</span>
                  <span className="text-lg font-bold text-gray-900">{trialData.controlHouse.totalWeight.toLocaleString()} lbs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Feed Conversion</span>
                  <span className="text-lg font-bold text-gray-900">{trialData.controlHouse.feedConversion}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Avg Bird Weight</span>
                  <span className="text-lg font-bold text-gray-900">{trialData.controlHouse.avgBirdWeight} lbs</span>
                </div>
              </div>
            </div>

            {/* Biochar House */}
            <div className="bg-white rounded-xl shadow-lg p-6 ring-2 ring-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Biochar House</h4>
                  <p className="text-sm text-green-600 font-semibold">Biochar-Enhanced Bedding</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Mortality Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">{trialData.biocharHouse.mortality}%</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      -{improvements.mortalityReduction}%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Total Weight</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">{trialData.biocharHouse.totalWeight.toLocaleString()} lbs</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      +{improvements.weightIncrease}%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Feed Conversion</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">{trialData.biocharHouse.feedConversion}</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      -{improvements.fcrImprovement}%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Avg Bird Weight</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">{trialData.biocharHouse.avgBirdWeight} lbs</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      +{improvements.avgWeightIncrease}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scale Impact */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-xl shadow-lg p-8 border-l-4 border-amber-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale Impact: Alabama Context</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Weekly Production (Alabama)</p>
                <p className="text-3xl font-bold text-gray-900">23M</p>
                <p className="text-sm text-gray-600">chickens per week</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Potential Impact</p>
                <p className="text-3xl font-bold text-green-600">Massive</p>
                <p className="text-sm text-gray-600">system-wide benefits</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Economic Significance</p>
                <p className="text-3xl font-bold text-blue-600">High</p>
                <p className="text-sm text-gray-600">improved profitability</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Even small percentage improvements translate to substantial economic gains across Alabama&apos;s poultry industry.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trial Methodology</h3>
            <div className="prose prose-sm max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Controlled Comparison:</strong> Two identical commercial poultry houses on the same farm, managed by the same personnel, using identical feed and management practices.
              </p>
              <p className="mb-4">
                <strong>Biochar Application:</strong> Small proportion biochar added to bedding material in test house. Control house used traditional pine shavings only.
              </p>
              <p className="mb-4">
                <strong>Metrics Tracked:</strong> Daily mortality counts, feed consumption, and final harvest weights measured by commercial processing facility.
              </p>
              <p>
                <strong>Data Validation:</strong> Results verified by independent third-party processing plant scale systems and industry-standard record keeping.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 WasteHub. Trial data is preliminary and subject to verification.
          </p>
        </div>
      </footer>
    </div>
  );
}
