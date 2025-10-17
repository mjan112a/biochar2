'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = (dontShowAgain: boolean = false) => {
    if (dontShowAgain) {
      localStorage.setItem('hasSeenWelcome', 'true');
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={() => handleClose(false)}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-3xl font-bold mb-2">
            Welcome to the Biochar Circularity Tool
          </h2>
          <p className="text-green-100 text-lg">
            Explore how poultry waste transforms into valuable biochar
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Tour */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🚀 Quick Tour - 3 Ways to Explore
            </h3>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Toggle Between Systems
                  </h4>
                  <p className="text-sm text-gray-700">
                    Use the <strong>Current Practice / Proposed System</strong> switch at the top to compare the linear waste disposal approach vs. the circular biochar economy.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start bg-green-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Filter by Benefits
                  </h4>
                  <p className="text-sm text-gray-700">
                    Click the <strong>Economic</strong>, <strong>Environmental</strong>, or <strong>Reuse</strong> buttons to see specific value metrics appear on the diagram.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start bg-purple-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Explore Components
                  </h4>
                  <p className="text-sm text-gray-700">
                    Click any <strong>component box</strong> in the diagram to view detailed inputs, outputs, and benefits for that part of the system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-800">
              <strong>💡 Key Insight:</strong> This tool demonstrates how integrating anaerobic digestion and pyrolysis creates synergistic effects—producing 25-37% more methane while sequestering carbon and recovering 95% of phosphorus.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => handleClose(true)}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Got it! Don&apos;t show again
            </button>
            <button
              onClick={() => handleClose(false)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Remind me later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
