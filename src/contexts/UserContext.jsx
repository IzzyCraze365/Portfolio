/* TODO Add any global parameters to pass into components as props*/
/* See the "usecontext" lession for help */

import { createContext, useState } from "react";

export const JohnContext = createContext();

const ProfilePage = ({ children }) => {
  const [userName, setUserName] = useState("Default Value");

  return (
    <div>
      <p>UserContext Mounted</p>
    <JohnContext.Provider value={[userName, setUserName]}>
      {children}
    </JohnContext.Provider>
    </div>
  );
};

export default ProfilePage;