import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {services} from "./services/api.service";
import {useStore} from "./context/ZustandStateManager";

const App = () => {

    const {userStore, postStore, commentStore} = useStore();

    useEffect(() => {
        services.getAllUsers().then(value => {
            userStore.setAllUsers(value.data);
        });
        services.getAllPosts().then(value => {
            postStore.setAllPosts(value.data);
        });
        services.getAllComments().then(value => {
            commentStore.setAllComments(value.data)
        })
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default App;