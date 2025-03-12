import React, { useState } from 'react';
import { Package, AlertTriangle, ThermometerSnowflake, BarChart2, Recycle, TrendingUp, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const forecastData = [
  { day: 'Mon', actual: 2500, predicted: 2700 },
  { day: 'Tue', actual: 2300, predicted: 2400 },
  { day: 'Wed', actual: 2800, predicted: 2600 },
  { day: 'Thu', actual: 2600, predicted: 2800 },
  { day: 'Fri', actual: 3000, predicted: 2900 },
  { day: 'Sat', actual: 2400, predicted: 2500 },
  { day: 'Sun', actual: 2200, predicted: 2300 },
];

const Inventory = () => {
  const [showRestockModal, setShowRestockModal] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <div className="space-x-2">
          <button 
            onClick={() => setShowRestockModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Stock Entry
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Generate Reports
          </button>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">AI Insights</h2>
            <ul className="space-y-1">
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Tuna stock predicted to fall below threshold in 3 days
              </li>
              <li className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Demand for prawns expected to increase by 25% next week
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Optimal restock time for seer fish: Tomorrow morning
              </li>
            </ul>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            View All Insights
          </button>
        </div>
      </div>

      {/* Storage Units Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Cold Storage Unit 1</h3>
            <ThermometerSnowflake className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature</span>
              <span className="font-medium">-18°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Capacity Used</span>
              <span className="font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Energy Usage</span>
              <span className="text-green-600">Optimal</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Cold Storage Unit 2</h3>
            <ThermometerSnowflake className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature</span>
              <span className="font-medium">-20°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Capacity Used</span>
              <span className="font-medium">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Energy Usage</span>
              <span className="text-yellow-600">Above Average</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Processing Center</h3>
            <Package className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature</span>
              <span className="font-medium">4°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Capacity Used</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Processing Rate</span>
              <span className="text-green-600">On Schedule</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demand Forecasting */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Demand Forecast</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">7-Day Prediction</span>
            <BarChart2 className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="actual" stroke="#3B82F6" name="Actual Demand" />
              <Line type="monotone" dataKey="predicted" stroke="#10B981" name="Predicted Demand" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">Current Stock</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Storage Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batch ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity (kg)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBatch('BATCH-001')}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-gray-400 mr-2" />
                    <span>Tuna - Grade A</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Cold Storage Unit 1</td>
                <td className="px-6 py-4 whitespace-nowrap">BATCH-001</td>
                <td className="px-6 py-4 whitespace-nowrap">2,500</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Optimal
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBatch('BATCH-002')}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-gray-400 mr-2" />
                    <span>Seer Fish</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Cold Storage Unit 2</td>
                <td className="px-6 py-4 whitespace-nowrap">BATCH-002</td>
                <td className="px-6 py-4 whitespace-nowrap">1,800</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-03-12</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Low Stock
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBatch('BATCH-003')}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-gray-400 mr-2" />
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
                    <span>Prawns</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Processing Center</td>
                <td className="px-6 py-4 whitespace-nowrap">BATCH-003</td>
                <td className="px-6 py-4 whitespace-nowrap">950</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-03-10</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Temperature Alert
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Restock Modal */}
      {showRestockModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Stock</h2>
              <button 
                onClick={() => setShowRestockModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                  <option>Tuna - Grade A</option>
                  <option>Seer Fish</option>
                  <option>Prawns</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Storage Unit</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                  <option>Cold Storage Unit 1</option>
                  <option>Cold Storage Unit 2</option>
                  <option>Processing Center</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Supplier</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                  <option>Direct Sourcing - Negombo</option>
                  <option>Direct Sourcing - Trincomalee</option>
                  <option>Import - Thailand</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => setShowRestockModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Add Stock
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Batch Details Modal */}
      {selectedBatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Batch Details: {selectedBatch}</h2>
              <button 
                onClick={() => setSelectedBatch(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold mb-2">Quality Metrics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperature Consistency</span>
                    <span className="text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Moisture Level</span>
                    <span className="text-green-600">Optimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quality Score</span>
                    <span className="text-green-600">4.8/5.0</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Traceability</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Source</span>
                    <span>Negombo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Catch Date</span>
                    <span>2024-03-01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Date</span>
                    <span>2024-03-02</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Temperature History</h3>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { time: '00:00', temp: -18 },
                      { time: '04:00', temp: -17.8 },
                      { time: '08:00', temp: -18.2 },
                      { time: '12:00', temp: -18.1 },
                      { time: '16:00', temp: -17.9 },
                      { time: '20:00', temp: -18 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="temp" stroke="#3B82F6" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Download Report
                </button>
                <button 
                  onClick={() => setSelectedBatch(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;