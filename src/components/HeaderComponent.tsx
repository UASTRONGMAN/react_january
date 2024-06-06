import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'userPosts'}>posts of user</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'postComments'}>comments of post</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;