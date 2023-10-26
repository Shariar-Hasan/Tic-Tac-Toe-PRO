import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";



const SiteContext = createContext();

export const useSiteData = () => useContext(SiteContext)


// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const value = { user, setUser }
    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}