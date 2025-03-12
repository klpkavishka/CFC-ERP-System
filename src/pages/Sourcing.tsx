import React, { useState } from 'react';
import { Users, DollarSign, Fish, Scale, MapPin, Anchor, Ship, ThermometerSnowflake, AlertTriangle, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const priceData = [
  { date: '03/01', tuna: 950, seerfish: 1200, prawns: 1500 },
  { date: '03/02', tuna: 920, seerfish: 1180, prawns: 1500 },
  { date: '03/03', tuna: 980, seerfish: 1150, prawns: 1520 },
  { date: '03/04', tuna: 960, seerfish: 1220, prawns: 1490 },
  { date: '03/05', tuna: 990, seerfish: 1200, prawns: 1510 },
  { date: '03/06', tuna: 950, seerfish: 1180, prawns: 1500 },
  { date: '03/07', tuna: 970, seerfish: 1190, prawns: 1505 },
];

const Sourcing = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showHarborDetails, setShowHarborDetails] = useState(false);
  const [selectedHarbor, setSelectedHarbor] = useState(null);
  const [activeTab, setActiveTab] = useState('harbors'); // 'harbors' or 'anchorages'

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Direct Sourcing Platform</h1>
          <p className="text-gray-600">Managing 23 fishing harbors and 58 anchorage points</p>
        </div>
        <div className="space-x-2">
          <button 
            onClick={() => setShowRegisterModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Register New Fisherman
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Export Data
          </button>
        </div>
      </div>

      {/* Sourcing Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Fishermen</p>
              <p className="text-2xl font-semibold">1,245</p>
              <p className="text-sm text-green-600">↑ 12 this week</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Today's Catch</p>
              <p className="text-2xl font-semibold">2,850 kg</p>
              <p className="text-sm text-blue-600">23 vessels reporting</p>
            </div>
            <Fish className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Vessels</p>
              <p className="text-2xl font-semibold">45</p>
              <p className="text-sm text-purple-600">12 at harbor</p>
            </div>
            <Ship className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Quality Score</p>
              <p className="text-2xl font-semibold">4.8/5.0</p>
              <p className="text-sm text-green-600">↑ 0.2 from last week</p>
            </div>
            <Scale className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Location Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'harbors'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('harbors')}
            >
              Fishing Harbors (23)
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'anchorages'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('anchorages')}
            >
              Anchorage Points (58)
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeTab === 'harbors' ? (
              <>
                <div 
                  className="p-4 border rounded-lg cursor-pointer hover:border-blue-500"
                  onClick={() => {
                    setSelectedHarbor('Negombo');
                    setShowHarborDetails(true);
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Negombo Harbor</h3>
                    <Ship className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Vessels</span>
                      <span>15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today's Catch</span>
                      <span>850 kg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Quality Score</span>
                      <span className="text-green-600">4.9/5.0</span>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 border rounded-lg cursor-pointer hover:border-blue-500"
                  onClick={() => {
                    setSelectedHarbor('Trincomalee');
                    setShowHarborDetails(true);
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Trincomalee Harbor</h3>
                    <Ship className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Vessels</span>
                      <span>12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today's Catch</span>
                      <span>720 kg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Quality Score</span>
                      <span className="text-green-600">4.8/5.0</span>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 border rounded-lg cursor-pointer hover:border-blue-500"
                  onClick={() => {
                    setSelectedHarbor('Galle');
                    setShowHarborDetails(true);
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Galle Harbor</h3>
                    <Ship className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Vessels</span>
                      <span>8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today's Catch</span>
                      <span>540 kg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Quality Score</span>
                      <span className="text-green-600">4.7/5.0</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Beruwala Point</h3>
                    <Anchor className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Boats</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today's Catch</span>
                      <span>180 kg</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Chilaw Point</h3>
                    <Anchor className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Boats</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today's Catch</span>
                      <span>120 kg</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Kalpitiya Point</h3>
                    <Anchor className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Boats</span>
                      <span>4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Today's Catch</span>
                      <span>150 kg</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Price Trends */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Market Price Trends</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Last 7 Days</span>
            <BarChart2 className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="tuna" stroke="#3B82F6" name="Tuna" />
              <Line type="monotone" dataKey="seerfish" stroke="#10B981" name="Seer Fish" />
              <Line type="monotone" dataKey="prawns" stroke="#6366F1" name="Prawns" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Register Fisherman Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Register New Fisherman</h2>
              <button 
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">NIC Number</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vessel Registration Number</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Primary Harbor/Anchorage</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                  <option>Negombo Harbor</option>
                  <option>Trincomalee Harbor</option>
                  <option>Galle Harbor</option>
                  <option>Beruwala Point</option>
                  <option>Chilaw Point</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fishing License Number</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Harbor Details Modal */}
      {showHarborDetails && selectedHarbor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl h-3/4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedHarbor} Harbor Details</h2>
              <button 
                onClick={() => {
                  setShowHarborDetails(false);
                  setSelectedHarbor(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            {/* Harbor Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Vessel Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>At Sea</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Docked</span>
                    <span className="font-medium">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance</span>
                    <span className="font-medium">2</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Catch Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Today</span>
                    <span className="font-medium">850 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Week</span>
                    <span className="font-medium">5,240 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trend</span>
                    <span className="text-green-600">↑ 12%</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">Quality Metrics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Average Score</span>
                    <span className="font-medium">4.9/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance</span>
                    <span className="text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rejections</span>
                    <span className="text-red-600">2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Vessels */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4">Active Vessels</h3>
              <div className="bg-white rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vessel ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Captain</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Report</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catch (kg)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">VSL-001</td>
                      <td className="px-6 py-4 whitespace-nowrap">K. Perera</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          At Sea
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">10:30 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap">250</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">VSL-002</td>
                      <td className="px-6 py-4 whitespace-nowrap">M. Silva</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Docked
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">09:45 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap">180</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality Control */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4">Quality Control</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Temperature Monitoring</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Cold Storage 1</span>
                      <span className="text-green-600">-18°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cold Storage 2</span>
                      <span className="text-green-600">-20°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Processing Area</span>
                      <span className="text-yellow-600">4°C</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Recent Inspections</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Health Inspection</span>
                      <span className="text-green-600">Passed (03/05)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Equipment Check</span>
                      <span className="text-green-600">Passed (03/04)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Safety Audit</span>
                      <span className="text-green-600">Passed (03/03)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => {
                  setShowHarborDetails(false);
                  setSelectedHarbor(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sourcing;