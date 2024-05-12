import React, {FC, useEffect, useState} from 'react';
import {gelAllTodos} from "../../services/users.api.service";
import {TodoBasicModel} from "../../models/BasicModels/TodoBasicModel";
import TodoComponent from "../TodoComponent/TodoComponent";

interface IProps {
    userId: number
}

const TodosComponent:FC<IProps> = ({userId}) => {

    const [todos, setTodos] = useState<TodoBasicModel[]>([])

    useEffect(() => {
        gelAllTodos(userId).then(({data: {todos}}) => {
            setTodos(todos)
        })
    }, []);

    return (
        <div>
            List of Todos:
            {
                todos.map(todo => <TodoComponent todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;