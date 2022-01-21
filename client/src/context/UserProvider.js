import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {

    const [person, setperson] = useState({})
    return (
        <UserContext.Provider value={{

            person,
            setperson
        }}

        >
            {children}
        </UserContext.Provider>

    )


}

export default UserProvider