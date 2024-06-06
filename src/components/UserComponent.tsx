import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps{
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.name} {user.username}
        </div>
    );
};

export default UserComponent;