type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`glass p-4 rounded-xl shadow hover:shadow-xl transition ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
