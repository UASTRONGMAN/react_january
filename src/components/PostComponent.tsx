import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps{
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            Post's owner id: <b>{post.userId}.</b> <br/>
            {post.id}. {post.title} <br/>
            {post.body}

        </div>
    );
};

export default PostComponent;