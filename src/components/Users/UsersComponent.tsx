import React, {FC, useEffect, useState} from 'react';
import {UserModel} from "../../models/UserModel/UserModel";
import {getAllUsers} from "../../services/djs.api.service";
import UserComponent from "../User/UserComponent";
import {TodoModel} from "../../models/TodoModel/TodoModel";

interface IProps {
    getAllTodosFromEachUser: (todos:TodoModel[]) => void
}

const UsersComponent:FC<IProps> = ({getAllTodosFromEachUser}) => {
    const [users, setUsers] = useState<UserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data:{users}}) => setUsers(users))
    }, []);
    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value} getAllTodosFromEachUser={getAllTodosFromEachUser}/>)
            }
        </div>
    );
};

export default UsersComponent;