import React, {useEffect, useState} from 'react'
import ListTable from "../../components/ListTable";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../configs/axios";
import {setProduct} from "../../features/productsSlice";

const Products = () => {

    const cols = ['id', 'name', 'brand', 'category', 'subCategory', 'price', 'status', 'addedBy'];

    const dispatch = useDispatch();
    const data = useSelector(state => state?.products || []);

    useEffect(() => {
        axios.get("products")
            .then(res => {
                dispatch(setProduct(res.data));
            })
            .then(err => console.log(err))

    }, []);

    // const data = [
    //     {id: 1, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
    //     {id: 2, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
    //     {id: 3, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
    //     {id: 4, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
    //     {id: 5, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
    //     {id: 6, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
    //     {id: 7, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
    //     {id: 8, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
    //     {id: 9, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
    //     {id: 10, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
    //     {id: 11, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
    //     {id: 12, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
    // ]

    const [addProduct, setAddProduct] = useState(false)

    return <div className="row">
        <div className="col-12">
            <ListTable
                cols={cols}
                data={data}
                perPage={10} />
        </div>
    </div>
}

export default Products;