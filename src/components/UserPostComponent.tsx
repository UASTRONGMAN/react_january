import React, {FC} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";

interface IProps{
    value:UserWithPostsType
}

const UserPostComponent: FC<IProps> = ({value}) => {
    return (
        <div>
            {value.id}. {value.name} {value.username}
            <ul>
                {
                    value.posts.map(post => <li>{post.id}. {post.title} </li>)
                }
            </ul>
        </div>
    );
};

export default UserPostComponent;