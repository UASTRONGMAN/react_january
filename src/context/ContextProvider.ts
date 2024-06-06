import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    userStore:{
        allUsers:IUserModel[]
    },
    postStore:{
        allPosts:IPostModel[]
    },
    commentStore:{
        allComments:ICommentModel[]
    }
};

export const defaultValue = {
    userStore:{
        allUsers:[]
    },
    postStore:{
        allPosts:[]
    },
    commentStore:{
        allComments:[]
    }
};

export const ContextProvider = createContext<StoreType>(defaultValue)

export const useContextProvider = ():StoreType => {return useContext(ContextProvider)}