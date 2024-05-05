import React, {FC} from 'react';
import {UserModel} from "../../Models/UserModel";

interface IProps{
    user:UserModel;
}

type IPropsType = IProps & {children?:React.ReactNode}

const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName}
        </div>
    );
};

export default UserComponent;