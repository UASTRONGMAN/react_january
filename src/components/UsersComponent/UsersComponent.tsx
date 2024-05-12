import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../../services/users.api.service";
import {UserBasicModel} from "../../models/BasicModels/UserBasicModel";
import UserComponent from "../UserComponent/UserComponent";

interface IProps {
    stateLifting: (id: number) => void
}

const UsersComponent:FC<IProps> = ({stateLifting}) => {

    const [users, setUsers] = useState<UserBasicModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data:{users}})=> {
            setUsers(users)
        })
    }, []);
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user} stateLifting={stateLifting}/>)
            }
        </div>
    );
};

export default UsersComponent;