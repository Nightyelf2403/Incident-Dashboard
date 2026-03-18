import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const reviews = [
  "Amazing UI!",
  "Super fast!",
  "Very intuitive",
  "Best dashboard I’ve used",
];

const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full animate-fadeIn">
      {/* HERO */}
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">
          🚨 Incident Monitoring Dashboard
        </h1>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          A modern dashboard to monitor, analyze and respond to incidents
          in real-time with powerful insights and scalability.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Go to Dashboard
        </button>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-3 gap-6 mt-16 px-10">
        {["Monitoring", "Analytics", "Scalability"].map((f) => (
          <div className="glass p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold mb-2">{f}</h3>
            <p className="text-sm text-gray-600">
              Powerful tools to handle real-time systems efficiently.
            </p>
          </div>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="mt-20 text-center px-10">
        <h2 className="text-2xl font-bold mb-6">What Users Say</h2>

        <div className="glass p-6 shadow max-w-xl mx-auto transition-all duration-500">
          ⭐⭐⭐⭐⭐
          <p className="text-gray-700 mt-2">{reviews[index]}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
