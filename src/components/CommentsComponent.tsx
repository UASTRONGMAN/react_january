import React, {FC, useEffect, useState} from 'react';
import {apiservices} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";
import CommentComponent from "./CommentComponent";

const CommentsComponent: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        apiservices.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;