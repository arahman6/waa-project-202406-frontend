import Header from "../../components/header/Header";
import Product from "../../components/products/Product";
import {useEffect} from "react";
//import products from "../../mockData/products.json";
import "./products.css";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../features/productsSlice";
import axios from "../../configs/axios";
import SpinnerContainer from "../../components/SpinnerContainer";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state?.products || [])
    useEffect(() => {
        axios.get("products")
            .then(res => dispatch(setProduct(res.data)))
            .catch(err => console.log(err))
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
                        {/*<SpinnerContainer />*/}
                        {products.length === 0 && <p className={`text-center p-5`}>{`No record found`}</p>}
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