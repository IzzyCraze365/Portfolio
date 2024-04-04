/* Nav Bar CSS */
/* TODO Make this more customized */


import { useContext } from "react";
/* Have this match my App.jsx file names */
import ProfilePage from "../contexts/UserContext"; /* Imports for Components */
import MyTheme from "../contexts/ThemeContext"; /* Imports for Components */
import "./Nav.css";

const Nav = () => {
  const [, setUserName] = useContext(UserContext); /* this pulls the User Information from the UserContext - Props out of Sync */
  const [darkMode, setDarkMode, theme] = useContext(ThemeContext);

  return (
    <nav style={theme}>
      <p>Home</p>
      <p>About</p>
      <p>Auth</p>

      <input
        placeholder={"Enter a username"}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={darkMode}
          onChange={() => {
            setDarkMode((previousValue) => !previousValue);
          }}
        />
        <span className="slider round"></span>
        <p>{darkMode ? "Dark" : "Light"}</p>
      </label>
    </nav>
  );
};

export default Nav;