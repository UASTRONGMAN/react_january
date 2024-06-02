import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>([])

    useEffect(() => {
        carService.getAllCars().then(value => setCars(value.items))
    }, []);

    return (
        <div>
            {
                cars.map(car => <CarsComponent car={car}/>)
            }
        </div>
    );
};

export default CarsPage;