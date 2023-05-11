import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
     const {favorite} = useSelector(state => state.favorite)
    console.log(favorite)
    return (
        <div>


        <div className='flex justify-between py-3 flex-wrap px-20'>
            {
                favorite.map(el=> (
                    <ProductCard el={el} />
                ))
            }
        </div>



        </div>
    );
};

export default Favorite;