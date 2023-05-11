import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const [detail,setDetail] = useState({})
    const {productId} = useParams()

    const getDetails = ()=>{
        axios(`https://fakestoreapi.com/products/${productId}`)
            .then((res)=> setDetail(res.data))
    }

    useEffect(()=>{
        getDetails()
    },[])
    console.log(detail)
    return (
        <div className="flex">
            <img src={detail.image} alt=""/>
            <div>
                <h1>{detail.title}</h1>

            </div>
        </div>
    );
};

export default ProductDetails;