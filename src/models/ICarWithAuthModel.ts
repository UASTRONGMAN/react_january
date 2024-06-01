import {isNumberObject} from "node:util/types";

export interface ICarWithAuthModel{
    id: number;
    brand: string;
    price: number;
    year: number;
    photo: string;
}