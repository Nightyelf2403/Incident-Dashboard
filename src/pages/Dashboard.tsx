import StatsCards from "@components/Dashboard/StatsCards";
import IncidentList from "@components/Dashboard/IncidentList";

const Dashboard = () => {
  return (
    <div>
      <StatsCards />

      <div className="grid grid-cols-3 gap-6">
        {/* Left side (main content) */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-3">Incidents</h2>
          <IncidentList />
        </div>

        {/* Right side (placeholder for map) */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-3">Map</h2>
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
