import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore:{
        allUsers: IUserModel[],
        setAllUsers: (users: IUserModel[]) => void
    },
    postStore:{
        allPosts: IPostModel[],
        setAllPosts: (posts: IPostModel[]) => void
    },
    commentStore:{
        allComments: ICommentModel[],
        setAllComments: (comments: ICommentModel[]) => void
    }
};

export const useStore = create<StoreType>()((set) => {
    return {
        userStore:{
            allUsers: [],
            setAllUsers: (users: IUserModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            allUsers: users
                        }
                    }
                })
            }
        },
        postStore:{
            allPosts: [],
            setAllPosts: (posts: IPostModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        postStore: {
                            ...state.postStore,
                            allPosts: posts
                        }
                    }
                })
            }
        },
        commentStore:{
            allComments: [],
            setAllComments: (comments: ICommentModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        commentStore: {
                            ...state.commentStore,
                            allComments: comments
                        }
                    }
                })
            }
        }
    }
});