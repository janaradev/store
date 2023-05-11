import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import ProductDetail from "./components/ProductDetails";
import ProductDetails from "./components/ProductDetails";

const App = () => {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/product" element={ <Product/> }/>
                <Route path="/basket" element={ <Basket/> }/>
                <Route path="/favorite" element={ <Favorite/> }/>
                <Route path="/product/detail/:productId" element={ <ProductDetails/> }/>
            </Routes>
        </div>
    );
};

export default App;