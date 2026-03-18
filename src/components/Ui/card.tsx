const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="glass p-4 shadow hover:shadow-xl transition-all duration-300 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
