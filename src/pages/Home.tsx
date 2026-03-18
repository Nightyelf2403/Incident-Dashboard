import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@components/Ui/button";
import Card from "@components/Ui/card";

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

        
        <Button onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </Button>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-3 gap-6 mt-16 px-10">
        {["Monitoring", "Analytics", "Scalability"].map((f) => (
          <Card key={f}>
            <h3 className="font-semibold mb-2">{f}</h3>
            <p className="text-sm text-gray-600">
              Powerful tools to handle real-time systems efficiently.
            </p>
          </Card>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="mt-20 text-center px-10">
        <h2 className="text-2xl font-bold mb-6">What Users Say</h2>

        <Card>
          ⭐⭐⭐
          <p className="text-gray-700 mt-2">{reviews[index]}</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
