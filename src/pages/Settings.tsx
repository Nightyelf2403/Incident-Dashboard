import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@src/redux/slices/themeSlice";
import { RootState } from "@src/redux/store";
import Card from "@components/Ui/card";
import Button from "@components/Ui/button";

const Settings = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-bold">⚙️ Settings</h1>

      {/* Appearance */}
      <Card>
        <h2 className="font-semibold mb-3 text-lg">Appearance</h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Theme: {dark ? "Dark Mode" : "Light Mode"}
          </span>

          
          <Button onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
          </Button>
        </div>
      </Card>

      {/* User Info */}
      <Card>
        <h2 className="font-semibold mb-3 text-lg">User Preferences</h2>

        <p className="text-gray-500 text-sm">
          Customize your dashboard experience. More personalization features
          like notification preferences and layouts can be added here.
        </p>
      </Card>

      {/* About */}
      <Card>
        <h2 className="font-semibold mb-3 text-lg">About</h2>

        <p className="text-gray-500 text-sm">
          This is a modern incident monitoring dashboard built using React,
          TypeScript, and scalable frontend architecture.
        </p>
      </Card>
    </div>
  );
};

export default Settings;
