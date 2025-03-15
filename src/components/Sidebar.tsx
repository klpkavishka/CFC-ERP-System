import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Truck, 
  Users,
  Fish,
  DollarSign,
  Factory,
  MessageSquare,
  Target,
  Briefcase,
  ClipboardList
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-800 text-white p-4 overflow-y-auto">
      <div className="flex items-center gap-2 mb-8">
        <Fish className="w-8 h-8" />
        <h1 className="text-xl font-bold">CFC ERP System</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </NavLink>
        
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <Package className="w-5 h-5" />
          Inventory
        </NavLink>
        
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <ShoppingCart className="w-5 h-5" />
          Orders
        </NavLink>
        
        <NavLink
          to="/fleet"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <Truck className="w-5 h-5" />
          Fleet Management
        </NavLink>
        
        <NavLink
          to="/sourcing"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <Users className="w-5 h-5" />
          Direct Sourcing
        </NavLink>

        <div className="border-t border-blue-700 my-4"></div>

        <NavLink
          to="/finance"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <DollarSign className="w-5 h-5" />
          Finance
        </NavLink>

        <NavLink
          to="/manufacturing"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <Factory className="w-5 h-5" />
          Manufacturing
        </NavLink>

        <NavLink
          to="/communication"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <MessageSquare className="w-5 h-5" />
          Communication
        </NavLink>

        <NavLink
          to="/marketing"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <Target className="w-5 h-5" />
          Marketing
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <ClipboardList className="w-5 h-5" />
          Projects
        </NavLink>

        <NavLink
          to="/hr"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors ${
              isActive ? 'bg-blue-700' : ''
            }`
          }
        >
          <Briefcase className="w-5 h-5" />
          HR Management
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;