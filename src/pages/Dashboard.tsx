import { useAuth } from "@src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import StatsCards from "@components/Dashboard/StatsCards";
import IncidentList from "@components/Dashboard/IncidentList";
import MapView from "@components/Dashboard/MapView";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Please login to access dashboard
        </h2>

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <StatsCards />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-3">Incidents</h2>
          <IncidentList />
        </div>

        <div className="glass p-4 shadow">
          <h2 className="text-lg font-semibold mb-3">Map</h2>
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
