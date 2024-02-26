import {createContext, FC, PropsWithChildren, useState} from "react";



const Context = createContext<>(null)
interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    const [trigger, setTrigger] = useState(null)
    const changeTrigger = () => {
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <Context.Provider value={}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};