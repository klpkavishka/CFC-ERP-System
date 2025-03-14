import React from 'react';
import * as recharts from 'recharts';
import { 
  Thermometer, 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  Truck,
  Users,
  Fish,
  DollarSign,
  Store,
  Building2,
  Ship,
  MapPin
} from 'lucide-react';

const salesData = [
  { month: 'Jan', retail: 4200, mobile: 1800, govt: 3500, sathosa: 2800 },
  { month: 'Feb', retail: 4500, mobile: 2000, govt: 3200, sathosa: 3000 },
  { month: 'Mar', retail: 4300, mobile: 1900, govt: 3800, sathosa: 2900 },
];

const inventoryData = [
  { name: 'Tuna', value: 35 },
  { name: 'Seer Fish', value: 25 },
  { name: 'Prawns', value: 20 },
  { name: 'Other', value: 20 },
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F97316'];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">CFC ERP Dashboard</h1>
          <p className="text-gray-600">Real-time overview of operations and performance</p>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Export Data
          </button>
        </div>
      </div>

      {/* Critical Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Cold Storage Status</p>
              <p className="text-2xl font-semibold">-18°C</p>
              <p className="text-sm text-green-600">All units optimal</p>
            </div>
            <Thermometer className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Fleet</p>
              <p className="text-2xl font-semibold">45/60</p>
              <p className="text-sm text-blue-600">15 in maintenance</p>
            </div>
            <Truck className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Today's Sourcing</p>
              <p className="text-2xl font-semibold">2,850 kg</p>
              <p className="text-sm text-purple-600">23 vessels reporting</p>
            </div>
            <Fish className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Daily Revenue</p>
              <p className="text-2xl font-semibold">Rs. 4.2M</p>
              <p className="text-sm text-green-600">↑ 12% vs yesterday</p>
            </div>
            <DollarSign className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">AI Insights & Alerts</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Tuna stock predicted to fall below threshold in 3 days
              </li>
              <li className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Demand surge expected in Colombo region next week
              </li>
              <li className="flex items-center">
                <Ship className="w-4 h-4 mr-2" />
                Optimal fishing zones identified near Trincomalee
              </li>
            </ul>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            View All Insights
          </button>
        </div>
      </div>

      {/* Operations Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Sales Performance */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Sales Channel Performance</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Last 3 Months</span>
            </div>
          </div>
          <div className="h-64">
            <recharts.ResponsiveContainer width="100%" height="100%">
              <recharts.BarChart data={salesData}>
                <recharts.CartesianGrid strokeDasharray="3 3" />
                <recharts.XAxis dataKey="month" />
                <recharts.YAxis />
                <recharts.Tooltip />
                <recharts.Bar dataKey="retail" name="Retail Outlets" fill="#3B82F6" />
                <recharts.Bar dataKey="mobile" name="Mobile Sales" fill="#10B981" />
                <recharts.Bar dataKey="govt" name="Government" fill="#8B5CF6" />
                <recharts.Bar dataKey="sathosa" name="Sathosa" fill="#F97316" />
              </recharts.BarChart>
            </recharts.ResponsiveContainer>
          </div>
        </div>

        {/* Inventory Distribution */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Current Inventory Distribution</h2>
            <Package className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64">
            <recharts.ResponsiveContainer width="100%" height="100%">
              <recharts.PieChart>
                <recharts.Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {inventoryData.map((entry, index) => (
                    <recharts.Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </recharts.Pie>
                <recharts.Tooltip />
              </recharts.PieChart>
            </recharts.ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Distribution Network</h3>
            <Store className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Retail Outlets</span>
              <span className="font-medium">105</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Mobile Units</span>
              <span className="font-medium">28</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Sathosa Outlets</span>
              <span className="font-medium">200</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Sourcing Status</h3>
            <Ship className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Active Harbors</span>
              <span className="font-medium">23</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Anchorage Points</span>
              <span className="font-medium">58</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Active Fishermen</span>
              <span className="font-medium">1,245</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Government Orders</h3>
            <Building2 className="w-5 h-5 text-purple-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Active Orders</span>
              <span className="font-medium">45</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pending Approval</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Monthly Volume</span>
              <span className="font-medium">15.2K kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h2 className="font-semibold mb-4">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Cold Storage System</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Fleet Tracking</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm">Order Processing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-sm">AI Predictions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;