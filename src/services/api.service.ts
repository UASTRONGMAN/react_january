import axios, {AxiosResponse} from 'axios'
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const services = {
    getAllUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await AxiosInstance.get<IUserModel[]>('/users')
    },
    getAllPosts: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await AxiosInstance.get<IPostModel[]>('/posts')
    },
    getAllComments: async (): Promise<AxiosResponse<ICommentModel[]>> => {
        return await AxiosInstance.get<ICommentModel[]>('/comments')
    }
};

export {
    services
}