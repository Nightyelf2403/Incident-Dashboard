import Home from "@pages/Home";
import Dashboard from "@pages/Dashboard";
import Settings from "@pages/Settings";
import Login from "@pages/auth/Login";
import Signup from "@pages/auth/Signup";
import Terms from "@pages/Terms";
import Privacy from "@pages/Privacy";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },

  { path: "/dashboard", element: <Dashboard /> },
  { path: "/settings", element: <Settings /> },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
];
