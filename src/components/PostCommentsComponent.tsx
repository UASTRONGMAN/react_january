import React, {useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {ICommentModel} from "../models/ICommentModel";
import {PostCommentsType} from "../models/PostCommentsType";

const PostCommentsComponent = () => {

    const {postStore:{allPosts}, commentStore:{allComments}} = useContextProvider();

    const [postWithCommentsState, setPostWithCommentsState] = useState<PostCommentsType[]>([])

    const postWithCommentsArr = () => {
        return
    }

    return (
        <div>
            
        </div>
    );
};

export default PostCommentsComponent;