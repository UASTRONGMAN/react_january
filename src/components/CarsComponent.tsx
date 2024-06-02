import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import CarComponent from "./CarComponent";

interface IProps{
    cars:ICarWithAuthModel[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export default CarsComponent;