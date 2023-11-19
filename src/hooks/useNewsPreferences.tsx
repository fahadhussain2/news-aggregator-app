/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

import { NewsPreferences } from "src/utils/types";

type PreferencesContextType = {
  preferences: NewsPreferences;
  setPreferences: Dispatch<SetStateAction<NewsPreferences>>;
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export const PreferencesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedPreferences = localStorage.getItem("preferences");
  const initialPreferences: NewsPreferences = storedPreferences
    ? JSON.parse(storedPreferences)
    : { keywords: "", categories: "", sources: "" };

  const [preferences, setPreferences] =
    useState<NewsPreferences>(initialPreferences);

  useEffect(() => {
    if (preferences) {
      localStorage.setItem("preferences", JSON.stringify(preferences));
    }
  }, [preferences]);

  const contextValue: PreferencesContextType = {
    preferences,
    setPreferences,
  };

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const useNewsPreferences = (): PreferencesContextType => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error(
      "useNewsPreferences must be used within a PreferencesProvider"
    );
  }
  return context;
};
