import React, {FC, PropsWithChildren} from "react";
import {Avatar} from "@mui/material";
interface IProps extends PropsWithChildren {

}

const UserInfo: FC<IProps> = () => {

    return (
        <div>
            <Avatar src="/broken-image.jpg"/>
        </div>
    );
};

export {UserInfo};