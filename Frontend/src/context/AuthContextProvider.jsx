import { createContext, useState } from "react";

export const Authcontext = createContext()

export function AuthContextProvider({ children }) {
    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        token: null
    })

    const login=(token)=>{
        setAuthDetails({
            isLoggedIn:true,
            token:token
        })
    }
    const logOut =()=>{
        setAuthDetails({
            isLoggedIn:false,
            token:null
        })
    }

    return (
        <Authcontext.Provider value={{ authDetails, login }}>
            {children}
        </Authcontext.Provider>
    )
}