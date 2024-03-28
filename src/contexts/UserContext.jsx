/* TODO Add any global parameters to pass into components as props*/
/* See the "usecontext" lession for help */

import { createContext, useState } from "react";

export const JohnContext = createContext();

const ProfilePage = ({ children }) => {
  const [userName, setUserName] = useState("Default Value");

  return (
    <JohnContext.Provider value={[userName, setUserName]}>
      {children}
    </JohnContext.Provider>
  );
};

export default ProfilePage;