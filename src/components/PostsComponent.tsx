import React, {useEffect, useState} from 'react';
import {apiservices} from "../services/api.service";
import {IPostModel} from "../models/IPostModel";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        apiservices.getAllPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>

    );
};

export default PostsComponent;