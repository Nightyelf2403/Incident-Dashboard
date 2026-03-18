type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  const base = "px-4 py-2 rounded text-sm transition";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:scale-105"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
