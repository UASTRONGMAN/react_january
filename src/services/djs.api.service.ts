import axios, {AxiosResponse} from 'axios'
import {UsersResponseModel} from "../models/UsersResponseModels/UsersResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
})

const getAllUsers = ():Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users')
}

export {
    getAllUsers
}