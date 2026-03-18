import { useAuth } from "@src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import IncidentList from "@components/Dashboard/IncidentList";
import Charts from "@components/Dashboard/Charts";
import Skeleton from "@components/Common/Skeleton";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
    <div className="space-y-8 animate-fadeIn">
      {/*  HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">
          Monitor incidents and system health in real-time
        </p>
      </div>

      {/*  STATS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-4 rounded-xl bg-gradient-to-r from-red-500 to-red-400 text-white shadow hover:scale-[1.02] transition">
          <p className="text-sm">Critical</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-white shadow hover:scale-[1.02] transition">
          <p className="text-sm">Warnings</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-400 text-white shadow hover:scale-[1.02] transition">
          <p className="text-sm">Normal</p>
          <h2 className="text-2xl font-bold">24</h2>
        </div>
      </div>

      {/*  CHART + INCIDENTS */}
      <div className="grid grid-cols-3 gap-6">
        {/* Chart */}
        <div className="col-span-1 glass p-4 shadow hover:shadow-xl transition">
          {loading ? <Skeleton /> : <Charts />}
        </div>

        {/* Incident list */}
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Recent Incidents</h2>
            <span className="text-sm text-gray-500">Live updates</span>
          </div>

          {loading ? <Skeleton /> : <IncidentList />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
