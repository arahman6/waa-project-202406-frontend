import React, {useEffect, useState} from 'react';
import './ProductFilter.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "../../configs/axios";
import {setCategory} from "../../features/categorySlice";
import qs from "qs";
import {setProduct} from "../../features/productsSlice";

const ProductFilter = () => {

    const [cats, setCats] = useState([])
    const [minPrice, setMinPrice] = useState(0);
    const [price, setPrice] = useState({
        minPrice: 0,
        maxPrice: 5000
    });

    const dispatch = useDispatch();
    const categories = useSelector(state => state?.categories);
    useEffect(() => {
        axios.get("categories")
            .then(res => dispatch(setCategory(res.data)))
            .catch(err => console.log(err))
    }, []);

    const filterByCat = e => {

    }

    const othersHandler = e => {
        axios.get('products/filter', {
            params: {
                [e.target.name]: e.target.checked === true ? e.target.value.toUpperCase() : ''
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }).then(res => {
            console.log(res.data);
            dispatch(setProduct(res.data));
        }).catch( err => {
            console.log(err);
            dispatch(setProduct([]));
        })
    }

    const filterByPrice = e => {
        setPrice({...price, [e.target.name]: e.target.value})
        axios.get('products/filter', {
            params: {
                minPrice: e.target.name === "minPrice" ? parseInt(e.target.value) : price.minPrice,
                maxPrice: e.target.name === "maxPrice" ? parseInt(e.target.value) : price.maxPrice,
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }).then(res => {
            console.log(res.data);
            dispatch(setProduct(res.data));
        }).catch( err => {
            console.log(err);
            dispatch(setProduct([]));
        })
    }

    return (
        <div className="filter-container">
            <div className="filter-section">
                <h3>Categories</h3>
                {
                    [
                        "ELECTRONICS",
                        "CLOTHING",
                        "HOME_APPLIANCES",
                        "BOOKS",
                        "TOYS",
                        "SPORTS",
                        "HEALTH",
                        "BEAUTY",
                        "AUTOMOTIVE",
                        "GARDEN"
                    ].map(cat => {
                        return <div>
                            <input
                                id={cat}
                                name={`categories`}
                                value={cat}
                                onClick={e => othersHandler(e)}
                                type="checkbox" />
                            <label htmlFor={`${cat}`}>{`${cat}`}</label>
                        </div>
                    })
                }

            </div>

            <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range">
                    <span>$0</span>
                    <input defaultValue={0} name={`minPrice`} onMouseUp={e => filterByPrice(e)} type="range" min="0"
                           max="5000"/>
                    <span>${price.minPrice}</span>
                </div>

                <div className="price-range">
                    <span>$0</span>
                    <input defaultValue={5000} name={`maxPrice`} onMouseUp={e => filterByPrice(e)} type="range" min="0"
                           max="5000"/>
                    <span>${price.maxPrice}</span>
                </div>
            </div>

            <div className="filter-section">
                <h3>Brands</h3>
                {
                    [
                        "NIKE",
                        "ADIDAS",
                        "ZARA",
                        "HM",
                        "APPLE",
                        "SAMSUNG",
                        "DELL",
                        "LG"
                    ].map(b => {
                        return <div>
                            <input name={`brands`} onChange={e => othersHandler(e)} type="checkbox" value={b} id="poliform"/>
                            <label htmlFor="poliform">{b}</label>
                        </div>
                    })
                }
            </div>

            <div className="filter-section">
                <h3>Sizes</h3>
                {
                    [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "XL"
                    ].map(s => {
                        return <div>
                            <input name={`sizes`} onClick={e => othersHandler(e)} type="checkbox" value={s}/>
                            <label htmlFor="poliform">{s}</label>
                        </div>
                    })
                }
            </div>

            <div className="filter-section">
                <h3>Colors</h3>
                {
                    [
                        "RED",
                        "BLUE",
                        "BLACK",
                        "WHITE",
                        "GREEN",
                        "YELLOW",
                        "PINK"
                    ].map(c => {
                        return <div>
                            <input name={`colors`} onChange={e => othersHandler(e)} type="checkbox" value={c}/>
                            <label htmlFor="poliform">{c}</label>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default ProductFilter;