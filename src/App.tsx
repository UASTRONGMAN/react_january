import React, {useState} from 'react';
import UsersComponent from "./components/UsersComponent/UsersComponent";
import TodosComponent from "./components/TodosComponent/TodosComponent";

const App = () => {
    const [userId, setUserId] = useState<number>(0)
    const stateLifting = (id:number) => {
        setUserId(id)
    }
    return (
        <div>
            <UsersComponent stateLifting={stateLifting}/>
            {
                !!userId && <TodosComponent userId={userId}/>
            }
        </div>
    );
};

export default App;
