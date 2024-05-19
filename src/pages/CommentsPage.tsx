import React, {useEffect, useState} from 'react';
import CommentsComponent from "../components/CommentsComponent";
import {ICommentModel} from "../models/ICommentModel";
import {apiservices} from "../services/api.service";
import {useParams} from "react-router-dom";

const CommentsPage = () => {

    const {id} = useParams()

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if (id) {
            apiservices.getAllCommentsToEachPosts(id).then(value => setComments(value.data))
        }
    }, [id]);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;