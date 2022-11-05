import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ ...props }) {
    const productScreenTypes = {
        Serigraphy: "1",
        NormalProduct: "2",
        SerigraphyAndProduct: "3"
    }
    
    const [isLoading, setLoading] = useState(false);
    

    const value = {
        isLoading, setLoading,
         productScreenTypes
    }

    return <GlobalContext.Provider value={value} {...props} />
}
