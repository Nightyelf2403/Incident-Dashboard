import StatsCards from "@components/Dashboard/StatsCards";
import IncidentList from "@components/Dashboard/IncidentList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <StatsCards />

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Section - Incidents */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-3">Incidents</h2>
          <IncidentList />
        </div>

        {/* Right Section - Map */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-lg font-semibold mb-3">Map</h2>

          <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center text-gray-600">
            Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
