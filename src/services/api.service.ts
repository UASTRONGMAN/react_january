import axios, {AxiosResponse} from 'axios'
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const apiservices = {
    getAllUsers: ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('users')
    },
    getUserByUserId: (userId: number):Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(`users/${userId}`)
    },
    getAllPostsOfEachUser: (userId: string):Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    },
    getAllCommentsToEachPosts: (postId: string):Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`/posts/${postId}/comments`)
    }
}

export {
    apiservices
}