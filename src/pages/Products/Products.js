import Header from "../../components/header/Header";
import Product from "../../components/products/Product";
import {useEffect} from "react";
import products from "../../mockData/products.json";
import "./products.css";
import ProductFilter from "../../components/ProductFilter";
import {useDispatch} from "react-redux";
import {setProduct} from "../../features/productSlice";

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProduct(products))
    }, []);

    return <div className="container-fluid my-2">
        <Header/>
        <section>
            <div className={`row`}>
                <div className="col-3">
                    <ProductFilter/>
                </div>
                <div className="col-9">
                    <section className={`mb-2`}>
                        <h3 className={`text-center p-3`}>All Products</h3>
                        <p className={`text-center`}>Check out our new product collection! The new collection brings an
                            informal
                            elegance to your life</p>
                    </section>
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