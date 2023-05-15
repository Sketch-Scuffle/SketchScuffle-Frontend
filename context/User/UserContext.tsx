import React, { createContext, useState } from "react";

interface User {
  userId: string | undefined;
}

export const UserContext = createContext<User>({
  userId: undefined,
});

export const UserContextProvider: React.FC<any> = ({ children }) => {
  const [id, setId] = useState(Math.round(Math.random() * 100 + 1).toString());

  return (
    <UserContext.Provider
      value={{
        userId: id,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
