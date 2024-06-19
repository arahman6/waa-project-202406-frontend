import Header from "../../components/header/Header";
import Product from "../../components/products/Product";
import {useEffect} from "react";
import axios from "../../configs/axios";

import products from "../../mockData/products.json";
import "./products.css";
import ProductFilter from "../../components/ProductFilter";

const Products = () => {

    useEffect(() => {


    }, []);

    return <div className="container-fluid my-2">
        <Header/>
        <section className={`mb-2`}>
            <h3 className={`text-center p-3`}>All Products</h3>
            <p className={`text-center`}>Check out our new product collection! The new collection brings an informal
                elegance to your life</p>
        </section>
        <section>
            <div className={`row`}>
                <div className="col-3">
                    <ProductFilter />
                </div>
                <div className="col-9">
                    <div className={`row`}>
                    {
                        products.map(product => {
                            return <Product product={product}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Products;