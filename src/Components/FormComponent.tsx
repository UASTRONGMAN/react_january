import React from 'react';
import {useForm} from "react-hook-form";

const FormComponent = () => {
    useForm({defaultValues:{username:'maksimilian', password:'Aa$12345678'}})
    return (

        <div>
            <form>
                <input type="text"/>
                <input type="text"/>
            </form>
        </div>
    );
};

export default FormComponent;