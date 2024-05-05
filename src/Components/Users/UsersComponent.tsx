import React, {useEffect, useState} from 'react';
import UserComponent from "../User/UserComponent";
import {UserModel} from "../../Models/UserModel";
import {getAllUsers} from "../../services/jph.api.service";


const UsersComponent = () => {

    const [users, setUsers] = useState<UserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map((user) => (<UserComponent user={user}/>))}
        </div>
    );
};

export default UsersComponent