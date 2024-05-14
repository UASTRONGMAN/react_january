import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IFormProps} from "../models/IFormProps";
import {joiResolver} from "@hookform/resolvers/joi";

const FormComponent: FC = () => {

    let {
        register,
        handleSubmit,
        formState:{errors, isValid}
    } = useForm<IFormProps>({mode:"all"});

    const submit = (formValues: IFormProps) => {
        console.log(formValues)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title')}/>
                <input type="text" {...register('body')}/>
                <input type="number" {...register('userId')}/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default FormComponent;