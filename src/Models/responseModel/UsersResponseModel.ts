import {IUserModel} from "../IUserModel";
import {IPostModel} from "../IPostModel";

export interface UsersResponseModel{
    users: IUserModel[];
}

export interface PostsResponseModel{
    posts:IPostModel[];
}