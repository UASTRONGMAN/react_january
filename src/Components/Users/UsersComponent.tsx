import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../User/UserComponent";
import {IUserModel} from "../../Models/IUserModel";
import {getAllUsers} from "../../services/jph.api.service";

type IPropsType = {lift?: (userId:number) => void}

const UsersComponent: FC<IPropsType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users))
    }, []);

    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent