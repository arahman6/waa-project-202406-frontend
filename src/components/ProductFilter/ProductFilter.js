import React, {useEffect, useState} from 'react';
import './ProductFilter.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "../../configs/axios";
import {setCategory} from "../../features/categorySlice";
import qs from "qs";
import {setProduct} from "../../features/productsSlice";

const ProductFilter = () => {

    const [cats, setCats] = useState([])
    const[minPrice, setMinPrice] = useState(0);
    const[price, setPrice] = useState({
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
        })
    }


    console.log(price);

    return (
        <div className="filter-container">
            <div className="filter-section">
                <h3>Categories</h3>
                {
                    categories.length > 0 && categories.map(cat => {
                        if (!cat.name) {
                            return null;
                        }
                        return <div>
                            <input
                                value={cat?.name}
                                onClick={e => filterByCat(e)}
                                type="checkbox"
                                id={`${cat?.name}`}/>
                            <label htmlFor={`${cat.name}`}>{`${cat?.name}`}</label>
                        </div>
                    })
                }

            </div>

            <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range">
                    <span>$0</span>
                    <input defaultValue={0} name={`minPrice`} onMouseUp={e => filterByPrice(e)} type="range" min="0" max="5000"/>
                    <span>${price.minPrice}</span>
                </div>

                <div className="price-range">
                    <span>$0</span>
                    <input defaultValue={5000} name={`maxPrice`} onMouseUp={e => filterByPrice(e)} type="range" min="0" max="5000"/>
                    <span>${price.maxPrice}</span>
                </div>
            </div>

            <div className="filter-section">
                <h3>Brand</h3>
                <div>
                    <input type="checkbox" id="poliform"/>
                    <label htmlFor="poliform">Poliform</label>
                </div>
                <div>
                    <input type="checkbox" id="roche-bobois"/>
                    <label htmlFor="roche-bobois">Roche Bobois</label>
                </div>
                <div>
                    <input type="checkbox" id="edra"/>
                    <label htmlFor="edra">Edra</label>
                </div>
                <div>
                    <input type="checkbox" id="kartell"/>
                    <label htmlFor="kartell">Kartell</label>
                </div>
            </div>

        </div>
    );
};

export default ProductFilter;