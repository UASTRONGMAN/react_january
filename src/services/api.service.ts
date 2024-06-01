import axios, {AxiosError} from 'axios'
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const AxiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

AxiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair')
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access)
    }


    return request;
})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let responce;
        try {
            responce = await AxiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(responce.data));
        } catch (e) {
            console.log(e);
        }
        return !!(responce?.data?.access && responce?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const responce = await AxiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh:refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(responce.data))
    }
}


const carService = {
    getAllCars: async () => {
        try{
            const responce = await AxiosInstance.get<ICarPaginatedModel>('/cars');
            return responce.data
        } catch(e) {
            const axiosError = e as AxiosError;
            if(axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh
                await authService.refresh(refreshToken);
                await carService.getAllCars()
            }
        }
    }
}

export {
    authService,
    carService
}