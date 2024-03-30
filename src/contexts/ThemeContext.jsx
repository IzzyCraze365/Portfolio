/* TODO Add Theming to pass into components for awesome visuals*/

import { createContext, useState } from "react";

export const CoolChangingTheme = createContext();

const MyTheme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode
    ? {
        background: "#121212",
        color: "white",
        outlineColor: "white",
      }
    : {
        background: "white",
        color: "black",
        outlineColor: "black",
      };

  return (
    <div>
    <p>ThemeContext Mounted</p>
    <CoolChangingTheme.Provider value={[darkMode, setDarkMode, theme]}>
      {children}
    </CoolChangingTheme.Provider>
    </div>
  );
};

export default MyTheme;