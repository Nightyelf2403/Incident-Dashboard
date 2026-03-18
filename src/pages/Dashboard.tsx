import { useAuth } from "@src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import IncidentList from "@components/Dashboard/IncidentList";
import Charts from "@components/Dashboard/Charts";
import Card from "@components/Ui/card";
import Button from "@components/Ui/button";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Please login to access dashboard
        </h2>

        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">
          Monitor incidents and system health in real-time
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <p className="text-sm text-gray-500">Critical</p>
          <h2 className="text-xl font-bold text-red-500">12</h2>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Warnings</p>
          <h2 className="text-xl font-bold text-yellow-500">8</h2>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Normal</p>
          <h2 className="text-xl font-bold text-green-500">24</h2>
        </Card>
      </div>

      {/* Chart + Incidents */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <Card>
            <Charts />
          </Card>
        </div>

        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-3">Recent Incidents</h2>
          <IncidentList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
