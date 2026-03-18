import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@components/Ui/card";

const data = [
  { name: "Mon", incidents: 5 },
  { name: "Tue", incidents: 8 },
  { name: "Wed", incidents: 4 },
  { name: "Thu", incidents: 10 },
  { name: "Fri", incidents: 7 },
];

const Charts = () => {
  return (
    <Card>
      <h2 className="font-semibold mb-3">Incident Trends</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="incidents" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Charts;
