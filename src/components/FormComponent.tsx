import React, {FC, useState} from 'react';
import {set, useForm} from "react-hook-form";
import {IFormModel} from "../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {PostValidator} from "../validators/PostValidator";
import {addNewPost} from "../services/jph.api.service";

export interface IFormProps {
    title: string,
    body: string,
    userId: number;
}

const FormComponent: FC = () => {

    let {
        register,
        handleSubmit,
        formState:{errors, isValid}
    } = useForm<IFormProps>({mode:"all", resolver: joiResolver(PostValidator)});

    const [post, setPost] = useState<IFormModel | null>(null);

    const submit = ({title, body, userId}: IFormProps) => {
        addNewPost({title, body, userId}).then(value => setPost(value));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <input type="number" {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button>Send</button>
            </form>
            <h2>Post info: {post?.userId}. Title: {post?.title}. Body: {post?.body}.</h2>
        </div>
    );
}

export default FormComponent;