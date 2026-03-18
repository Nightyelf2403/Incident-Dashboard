const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="glass p-4 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {children}
    </div>
  );
};

export default Card;
