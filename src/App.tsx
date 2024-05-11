import React from 'react';
import './App.css';
import UsersComponent from "./components/Users/UsersComponent";
import {TodoModel} from "./models/TodoModel/TodoModel";

const App = () => {
    const getAllTodosFromEachUser = (todos: TodoModel[]) => {
        console.log(todos)
    }
    return (
        <div>
            <UsersComponent getAllTodosFromEachUser={getAllTodosFromEachUser}/>
        </div>
    );
};

export default App;
