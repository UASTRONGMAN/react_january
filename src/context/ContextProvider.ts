import {createContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

type StoreType = {
    userStore:{
        allUsers:IUserModel[]
    },
    postStore:{
        allPosts:IPostModel[]
    }
};

export const defaultValue = {
    userStore:{
        allUsers:[]
    },
    postStore:{
        allPosts:[]
    }
};

export const ContextProvider = createContext<StoreType>(defaultValue)