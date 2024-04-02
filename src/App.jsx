import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ProfilePage from "./contexts/UserContext";
import MyTheme from "./contexts/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* This needs to show up upon being deployed */}
      <div className="app">
        <h2>This is my Portfolio - In Progress</h2>
        <h3>John A. Isabella III</h3>
        <ProfilePage>
          <MyTheme>
{/*             <Nav /> */}
            <User />
          </MyTheme>
        </ProfilePage>
      </div>
      <div className="card">
        <p>Click Me!</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count increases to {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <h1>This project uses both Vite + React</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
