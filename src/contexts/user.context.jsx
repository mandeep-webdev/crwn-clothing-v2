import { createContext, useState } from 'react';

export const UserContext = createContext(
  //default_value
  {
    currentUser: null,
    setCurrentUser: () => null,
  }
);
// an actual component
export const UserProvided = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
