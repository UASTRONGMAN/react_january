import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {Outlet, useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import {apiservices} from "../services/api.service";

const PostsPage = () => {

    const {id} = useParams()

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if (id) {
            apiservices.getAllPostsOfEachUser(id).then(value => setPosts(value.data))
        }
    }, [id]);
    
    return (
        <div>
            <PostsComponent posts={posts}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;