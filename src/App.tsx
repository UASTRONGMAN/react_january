import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./Components/Users/UsersComponent";
import PostsComponent from "./Components/Posts/PostsComponent";
import {getAllPostsOfEachUser} from "./services/jph.api.service";
import {IPostModel} from "./Models/IPostModel";
import UserComponent from "./Components/User/UserComponent";


const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])
    const lift = (userId: number) => {
        getAllPostsOfEachUser(userId).then(({data}) => {
            setPosts(data.posts)
        })
    };

    return (
        <div className='App'>
            <div className='Users'><UsersComponent lift={lift}/></div>
            <div className='Comments'><PostsComponent posts={posts}/></div>
        </div>
    );
};

export default App;
