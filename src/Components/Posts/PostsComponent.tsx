import React, {FC} from 'react';
import {IPostModel} from "../../Models/IPostModel";

interface IProps {
    posts: IPostModel[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post: IPostModel) => (
                    <div>
                        <h2>{post.id}. {post.title}.</h2>
                        <p>{post.body}. Tags: {post.tags}. Reaction: {post.reactions}.</p>
                    </div>
                ))
            }
        </div>
    );
};

export default PostsComponent;