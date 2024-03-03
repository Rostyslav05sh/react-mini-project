import { createContext, FC, PropsWithChildren, useState } from "react";

const Context = createContext(null);

interface IProps extends PropsWithChildren {}

const ContextProvider: FC<IProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <div>
            <Context.Provider value={{ darkMode, toggleDarkMode }}>
                {children}
            </Context.Provider>
        </div>
    );
};

export { ContextProvider, Context };
