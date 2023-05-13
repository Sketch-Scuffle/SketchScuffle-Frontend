import React, {createContext, useState} from "react";
import {string} from "prop-types";

interface User{
    userId: string | undefined
}

export const UserContext = createContext<User>({
    userId: undefined,
});

export const UserContextProvider: React.FC<any> = ({children}) => {
    const [id, setId] = useState('')
    return(
        <UserContext.Provider value={
            {
                userId=id
            }
        }> {children}
    </UserContext.Provider>
    )
}