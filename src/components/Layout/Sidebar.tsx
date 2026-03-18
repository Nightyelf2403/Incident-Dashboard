import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-[#0f172a] text-white flex flex-col">
      {/* Logo */}
      <div className="p-5 text-xl font-bold border-b border-gray-700">
        🚨
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {/* Home */}
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-white/10 backdrop-blur text-white scale-[1.03]"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <Home size={18} />
          Home
        </NavLink>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-white/10 backdrop-blur text-white scale-[1.03]"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-white/10 backdrop-blur text-white scale-[1.03]"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <Settings size={18} />
          Settings
        </NavLink>
      </nav>

      {/* Footer (optional small branding) */}
      <div className="p-4 text-xs text-gray-400 border-t border-gray-700">
        © 2026 Incident Dashboard
      </div>
    </div>
  );
};

export default Sidebar;
