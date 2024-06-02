import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface IProps{
    car: ICarWithAuthModel
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            <ul>
                <li>
                    {car.id}. Brand: {car.brand} - {car.year}
                    <br/>
                    Price - {car.price}$.
                </li>
            </ul>

        </div>
    );
};

export default CarComponent;