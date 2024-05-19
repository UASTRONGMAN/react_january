import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const routerStruc = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {index: true, element: <HomePage/>},
                {
                    path: 'users',
                    element: <UsersPage/>,
                    children:[
                        {path: ':id',
                            element: <PostsPage/>,
                            children:[
                                {path: ':id', element: <CommentsPage/>}
                            ]
                        },
                    ]
                },
            ]
        },
    ]
)
