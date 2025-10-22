/**
 * Subsystem Diagram - Enhanced version showing actions, inputs, outputs, and impacts
 * Includes visual reduction indicators for improved items
 */

'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { ComponentName, FlowItem } from '@/types';

interface SubsystemDiagramProps {
  componentId: ComponentName;
  componentName: string;
  actions?: string[];
  inputs: FlowItem[];
  outputs: FlowItem[];
  impacts?: {
    benefits?: string[];
    detriments?: string[];
    visualReductions?: Array<{
      item: string;
      from: string;
      to: string;
      description: string;
    }>;
  };
}

export function SubsystemDiagram({ 
  componentId, 
  componentName,
  actions,
  inputs, 
  outputs,
  impacts
}: SubsystemDiagramProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
      {/* Actions/Processes Section */}
      {actions && actions.length > 0 && !actions[0].includes('Does not exist') && (
        <div className="mb-6 text-center">
          <h4 className="text-xs font-semibold text-purple-700 mb-2">Actions/Processes</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {actions.map((action, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium"
              >
                {action}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-6 flex-wrap md:flex-nowrap">
        {/* Inputs Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-sm font-semibold text-blue-700 mb-3 text-center">Inputs</h4>
          <div className="space-y-2">
            {inputs.map((input, idx) => (
              <div 
                key={idx} 
                className={`flex items-center justify-end gap-2 ${input.highlight ? 'animate-pulse' : ''} group relative`}
              >
                <div className="text-right cursor-help">
                  <p className={`text-sm font-medium ${input.highlight ? 'text-green-700' : 'text-gray-900'} ${input.emphasis ? 'font-bold text-red-700' : ''}`}>
                    {input.icon && <span className="mr-1">{input.icon}</span>}
                    {input.label}
                  </p>
                  {input.amount && (
                    <p className="text-xs text-gray-600">{input.amount}</p>
                  )}
                  
                  {/* Hover Tooltip */}
                  {input.description && (
                    <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 w-64 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="font-semibold mb-1">{input.label}</div>
                      <div className="text-gray-200">{input.description}</div>
                      {/* Arrow */}
                      <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900"></div>
                    </div>
                  )}
                </div>
                <svg width="25" height="2" className="flex-shrink-0">
                  <defs>
                    <marker
                      id={`arrow-input-${idx}`}
                      markerWidth="6"
                      markerHeight="4"
                      refX="5"
                      refY="2"
                      orient="auto"
                    >
                      <polygon points="0 0, 6 2, 0 4" fill={input.highlight ? '#10B981' : '#3B82F6'} />
                    </marker>
                  </defs>
                  <line
                    x1="0"
                    y1="1"
                    x2="25"
                    y2="1"
                    stroke={input.highlight ? '#10B981' : '#3B82F6'}
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
          <div className="border-2 border-dashed border-gray-400 bg-white rounded-lg p-4 shadow-md min-w-[120px]">
            <div className="flex flex-col items-center gap-2">
              <Icon name={componentId} size="lg" className="text-gray-700" />
              <p className="text-xs font-bold text-gray-900 text-center leading-tight">
                {componentName}
              </p>
            </div>
          </div>
        </div>

        {/* Outputs Section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-sm font-semibold text-green-700 mb-3 text-center">Outputs</h4>
          <div className="space-y-2">
            {outputs.map((output, idx) => (
              <div key={idx} className={`flex items-center gap-2 ${output.highlight ? 'animate-pulse' : ''} group relative`}>
                <svg width="25" height="2" className="flex-shrink-0">
                  <defs>
                    <marker
                      id={`arrow-output-${idx}`}
                      markerWidth="6"
                      markerHeight="4"
                      refX="5"
                      refY="2"
                      orient="auto"
                    >
                      <polygon points="0 0, 6 2, 0 4" fill={output.highlight ? '#10B981' : output.emphasis ? '#EF4444' : '#10B981'} />
                    </marker>
                  </defs>
                  <line
                    x1="0"
                    y1="1"
                    x2="25"
                    y2="1"
                    stroke={output.highlight ? '#10B981' : output.emphasis ? '#EF4444' : '#10B981'}
                    strokeWidth="2"
                    markerEnd={`url(#arrow-output-${idx})`}
                  />
                </svg>
                <div className="text-left cursor-help">
                  <p className={`text-sm font-medium ${output.highlight ? 'text-green-700' : 'text-gray-900'} ${output.emphasis ? 'font-bold text-red-700' : ''} ${output.reduction ? 'line-through opacity-50' : ''}`}>
                    {output.icon && <span className="mr-1">{output.icon}</span>}
                    {output.label}
                  </p>
                  {output.amount && (
                    <p className="text-xs text-gray-600">{output.amount}</p>
                  )}
                  
                  {/* Hover Tooltip */}
                  {output.description && (
                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-64 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="font-semibold mb-1">{output.label}</div>
                      <div className="text-gray-200">{output.description}</div>
                      {/* Arrow */}
                      <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-gray-900"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impacts Section */}
      {impacts && (impacts.benefits || impacts.detriments || impacts.visualReductions) && (
        <div className="mt-6 pt-4 border-t border-gray-300">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">
            Impacts (Benefits/Detriments)
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Benefits */}
            {impacts.benefits && impacts.benefits.length > 0 && (
              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="text-xs font-bold text-green-800 mb-2">✓ Benefits</h5>
                <ul className="space-y-1">
                  {impacts.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-green-700 flex items-start gap-1">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Detriments */}
            {impacts.detriments && impacts.detriments.length > 0 && !impacts.detriments[0].includes('Does not exist') && (
              <div className="bg-red-50 rounded-lg p-3">
                <h5 className="text-xs font-bold text-red-800 mb-2">⚠ Detriments</h5>
                <ul className="space-y-1">
                  {impacts.detriments.map((detriment, idx) => (
                    <li key={idx} className="text-xs text-red-700 flex items-start gap-1">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>{detriment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Visual Reduction Indicators */}
          {impacts.visualReductions && impacts.visualReductions.length > 0 && (
            <div className="mt-4 bg-gradient-to-r from-amber-50 to-green-50 rounded-lg p-4">
              <h5 className="text-sm font-bold text-gray-800 mb-3 text-center">📊 Visual Improvements</h5>
              <div className="space-y-3">
                {impacts.visualReductions.map((reduction, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1">Before</p>
                      <p className="text-2xl">{reduction.from}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg width="40" height="20" className="mb-1">
                        <defs>
                          <marker
                            id={`reduction-arrow-${idx}`}
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
                          y1="10"
                          x2="40"
                          y2="10"
                          stroke="#10B981"
                          strokeWidth="2"
                          markerEnd={`url(#reduction-arrow-${idx})`}
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1">After</p>
                      <p className="text-2xl">{reduction.to}</p>
                    </div>
                    <div className="flex-1 ml-4">
                      <p className="text-xs text-green-700 font-medium">{reduction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
