import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", incidents: 5 },
  { name: "Tue", incidents: 8 },
  { name: "Wed", incidents: 4 },
  { name: "Thu", incidents: 10 },
  { name: "Fri", incidents: 7 },
];

const Charts = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Incident Trends</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="incidents" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
