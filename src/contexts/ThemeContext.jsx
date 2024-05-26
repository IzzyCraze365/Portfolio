/* TODO Add Theming to pass into components for awesome visuals*/
/* TEST Test Test Test*/

import { createContext, useState } from "react";

export const CoolChangingTheme = createContext();

const MyTheme = ({ children }) => {
  const [darkerMode, setDarkerMode] = useState(false);

  let theme = darkerMode
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
    <CoolChangingTheme.Provider value={[darkerMode, setDarkerMode, theme]}>
      {children}
    </CoolChangingTheme.Provider>
    </div>
  );
};

export default MyTheme;