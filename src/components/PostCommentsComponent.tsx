import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {PostCommentsType} from "../models/PostCommentsType";
import PostCommentComponent from "./PostCommentComponent";

const PostCommentsComponent = () => {

    const {postStore:{allPosts}, commentStore:{allComments}} = useContextProvider();

    const [postWithCommentsState, setPostWithCommentsState] = useState<PostCommentsType[]>([])

    const postWithCommentsArr
        = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments:allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allPosts, allComments]);

    useEffect(() => {
        setPostWithCommentsState(postWithCommentsArr)
    }, [postWithCommentsArr]);

    return (
        <div>
            {
                postWithCommentsState.map(value => <PostCommentComponent key={value.id} value={value}/>)
            }
        </div>
    );
};

export default PostCommentsComponent;