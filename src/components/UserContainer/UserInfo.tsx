import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const UserInfo: FC<IProps> = () => {
    return (
        <div>
            UserInfo
        </div>
    );
};

export {UserInfo};