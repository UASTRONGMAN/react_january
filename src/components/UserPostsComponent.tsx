import React, {useEffect, useMemo, useState} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";
import UserPostComponent from "./UserPostComponent";
import {useStore} from "../context/ZustandStateManager";

const UserPostsComponent = () => {
    
    const {userStore:{allUsers}, postStore:{allPosts}} = useStore();

    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([])
    
    const userWithPostsArr = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            })
        }
    }, [allPosts, allUsers]);

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArr);
    }, [userWithPostsArr]);
    
    return (
        <div>
            {
                usersWithPostsState.map(value => <UserPostComponent key={value.id} value={value}/>)
            }
        </div>
    );
};

export default UserPostsComponent;