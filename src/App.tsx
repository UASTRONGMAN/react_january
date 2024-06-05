import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {services} from "./services/api.service";
import {ContextProvider, defaultValue} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";

const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        services.getAllUsers().then(value => setUsers(value.data));
        services.getAllPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <ContextProvider.Provider value={{
                userStore:{
                    allUsers: users
                },
                postStore:{
                    allPosts: posts
                }
            }}>
                <Outlet/>
            </ContextProvider.Provider>
        </div>
    );
};

export default App;