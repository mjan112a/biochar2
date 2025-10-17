/**
 * Subsystem Diagram - Shows inputs and outputs for a specific component
 * Simple visual representation of material flows
 */

'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { ComponentName, FlowItem } from '@/types';

interface SubsystemDiagramProps {
  componentId: ComponentName;
  componentName: string;
  inputs: FlowItem[];
  outputs: FlowItem[];
}

export function SubsystemDiagram({ 
  componentId, 
  componentName, 
  inputs, 
  outputs 
}: SubsystemDiagramProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8">
      <h3 className="text-xl font-bold mb-6 text-center text-gray-900">
        Material Flows
      </h3>
      
      <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
        {/* Inputs Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-sm font-semibold text-blue-700 mb-3 text-center">Inputs</h4>
          <div className="space-y-3">
            {inputs.map((input, idx) => (
              <div key={idx} className="flex items-center justify-end gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{input.label}</p>
                  {input.amount && (
                    <p className="text-xs text-gray-600">{input.amount}</p>
                  )}
                </div>
                <svg width="30" height="2" className="flex-shrink-0">
                  <defs>
                    <marker
                      id={`arrow-input-${idx}`}
                      markerWidth="8"
                      markerHeight="6"
                      refX="7"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 8 3, 0 6" fill="#3B82F6" />
                    </marker>
                  </defs>
                  <line
                    x1="0"
                    y1="1"
                    x2="30"
                    y2="1"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    markerEnd={`url(#arrow-input-${idx})`}
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Component Center */}
        <div className="flex-shrink-0">
          <div className="border-2 border-dashed border-gray-400 bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-col items-center gap-2">
              <Icon name={componentId} size="xl" className="text-gray-700" />
              <p className="text-sm font-bold text-gray-900 text-center">
                {componentName}
              </p>
            </div>
          </div>
        </div>

        {/* Outputs Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-sm font-semibold text-green-700 mb-3 text-center">Outputs</h4>
          <div className="space-y-3">
            {outputs.map((output, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg width="30" height="2" className="flex-shrink-0">
                  <defs>
                    <marker
                      id={`arrow-output-${idx}`}
                      markerWidth="8"
                      markerHeight="6"
                      refX="7"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
                    </marker>
                  </defs>
                  <line
                    x1="0"
                    y1="1"
                    x2="30"
                    y2="1"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd={`url(#arrow-output-${idx})`}
                  />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">{output.label}</p>
                  {output.amount && (
                    <p className="text-xs text-gray-600">{output.amount}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
