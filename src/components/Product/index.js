import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../Redux/Reduser";

const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(s => s.main)

    useEffect(()=>{
        dispatch(getProduct())
    },[])

    return (
        <div className="container mx-auto w-5/6">
           <div className="flex py-20 flex-wrap gap-4">
               {
                   product.map((el)=> <ProductCard el={el}/>)
               }
           </div>

        </div>
    );
};

export default Product;