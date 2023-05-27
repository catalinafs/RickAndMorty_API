import React, { createContext, useMemo, useState } from "react";

export const Context = createContext();

export const InfoContext = ({ children }) => {
    const [changeCharacters, setChangeCharacters] = useState([]);
    const [characters, setCharacters] = useState([]);

    const value = useMemo(
        () => {
            return {
                changeCharacters,
                characters,
                setChangeCharacters,
                setCharacters
            }
        }, [
        changeCharacters,
        characters,
        setChangeCharacters,
        setCharacters
    ]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}