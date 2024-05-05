import React, {FC} from 'react';
import {IUserModel} from "../../Models/IUserModel";

interface IProps{
    user:IUserModel;
}

type IPropsType = IProps & {children?:React.ReactNode} & {lift?: (userId: number) => void};

const UserComponent: FC<IPropsType> = ({user, lift}) => {
    const onClickHandler = () => {
        if (lift){
            lift(user.id);
        }
    };
    return (
        <div className='user'>
            <h2>
            {user.id}. {user.firstName} {user.lastName} {user.maidenName}
            </h2>
            <p>
                Age: {user.age}. Birth date: {user.birthDate} {user.gender}.
                <br/>
                Email: {user.email}. Phone: {user.phone}.
            </p>
            <img src={user.image} alt={user.firstName}/>
            <button onClick={onClickHandler}>Click to get all posts</button>
        </div>
    );
};

export default UserComponent;