import { menuItems } from "@src/lib/menuItems";
import { Link } from "react-router-dom";
import { LayoutDashboard, Home, Settings } from "lucide-react";

const icons: any = {
  Dashboard: LayoutDashboard,
  Home: Home,
  Settings: Settings,
};

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Incident UI</h2>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = icons[item.name];

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
