import React from 'react';
import { Target, TrendingUp, Users, ShoppingBag, BarChart2, Share2, Globe, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const campaignData = [
  { month: 'Jan', retail: 45000, mobile: 28000, online: 32000 },
  { month: 'Feb', retail: 52000, mobile: 30000, online: 35000 },
  { month: 'Mar', retail: 48000, mobile: 32000, online: 38000 },
];

const Marketing = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Marketing Dashboard</h1>
          <p className="text-gray-600">Campaign performance and market analysis</p>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            New Campaign
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Marketing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Campaigns</p>
              <p className="text-2xl font-semibold">12</p>
              <p className="text-sm text-green-600">4 launching soon</p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Customer Reach</p>
              <p className="text-2xl font-semibold">45.2K</p>
              <p className="text-sm text-green-600">↑ 12% this month</p>
            </div>
            <Users className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Conversion Rate</p>
              <p className="text-2xl font-semibold">3.8%</p>
              <p className="text-sm text-green-600">↑ 0.5% vs last month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Sales Growth</p>
              <p className="text-2xl font-semibold">18.5%</p>
              <p className="text-sm text-green-600">Above target</p>
            </div>
            <ShoppingBag className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Campaign Performance</h2>
            <BarChart2 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="retail" name="Retail Sales" fill="#3B82F6" />
                <Bar dataKey="mobile" name="Mobile Sales" fill="#10B981" />
                <Bar dataKey="online" name="Online Orders" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Regional Performance</h2>
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Colombo Region</span>
                <span className="text-green-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Galle Region</span>
                <span className="text-green-600">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Kandy Region</span>
                <span className="text-yellow-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Jaffna Region</span>
                <span className="text-yellow-600">58%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">Active Marketing Campaigns</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reach
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Share2 className="w-5 h-5 text-blue-500 mr-2" />
                    <span>Fish Mela Festival</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    Event
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">12.5K</td>
                <td className="px-6 py-4 whitespace-nowrap">4.2%</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">185%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-purple-500 mr-2" />
                    <span>Digital Awareness</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                    Digital
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">28.3K</td>
                <td className="px-6 py-4 whitespace-nowrap">3.8%</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">142%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Marketing;