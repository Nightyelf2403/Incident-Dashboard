import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import Settings from "@pages/Settings";

export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/home", element: <Home /> },
  { path: "/settings", element: <Settings /> },
];
