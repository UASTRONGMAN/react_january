import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps{
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            Comment belongs to post with id - <b>{comment.postId}.</b> <br/>
            {comment.id}. {comment.name} {comment.email}<br/>
            {comment.body}
        </div>
    );
};

export default CommentComponent;