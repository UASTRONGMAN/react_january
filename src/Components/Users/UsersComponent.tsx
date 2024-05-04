import React, {FC} from 'react';
import UserComponent from "../User/UserComponent";
import {UserModel} from "../../Models/UserModel";

interface IProps{
    users:UserModel[]
}

type IPropsTypes = IProps & {children?: React.ReactNode}

const UsersComponent: FC<IPropsTypes> = ({users}) => {
    return (
        <div>
            {users.map((user) => (<UserComponent/>))}
        </div>
    );
};

export default UsersComponent