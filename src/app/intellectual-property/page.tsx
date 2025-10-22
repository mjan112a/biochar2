'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function IntellectualPropertyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
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
                Intellectual Property
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10" />
              <div>
                <p className="text-sm font-semibold text-white/90">Patent Pending</p>
                <h2 className="text-3xl font-bold">
                  UNIFIED PATENT CLAIMS
                </h2>
              </div>
            </div>
            <p className="text-xl text-white/90">
              Poultry Waste Treatment System with Optimization Control
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-sm max-w-none">
            
            {/* Header */}
            <div className="text-center border-b-2 border-gray-300 pb-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                CLAIM SET FOR SINGLE PATENT APPLICATION
              </h3>
            </div>

            {/* Independent Claims Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-blue-700 mb-6 pb-2 border-b-2 border-blue-200">
                INDEPENDENT CLAIMS
              </h3>

              {/* Claim 1 */}
              <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-gray-900 mb-3">Claim 1.</p>
                <p className="text-gray-700 leading-relaxed mb-2">An integrated waste treatment system comprising:</p>
                <ul className="list-none pl-6 space-y-2 text-gray-700">
                  <li>• a pyrolysis reactor configured to thermally decompose organic waste material in an oxygen-limited environment at a temperature between 300°C and 800°C, said pyrolysis reactor producing solid biochar and gaseous pyrolysis products;</li>
                  <li>• an anaerobic digestion reactor containing anaerobic microorganisms configured to digest organic material and produce biogas comprising methane;</li>
                  <li>• a gas transfer conduit fluidly connecting said pyrolysis reactor to said anaerobic digestion reactor and configured to deliver at least a portion of said gaseous pyrolysis products from said pyrolysis reactor to said anaerobic digestion reactor, wherein said gaseous pyrolysis products serve as a substrate for said anaerobic microorganisms; and</li>
                  <li>• a biochar recovery system configured to collect said solid biochar from said pyrolysis reactor;</li>
                  <li>• wherein said gaseous pyrolysis products increase methane production in said anaerobic digestion reactor by at least 20% compared to methane production without said gaseous pyrolysis products.</li>
                </ul>
              </div>

              {/* Claims 2-6 */}
              <div className="space-y-4 pl-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 2.</p>
                  <p className="text-gray-700">The system of claim 1, wherein said organic waste material comprises poultry litter containing nitrogen at 2-6% by dry weight and phosphorus at 1-3% by dry weight.</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 3.</p>
                  <p className="text-gray-700">The system of claim 2, wherein said gaseous pyrolysis products comprise hydrogen at 10-50% by volume and carbon monoxide at 15-35% by volume.</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 4.</p>
                  <p className="text-gray-700 mb-2">The system of claim 1, further comprising:</p>
                  <ul className="list-none pl-4 space-y-1 text-gray-700">
                    <li>• a heat recovery system configured to capture thermal energy from said gaseous pyrolysis products exiting said pyrolysis reactor; and</li>
                    <li>• a heat distribution network fluidly connected to said heat recovery system and configured to transfer said thermal energy to at least one component selected from the group consisting of: said pyrolysis reactor, a feedstock drying system, and said anaerobic digestion reactor.</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 5.</p>
                  <p className="text-gray-700">The system of claim 1, further comprising a biochar addition system configured to introduce a portion of said solid biochar into said anaerobic digestion reactor at a concentration of 5-20 grams per liter of reactor volume.</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 6.</p>
                  <p className="text-gray-700">The system of claim 1, wherein said solid biochar has a surface area of at least 50 m²/g, a nitrogen content of 1-4% by weight, and a phosphorus content of 0.5-2% by weight.</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* Method Claims (7-12) */}
            <div className="mb-12">
              <div className="mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-gray-900 mb-3">Claim 7.</p>
                <p className="text-gray-700 leading-relaxed mb-2">A method for treating poultry waste comprising:</p>
                <ul className="list-none pl-6 space-y-2 text-gray-700">
                  <li>• providing poultry litter containing organic matter, nitrogen, and phosphorus;</li>
                  <li>• dividing said poultry litter into a first portion and a second portion;</li>
                  <li>• pyrolyzing said first portion in an oxygen-limited environment at a temperature between 300°C and 800°C to produce biochar and pyrolysis gases, wherein said pyrolysis gases comprise hydrogen and carbon monoxide;</li>
                  <li>• directing at least a portion of said pyrolysis gases to an anaerobic digestion reactor containing methanogenic bacteria;</li>
                  <li>• introducing said second portion of said poultry litter into said anaerobic digestion reactor;</li>
                  <li>• anaerobically digesting said second portion and said pyrolysis gases to produce biogas comprising methane, wherein said pyrolysis gases increase methane production by at least 20% compared to anaerobic digestion without said pyrolysis gases; and</li>
                  <li>• recovering said biochar.</li>
                </ul>
              </div>

              <div className="space-y-4 pl-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 8.</p>
                  <p className="text-gray-700">The method of claim 7, wherein said first portion comprises 30-50% of said poultry litter by dry weight and said second portion comprises 50-70% of said poultry litter by dry weight.</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 9.</p>
                  <p className="text-gray-700">The method of claim 7, further comprising drying said poultry litter to reduce moisture content to below 20% by weight prior to said dividing.</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 10.</p>
                  <p className="text-gray-700">The method of claim 7, further comprising introducing a portion of said biochar into said anaerobic digestion reactor at a rate of 5-20 grams per liter of reactor volume.</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 11.</p>
                  <p className="text-gray-700 mb-2">The method of claim 7, further comprising:</p>
                  <ul className="list-none pl-4 space-y-1 text-gray-700">
                    <li>• combusting a portion of said pyrolysis gases to generate thermal energy; and</li>
                    <li>• transferring said thermal energy to maintain said pyrolysis reactor at said temperature between 300°C and 800°C.</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Claim 12.</p>
                  <p className="text-gray-700">The method of claim 7, wherein said methanogenic bacteria convert said hydrogen and said carbon monoxide to methane through hydrogenotrophic methanogenesis and acetoclastic methanogenesis.</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* Complete System Claims (13-18) */}
            <div className="mb-12">
              <div className="mb-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-gray-900 mb-3">Claim 13.</p>
                <p className="text-gray-700 mb-2">A poultry farm waste treatment system comprising:</p>
                <ul className="list-none pl-6 space-y-2 text-gray-700 text-sm">
                  <li>• a poultry litter collection system configured to collect poultry litter from at least one poultry housing facility;</li>
                  <li>• a preprocessing unit in fluid communication with said poultry litter collection system, said preprocessing unit configured to reduce moisture content of said poultry litter to below 20% by weight;</li>
                  <li>• a feed distribution system in fluid communication with said preprocessing unit, said feed distribution system configured to divide said poultry litter into a pyrolysis stream and a digestion stream;</li>
                  <li>• a pyrolysis unit configured to receive said pyrolysis stream and to convert said pyrolysis stream at a temperature of 400-600°C into biochar having a nitrogen content of 1-4% by weight and a phosphorus content of 0.5-2% by weight, said pyrolysis unit producing hydrogen-rich pyrolysis gases comprising hydrogen at 10-50% by volume;</li>
                  <li>• an anaerobic digestion unit containing methanogenic bacterial consortia with feedstock inlet, gas inlet, biochar addition port, and biogas outlet;</li>
                  <li>• a biogas collection system fluidly connected to said biogas outlet;</li>
                  <li>• a heat integration network with heat recovery and transfer conduits;</li>
                  <li>• a biochar recovery system;</li>
                  <li>• wherein said system achieves thermal self-sufficiency through combustion of pyrolysis gases and biogas.</li>
                </ul>
              </div>

              <div className="space-y-4 pl-4">
                {[14, 15, 16, 17, 18].map((num) => (
                  <div key={num} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Claim {num}.</p>
                    <p className="text-gray-700 text-sm">
                      {num === 14 && "The system of claim 13, further comprising a biochar return system configured to transport biochar from said biochar recovery system to said at least one poultry housing facility for use as poultry bedding material."}
                      {num === 15 && "The system of claim 13, wherein said anaerobic digestion unit operates with a hydraulic retention time of 3-15 days and produces at least 25% more methane compared to anaerobic digestion without said hydrogen-rich pyrolysis gases."}
                      {num === 16 && "The system of claim 13, further comprising a biogas upgrading system configured to remove CO₂ from said methane-enriched biogas using biochar as a scrubbing medium to produce biomethane at 84-95% purity."}
                      {num === 17 && "The system of claim 13, wherein said feed distribution system is configured to direct 30-50% of said poultry litter by dry weight to said pyrolysis stream and 50-70% of said poultry litter by dry weight to said digestion stream."}
                      {num === 18 && "The system of claim 13, further comprising a digestate recovery system fluidly connected to said anaerobic digestion unit and configured to collect nutrient-containing digestate from said anaerobic digestion unit."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue with remaining claims in next page section... */}
            <div className="my-8 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg text-center">
              <p className="text-lg font-bold text-gray-800 mb-2">Full Patent Document Contains 40 Claims</p>
              <p className="text-sm text-gray-600">Claims 19-40 include biochar composition, smart control systems, optimization methods, and standalone control platforms - protecting all aspects of the integrated system.</p>
            </div>

            {/* Summary Section */}
            <div className="mt-12 p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">CLAIM SET ORGANIZATION</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Claims 1-6:</p>
                  <p className="text-gray-700">Core integrated waste treatment system (apparatus)</p>
                  
                  <p className="font-semibold text-gray-800 mt-3">Claims 7-12:</p>
                  <p className="text-gray-700">Basic treatment method</p>
                  
                  <p className="font-semibold text-gray-800 mt-3">Claims 13-18:</p>
                  <p className="text-gray-700">Complete poultry farm system with heat integration</p>
                  
                  <p className="font-semibold text-gray-800 mt-3">Claims 19-23:</p>
                  <p className="text-gray-700">Biochar composition (product)</p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Claims 24-29:</p>
                  <p className="text-gray-700">System with control and optimization features</p>
                  
                  <p className="font-semibold text-gray-800 mt-3">Claims 30-34:</p>
                  <p className="text-gray-700">Method with optimization and machine learning</p>
                  
                  <p className="font-semibold text-gray-800 mt-3">Claims 35-40:</p>
                  <p className="text-gray-700">Standalone control system</p>
                  
                  <p className="font-bold text-blue-900 mt-4 text-base">Total: 40 Claims</p>
                  <p className="text-gray-700">(7 Independent, 33 Dependent)</p>
                </div>
              </div>
            </div>

            {/* Key Improvements Section */}
            <div className="mt-8 p-8 bg-green-50 rounded-xl border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">KEY IMPROVEMENTS FOR USPTO ACCEPTANCE</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">1. ANTECEDENT BASIS:</p>
                  <p className="text-gray-700">Fixed throughout - proper &quot;a/an&quot; introduction then &quot;said/the&quot; reference</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">2. STRUCTURAL CLARITY:</p>
                  <p className="text-gray-700">Added specific connections (&quot;fluidly connected&quot;, &quot;in fluid communication&quot;, &quot;in electronic communication&quot;)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">3. DEFINITE LIMITATIONS:</p>
                  <p className="text-gray-700">Changed vague terms like &quot;enhance&quot; to specific &quot;increase by at least 20%&quot;</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">4. FUNCTIONAL LANGUAGE:</p>
                  <p className="text-gray-700">All functions tied to structure performing the function</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">5. § 101 COMPLIANCE:</p>
                  <p className="text-gray-700">Transformed abstract business methods into concrete implementations with specific sensor arrays, programmable controllers with processors and memory, and machine-readable instructions</p>
                </div>
              </div>
            </div>

            {/* Notice */}
            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
              <p className="font-bold text-gray-900 mb-2">⚠️ Confidential & Proprietary</p>
              <p className="text-sm text-gray-700 mb-2">
                This unified claim set protects the entire invention from basic system to advanced control features while addressing all USPTO requirements. The combination of synergistic process integration, intelligent optimization, and circular economy design creates a defensible competitive position.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Status:</strong> Patent Pending. Filing provides immediate protection and establishes priority date.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 WasteHub. Patent claims subject to USPTO review and approval.
          </p>
        </div>
      </footer>
    </div>
  );
}
