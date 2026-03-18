import Header from "./Header";
import Sidebar from "./Sidebar";
import AppRouter from "@src/router/AppRouter";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <AppRouter />
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t bg-white">
          <Link
            to="/terms"
            className="mx-2 hover:text-blue-600 hover:underline transition"
          >
            Terms
          </Link>
          ·
          <Link
            to="/privacy"
            className="mx-2 hover:text-blue-600 hover:underline transition"
          >
            Privacy
          </Link>
          · © 2026 Incident Dashboard
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
