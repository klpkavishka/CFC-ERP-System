import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Bell, Users, CheckCircle, Clock } from 'lucide-react';

const Communication = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Communication Center</h1>
          <p className="text-gray-600">Customer and internal communication management</p>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            New Message
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Start Meeting
          </button>
        </div>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Chats</p>
              <p className="text-2xl font-semibold">24</p>
              <p className="text-sm text-green-600">5 high priority</p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Response Time</p>
              <p className="text-2xl font-semibold">4.2 min</p>
              <p className="text-sm text-green-600">↓ 15% vs last week</p>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Resolution Rate</p>
              <p className="text-2xl font-semibold">94%</p>
              <p className="text-sm text-green-600">↑ 3% this month</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Agents</p>
              <p className="text-2xl font-semibold">12</p>
              <p className="text-sm text-blue-600">3 in meetings</p>
            </div>
            <Users className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Communication Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 col-span-2">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold">Recent Conversations</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">Colombo Retail Outlet #12</h3>
                  <p className="text-sm text-gray-600">Stock inquiry for next week's delivery</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Last message: 5 minutes ago</span>
                <span>2 unread messages</span>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">Navy Mess Hall</h3>
                  <p className="text-sm text-gray-600">Delivery confirmation for today's order</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Resolved</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Last message: 15 minutes ago</span>
                <span>Closed by Agent</span>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">Negombo Fish Market</h3>
                  <p className="text-sm text-gray-600">Price update request for fresh catch</p>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Urgent</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Last message: 2 minutes ago</span>
                <span>Waiting for response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications & Alerts */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold">Recent Notifications</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">New order received</p>
                  <p className="text-xs text-gray-500">Sathosa Outlet #45 placed a bulk order</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Stock alert</p>
                  <p className="text-xs text-gray-500">Tuna stock running low in Colombo warehouse</p>
                  <p className="text-xs text-gray-400">15 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Delivery completed</p>
                  <p className="text-xs text-gray-500">Order #2024-156 delivered successfully</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <button className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                <Phone className="w-4 h-4" />
                <span>Start Conference Call</span>
              </button>
              <button className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                <Mail className="w-4 h-4" />
                <span>Send Broadcast Message</span>
              </button>
              <button className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                <Bell className="w-4 h-4" />
                <span>Create Alert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;