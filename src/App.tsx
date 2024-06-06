import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {services} from "./services/api.service";
import {ContextProvider} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {ICommentModel} from "./models/ICommentModel";

const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        services.getAllUsers().then(value => setUsers(value.data));
        services.getAllPosts().then(value => setPosts(value.data));
        services.getAllComments().then(value => setComments(value.data))
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
                },
                commentStore:{
                    allComments: comments
                }
            }}>
                <Outlet/>
            </ContextProvider.Provider>
        </div>
    );
};

export default App;