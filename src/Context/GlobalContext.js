import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) =>{
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    return(
        <GlobalContext.Provider value={{name, setName, lname, setLname, email, setEmail}}>
            {children}
        </GlobalContext.Provider>
    )
} 

