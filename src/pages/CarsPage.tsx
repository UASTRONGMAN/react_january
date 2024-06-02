import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>([])

    useEffect(() => {
        carService.getAllCars().then(value => {
            if (value) {
                setCars(value.items)
            }
        })
    }, []);

    return (
        <div>
            <CarsComponent cars={cars}/>)
        </div>
    );
};

export default CarsPage;