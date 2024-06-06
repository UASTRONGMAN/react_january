import React, {FC} from 'react';
import {PostCommentsType} from "../models/PostCommentsType";

interface IProps{
    value: PostCommentsType
}

const PostCommentComponent: FC<IProps> = ({value}) => {
    return (
        <div>
            {value.id}. {value.title}
            <ul>
                {
                    value.comments.map(comment => <li>{comment.id}. {comment.name}</li>)
                }
            </ul>
        </div>
    );
};

export default PostCommentComponent;