import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App as AntApp, ConfigProvider } from "antd";
import App from "./App.tsx";
import "./assets/globals.css";
import theme from "./lib/ThemeConfig.ts";
import { PreferencesProvider } from "src/hooks/useNewsPreferences.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <AntApp>
          <PreferencesProvider>
            <App />
          </PreferencesProvider>
        </AntApp>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
