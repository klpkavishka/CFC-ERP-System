import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Thermometer, Package, TrendingUp, AlertTriangle } from 'lucide-react';

const data = [
  { name: 'Mon', inventory: 4000, orders: 2400 },
  { name: 'Tue', inventory: 3000, orders: 1398 },
  { name: 'Wed', inventory: 2000, orders: 9800 },
  { name: 'Thu', inventory: 2780, orders: 3908 },
  { name: 'Fri', inventory: 1890, orders: 4800 },
  { name: 'Sat', inventory: 2390, orders: 3800 },
  { name: 'Sun', inventory: 3490, orders: 4300 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Temperature Status */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Cold Storage Temp</p>
              <p className="text-2xl font-semibold">-18°C</p>
            </div>
            <Thermometer className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        {/* Current Inventory */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Current Inventory</p>
              <p className="text-2xl font-semibold">12,450 kg</p>
            </div>
            <Package className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Daily Orders */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Daily Orders</p>
              <p className="text-2xl font-semibold">284</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Alerts</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="inventory" fill="#3B82F6" name="Inventory (kg)" />
              <Bar dataKey="orders" fill="#8B5CF6" name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;