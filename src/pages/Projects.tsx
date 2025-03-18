import React, { useState } from 'react';
import { ClipboardList, Clock, CheckCircle, AlertTriangle, Users, Target, Calendar } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Project Management</h1>
          <p className="text-gray-600">Track and manage ongoing projects</p>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            New Project
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Project Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Projects</p>
              <p className="text-2xl font-semibold">12</p>
              <p className="text-sm text-green-600">4 near completion</p>
            </div>
            <ClipboardList className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">On Schedule</p>
              <p className="text-2xl font-semibold">85%</p>
              <p className="text-sm text-green-600">Above target</p>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Team Members</p>
              <p className="text-2xl font-semibold">45</p>
              <p className="text-sm text-blue-600">8 teams</p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Completion Rate</p>
              <p className="text-2xl font-semibold">92%</p>
              <p className="text-sm text-green-600">Last 30 days</p>
            </div>
            <Target className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">Active Projects</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team Lead
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">Cold Storage Expansion</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    On Track
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">65%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span>K. Perera</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span>2024-04-15</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                    High
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">Fleet Tracking System</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    At Risk
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">45%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span>M. Silva</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span>2024-03-30</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                    Medium
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold">Project Timeline</h2>
        </div>
        <div className="p-4">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Equipment Installation</h3>
                <div className="mt-1 flex items-center">
                  <span className="text-sm text-gray-500">Completed on March 10, 2024</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-green-600">On schedule</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Staff Training</h3>
                <div className="mt-1 flex items-center">
                  <span className="text-sm text-gray-500">In Progress</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-yellow-600">2 days remaining</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">System Integration</h3>
                <div className="mt-1 flex items-center">
                  <span className="text-sm text-gray-500">Pending</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-gray-600">Starts March 20, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;