import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {apiservices} from "../services/api.service";
import UserComponent from "./UserComponent";

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    
    useEffect(() => {
        apiservices.getAllUsers().then(value => setUsers(value.data))
    }, []);
    
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;