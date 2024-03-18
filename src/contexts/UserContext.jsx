/* TODO Add any global parameters to pass into components as props*/
/* See the "usecontext" lession for help */

import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("Default Value");

  return (
    <UserContext.Provider value={[userName, setUserName]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;