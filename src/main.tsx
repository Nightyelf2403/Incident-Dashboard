import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import App from "./App";
import { store, RootState } from "@src/redux/store";
import "./index.css";
import { AuthProvider } from "@src/context/AuthContext";

/* Theme Wrapper */
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <ThemeWrapper>
            <App />
          </ThemeWrapper>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
