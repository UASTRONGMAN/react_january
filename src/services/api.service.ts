import axios, {AxiosResponse} from 'axios'
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

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
    }
};

export {
    services
}