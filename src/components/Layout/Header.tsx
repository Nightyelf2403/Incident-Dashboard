import { useAuth } from "@src/context/AuthContext";
import { useNavigate } from "react-router-dom";

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
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="text-red-500 text-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="text-blue-600 text-sm"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
