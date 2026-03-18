import Card from "@components/Ui/card";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <Card>Total: 12</Card>
      <Card>Critical: 3</Card>
      <Card>Active: 7</Card>
      <Card>Resolved: 5</Card>
    </div>
  );
};

export default StatsCards;
