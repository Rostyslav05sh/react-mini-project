import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    );
};

export {Header};