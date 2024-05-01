import React, {FC} from 'react';
import {json} from "node:stream/consumers";

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
};

export type IProductTypeProps = IProductProps & {children?: React.ReactNode};

const Product: FC<IProductTypeProps> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) => {
    return (
        <div>
            <h2>{id} {title} - {price}.</h2>
            <p>{description}</p>
            <p>{category} - {brand}</p>
            <p>{discountPercentage}. {rating}. {stock}.</p>
            <img src={thumbnail} alt={title}/>
            {
                images.map((image, index) => <img src={image} alt={title} key={index}/>)
            }

        </div>
    );
};

export default Product;