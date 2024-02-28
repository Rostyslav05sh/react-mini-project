import {createContext, FC, PropsWithChildren, useState} from "react";

const Context = createContext(null)
interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    const [themeSwitch, setThemeSwitch] = useState(null)
    const themeSwitcher = () => {
        // setThemeSwitch()
    }

    return (
        <div>
            <Context.Provider value={themeSwitch}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};