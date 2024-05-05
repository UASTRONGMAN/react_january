import axios, {AxiosResponse} from 'axios';
import {UserModel} from "../Models/UserModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllUsers = (): Promise<AxiosResponse<UserModel[]>> => {
    return axiosInstance.get('/users')
}

export {
    getAllUsers
}
