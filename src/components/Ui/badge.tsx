type Props = {
  label: string;
  color: string;
};

const Badge = ({ label, color }: Props) => {
  return (
    <span className={`px-2 py-1 text-xs text-white rounded ${color}`}>
      {label}
    </span>
  );
};

export default Badge;
