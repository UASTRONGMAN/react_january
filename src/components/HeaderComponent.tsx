import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HeaderComponent: FC = () => {
    return (
        <div>
            <Link to="/">Home page</Link>
            <br/>
            <Link to="/users">Users</Link>
            <br/>
            <Link to="/posts">Posts</Link>
            <br/>
            <Link to="/comments">Comments</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;