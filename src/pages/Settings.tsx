import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@src/redux/slices/themeSlice";
import { RootState } from "@src/redux/store";

const Settings = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-bold">⚙️ Settings</h1>

      {/* Appearance */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h2 className="font-semibold mb-3 text-lg">Appearance</h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Theme: {dark ? "Dark Mode" : "Light Mode"}
          </span>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition"
          >
            Toggle Theme
          </button>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h2 className="font-semibold mb-3 text-lg">User Preferences</h2>

        <p className="text-gray-500 text-sm">
          Customize your dashboard experience. More personalization features
          like notification preferences and layouts can be added here.
        </p>
      </div>

      {/* About */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h2 className="font-semibold mb-3 text-lg">About</h2>

        <p className="text-gray-500 text-sm">
          This is a modern incident monitoring dashboard built using React,
          TypeScript, and scalable frontend architecture. It demonstrates
          routing, state management, reusable UI components, and clean design.
        </p>
      </div>
    </div>
  );
};

export default Settings;
