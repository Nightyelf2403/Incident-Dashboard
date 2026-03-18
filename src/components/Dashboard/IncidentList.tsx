import { useEffect, useState } from "react";
import Card from "@components/Ui/card";
import Button from "@components/Ui/button";

type Incident = {
  id: number;
  title: string;
  time: string;
  status: "critical" | "warning" | "normal" | "resolved";
};

const initialData: Incident[] = [
  { id: 1, title: "Highway Accident", time: "2 mins ago", status: "critical" },
  { id: 2, title: "Server Overload", time: "10 mins ago", status: "warning" },
  { id: 3, title: "Traffic Delay", time: "30 mins ago", status: "normal" },
];

const IncidentList = () => {
  const [incidents, setIncidents] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIncident: Incident = {
        id: Date.now(),
        title: "New Incident " + Math.floor(Math.random() * 100),
        time: "Just now",
        status: ["critical", "warning", "normal"][
          Math.floor(Math.random() * 3)
        ] as Incident["status"],
      };

      setIncidents((prev) => [newIncident, ...prev]);
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  const markResolved = (id: number) => {
    setIncidents((prev) =>
      prev.map((inc) =>
        inc.id === id ? { ...inc, status: "resolved" } : inc
      )
    );
  };

  const statusStyles = {
    critical: "bg-red-100 text-red-600",
    warning: "bg-yellow-100 text-yellow-600",
    normal: "bg-green-100 text-green-600",
    resolved: "bg-gray-200 text-gray-600",
  };

  return (
    <div className="space-y-3">
      {incidents.map((inc) => (
        <Card key={inc.id}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{inc.title}</h3>
              <p className="text-sm text-gray-500">{inc.time}</p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs px-3 py-1 rounded-full ${statusStyles[inc.status]}`}
              >
                {inc.status}
              </span>

              {inc.status !== "resolved" && (
                <Button onClick={() => markResolved(inc.id)}>
                  Resolve
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IncidentList;
