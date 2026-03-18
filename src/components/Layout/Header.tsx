import { useAuth } from "@src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@components/Ui/button";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white shadow flex items-center px-6 justify-between">
      <h1
        className="text-lg font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Incident Dashboard
      </h1>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm">👤 {user.name}</span>

          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="bg-red-500 hover:bg-red-600"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={() => navigate("/login")}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Header;
