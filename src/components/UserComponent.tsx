import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps{
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()}>{user.id} {user.name} {user.username}</Link>
        </div>
    );
};

export default UserComponent;