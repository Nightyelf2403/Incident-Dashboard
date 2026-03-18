const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
      {children}
    </div>
  );
};

export default Card;
