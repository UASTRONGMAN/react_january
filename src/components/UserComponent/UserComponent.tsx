import React, {FC} from 'react';
import {UserBasicModel} from "../../models/BasicModels/UserBasicModel";

interface IProps {
    user: UserBasicModel,
    stateLifting: (id:number) => void
}

const UserComponent:FC<IProps> = ({user, stateLifting}) => {
    const ClickHandler = () => {
        stateLifting(user.id)
    }
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName}
            <button onClick={ClickHandler}>Get all Todos</button>
        </div>
    );
};

export default UserComponent;