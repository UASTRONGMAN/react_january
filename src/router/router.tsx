import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";
import UsersComponent from "../components/UsersComponent";

export const routerStruc = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersComponent/>},
                {path: 'posts', element: <PostsComponent/>},
                {path: 'comments', element: <CommentsComponent/>}
            ]},

    ]
)
