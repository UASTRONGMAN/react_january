import React, {FC} from 'react';
import {TodoBasicModel} from "../../models/BasicModels/TodoBasicModel";

interface IProps{
    todo: TodoBasicModel
}

const TodoComponent:FC<IProps> = ({todo}) => {
    return (
        <div>
            <li>{todo.id}. {todo.todo}.</li>
        </div>
    );
};

export default TodoComponent;