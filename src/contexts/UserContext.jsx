/* TODO Add any global parameters to pass into components as props*/
/* See the "usecontext" lession for help */
/* TEST Test TestTest TEST*/

import { createContext, useState } from "react";

export const JohnContext = createContext();

const ProfilePage = ({ children }) => {
  const [userName, setUserName] = useState("Default Value");
  
  return (
    <div>
      {/* This is not populating for some reason */}
      <p>UserContext Mounted</p>
    <JohnContext.Provider value={[userName, setUserName]}>
      {children}
    </JohnContext.Provider>
    </div>
  );
};

export default ProfilePage;