import axios, {AxiosResponse} from 'axios'
import {TodosResponceModel, UsersResponceModel} from "../models/ResponceModels/ResponceModels";

const axiosInstance = axios.create({
    baseURL: 'http://dummyjson.com',
    headers: {}
})

const getAllUsers = ():Promise<AxiosResponse<UsersResponceModel>> => {
    return axiosInstance.get('/users')
}

const gelAllTodos = (userId: number):Promise<AxiosResponse<TodosResponceModel>> => {
    return axiosInstance.get('/todos/user/' + userId)
}

export {
    getAllUsers,
    gelAllTodos
}