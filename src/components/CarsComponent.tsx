import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import CarComponent from "./CarComponent";

interface IProps{
    car:ICarWithAuthModel
}

const CarsComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            <CarComponent car={car}/>
        </div>
    );
};

export default CarsComponent;