import React, { useState } from 'react';
import { Factory, Package, Truck, AlertTriangle, Settings, Clock, CheckCircle, Users } from 'lucide-react';

const Manufacturing = () => {
  const [selectedLine, setSelectedLine] = useState(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manufacturing Operations</h1>
          <p className="text-gray-600">Production line management and processing</p>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Start New Batch
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Download Reports
          </button>
        </div>
      </div>

      {/* Production Line Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Lines</p>
              <p className="text-2xl font-semibold">4/5</p>
              <p className="text-sm text-green-600">Operating at 85% capacity</p>
            </div>
            <Factory className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Daily Output</p>
              <p className="text-2xl font-semibold">2,850 kg</p>
              <p className="text-sm text-blue-600">↑ 12% vs target</p>
            </div>
            <Package className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Quality Score</p>
              <p className="text-2xl font-semibold">98.5%</p>
              <p className="text-sm text-green-600">Above standard</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Staff on Duty</p>
              <p className="text-2xl font-semibold">45</p>
              <p className="text-sm text-blue-600">Full capacity</p>
            </div>
            <Users className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Production Lines */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">Production Lines Status</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Line 1 - Fish Processing</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Batch</span>
                  <span>Tuna Processing</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Output Rate</span>
                  <span>250 kg/hr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quality Check</span>
                  <span className="text-green-600">Passed</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Line 2 - Packaging</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Batch</span>
                  <span>Retail Packs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Output Rate</span>
                  <span>500 units/hr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quality Check</span>
                  <span className="text-green-600">Passed</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Line 3 - Special Processing</h3>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Maintenance</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Status</span>
                  <span>Scheduled Maintenance</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Downtime</span>
                  <span>2 hours remaining</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next Batch</span>
                  <span>15:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Control */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">Quality Control Metrics</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Temperature Control</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Processing Area</span>
                    <span className="text-sm text-green-600">4°C</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Packaging Area</span>
                    <span className="text-sm text-green-600">8°C</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Quality Checks</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Weight Consistency</span>
                  <span className="text-green-600">98.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Package Integrity</span>
                  <span className="text-green-600">99.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Product Quality</span>
                  <span className="text-green-600">97.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;