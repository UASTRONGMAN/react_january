import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

export const router = createBrowserRouter([
    {path:'/', element: <App/>, children:[
        {path:'users', element:<UsersPage/>},
        {path:'posts', element:<PostsPage/>},
        {path:'userPosts', element:<UserPostsPage/>},
        {path:'comments', element:<CommentsPage/>},
        {path:'postComments', element:<PostCommentsPage/>}
    ]}
]);