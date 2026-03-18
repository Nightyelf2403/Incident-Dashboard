import { incidents } from "@src/lib/data";
import Card from "@components/Ui/card";
import Badge from "@components/Ui/badge";
import { SEVERITY_COLORS } from "@src/lib/constants";

const IncidentList = () => {
  return (
    <div className="space-y-3">
      {incidents.map((incident) => (
        <Card key={incident.id}>
          <div className="flex justify-between items-center">
            {/* Left */}
            <div>
              <h3 className="font-semibold text-gray-800">
                {incident.title}
              </h3>
              <p className="text-sm text-gray-500">
                {incident.time}
              </p>
            </div>

            {/* Right */}
            <Badge
              label={incident.severity}
              color={
                SEVERITY_COLORS[
                  incident.severity as keyof typeof SEVERITY_COLORS
                ]
              }
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IncidentList;
