type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Input = ({ value, onChange, type = "text" }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded mt-1"
    />
  );
};

export default Input;
