import axios, {AxiosResponse} from 'axios';
import {PostsResponseModel, UsersResponseModel} from "../Models/responseModel/UsersResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users')
};

const getAllPostsOfEachUser = (id: number): Promise<AxiosResponse<PostsResponseModel>> => {
    return axiosInstance.get('/posts/user/' + id)
};

export {
    getAllUsers,
    getAllPostsOfEachUser
};