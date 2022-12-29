import React, { createContext, useState } from 'react';
export const Context = createContext();

const Contex = ({children}) => {
    const [theme, setTheme] = useState(true) 
    const [loading, setLoading] = useState(false)
    const info = {setTheme,theme, loading, setLoading}
    return (
        <div>
            <Context.Provider value={info}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default Contex;