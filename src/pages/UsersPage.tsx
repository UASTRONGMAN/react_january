import React, {useContext} from 'react';
import {ContextProvider} from "../context/ContextProvider";

const UsersPage = () => {

    const context = useContext(ContextProvider);
    console.log(context)

    return (
        <div>

        </div>
    );
};

export default UsersPage;