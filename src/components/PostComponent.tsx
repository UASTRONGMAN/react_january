import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {Link} from "react-router-dom";

interface IProps{
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            Post's owner id: <b>{post.userId}.</b> <br/>
            <Link to={post.id.toString()}>{post.id}. {post.title}</Link> <br/>
            {post.body}

        </div>
    );
};

export default PostComponent;