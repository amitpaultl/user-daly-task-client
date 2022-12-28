import React, { createContext, useState } from 'react';
export const Context = createContext();

const Contex = ({children}) => {
    const [theme, setTheme] = useState(false) 
    const info = {setTheme,theme}
    return (
        <div>
            <Context.Provider value={info}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default Contex;