type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
