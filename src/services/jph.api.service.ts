import axios, {AxiosResponse} from 'axios';
import {PostModel} from "../Models/PostModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<PostModel[]>> => {
    return axiosInstance.get('/users')
}

export {
    getAllUsers
}
