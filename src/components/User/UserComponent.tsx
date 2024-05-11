import React, {FC} from 'react';
import {UserModel} from "../../models/UserModel/UserModel";
import {TodoModel} from "../../models/TodoModel/TodoModel";

type IProps = {item:UserModel, getAllTodosFromEachUser: (todos:TodoModel[]) => void}

const UserComponent:FC<IProps> = ({item, getAllTodosFromEachUser}) => {
    const onClickHandlerCallback = () => {
        getAllTodosFromEachUser(user.id)
    }
    return (
        <div>
            <h2>{item.id}. {item.firstName} {item.lastName}.</h2>
            <button onClick={onClickHandlerCallback}>Get all todos</button>
        </div>
    );
};

export default UserComponent;