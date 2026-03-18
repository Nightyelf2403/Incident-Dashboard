type LabelProps = {
  text: string;
  className?: string;
};

const Label = ({ text, className = "" }: LabelProps) => {
  return (
    <label className={`text-sm font-medium ${className}`}>
      {text}
    </label>
  );
};

export default Label;
