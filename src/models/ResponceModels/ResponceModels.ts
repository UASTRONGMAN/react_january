import {UserBasicModel} from "../BasicModels/UserBasicModel";
import {TodoBasicModel} from "../BasicModels/TodoBasicModel";

export interface UsersResponceModel {
    users: UserBasicModel[]
}

export interface TodosResponceModel {
    todos: TodoBasicModel[]
}