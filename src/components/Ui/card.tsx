type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      {children}
    </div>
  );
};

export default Card;
